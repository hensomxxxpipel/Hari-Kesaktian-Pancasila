import Reveal from "../components/Reveal";

export default function MaknaSection() {
  return (
    <section
      id="makna"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#080808]
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/assets/bg-makna.png"
          alt=""
          aria-hidden="true"
          className="
            h-full
            w-full
            object-cover
            object-[68%_center]
            transition-transform
            duration-[2500ms]
            ease-out
            md:object-[65%_center]
          "
        />

        {/* Overall dark overlay */}
        <div
          className="
            absolute
            inset-0
            bg-black/40
            md:bg-black/30
          "
        />

        {/* Left side — darker for text */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#080808]/95
            via-[#080808]/65
            to-transparent
          "
        />

        {/* Mobile — darker overall + bottom */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/30
            via-transparent
            to-[#080808]/80
            md:hidden
          "
        />

        {/* Bottom transition */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[30%]
            bg-gradient-to-t
            from-[#080808]
            via-[#080808]/55
            to-transparent
          "
        />

        {/* Top transition */}
        <div
          className="
            absolute
            inset-x-0
            top-0
            h-[18%]
            bg-gradient-to-b
            from-[#080808]/55
            to-transparent
          "
        />
      </div>

      {/* =========================================================
          DECORATIVE GRID
      ========================================================= */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
        "
      >
        <div
          className="
            absolute
            left-[7%]
            top-0
            h-full
            w-px
            bg-white/[0.06]
          "
        />

        <div
          className="
            absolute
            right-[7%]
            top-0
            h-full
            w-px
            bg-white/[0.06]
          "
        />

        <div
          className="
            absolute
            left-0
            right-0
            top-[18%]
            h-px
            bg-white/[0.04]
          "
        />

        <div
          className="
            absolute
            bottom-[15%]
            left-0
            right-0
            h-px
            bg-white/[0.04]
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
          w-[min(1200px,calc(100%-40px))]
          items-center
          px-5
          py-32
          md:w-[min(1200px,calc(100%-96px))]
          md:px-8
        "
      >
        <div className="w-full max-w-3xl">

          {/* =====================================================
              CHAPTER
          ===================================================== */}
          <Reveal direction="left">
            <div className="mb-8 flex items-center gap-4">
              <span
                className="
                  h-px
                  w-12
                  bg-[#c49a5a]
                  md:w-16
                "
              />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.35em]
                  text-[#c49a5a]
                "
              >
                Chapter 01
              </span>
            </div>
          </Reveal>

          {/* =====================================================
              TITLE
          ===================================================== */}
          <Reveal delay={150}>
            <div>
              <p
                className="
                  mb-3
                  font-display
                  text-[clamp(16px,2vw,22px)]
                  uppercase
                  tracking-[0.28em]
                  text-[#d0c5b4]
                "
              >
                Makna
              </p>

              <h2
                className="
                  max-w-4xl
                  font-display
                  text-[clamp(44px,7vw,88px)]
                  font-medium
                  leading-[0.92]
                  tracking-[-0.045em]
                  text-[#f2ede3]
                  drop-shadow-[0_5px_30px_rgba(0,0,0,0.75)]
                "
              >
                Hari Kesaktian
                <br />
                <span className="text-[#c49a5a]">
                  Pancasila
                </span>
              </h2>
            </div>
          </Reveal>

          {/* =====================================================
              MAIN CONTENT
          ===================================================== */}
          <Reveal delay={300}>
            <div
              className="
                mt-10
                max-w-2xl
                border-l
                border-[#c49a5a]
                pl-5
                md:mt-12
                md:pl-7
              "
            >
              <p
                className="
                  text-sm
                  leading-7
                  text-[#ddd7ce]
                  drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]
                  md:text-[15px]
                  md:leading-8
                "
              >
                Setiap 1 Oktober, bangsa Indonesia memperingati
                Hari Kesaktian Pancasila untuk mengenang gugurnya
                para Pahlawan Revolusi dalam peristiwa Gerakan 30
                September 1965 (G30S).
              </p>

              <p
                className="
                  mt-6
                  text-sm
                  leading-7
                  text-[#ddd7ce]
                  drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]
                  md:text-[15px]
                  md:leading-8
                "
              >
                Peringatan ini menjadi simbol keteguhan Pancasila
                sebagai dasar negara dan ideologi pemersatu bangsa
                di tengah pergolakan politik. Kesaktian Pancasila
                bukan sekadar tentang bertahannya sebuah ideologi,
                melainkan juga tanggung jawab seluruh rakyat
                Indonesia untuk menjaga persatuan, mempertahankan
                kedaulatan, dan mengamalkan nilai-nilai Pancasila.
              </p>
            </div>
          </Reveal>

          {/* =====================================================
              TRANSITION STATEMENT
          ===================================================== */}
          <Reveal delay={450}>
            <div className="mt-10 max-w-2xl md:mt-12">
              <p
                className="
                  font-display
                  text-[clamp(18px,2.5vw,27px)]
                  italic
                  leading-[1.45]
                  text-[#e7dfd3]
                  drop-shadow-[0_3px_15px_rgba(0,0,0,0.9)]
                "
              >
                Untuk memahami lahirnya peringatan ini,
                kita perlu kembali ke Indonesia pada 1965,
                ketika persaingan politik dan ketegangan
                militer mencapai puncaknya.
              </p>
            </div>
          </Reveal>

          {/* =====================================================
              CTA TO CHAPTER 02
          ===================================================== */}
          <Reveal delay={600}>
            <div className="mt-10 md:mt-12">
              <a
                href="#political-context"
                className="
                  group
                  inline-flex
                  items-center
                  gap-5
                  border
                  border-[#c49a5a]/70
                  bg-[#080808]/30
                  px-5
                  py-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#c49a5a]
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-[#c49a5a]
                  hover:bg-[#c49a5a]
                  hover:text-[#080808]
                "
              >
                <span>
                  Kembali ke 1965
                </span>

                <span
                  className="
                    text-base
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* =========================================================
          CHAPTER NUMBER
      ========================================================= */}
      <div
        className="
          pointer-events-none
          absolute
          right-[7%]
          top-1/2
          z-10
          hidden
          -translate-y-1/2
          md:block
        "
      >
        <span
          className="
            font-display
            text-7xl
            font-medium
            tracking-[-0.05em]
            text-white/[0.12]
          "
        >
          01
        </span>
      </div>

      {/* =========================================================
          BOTTOM SCROLL INDICATOR
      ========================================================= */}
      <div
        className="
          absolute
          bottom-8
          left-1/2
          z-10
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-3
          md:flex
        "
      >
        <span
          className="
            text-[8px]
            uppercase
            tracking-[0.3em]
            text-[#9a948c]
          "
        >
          Continue
        </span>

        <div
          className="
            relative
            h-10
            w-px
            overflow-hidden
            bg-white/15
          "
        >
          <div
            className="
              absolute
              left-0
              top-0
              h-4
              w-full
              animate-[scrollLine_2s_ease-in-out_infinite]
              bg-[#c49a5a]
            "
          />
        </div>
      </div>
    </section>
  );
}