import { useEffect, useState } from "react";

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#080808]"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0">

        {/* Red atmospheric glow */}
        <div
          className="
            absolute
            left-1/2
            top-[15%]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-[#7f1d1d]/20
            blur-[140px]
          "
        />

        {/* Bottom darkness */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[45%]
            bg-gradient-to-t
            from-[#080808]
            via-[#080808]/80
            to-transparent
          "
        />

        {/* Red light from bottom */}
        <div
          className="
            absolute
            bottom-[-200px]
            left-1/2
            h-[500px]
            w-[800px]
            -translate-x-1/2
            rounded-full
            bg-[#7f1d1d]/15
            blur-[120px]
          "
        />
      </div>

      {/* =====================================================
          DECORATIVE LINES
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            left-[8%]
            top-0
            h-full
            w-px
            bg-white/[0.05]
          "
        />

        <div
          className="
            absolute
            right-[8%]
            top-0
            h-full
            w-px
            bg-white/[0.05]
          "
        />

        <div
          className="
            absolute
            left-0
            right-0
            top-[22%]
            h-px
            bg-white/[0.04]
          "
        />

        <div
          className="
            absolute
            left-0
            right-0
            bottom-[18%]
            h-px
            bg-white/[0.04]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-[min(1200px,calc(100%-48px))]
          flex-col
          justify-center
          px-6
          py-32
        "
      >

        {/* Top label */}

        <div
          className="
            animate-fade-up
            mb-8
            flex
            items-center
            gap-4
          "
        >
          <span
            className="
              h-px
              w-12
              bg-[#c49a5a]
            "
          />

          <span
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#c49a5a]
            "
          >
            Sebuah perjalanan sejarah
          </span>
        </div>


        {/* =================================================
            TITLE
        ================================================= */}

        <div className="max-w-5xl">

          <h1
            className="
              animate-fade-up
              font-display
              text-[clamp(56px,9vw,130px)]
              font-medium
              leading-[0.86]
              tracking-[-0.055em]
              text-[#f2ede3]
            "
            style={{
              animationDelay: "150ms",
            }}
          >
            HARI
            <br />

            <span className="text-[#c49a5a]">
              KESAKTIAN
            </span>

            <br />

            PANCASILA
          </h1>

        </div>


        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <div
          className="
            animate-fade-up
            mt-10
            max-w-xl
          "
          style={{
            animationDelay: "300ms",
          }}
        >
          <p
            className="
              text-base
              leading-8
              text-[#a8a29e]
              md:text-lg
            "
          >
            Menelusuri kembali sebuah rangkaian peristiwa
            yang terjadi di tengah gejolak politik Indonesia
            pada tahun 1965, serta bagaimana peristiwa tersebut
            menjadi bagian dari perjalanan sejarah bangsa.
          </p>
        </div>


        {/* =================================================
            CTA
        ================================================= */}

        <div
          className="
            animate-fade-up
            mt-10
            flex
            flex-wrap
            items-center
            gap-4
          "
          style={{
            animationDelay: "450ms",
          }}
        >

          <a
            href="#political-context"
            className="
              group
              inline-flex
              items-center
              gap-4
              border
              border-[#c49a5a]
              bg-[#c49a5a]
              px-6
              py-4
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#080808]
              transition-all
              duration-300
              hover:bg-[#dfbd7a]
              hover:shadow-[0_0_40px_rgba(196,154,90,0.2)]
            "
          >
            Mulai Perjalanan

            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </a>


          <button
            type="button"
            className="
              inline-flex
              items-center
              gap-3
              px-4
              py-4
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#a8a29e]
              transition
              duration-300
              hover:text-[#f2ede3]
            "
          >
            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                text-[9px]
              "
            >
              ♪
            </span>

            Dengarkan suasana
          </button>

        </div>


        {/* =================================================
            BOTTOM INFORMATION
        ================================================= */}

        <div
          className="
            absolute
            bottom-10
            left-6
            right-6
            flex
            items-end
            justify-between
            md:left-12
            md:right-12
          "
        >

          {/* Date */}

          <div className="hidden md:block">

            <p
              className="
                mb-1
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-[#73706c]
              "
            >
              Periode
            </p>

            <p
              className="
                font-display
                text-xl
                text-[#f2ede3]
              "
            >
              1965 — 1967
            </p>

          </div>


          {/* Scroll indicator */}

          <div
            className="
              absolute
              left-1/2
              -translate-x-1/2
            "
          >

            <div
              className="
                flex
                flex-col
                items-center
                gap-3
              "
            >

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-[#73706c]
                "
              >
                Scroll
              </span>

              <div
                className="
                  relative
                  h-12
                  w-px
                  overflow-hidden
                  bg-white/10
                "
              >
                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-5
                    w-full
                    animate-[scrollLine_2s_ease-in-out_infinite]
                    bg-[#c49a5a]
                  "
                />
              </div>

            </div>

          </div>


          {/* Section number */}

          <div className="hidden text-right md:block">

            <p
              className="
                mb-1
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-[#73706c]
              "
            >
              Chapter
            </p>

            <p
              className="
                font-display
                text-3xl
                text-[#c49a5a]
              "
            >
              01
            </p>

          </div>

        </div>

      </div>


      {/* =====================================================
          CINEMATIC CENTER OBJECT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[12%]
          right-[7%]
          hidden
          h-[500px]
          w-[360px]
          lg:block
        "
      >

        {/* Outer glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[380px]
            w-[380px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#7f1d1d]/10
            blur-[100px]
          "
        />

        {/* Abstract monument silhouette */}

        <div
          className="
            absolute
            bottom-0
            left-1/2
            h-[370px]
            w-[170px]
            -translate-x-1/2
            bg-gradient-to-t
            from-black
            via-[#181313]
            to-transparent
            opacity-90
          "
          style={{
            clipPath:
              "polygon(42% 0%, 58% 0%, 65% 30%, 100% 100%, 0% 100%, 35% 30%)",
          }}
        />

        {/* Vertical light */}

        <div
          className="
            absolute
            bottom-0
            left-1/2
            h-[360px]
            w-px
            -translate-x-1/2
            bg-gradient-to-t
            from-[#c49a5a]/30
            via-[#c49a5a]/5
            to-transparent
          "
        />

      </div>


      {/* =====================================================
          SCROLL FADE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-40
          bg-gradient-to-t
          from-[#080808]
          to-transparent
        "
      />

    </section>
  );
}