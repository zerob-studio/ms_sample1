'use client';

import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Ambient gold glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 50% 100%, rgba(201,168,76,0.18) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: pitch */}
          <div className="lg:col-span-5">
            <span className="text-[11px] tracking-widest2 uppercase text-gold">
              — Contact
            </span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl text-ink/95 leading-[0.95]">
              Let's craft<br />
              your next<br />
              <span className="italic gold-text">masterpiece</span>.
            </h2>
            <p className="mt-8 font-kr-display text-ink/60 text-lg leading-relaxed max-w-md">
              한 줄이라도 좋습니다.
              <br />
              당신의 이야기를 들려주세요.
            </p>

            <div className="mt-16 space-y-6">
              <div>
                <div className="text-[11px] tracking-widest2 uppercase text-gold/70 mb-1">
                  Email
                </div>
                <a
                  href="mailto:hello@musai.studio"
                  className="font-display text-xl text-ink/90 hover:text-gold transition-colors"
                >
                  hello@musai.studio
                </a>
              </div>
              <div>
                <div className="text-[11px] tracking-widest2 uppercase text-gold/70 mb-1">
                  Studio
                </div>
                <div className="font-kr-display text-ink/80">
                  서울특별시 강남구 도산대로 327, 5F
                </div>
              </div>
              <div>
                <div className="text-[11px] tracking-widest2 uppercase text-gold/70 mb-1">
                  Phone
                </div>
                <div className="font-display text-ink/80">+82 (0)2 1234 5678</div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="border border-gold/15 p-8 lg:p-12 bg-bg/50 backdrop-blur"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Field label="Your Name" required>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-gold/20 focus:border-gold pb-3 text-ink placeholder:text-ink/30 outline-none transition-colors font-kr-display"
                    placeholder="홍길동"
                  />
                </Field>
                <Field label="Email" required>
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-gold/20 focus:border-gold pb-3 text-ink placeholder:text-ink/30 outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </Field>
              </div>

              <Field label="Project Type" required>
                <select
                  required
                  className="w-full bg-transparent border-b border-gold/20 focus:border-gold pb-3 text-ink outline-none transition-colors font-kr-display"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-bg">
                    프로젝트 유형 선택
                  </option>
                  <option className="bg-bg">Sound Design / Music</option>
                  <option className="bg-bg">Localization / Dubbing</option>
                  <option className="bg-bg">Entertainment / IP</option>
                  <option className="bg-bg">Other</option>
                </select>
              </Field>

              <Field label="Project Brief" required>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-transparent border-b border-gold/20 focus:border-gold pb-3 text-ink placeholder:text-ink/30 outline-none transition-colors resize-none font-kr-display"
                  placeholder="프로젝트에 대해 들려주세요. 일정, 규모, 어떤 결을 그리시나요?"
                />
              </Field>

              <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
                <p className="text-xs text-ink/40 font-kr-display">
                  제출 시 24시간 이내 회신을 약속드립니다.
                </p>
                <button
                  type="submit"
                  disabled={submitted}
                  className="group inline-flex items-center gap-3 text-[12px] tracking-[0.3em] uppercase text-bg bg-gold px-8 py-4 hover:bg-gold-light transition-colors duration-500 disabled:bg-gold/30 disabled:cursor-not-allowed"
                >
                  {submitted ? 'Sent · Thank You' : 'Send Inquiry'}
                  <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
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
      <span className="block text-[11px] tracking-widest2 uppercase text-gold/70 mb-3">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}
