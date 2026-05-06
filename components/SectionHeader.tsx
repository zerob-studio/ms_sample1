type Props = {
  no: string;
  label: string;
  caption?: string;
  meta?: string;
  headline: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
};

export default function SectionHeader({
  no,
  label,
  caption,
  meta,
  headline,
  description,
  actions,
}: Props) {
  return (
    <>
      {/* Chapter strip — clearly delineates section start */}
      <div className="chapter-strip">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12 h-12 flex items-center justify-between font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase">
          <span className="text-ink flex items-center gap-2.5">
            <span className="text-mute">— Ch.{no}</span>
            <span>/</span>
            <span>{label}</span>
          </span>
          {caption && (
            <span className="hidden md:inline text-mute truncate">
              {caption}
            </span>
          )}
          <span className="text-mute">{meta ?? `0${no} / 07`}</span>
        </div>
      </div>

      {/* Section title block */}
      <div className="mx-auto max-w-[1480px] px-6 lg:px-12 pt-16 lg:pt-24 pb-12 lg:pb-16">
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-9 lg:col-start-2">
            <h2 className="font-display text-[clamp(2rem,5vw,4.6rem)] leading-[1.04] tracking-[-0.02em] text-ink">
              {headline}
            </h2>
          </div>
          {(description || actions) && (
            <div className="col-span-12 lg:col-span-3 flex flex-col items-start lg:items-end gap-5 justify-end">
              {description && (
                <div className="font-kr text-[14px] text-ink-soft leading-[1.85] lg:text-right max-w-xs">
                  {description}
                </div>
              )}
              {actions}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
