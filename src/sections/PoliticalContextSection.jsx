import Reveal from "../components/Reveal";

export default function PoliticalContextSection() {
  return (
    <section
      id="political-context"
      className="relative min-h-screen overflow-hidden bg-[#080808]"
    >
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================= */}
      <div className="absolute inset-0 overflow-hidden">
        <picture>
          {/* MOBILE */}
          <source
            media="(max-width: 767px)"
            srcSet="/assets/bg2-mobile.png"
          />

          {/* DESKTOP */}
          <img
            src="/assets/bg2-desktop.png"
            alt=""
            aria-hidden="true"
            className="
              h-full
              w-full
              object-cover
              object-[80%_35%]
              md:object-[65%_35%]
            "
          />
        </picture>

        {/* =======================================================
            MAIN OVERLAY
            Mobile lebih gelap daripada desktop
        ======================================================= */}
        <div
          className="
            absolute
            inset-0
            bg-black/45
            md:bg-black/25
          "
        />

        {/* =======================================================
            CINEMATIC GRADIENT
        ======================================================= */}
        <div
          className="
            absolute
            inset-0

            bg-gradient-to-b
            from-black/40
            via-black/45
            to-black/75

            md:bg-gradient-to-r
            md:from-[#080808]/65
            md:via-[#080808]/20
            md:to-transparent
          "
        />

        {/* =======================================================
            BOTTOM FADE
        ======================================================= */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[30%]
            bg-gradient-to-t
            from-[#080808]
            via-[#080808]/50
            to-transparent
          "
        />

        {/* =======================================================
            TOP FADE
        ======================================================= */}
        <div
          className="
            absolute
            inset-x-0
            top-0
            h-[15%]
            bg-gradient-to-b
            from-[#080808]/45
            to-transparent
          "
        />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-[min(1200px,calc(100%-48px))]
          items-center
          px-6
          py-32
          md:px-8
        "
      >
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">

          {/* =====================================================
              LEFT SIDE — TITLE
          ===================================================== */}
          <div className="flex flex-col justify-center">
            <Reveal direction="left">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-[#c49a5a]" />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-[#c49a5a]
                  "
                >
                  Chapter 02
                </span>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <h2
                className="
                  font-display
                  text-[clamp(36px,5.5vw,76px)]
                  font-medium
                  leading-[1]
                  tracking-[-0.035em]
                  text-[#f2ede3]
                  drop-shadow-[0_4px_25px_rgba(0,0,0,0.7)]
                "
              >
                Indonesia
                <br />
                di Tengah
                <br />
                <span className="text-[#c49a5a]">
                  Gejolak Politik
                </span>
              </h2>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 max-w-md">
                <p
                  className="
                    text-sm
                    leading-7
                    text-[#d1cbc1]
                    drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]
                    md:text-base
                  "
                >
                  Memahami konteks politik Indonesia pada masa
                  Demokrasi Terpimpin menjadi bagian penting untuk
                  melihat rangkaian peristiwa yang terjadi pada
                  tahun 1965.
                </p>
              </div>
            </Reveal>
          </div>

          {/* =====================================================
              RIGHT SIDE — CONTENT CARD
          ===================================================== */}
          <div className="flex items-center">
            <Reveal direction="right" delay={200}>
              <div
                className="
                  w-full
                  max-w-xl
                  border
                  border-white/[0.08]
                  bg-black/50
                  p-6
                  backdrop-blur-[4px]
                  md:p-8
                "
              >
                {/* Small heading */}
                <div className="mb-7 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#c49a5a]" />

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-[#c49a5a]
                    "
                  >
                    Konteks Politik
                  </span>
                </div>

                {/* Paragraph 1 */}
                <p
                  className="
                    text-sm
                    leading-7
                    text-[#d6d0c7]
                    md:text-[15px]
                    md:leading-8
                  "
                >
                  Salah satu konsep politik penting pada masa
                  Demokrasi Terpimpin adalah{" "}
                  <span className="font-semibold text-[#c49a5a]">
                    Nasakom
                  </span>
                  , singkatan dari Nasionalisme, Agama, dan
                  Komunisme. Gagasan ini ditempatkan Soekarno
                  sebagai upaya mempertemukan tiga kekuatan
                  politik yang memiliki pengaruh besar pada masa
                  itu.
                </p>

                {/* Divider */}
                <div className="my-7 h-px w-full bg-white/[0.08]" />

                {/* Paragraph 2 */}
                <p
                  className="
                    text-sm
                    leading-7
                    text-[#d6d0c7]
                    md:text-[15px]
                    md:leading-8
                  "
                >
                  Namun, hubungan antarkekuatan tersebut tidak
                  selalu berjalan harmonis. Persaingan dan
                  ketegangan antara kelompok politik, termasuk
                  antara PKI dan sebagian kalangan militer,
                  menjadi salah satu bagian dari konteks politik
                  yang perlu dipahami ketika menelusuri
                  peristiwa 1965.
                </p>

                {/* Bottom metadata */}
                <div
                  className="
                    mt-8
                    flex
                    items-center
                    justify-between
                    border-t
                    border-white/[0.08]
                    pt-5
                  "
                >
                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      text-[#9a948c]
                    "
                  >
                    Indonesia
                  </span>

                  <span
                    className="
                      font-display
                      text-lg
                      text-[#c49a5a]
                    "
                  >
                    1960s
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* =========================================================
          SECTION BOTTOM TRANSITION
      ========================================================= */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-24
          bg-gradient-to-t
          from-[#080808]
          to-transparent
        "
      />
    </section>
  );
}