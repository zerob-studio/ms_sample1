'use client';

import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative py-32 lg:py-44 overflow-hidden">
      {/* Ambient gold glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 50% 100%, rgba(201,168,76,0.18) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-8 lg:px-14">
        <div className="grid grid-cols-12 gap-12">
          {/* Left: pitch */}
          <div className="col-span-12 lg:col-span-5">
            <span className="text-[10px] tracking-[0.45em] uppercase text-gold/80">
              Chapter 07 — Begin
            </span>
            <h2 className="mt-5 font-display text-[clamp(3rem,5vw,5rem)] leading-[0.95] tracking-[-0.02em]">
              Let's craft<br />
              your next<br />
              <span className="italic gold-text">masterpiece</span>.
            </h2>
            <p className="mt-8 font-kr-display text-[16px] text-ink/55 leading-[1.95] max-w-md">
              한 줄이라도 좋습니다.
              <br />
              당신의 이야기를 들려주세요. 24시간 이내 회신드립니다.
            </p>

            <div className="mt-16 space-y-7">
              <div>
                <div className="text-[10px] tracking-[0.4em] uppercase text-gold/70 mb-2">
                  General Inquiry
                </div>
                <a
                  href="mailto:contact@musaistudio.com"
                  className="font-display text-xl text-ink/90 hover:text-gold transition-colors tracking-wide"
                >
                  contact@musaistudio.com
                </a>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.4em] uppercase text-gold/70 mb-2">
                  Seoul HQ
                </div>
                <div className="text-[14px] text-ink/75 leading-relaxed">
                  166 Donggwang-ro, Seocho, Seoul 06589
                  <br />
                  <span className="font-display tracking-wide">+82 2 529 1488</span>
                </div>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.4em] uppercase text-gold/70 mb-2">
                  Berlin Office
                </div>
                <div className="text-[14px] text-ink/75 leading-relaxed">
                  Holsteinische Str. 1, 12163 Berlin, Germany
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="col-span-12 lg:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="border border-gold/15 p-8 lg:p-12 bg-bg/60 backdrop-blur"
            >
              <div className="flex items-baseline justify-between mb-10">
                <span className="text-[10px] tracking-[0.45em] uppercase text-gold/70">
                  Project Brief
                </span>
                <span className="text-[10px] tracking-[0.4em] uppercase text-ink/35">
                  Confidential
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Field label="Your Name" required>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-gold/20 focus:border-gold pb-3 text-ink placeholder:text-ink/30 outline-none transition-colors font-kr-display"
                    placeholder="Jane Doe / 홍길동"
                  />
                </Field>
                <Field label="Studio / Company">
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-gold/20 focus:border-gold pb-3 text-ink placeholder:text-ink/30 outline-none transition-colors"
                    placeholder="e.g. CD Projekt Red"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Field label="Email" required>
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-gold/20 focus:border-gold pb-3 text-ink placeholder:text-ink/30 outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </Field>
                <Field label="Service" required>
                  <select
                    required
                    className="w-full bg-transparent border-b border-gold/20 focus:border-gold pb-3 text-ink outline-none transition-colors font-kr-display"
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-bg">
                      Select a service
                    </option>
                    <option className="bg-bg">SOUND — Audio &amp; Voice</option>
                    <option className="bg-bg">L10N — Localization</option>
                    <option className="bg-bg">ECHO — Talent &amp; IP</option>
                    <option className="bg-bg">Multiple / Other</option>
                  </select>
                </Field>
              </div>

              <Field label="Project Brief" required>
                <textarea
                  required
                  rows={6}
                  className="w-full bg-transparent border-b border-gold/20 focus:border-gold pb-3 text-ink placeholder:text-ink/30 outline-none transition-colors resize-none font-kr-display"
                  placeholder="장르, 일정, 규모, 톤앤매너 — 어떤 결의 작품인가요?"
                />
              </Field>

              <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
                <p className="text-[11px] tracking-wider text-ink/40 font-kr-display">
                  제출 시 24시간 이내 회신을 약속드립니다.
                </p>
                <button
                  type="submit"
                  disabled={submitted}
                  className="group inline-flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase text-bg bg-gold px-9 py-4 hover:bg-gold-light transition-colors duration-500 disabled:bg-gold/30 disabled:cursor-not-allowed"
                >
                  {submitted ? 'Sent · Thank You' : 'Send Inquiry'}
                  <span className="inline-block transition-transform duration-500 group-hover:translate-x-1.5">
                    →
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block mb-6 last:mb-0">
      <span className="block text-[10px] tracking-[0.4em] uppercase text-gold/70 mb-3">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}
