import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";

const phoneRegex = /^[+]?[0-9 ()\-]{7,20}$/;

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Nurodykite vardą (bent 2 simboliai)." })
    .max(80, { message: "Per ilgas vardas." }),
  email: z
    .string()
    .trim()
    .email({ message: "Neteisingas el. pašto formatas." })
    .max(160, { message: "Per ilgas el. paštas." }),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, { message: "Neteisingas telefono formatas." })
    .max(30, { message: "Per ilgas telefono numeris." }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Žinutė per trumpa (bent 10 simbolių)." })
    .max(1500, { message: "Žinutė per ilga (iki 1500 simbolių)." }),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Reikalingas sutikimas su privatumo politika." }),
  }),
  // honeypot — must stay empty
  company_url: z.string().max(0).optional().or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      consent: undefined as unknown as true,
      company_url: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    if (values.company_url && values.company_url.length > 0) {
      // honeypot tripped — silently succeed
      setSubmitted(true);
      return;
    }
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Ačiū! Susisieksime artimiausiu metu.");
    setSubmitted(true);
    reset();
  };

  const labelCls =
    "block text-[10px] uppercase tracking-[0.22em] text-primary-foreground/60 mb-2";
  const inputCls =
    "w-full bg-transparent border-b border-primary-foreground/25 focus:border-accent outline-none px-0 py-2.5 text-[15px] text-primary-foreground placeholder:text-primary-foreground/30 transition-colors";
  const errCls = "mt-1.5 text-[12px] text-accent";

  if (submitted) {
    return (
      <div className="border border-primary-foreground/20 bg-primary-foreground/5 p-8">
        <p className="font-display text-[18px] text-primary-foreground mb-2">
          Žinutė išsiųsta.
        </p>
        <p className="text-[14px] text-primary-foreground/70">
          Susisieksime per 1–2 darbo dienas.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* honeypot — visually hidden */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-10000px",
          top: "auto",
          width: 1,
          height: 1,
          overflow: "hidden",
        }}
      >
        <label>
          Įmonės URL (nerašykite)
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("company_url")}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="cf-name" className={labelCls}>
            Vardas
          </label>
          <input
            id="cf-name"
            type="text"
            autoComplete="name"
            placeholder="Jūsų vardas"
            className={inputCls}
            {...register("name")}
          />
          {errors.name && <p className={errCls}>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="cf-email" className={labelCls}>
            El. paštas
          </label>
          <input
            id="cf-email"
            type="email"
            autoComplete="email"
            placeholder="vardas@imone.lt"
            className={inputCls}
            {...register("email")}
          />
          {errors.email && <p className={errCls}>{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="cf-phone" className={labelCls}>
          Telefonas
        </label>
        <input
          id="cf-phone"
          type="tel"
          autoComplete="tel"
          placeholder="+370 600 12345"
          className={inputCls}
          {...register("phone")}
        />
        {errors.phone && <p className={errCls}>{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="cf-message" className={labelCls}>
          Žinutė
        </label>
        <textarea
          id="cf-message"
          rows={4}
          placeholder="Trumpai apie jūsų situaciją ir tikslus…"
          className={`${inputCls} resize-none`}
          {...register("message")}
        />
        {errors.message && <p className={errCls}>{errors.message.message}</p>}
      </div>

      <div className="pt-2">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 accent-[var(--accent)] cursor-pointer"
            {...register("consent")}
          />
          <span className="text-[12.5px] leading-relaxed text-primary-foreground/70 group-hover:text-primary-foreground/90 transition-colors">
            Sutinku, kad mano pateikti asmens duomenys būtų tvarkomi atsakymo į užklausą tikslu
            pagal{" "}
            <Link
              to="/privatumo-politika"
              className="underline underline-offset-4 hover:text-accent transition-colors"
            >
              Privatumo politiką
            </Link>
            .
          </span>
        </label>
        {errors.consent && <p className={`${errCls} ml-7`}>{errors.consent.message}</p>}
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="ripple-btn group relative overflow-hidden inline-flex items-center gap-3 px-7 py-3.5 bg-accent text-accent-foreground text-[12px] uppercase tracking-[0.22em] hover:bg-accent/90 transition-colors disabled:opacity-60"
        >
          <span className="relative z-10">
            {isSubmitting ? "Siunčiama…" : "Siųsti užklausą"}
          </span>
          <span className="relative z-10 transition-transform group-hover:translate-x-0.5">→</span>
        </button>
      </div>
    </form>
  );
}
