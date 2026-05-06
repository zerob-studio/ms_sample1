export default function Footer() {
  return (
    <footer className="relative border-t border-gold/15 py-20">
      <div className="mx-auto max-w-[1440px] px-8 lg:px-14">
        {/* Big mark */}
        <div className="mb-16 grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-8">
            <div className="font-display text-[clamp(4rem,12vw,11rem)] leading-[0.85] tracking-[-0.04em]">
              <span className="gold-text">MUSAI</span>
            </div>
            <p className="font-kr-display text-[14px] text-ink/45 mt-6 max-w-md leading-[1.95]">
              Sound · Localization · Entertainment.
              <br />
              세계가 신뢰하는 한국의 사운드 — 1995년부터.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:text-right">
            <p className="font-display italic text-2xl text-gold">
              "Boost Your Play."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14">
          <div>
            <div className="text-[10px] tracking-[0.45em] uppercase text-gold/70 mb-5">
              Studio
            </div>
            <ul className="space-y-2.5 text-[13px] text-ink/60 font-kr-display">
              <li>About</li>
              <li>Service</li>
              <li>Works</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.45em] uppercase text-gold/70 mb-5">
              Service
            </div>
            <ul className="space-y-2.5 text-[13px] text-ink/60 font-kr-display">
              <li>SOUND — 오디오 · 보이스</li>
              <li>L10N — 로컬라이제이션</li>
              <li>ECHO — 엔터테인먼트</li>
            </ul>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.45em] uppercase text-gold/70 mb-5">
              Studios
            </div>
            <ul className="space-y-2.5 text-[13px] text-ink/60">
              <li>Seoul, Korea</li>
              <li>Berlin, Germany</li>
            </ul>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.45em] uppercase text-gold/70 mb-5">
              Connect
            </div>
            <ul className="space-y-2.5 text-[13px] text-ink/60">
              <li>contact@musaistudio.com</li>
              <li>+82 2 529 1488</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] tracking-[0.4em] uppercase text-ink/30">
          <span>© 2026 MUSAI STUDIO · All Rights Reserved</span>
          <div className="flex items-center gap-5">
            <span>Privacy</span>
            <span>Terms</span>
            <span className="text-gold/50">Crafted in Seoul</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
