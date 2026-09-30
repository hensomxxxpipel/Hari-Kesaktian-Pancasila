export default function AngkatanKelimaSection() {
  return (
    <section
      id="angkatan-kelima"
      className="relative min-h-screen overflow-hidden bg-[#111111] text-[#f2ede3]"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0">
        {/* Red atmosphere */}
        <div className="absolute right-[-10%] top-[15%] h-[600px] w-[600px] rounded-full bg-[#7f1d1d]/20 blur-[160px]" />

        <div className="absolute bottom-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#7f1d1d]/10 blur-[140px]" />

        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-[#0f0808]" />
      </div>

      {/* =====================================================
          DECORATIVE LINES
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-0 h-full w-px bg-white/[0.05]" />

        <div className="absolute right-[8%] top-0 h-full w-px bg-white/[0.05]" />

        <div className="absolute left-0 right-0 top-[18%] h-px bg-white/[0.04]" />

        <div className="absolute left-0 right-0 bottom-[18%] h-px bg-white/[0.04]" />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto flex min-h-screen w-[min(1200px,calc(100%-48px))] items-center px-6 py-32">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

          {/* =================================================
              LEFT — LARGE NUMBER / LABEL
          ================================================= */}

          <div className="relative">
            {/* Giant number */}
            <div className="pointer-events-none absolute -left-8 -top-32 select-none">
              <span className="font-display text-[clamp(180px,25vw,340px)] leading-none text-white/[0.025]">
                03
              </span>
            </div>

            {/* Chapter label */}
            <div className="animate-fade-up relative mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-[#c49a5a]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#c49a5a]">
                Chapter 03
              </span>
            </div>

            {/* Title */}
            <h2
              className="animate-fade-up relative font-display text-[clamp(50px,7vw,92px)] font-medium leading-[0.94] tracking-[-0.045em]"
              style={{ animationDelay: "150ms" }}
            >
              ANGKATAN
              <br />

              <span className="text-[#c49a5a]">
                KELIMA
              </span>
            </h2>

            {/* Red divider */}
            <div
              className="animate-fade-up mt-8 h-px w-24 bg-[#b91c1c]"
              style={{ animationDelay: "300ms" }}
            />

            <p
              className="animate-fade-up mt-8 max-w-md text-sm leading-7 text-[#a8a29e] md:text-base"
              style={{ animationDelay: "400ms" }}
            >
              Gagasan mengenai pembentukan Angkatan Kelima menjadi
              salah satu isu yang muncul dalam ketegangan politik
              Indonesia pada masa itu.
            </p>
          </div>

          {/* =================================================
              RIGHT — STORY
          ================================================= */}

          <div className="relative">

            {/* Top metadata */}
            <div
              className="animate-fade-up mb-8 flex items-center justify-between border-b border-white/10 pb-4"
              style={{ animationDelay: "250ms" }}
            >
              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#73706c]">
                Sebuah gagasan
              </span>

              <span className="text-[9px] uppercase tracking-[0.25em] text-[#73706c]">
                1965
              </span>
            </div>

            {/* Main statement */}
            <div
              className="animate-fade-up border-l border-[#b91c1c] pl-6 md:pl-8"
              style={{ animationDelay: "450ms" }}
            >
              <p className="font-display text-[clamp(25px,3vw,42px)] leading-[1.15] text-[#f2ede3]">
                Gagasan tentang
                <span className="text-[#c49a5a]"> Angkatan Kelima </span>
                memunculkan perdebatan mengenai arah dan kekuatan
                politik di tengah situasi yang semakin tegang.
              </p>
            </div>

            {/* Conflict card */}
            <div
              className="animate-fade-up mt-10 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2"
              style={{ animationDelay: "600ms" }}
            >
              {/* Proposal */}
              <div className="bg-[#171717] p-6 md:p-8">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#73706c]">
                    Gagasan
                  </span>

                  <span className="text-[#c49a5a]">01</span>
                </div>

                <h3 className="font-display text-2xl text-[#f2ede3]">
                  Angkatan Kelima
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#a8a29e]">
                  Sebuah gagasan yang menjadi bagian dari perdebatan
                  politik dan militer pada masa tersebut.
                </p>
              </div>

              {/* Rejection */}
              <div className="bg-[#0e0b0b] p-6 md:p-8">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#73706c]">
                    Sikap
                  </span>

                  <span className="text-[#b91c1c]">02</span>
                </div>

                <h3 className="font-display text-2xl text-[#f2ede3]">
                  Ahmad Yani
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#a8a29e]">
                  Penolakan terhadap gagasan tersebut menjadi salah satu
                  titik penting dalam ketegangan hubungan politik dan
                  militer pada periode tersebut.
                </p>
              </div>
            </div>

            {/* Bottom insight */}
            <div
              className="animate-fade-up mt-8 flex items-start gap-4"
              style={{ animationDelay: "750ms" }}
            >
              <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c49a5a]" />

              <p className="max-w-xl text-xs leading-6 text-[#73706c]">
                Perbedaan pandangan mengenai gagasan ini membantu
                menggambarkan semakin kompleksnya hubungan antara
                kekuatan politik dan militer.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM TRANSITION
      ===================================================== */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#080808] to-transparent" />

      {/* Section marker */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 md:flex">
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#73706c]">
          03
        </span>

        <span className="h-px w-16 bg-white/10" />

        <span className="text-[9px] uppercase tracking-[0.3em] text-[#73706c]">
          Angkatan Kelima
        </span>
      </div>
    </section>
  );
}