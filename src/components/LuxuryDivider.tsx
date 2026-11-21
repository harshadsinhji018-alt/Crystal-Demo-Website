export type SurfaceTone = 'obsidian' | 'midnight' | 'navy' | 'ivory';

const SURFACE_BG: Record<SurfaceTone, string> = {
  obsidian: 'bg-[#040812]',
  midnight: 'bg-[#060E1E]',
  navy: 'bg-[#081226]',
  ivory: 'bg-[#F7F3EB]',
};

interface SectionDividerProps {
  variant?: 'section';
  from?: SurfaceTone;
  to?: SurfaceTone;
  className?: string;
}

interface InlineDividerProps {
  variant: 'inline';
  theme?: 'dark' | 'light';
  align?: 'left' | 'center';
  className?: string;
}

type LuxuryDividerProps = SectionDividerProps | InlineDividerProps;

export function LuxuryDivider(props: LuxuryDividerProps) {
  if (props.variant === 'inline') {
    const theme = props.theme ?? 'dark';
    const align = props.align ?? 'left';
    const isDark = theme === 'dark';

    if (align === 'center') {
      return (
        <div
          aria-hidden="true"
          className={`flex w-full items-center gap-3 select-none ${props.className ?? ''}`}
        >
          <span
            className={`h-px flex-1 bg-gradient-to-r from-transparent ${
              isDark
                ? 'via-[#D4AF37]/45 to-[#E6CB7A]/80'
                : 'via-[#8E6F1E]/35 to-[#8E6F1E]/75'
            }`}
          />
          <span
            className={`flex h-2.5 w-2.5 shrink-0 rotate-45 items-center justify-center border ${
              isDark
                ? 'border-[#E6CB7A]/85 bg-[#040812]'
                : 'border-[#8E6F1E]/80 bg-[#F7F3EB]'
            }`}
          >
            <span
              className={`h-1 w-1 ${
                isDark ? 'bg-[#D4AF37]' : 'bg-[#8E6F1E]'
              }`}
            />
          </span>
          <span
            className={`h-px flex-1 bg-gradient-to-l from-transparent ${
              isDark
                ? 'via-[#D4AF37]/45 to-[#E6CB7A]/80'
                : 'via-[#8E6F1E]/35 to-[#8E6F1E]/75'
            }`}
          />
        </div>
      );
    }

    return (
      <div
        aria-hidden="true"
        className={`flex w-full items-center gap-2 select-none ${props.className ?? ''}`}
      >
        <span
          className={`h-1.5 w-1.5 shrink-0 rotate-45 border ${
            isDark ? 'border-[#E6CB7A]/85' : 'border-[#8E6F1E]/85'
          }`}
        />
        <span
          className={`h-px w-10 shrink-0 sm:w-14 ${
            isDark
              ? 'bg-gradient-to-r from-[#E6CB7A]/85 to-[#D4AF37]/45'
              : 'bg-gradient-to-r from-[#8E6F1E]/80 to-[#8E6F1E]/35'
          }`}
        />
        <span
          className={`h-px flex-1 bg-gradient-to-r ${
            isDark
              ? 'from-[#D4AF37]/35 via-[#D4AF37]/12 to-transparent'
              : 'from-[#8E6F1E]/30 via-[#8E6F1E]/10 to-transparent'
          }`}
        />
      </div>
    );
  }

  const from = props.from ?? 'obsidian';
  const to = props.to ?? 'midnight';
  const bothIvory = from === 'ivory' && to === 'ivory';

  return (
    <div
      aria-hidden="true"
      className={`relative flex h-6 w-full items-center justify-center overflow-hidden select-none sm:h-8 ${props.className ?? ''}`}
    >
      {/* Top & bottom surface split matching adjacent sections */}
      <div className={`absolute inset-x-0 top-0 h-1/2 ${SURFACE_BG[from]}`} />
      <div className={`absolute inset-x-0 bottom-0 h-1/2 ${SURFACE_BG[to]}`} />

      {/* Full-bleed whisper-thin metallic hairline */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent ${
          bothIvory ? 'via-[#8E6F1E]/20' : 'via-[#D4AF37]/25'
        } to-transparent`}
      />

      {/* Centered metallic champagne-gold gradient with minimal faceted crystal accent */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <span
          className={`h-px flex-1 bg-gradient-to-r from-transparent ${
            bothIvory
              ? 'via-[#8E6F1E]/45 to-[#8E6F1E]/85'
              : 'via-[#D4AF37]/50 to-[#E6CB7A]/85'
          }`}
        />

        <div className="mx-3 flex shrink-0 items-center gap-1.5 sm:mx-5 sm:gap-2">
          <span
            className={`h-1 w-1 rotate-45 ${
              bothIvory ? 'bg-[#8E6F1E]/70' : 'bg-[#D4AF37]/75'
            }`}
          />
          <span
            className={`h-px w-4 bg-gradient-to-r sm:w-7 ${
              bothIvory
                ? 'from-[#8E6F1E]/35 to-[#8E6F1E]'
                : 'from-[#D4AF37]/35 to-[#E6CB7A]'
            }`}
          />
          <span
            className={`flex h-2.5 w-2.5 rotate-45 items-center justify-center border shadow-[0_0_12px_rgba(212,175,55,0.32)] sm:h-3 sm:w-3 ${
              bothIvory
                ? 'border-[#8E6F1E] bg-[#F7F3EB]'
                : 'border-[#E6CB7A]/90 bg-[#040812]'
            }`}
          >
            <span
              className={`h-1 w-1 ${
                bothIvory ? 'bg-[#8E6F1E]' : 'bg-[#E6CB7A]'
              }`}
            />
          </span>
          <span
            className={`h-px w-4 bg-gradient-to-l sm:w-7 ${
              bothIvory
                ? 'from-[#8E6F1E]/35 to-[#8E6F1E]'
                : 'from-[#D4AF37]/35 to-[#E6CB7A]'
            }`}
          />
          <span
            className={`h-1 w-1 rotate-45 ${
              bothIvory ? 'bg-[#8E6F1E]/70' : 'bg-[#D4AF37]/75'
            }`}
          />
        </div>

        <span
          className={`h-px flex-1 bg-gradient-to-l from-transparent ${
            bothIvory
              ? 'via-[#8E6F1E]/45 to-[#8E6F1E]/85'
              : 'via-[#D4AF37]/50 to-[#E6CB7A]/85'
          }`}
        />
      </div>
    </div>
  );
}
