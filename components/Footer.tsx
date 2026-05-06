export default function Footer() {
  return (
    <footer className="relative border-t border-gold/15 py-16">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="font-display text-3xl tracking-[0.18em] mb-4">
              <span className="gold-text">MUSAI</span>
              <span className="text-ink/70 ml-1">STUDIO</span>
            </div>
            <p className="font-kr-display text-sm text-ink/45 leading-relaxed">
              사운드 · 로컬라이제이션 · 엔터테인먼트
              <br />
              30년의 장인정신, 한 편의 이야기.
            </p>
          </div>

          <div>
            <div className="text-[11px] tracking-widest2 uppercase text-gold/70 mb-5">
              Studio
            </div>
            <ul className="space-y-2 text-sm text-ink/55 font-kr-display">
              <li>About</li>
              <li>Service</li>
              <li>Works</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] tracking-widest2 uppercase text-gold/70 mb-5">
              Connect
            </div>
            <ul className="space-y-2 text-sm text-ink/55">
              <li>Instagram</li>
              <li>YouTube</li>
              <li>LinkedIn</li>
              <li>hello@musai.studio</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[11px] tracking-widest2 uppercase text-ink/30">
          <span>© 2026 MUSAI STUDIO · All Rights Reserved</span>
          <span className="text-gold/40">Crafted in Seoul</span>
        </div>
      </div>
    </footer>
  );
}
