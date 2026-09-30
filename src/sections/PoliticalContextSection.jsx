export default function PoliticalContextSection() {
  return (
    <section
      id="political-context"
      className="relative min-h-screen overflow-hidden bg-[#0a0808] text-[#f2ede3]"
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#7f1d1d]/20 blur-[150px]" />

        <div className="absolute bottom-[-20%] right-[-5%] h-[600px] w-[600px] rounded-full bg-[#7f1d1d]/10 blur-[160px]" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808]" />
      </div>

      {/* Decorative grid */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-[8%] top-0 h-full w-px bg-white/[0.05]" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-white/[0.05]" />

        <div className="absolute left-0 right-0 top-[20%] h-px bg-white/[0.04]" />
        <div className="absolute left-0 right-0 bottom-[20%] h-px bg-white/[0.04]" />
      </div>

      {/* Main container */}
      <div className="relative z-10 mx-auto flex min-h-screen w-[min(1200px,calc(100%-48px))] items-center px-6 py-32">
        <div className="grid w-full gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">

          {/* LEFT */}
          <div>
            {/* Chapter */}
            <div className="animate-fade-up mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-[#c49a5a]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#c49a5a]">
                Chapter 02
              </span>
            </div>

            {/* Number */}
            <div className="pointer-events-none absolute -left-2 top-[18%] hidden select-none lg:block">
              <span className="font-display text-[clamp(180px,24vw,340px)] leading-none text-white/[0.025]">
                02
              </span>
            </div>

            {/* Title */}
            <h2
              className="animate-fade-up relative max-w-4xl font-display text-[clamp(48px,7vw,96px)] font-medium leading-[0.95] tracking-[-0.045em] text-[#f2ede3]"
              style={{ animationDelay: "150ms" }}
            >
              INDONESIA
              <br />

              <span className="text-[#c49a5a]">
                DI TENGAH
              </span>
              <br />

              GEJOLAK POLITIK
            </h2>

            {/* Description */}
            <p
              className="animate-fade-up mt-10 max-w-2xl text-base leading-8 text-[#a8a29e] md:text-lg"
              style={{ animationDelay: "300ms" }}
            >
              Tahun 1965 menjadi bagian dari periode ketika Indonesia
              menghadapi ketegangan politik dan pertarungan pengaruh
              antarkekuatan yang semakin tajam.
            </p>

            <p
              className="animate-fade-up mt-5 max-w-2xl text-sm leading-7 text-[#73706c]"
              style={{ animationDelay: "400ms" }}
            >
              Untuk memahami rangkaian peristiwa yang kemudian terjadi,
              kita perlu melihat terlebih dahulu suasana politik yang
              melatarbelakanginya.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex items-center lg:justify-end">
            <div className="w-full max-w-md">

              {/* Intro label */}
              <div
                className="animate-fade-up mb-6 flex items-center justify-between border-b border-white/10 pb-4"
                style={{ animationDelay: "350ms" }}
              >
                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#73706c]">
                  Atmosfer
                </span>

                <span className="font-display text-sm text-[#c49a5a]">
                  1965
                </span>
              </div>

              {/* Keywords */}
              <div className="space-y-3">

                <div
                  className="animate-fade-up group flex items-center justify-between border border-white/10 bg-white/[0.025] px-5 py-5 transition duration-300 hover:border-[#c49a5a]/40 hover:bg-[#c49a5a]/[0.04]"
                  style={{ animationDelay: "450ms" }}
                >
                  <span className="font-display text-xl text-[#f2ede3]">
                    Politik
                  </span>

                  <span className="text-xs text-[#73706c] transition group-hover:text-[#c49a5a]">
                    01
                  </span>
                </div>

                <div
                  className="animate-fade-up group flex items-center justify-between border border-white/10 bg-white/[0.025] px-5 py-5 transition duration-300 hover:border-[#c49a5a]/40 hover:bg-[#c49a5a]/[0.04]"
                  style={{ animationDelay: "550ms" }}
                >
                  <span className="font-display text-xl text-[#f2ede3]">
                    Ketegangan
                  </span>

                  <span className="text-xs text-[#73706c] transition group-hover:text-[#c49a5a]">
                    02
                  </span>
                </div>

                <div
                  className="animate-fade-up group flex items-center justify-between border border-white/10 bg-white/[0.025] px-5 py-5 transition duration-300 hover:border-[#c49a5a]/40 hover:bg-[#c49a5a]/[0.04]"
                  style={{ animationDelay: "650ms" }}
                >
                  <span className="font-display text-xl text-[#f2ede3]">
                    Ideologi
                  </span>

                  <span className="text-xs text-[#73706c] transition group-hover:text-[#c49a5a]">
                    03
                  </span>
                </div>

                <div
                  className="animate-fade-up group flex items-center justify-between border border-white/10 bg-white/[0.025] px-5 py-5 transition duration-300 hover:border-[#c49a5a]/40 hover:bg-[#c49a5a]/[0.04]"
                  style={{ animationDelay: "750ms" }}
                >
                  <span className="font-display text-xl text-[#f2ede3]">
                    Kekuasaan
                  </span>

                  <span className="text-xs text-[#73706c] transition group-hover:text-[#c49a5a]">
                    04
                  </span>
                </div>

              </div>

              {/* Bottom note */}
              <div
                className="animate-fade-up mt-8 flex items-start gap-4"
                style={{ animationDelay: "850ms" }}
              >
                <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b91c1c]" />

                <p className="text-xs leading-6 text-[#73706c]">
                  Sebuah situasi politik yang kompleks menjadi konteks
                  penting untuk memahami peristiwa yang akan kita telusuri.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom transition */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent" />

      {/* Section marker */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 md:flex">
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#73706c]">
          02
        </span>

        <span className="h-px w-16 bg-white/10" />

        <span className="text-[9px] uppercase tracking-[0.3em] text-[#73706c]">
          Context
        </span>
      </div>
    </section>
  );
}