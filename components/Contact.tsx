'use client';

import { useState } from 'react';
import SectionHeader from './SectionHeader';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative overflow-x-hidden">
      <SectionHeader
        no="07"
        label="Begin"
        caption="Brief us. We'll reply within 24h."
        meta="Open · 2025/26"
        headline={
          <>
            Let&apos;s craft your next{' '}
            <span className="italic">masterpiece.</span>
          </>
        }
      />

      <div className="relative mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-12 pb-24 lg:pb-36">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-12">
          {/* Left: contact details */}
          <div className="col-span-12 lg:col-span-5 min-w-0">
            <p className="font-kr text-[15px] text-ink-soft leading-[1.95] max-w-md">
              한 줄이라도 좋습니다. 당신의 이야기를 들려주세요.
              <br />
              <span className="text-ink">24시간 이내 회신드립니다.</span>
            </p>

            <dl className="mt-12 border-t border-line-2">
              {[
                ['General', 'contact@musaistudio.com'],
                ['Seoul HQ', '+82 2 529 1488'],
                ['Berlin', 'Holsteinische Str. 1'],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-baseline justify-between gap-4 border-b border-line py-4"
                >
                  <dt className="font-mono text-[10px] tracking-[0.18em] uppercase text-mute shrink-0">
                    — {k}
                  </dt>
                  <dd className="font-mono text-[11px] sm:text-[12px] tracking-[0.04em] text-ink text-right break-all min-w-0">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: form */}
          <div className="col-span-12 lg:col-span-7 min-w-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="border border-line p-4 sm:p-7 lg:p-12 min-w-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-2">
                <Field label="Your name" required>
                  <input
                    type="text"
                    required
                    className="w-full max-w-full min-w-0 box-border bg-transparent border-b border-line-2 focus:border-ink pb-3 text-ink placeholder:text-mute outline-none transition-colors"
                    placeholder="Jane Doe / 홍길동"
                  />
                </Field>
                <Field label="Studio">
                  <input
                    type="text"
                    className="w-full max-w-full min-w-0 box-border bg-transparent border-b border-line-2 focus:border-ink pb-3 text-ink placeholder:text-mute outline-none transition-colors"
                    placeholder="e.g. CD Projekt Red"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-2">
                <Field label="Email" required>
                  <input
                    type="email"
                    required
                    className="w-full max-w-full min-w-0 box-border bg-transparent border-b border-line-2 focus:border-ink pb-3 text-ink placeholder:text-mute outline-none transition-colors font-mono text-[14px]"
                    placeholder="you@studio.com"
                  />
                </Field>
                <Field label="Service" required>
                  <select
                    required
                    className="w-full max-w-full min-w-0 box-border bg-transparent border-b border-line-2 focus:border-ink pb-3 text-ink outline-none transition-colors appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-bg">
                      Select…
                    </option>
                    <option className="bg-bg">Sound — Audio &amp; Voice</option>
                    <option className="bg-bg">L10N — Localization</option>
                    <option className="bg-bg">Echo — Talent &amp; IP</option>
                    <option className="bg-bg">Multiple / Other</option>
                  </select>
                </Field>
              </div>

              <Field label="Project brief" required>
                <textarea
                  required
                  rows={6}
                  className="w-full max-w-full min-w-0 box-border bg-transparent border-b border-line-2 focus:border-ink pb-3 text-ink placeholder:text-mute outline-none transition-colors resize-none"
                  placeholder="장르, 일정, 규모, 톤앤매너 — 어떤 결의 작품인가요?"
                />
              </Field>

              <div className="mt-10 lg:mt-12 flex flex-wrap items-center justify-end gap-4">
                <button
                  type="submit"
                  disabled={submitted}
                  className="group inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase text-bg bg-ink px-6 sm:px-8 py-3.5 hover:bg-ink-soft transition-colors duration-500 disabled:bg-ink/30 disabled:cursor-not-allowed"
                >
                  {submitted ? 'Sent · Thank you' : 'Send Inquiry'}
                  <span className="font-display italic transition-transform duration-500 group-hover:translate-x-1">
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
    <label className="block mb-7 last:mb-0">
      <span className="block font-mono text-[10px] tracking-[0.18em] uppercase text-mute mb-3">
        — {label}
        {required && <span className="text-ink ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}
