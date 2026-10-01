import { useEffect, useRef, useState } from "react";
import Reveal from "../components/Reveal";

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const audioRef = useRef(null);

  // =====================================================
  // SCROLL STATE
  // =====================================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =====================================================
  // AUTOPLAY AUDIO
  // =====================================================

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    // Volume dibuat cukup pelan agar tidak mengejutkan user
    audio.volume = 0.35;

    const startAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        // Browser dapat memblokir autoplay
        console.log(
          "Autoplay diblokir oleh browser:",
          error
        );

        setIsPlaying(false);
      }
    };

    startAudio();
  }, []);

  // =====================================================
  // AUDIO CONTROL
  // =====================================================

  const toggleAudio = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error(
          "Audio gagal diputar:",
          error
        );
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  // =====================================================
  // AUDIO EVENT
  // =====================================================

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  // =====================================================
  // CLEANUP AUDIO
  // =====================================================

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <section
      id="hero"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#080808]
      "
    >
      {/* =====================================================
          AUDIO
      ===================================================== */}

      <audio
        ref={audioRef}
        src="/audio/gugur-bunga.mp3"
        autoPlay
        loop
        preload="auto"
      />

      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/assets/bg1.png"
          alt=""
          aria-hidden="true"
          className={`
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-[82%_center]
            md:object-center
            transition-transform
            duration-[2500ms]
            ease-out
            ${
              scrolled
                ? "scale-[1.06]"
                : "scale-100"
            }
          `}
        />

        {/* =================================================
            GENERAL DARK OVERLAY
        ================================================= */}

        <div
          className="
            absolute
            inset-0
            bg-black/35
          "
        />

        {/* =================================================
            LEFT DARKNESS
        ================================================= */}

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

        {/* =================================================
            BOTTOM DARKNESS
        ================================================= */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[55%]
            bg-gradient-to-t
            from-[#080808]
            via-[#080808]/65
            to-transparent
          "
        />

        {/* =================================================
            TOP DARKNESS
        ================================================= */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-[30%]
            bg-gradient-to-b
            from-[#080808]/65
            to-transparent
          "
        />

        {/* =================================================
            RED ATMOSPHERE
        ================================================= */}

        <div
          className={`
            absolute
            left-[45%]
            top-[20%]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-[#7f1d1d]/10
            blur-[140px]
            transition-all
            duration-[2000ms]
            ${
              scrolled
                ? "scale-125 opacity-50"
                : "scale-100 opacity-100"
            }
          `}
        />
      </div>

      {/* =====================================================
          CINEMATIC VIGNETTE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.42)_100%)]
        "
      />

      {/* =====================================================
          DECORATIVE GRID
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >
        {/* Left vertical line */}

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

        {/* Right vertical line */}

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

        {/* Top horizontal line */}

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

        {/* Bottom horizontal line */}

        <div
          className="
            absolute
            bottom-[18%]
            left-0
            right-0
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
          py-10
        "
      >
        
        {/* ===================================================
            PRESENTED BY P3MD
        =================================================== */}

        <Reveal direction="left" delay={50}>
          <div
            className="
              mb-10
              flex
              items-center
              gap-4
            "
          >
            {/* LOGO P3MD */}
            <img
              src="/logo-p3md.png"
              alt="P3MD"
              className="
                h-20
                w-auto
                object-contain
                drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]
                md:h-24
              "
            />

            {/* TEXT */}
            <div
              className="
                flex
                flex-col
                justify-center
              "
            >
              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.35em]
                  text-[#9a948c]
                "
              >
                Presented by
              </span>

              <span
                className="
                  mt-1
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-[#c49a5a]
                "
              >
                P3MD
              </span>
            </div>
          </div>
        </Reveal>


        {/* ===================================================
            TOP LABEL
        =================================================== */}

        <Reveal direction="left">
          <div
            className="
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
        </Reveal>

        {/* ===================================================
            TITLE
        =================================================== */}

        <div className="max-w-5xl">
          <Reveal delay={150}>
            <h1
              className="
                font-display
                text-[clamp(56px,9vw,130px)]
                font-medium
                leading-[0.86]
                tracking-[-0.055em]
                text-[#f2ede3]
                drop-shadow-[0_4px_30px_rgba(0,0,0,0.45)]
              "
            >
              HARI
              <br />

              <span className="text-[#c49a5a]">
                KESAKTIAN
              </span>

              <br />

              PANCASILA
            </h1>
          </Reveal>
        </div>

        {/* ===================================================
            DESCRIPTION
        =================================================== */}

        <Reveal delay={300}>
          <div
            className="
              mt-10
              max-w-xl
            "
          >
            <p
              className="
                text-base
                leading-8
                text-[#d1cbc1]
                drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]
                md:text-lg
              "
            >
              Menelusuri kembali sebuah rangkaian peristiwa
              yang terjadi di tengah gejolak politik Indonesia
              pada tahun 1965, serta bagaimana peristiwa tersebut
              menjadi bagian dari perjalanan sejarah bangsa.
            </p>
          </div>
        </Reveal>

        {/* ===================================================
            CTA
        =================================================== */}

        <Reveal delay={450}>
          <div
            className="
              mt-10
              flex
              flex-wrap
              items-center
              gap-4
            "
          >
            {/* =================================================
                PRIMARY CTA
            ================================================= */}

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
                hover:shadow-[0_0_40px_rgba(196,154,90,0.25)]
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

            {/* =================================================
                AUDIO BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={toggleAudio}
              aria-label={
                isPlaying
                  ? "Matikan suara"
                  : "Dengarkan suasana"
              }
              className="
                group
                inline-flex
                items-center
                gap-3
                px-4
                py-4
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#d0cbc2]
                transition
                duration-300
                hover:text-[#f2ede3]
              "
            >
              <span
                className={`
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  border
                  text-[9px]
                  transition-all
                  duration-300
                  ${
                    isPlaying
                      ? "border-[#c49a5a] text-[#c49a5a]"
                      : "border-white/25 text-[#d0cbc2]"
                  }
                `}
              >
                {isPlaying ? "Ⅱ" : "♪"}
              </span>

              {isPlaying
                ? "Matikan suara"
                : "Dengarkan suasana"}
            </button>
          </div>
        </Reveal>

        {/* ===================================================
            BOTTOM INFORMATION
        =================================================== */}

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
          {/* =================================================
              PERIOD
          ================================================= */}

          <Reveal delay={600}>
            <div className="hidden md:block">
              <p
                className="
                  mb-1
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-[#9a948c]
                "
              >
                Periode
              </p>

              <p
                className="
                  font-display
                  text-xl
                  text-[#f2ede3]
                  drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]
                "
              >
                1965 — 1967
              </p>
            </div>
          </Reveal>

          {/* =================================================
              SCROLL INDICATOR
          ================================================= */}

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
                  text-[#9a948c]
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
                  bg-white/15
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

          {/* =================================================
              CHAPTER
          ================================================= */}

          <Reveal
            delay={650}
            direction="right"
          >
            <div className="hidden text-right md:block">
              <p
                className="
                  mb-1
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-[#9a948c]
                "
              >
                Chapter
              </p>

              <p
                className="
                  font-display
                  text-3xl
                  text-[#c49a5a]
                  drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]
                "
              >
                01
              </p>
            </div>
          </Reveal>
        </div>
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