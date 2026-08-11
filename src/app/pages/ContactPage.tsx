import { MotionConfig } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Building2, Users } from "lucide-react";
import { setPageMeta } from "../lib/meta";

const API_BASE_URL = ((import.meta.env.VITE_API_BASE_URL as string | undefined) ?? "").replace(/\/$/, "");
const DEMO_REQUEST_ENDPOINT = `${API_BASE_URL}/api/v1/public/demo-requests/`;

const initialForm = {
  name: "",
  organization: "",
  workEmail: "",
  role: "",
  numberOfPools: "",
  message: "",
  companyWebsite: "",
};

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const demoNotes = [
  {
    icon: Building2,
    title: "Management Companies",
    copy: "Portfolio oversight, operations, staff workflows, chemistry, maintenance, and incidents.",
  },
  {
    icon: Users,
    title: "Pool Boards",
    copy: "Memberships, payments, events, communication, administration, and the member experience.",
  },
];

export function ContactPage() {
  const [formData, setFormData] = useState(initialForm);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const submitInFlightRef = useRef(false);

  useEffect(() => {
    setPageMeta(
      "Book a Demo | Orbital Aquatics",
      "Request a demo of Orbital Aquatics for your pool management company or community pool board.",
    );
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (submitInFlightRef.current) return;

    if (formData.companyWebsite.trim()) {
      setSubmitStatus("success");
      return;
    }

    submitInFlightRef.current = true;
    setSubmitStatus("submitting");

    try {
      const response = await fetch(DEMO_REQUEST_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          organization: formData.organization,
          work_email: formData.workEmail,
          role: formData.role,
          number_of_pools: Number(formData.numberOfPools),
          message: formData.message,
          company_website: formData.companyWebsite,
        }),
      });

      if (!response.ok) {
        throw new Error("Demo request failed");
      }

      setSubmitStatus("success");
    } catch {
      submitInFlightRef.current = false;
      setSubmitStatus("error");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const isSubmitting = submitStatus === "submitting";

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative">
        <section className="relative overflow-hidden px-5 py-16 sm:px-6 lg:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_28%,rgba(103,232,249,0.14),transparent_35%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_0.88fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70">BOOK A DEMO</p>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
                See how Orbital could work for your operation.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Tell us a little about your organization and we’ll show you how Orbital can help bring your pools, people, and day-to-day work into one clearer system.
              </p>

              <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
                {demoNotes.map((note) => {
                  const Icon = note.icon;
                  return (
                    <section key={note.title} className="py-5">
                      <div className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-cyan-100" aria-hidden="true" />
                        <h2 className="text-sm font-semibold text-white">{note.title}</h2>
                      </div>
                      <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">{note.copy}</p>
                    </section>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 bg-cyan-200/10 blur-3xl" />
              {submitStatus === "success" ? (
                <div className="relative border border-cyan-100/20 bg-[#06111d]/86 p-6 shadow-2xl shadow-cyan-950/30 sm:p-8" aria-live="polite">
                  <div className="max-w-xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70">REQUEST RECEIVED</p>
                    <h2 className="mt-4 text-3xl font-semibold leading-tight text-white">Thanks — we’ll be in touch.</h2>
                    <p className="mt-4 text-base leading-7 text-slate-300">
                      We received your request and will follow up soon to learn more about your pools and show you how Orbital could fit your operation.
                    </p>
                    <Link
                      to="/"
                      className="mt-7 inline-flex min-h-11 items-center justify-center rounded-sm border border-white/12 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/40 hover:bg-cyan-100/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
                    >
                      Back to Orbital
                    </Link>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="relative grid gap-5 border border-white/10 bg-[#06111d]/86 p-5 shadow-2xl shadow-cyan-950/30 sm:p-8"
                  aria-busy={isSubmitting}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" maxLength={120} />
                    <Field
                      label="Organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      required
                      placeholder="Organization name"
                      maxLength={160}
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Work Email"
                      name="workEmail"
                      type="email"
                      value={formData.workEmail}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      maxLength={254}
                    />
                    <Field label="Role" name="role" value={formData.role} onChange={handleChange} placeholder="Board member, owner, manager" maxLength={120} />
                  </div>
                  <Field
                    label="Number of Pools"
                    name="numberOfPools"
                    type="number"
                    value={formData.numberOfPools}
                    onChange={handleChange}
                    required
                    placeholder="8"
                    min={1}
                    max={10000}
                    inputMode="numeric"
                  />
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-semibold text-white">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      maxLength={2000}
                      className="w-full resize-none border border-white/12 bg-slate-950/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-200"
                      placeholder="Tell us what you are trying to simplify."
                    />
                  </div>

                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="companyWebsite">Company Website</label>
                    <input
                      id="companyWebsite"
                      name="companyWebsite"
                      type="text"
                      value={formData.companyWebsite}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-cyan-100 px-5 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-950/10 transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-cyan-200/12 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-70"
                    >
                      {isSubmitting ? "Sending..." : "Request Demo"}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </button>

                    <p className="text-xs leading-5 text-slate-400">
                      By submitting this form, you agree that Orbital may contact you about your inquiry.{" "}
                      <Link to="/privacy" className="font-semibold text-cyan-100 underline-offset-4 hover:underline">
                        Privacy Policy
                      </Link>
                    </p>
                  </div>

                  {submitStatus === "error" && (
                    <div role="alert" className="border border-rose-300/25 bg-rose-300/[0.08] px-4 py-3 text-sm font-semibold text-rose-100">
                      We couldn’t send your request. Please try again in a moment.
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </MotionConfig>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
  min,
  max,
  inputMode,
  maxLength,
}: {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
  required?: boolean;
  placeholder?: string;
  min?: number;
  max?: number;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  maxLength?: number;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-white">
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        min={min}
        max={max}
        inputMode={inputMode}
        maxLength={maxLength}
        className="w-full border border-white/12 bg-slate-950/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-200"
      />
    </div>
  );
}
