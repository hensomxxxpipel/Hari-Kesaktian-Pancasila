import { useEffect, useState } from "react";

function HeroTokoh() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const section = document.getElementById("hero-tokoh");

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
      },
      {
        threshold: 0.08,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero-tokoh"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#080808]
        text-[#f2ede3]
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
          ===================================================== */}
      <div className="absolute inset-0">
        <img
          src="/assets/bg4.png"
          alt=""
          aria-hidden="true"
          className="
            h-full
            w-full
            object-cover

            object-[75%_center]

            sm:object-[72%_center]

            md:object-[70%_center]

            lg:object-center

            scale-[1.02]
          "
        />
      </div>

      {/* =====================================================
          RED OVERLAY
          
          Saat belum masuk Section 04:
          opacity = 0

          Saat Section 04 aktif:
          opacity = 0.68
          ===================================================== */}
      <div
        className={`
          pointer-events-none
          absolute
          inset-0
          z-[2]

          bg-[#a80000]

          transition-opacity
          duration-[1600ms]
          ease-out

          ${
            active
              ? "opacity-[0.68]"
              : "opacity-0"
          }
        `}
      />

      {/* =====================================================
          DARK OVERLAY KIRI
          
          Membuat area teks lebih gelap,
          sementara wajah tokoh di kanan tetap terlihat.
          ===================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[3]

          bg-gradient-to-r
          from-[#050202]/85
          via-[#050202]/55
          to-transparent

          md:from-[#050202]/80
          md:via-[#050202]/35
          md:to-transparent
        "
      />

      {/* =====================================================
          DARK OVERLAY ATAS
          ===================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-[4]

          h-[24%]

          bg-gradient-to-b
          from-[#080808]/85
          via-[#080808]/30
          to-transparent
        "
      />

      {/* =====================================================
          GRADASI PENDEK
          SECTION 03 → HERO TOKOH

          Dibuat lebih pendek supaya tidak terlalu banyak
          area hitam sebelum background HeroTokoh terlihat.
          ===================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-[10]

          h-[160px]

          bg-gradient-to-b
          from-[#080808]
          via-[#080808]/65
          to-transparent

          sm:h-[180px]

          md:h-[200px]

          lg:h-[220px]
        "
      />

      {/* =====================================================
          GRADASI BAWAH

          HeroTokoh → TokohSection

          Background image perlahan menghilang menjadi hitam
          sehingga card section berikutnya tidak terasa
          terpotong.
          ===================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-[10]

          h-[38%]

          bg-gradient-to-b
          from-transparent
          via-[#080808]/65
          to-[#080808]
        "
      />

      {/* =====================================================
          VIGNETTE
          ===================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[5]

          bg-[radial-gradient(
            ellipse_at_center,
            transparent 25%,
            rgba(0,0,0,0.38) 100%
          )]
        "
      />

      {/* =====================================================
          CONTENT
          ===================================================== */}
      <div
        className="
          relative
          z-20

          mx-auto
          flex
          min-h-screen
          max-w-[1600px]
          items-center

          px-6
          py-28

          sm:px-8
          sm:py-32

          md:px-12

          lg:px-16

          xl:px-20
        "
      >
        <div
          className="
            w-full
            max-w-[720px]
          "
        >
          {/* =================================================
              CHAPTER
              ================================================= */}
          <div
            className={`
              flex
              items-center
              gap-4

              transition-all
              duration-1000

              ${
                active
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
          >
            <span
              className="
                h-px
                w-12
                bg-[#d21f1f]

                sm:w-16
              "
            />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.32em]
                text-[#d52a2a]

                sm:text-[10px]
              "
            >
              Chapter 04&nbsp;&nbsp; The Figures
            </span>
          </div>

          {/* =================================================
              QUESTION
              ================================================= */}
          <p
            className={`
              mt-9

              text-[9px]
              uppercase
              tracking-[0.2em]

              text-[#d1baba]

              sm:mt-10
              sm:text-[10px]
              sm:tracking-[0.25em]

              transition-all
              delay-100
              duration-1000

              ${
                active
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
          >
            Siapa saja yang berada di balik gerakan?
          </p>

          {/* =================================================
              TITLE
              ================================================= */}
          <h1
            className={`
              mt-7

              font-display
              text-[64px]
              font-medium
              leading-[0.82]
              tracking-[-0.055em]

              text-[#f2ede3]

              sm:mt-8
              sm:text-[78px]

              md:text-[96px]

              lg:text-[112px]

              xl:text-[126px]

              transition-all
              delay-200
              duration-[1200ms]

              ${
                active
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }
            `}
          >
            TOKOH
            <br />

            <span className="text-[#d52222]">
              DI BALIK
            </span>

            <br />

            GERAKAN
          </h1>

          {/* =================================================
              DIVIDER
              ================================================= */}
          <div
            className={`
              mt-9

              h-px
              w-16

              bg-[#b81818]

              sm:mt-10
              sm:w-20

              transition-all
              delay-300
              duration-1000

              ${
                active
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-5 opacity-0"
              }
            `}
          />

          {/* =================================================
              DESCRIPTION
              ================================================= */}
          <p
            className={`
              mt-7

              max-w-[650px]

              text-[11px]
              leading-6

              text-[#d1baba]

              sm:mt-8
              sm:text-[13px]
              sm:leading-7

              md:text-sm
              md:leading-8

              transition-all
              delay-400
              duration-1000

              ${
                active
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }
            `}
          >
            Gerakan 30 September melibatkan sejumlah tokoh
            dari lingkungan militer dan politik. Bagian ini
            memperkenalkan beberapa nama yang sering muncul
            dalam pembahasan mengenai peristiwa tersebut.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroTokoh;