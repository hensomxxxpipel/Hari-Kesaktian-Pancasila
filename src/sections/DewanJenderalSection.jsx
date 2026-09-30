import { useEffect, useState } from "react";

const timeline = [
  {
    year: "1965",
    title: "Isu Dewan Jenderal",
    text: "Istilah Dewan Jenderal muncul di tengah ketegangan politik dan militer Indonesia.",
  },
  {
    year: "26 MEI",
    title: "Klarifikasi Ahmad Yani",
    text: "Dalam sebuah rapat yang dipimpin Presiden Soekarno, Ahmad Yani diminta memberikan penjelasan mengenai isu tersebut.",
  },
  {
    year: "30 SEPT",
    title: "Gerakan Dimulai",
    text: "Ketegangan yang telah berkembang menjadi bagian dari konteks munculnya Gerakan 30 September.",
  },
];

function DewanJenderalSection() {
  const [isActive, setIsActive] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = document.getElementById("dewan-jenderal");

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="dewan-jenderal"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#160909]
        text-[#f2ede3]
      "
    >
      {/* =====================================================
          BACKGROUND TEXTURE
      ====================================================== */}

      <div className="absolute inset-0">
        <img
          src="/assets/bg5.png"
          alt=""
          aria-hidden="true"
          className="
            h-full
            w-full
            object-cover
            opacity-75
          "
        />

        <div className="absolute inset-0 bg-[#160909]/45" />

        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-[#100606]/90
            via-[#160909]/60
            to-[#160909]/30
          "
        />

        <div
          className="
            absolute inset-x-0 bottom-0
            h-[45%]
            bg-gradient-to-t
            from-[#100606]
            via-[#100606]/65
            to-transparent
          "
        />

        <div
          className="
            absolute inset-x-0 top-0
            h-[25%]
            bg-gradient-to-b
            from-[#100606]/55
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          ATMOSPHERE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[180px]
          top-[18%]
          h-[650px]
          w-[650px]
          rounded-full
          bg-[#b91c1c]/10
          blur-[170px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[200px]
          bottom-[-180px]
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#806a4a]/10
          blur-[160px]
        "
      />

      {/* =====================================================
          ARCHIVE GRID
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-30
        "
      >
        <div className="absolute left-[8%] top-0 h-full w-px bg-[#f2ede3]/10" />

        <div className="absolute left-1/2 top-0 h-full w-px bg-[#f2ede3]/[0.035]" />

        <div className="absolute right-[8%] top-0 h-full w-px bg-[#f2ede3]/10" />

        <div className="absolute left-0 right-0 top-[18%] h-px bg-[#f2ede3]/[0.035]" />

        <div className="absolute left-0 right-0 bottom-[16%] h-px bg-[#f2ede3]/[0.035]" />
      </div>

      {/* =====================================================
          GIANT CHAPTER NUMBER
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-10
          top-[-2rem]
          select-none
          font-display
          text-[18rem]
          font-medium
          leading-none
          tracking-[-0.08em]
          text-[#f2ede3]/[0.035]
          md:text-[24rem]
        "
      >
        05
      </div>

      {/* =====================================================
          CONTENT WRAPPER
      ====================================================== */}

      <div
        className={`
          relative z-10
          mx-auto
          max-w-7xl
          px-6
          py-28
          lg:px-12
          lg:py-36

          transition-all
          duration-[1000ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            isActive
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-10 opacity-0"
          }
        `}
      >
        {/* ===================================================
            CHAPTER
        ==================================================== */}

        <div className="mb-12 flex items-center gap-4">
          <span className="h-px w-12 bg-[#b91c1c]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#a8a29e]">
            Chapter 05
          </span>

          <span className="text-[10px] uppercase tracking-[0.3em] text-[#b91c1c]">
            The Question
          </span>
        </div>

        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT CONTENT */}

          <div
            className={`
              transition-all
              duration-[1100ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]

              ${
                isActive
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }
            `}
          >
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#806a4a]">
              Sebuah isu yang menjadi pusat ketegangan
            </p>

            <h2
              className="
                font-display
                text-5xl
                uppercase
                leading-[0.88]
                tracking-[-0.04em]
                md:text-7xl
                lg:text-8xl
              "
            >
              DEWAN
              <br />

              <span className="text-[#b91c1c]">
                JENDERAL
              </span>
            </h2>

            <div className="mt-8 h-px w-24 bg-[#b91c1c]" />

            <p className="mt-8 max-w-xl text-sm leading-8 text-[#b8b1a8] md:text-base">
              Menjelang G30S, muncul isu mengenai keberadaan kelompok
              perwira tinggi Angkatan Darat yang disebut sebagai Dewan
              Jenderal. Isu tersebut menjadi bagian dari ketegangan
              politik yang berkembang pada 1965.
            </p>
          </div>

          {/* =================================================
              QUESTION CARD
          ================================================== */}

          <div
            className={`
              flex h-full items-center

              transition-all
              duration-[1200ms]
              delay-150
              ease-[cubic-bezier(0.22,1,0.36,1)]

              ${
                isActive
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }
            `}
          >
            <div
              className="
                relative
                w-full
                border
                border-[#f2ede3]/10
                bg-[#0c0707]/75
                p-8
                backdrop-blur-sm
                md:p-10
              "
            >
              {/* Corner */}

              <div className="absolute left-0 top-0 h-12 w-px bg-[#b91c1c]" />

              <div className="absolute left-0 top-0 h-px w-12 bg-[#b91c1c]" />

              <p className="text-[9px] uppercase tracking-[0.35em] text-[#806a4a]">
                Pertanyaan
              </p>

              <h3
                className="
                  mt-6
                  font-display
                  text-3xl
                  uppercase
                  leading-[1.05]
                  text-[#f2ede3]
                  md:text-4xl
                "
              >
                Benarkah Dewan
                <br />
                Jenderal akan
                <br />
                melakukan kudeta?
              </h3>

              <div className="my-7 h-px w-full bg-[#f2ede3]/10" />

              <p className="text-sm leading-7 text-[#8d8881]">
                Tuduhan mengenai rencana kudeta menjadi salah satu alasan
                yang disebut dalam narasi mengenai munculnya G30S.
                Namun, keberadaan Dewan Jenderal sebagai kelompok yang
                merencanakan kudeta tidak terbukti secara sederhana dan
                menjadi bagian dari perdebatan sejarah.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b91c1c]" />

                <span className="text-[9px] uppercase tracking-[0.25em] text-[#5f5a55]">
                  A historical question
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            TIMELINE
        ==================================================== */}

        <div className="mt-28">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#806a4a]">
                Jejak waktu
              </p>

              <h3
                className="
                  mt-3
                  font-display
                  text-3xl
                  uppercase
                  tracking-[-0.02em]
                  md:text-4xl
                "
              >
                MENUJU 30 SEPTEMBER
              </h3>
            </div>

            <span className="hidden font-mono text-[10px] text-[#5c5752] md:block">
              1965 / TIMELINE
            </span>
          </div>

          {/* Timeline */}

          <div className="relative">

            <div
              className="
                absolute
                left-0
                right-0
                top-[17px]
                hidden
                h-px
                bg-[#f2ede3]/10
                md:block
              "
            />

            <div className="grid gap-10 md:grid-cols-3">

              {timeline.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-pressed={active === index}
                  className={`
                    group
                    relative
                    w-full
                    text-left
                    outline-none

                    transition-all
                    duration-[900ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]

                    ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }
                  `}
                  style={{
                    transitionDelay: isActive
                      ? `${250 + index * 150}ms`
                      : "0ms",
                  }}
                >
                  {/* Node */}

                  <div className="relative z-10 mb-7 flex items-center">
                    <span
                      className={`
                        h-[9px]
                        w-[9px]
                        rounded-full
                        border
                        transition-all
                        duration-500

                        ${
                          active === index
                            ? "scale-150 border-[#b91c1c] bg-[#b91c1c]"
                            : "border-[#806a4a] bg-[#160909]"
                        }
                      `}
                    />
                  </div>

                  <p
                    className="
                      font-mono
                      text-xs
                      tracking-[0.2em]
                      text-[#b91c1c]
                    "
                  >
                    {item.year}
                  </p>

                  <h4
                    className="
                      mt-3
                      font-display
                      text-2xl
                      uppercase
                      transition-colors
                      duration-500
                      group-hover:text-[#b91c1c]
                    "
                  >
                    {item.title}
                  </h4>

                  <p
                    className="
                      mt-4
                      max-w-sm
                      text-sm
                      leading-7
                      text-[#77716b]
                      transition-colors
                      duration-500
                      group-hover:text-[#a8a29e]
                    "
                  >
                    {item.text}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ===================================================
            ACTIVE DETAIL
        ==================================================== */}

        <div
          className="
            mt-16
            border-t
            border-[#f2ede3]/10
            pt-8
          "
        >
          <div
            className="
              grid
              gap-6
              md:grid-cols-[120px_1fr]
            "
          >
            <span
              className="
                font-mono
                text-xs
                tracking-[0.2em]
                text-[#b91c1c]
              "
            >
              0{active + 1}
            </span>

            <div>
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.35em]
                  text-[#806a4a]
                "
              >
                Fokus
              </p>

              <p
                key={active}
                className="
                  mt-3
                  max-w-3xl
                  text-sm
                  leading-8
                  text-[#a8a29e]
                  animate-fade-up
                "
              >
                {timeline[active].text}
              </p>
            </div>
          </div>
        </div>

        {/* ===================================================
            SECTION END
        ==================================================== */}

        <div
          className="
            mt-24
            flex
            items-center
            justify-between
            border-t
            border-[#f2ede3]/10
            pt-6
          "
        >
          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-[#5c5752]
            "
          >
            05 — Dewan Jenderal
          </span>

          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-[#5c5752]
            "
          >
            The Night Begins ↓
          </span>
        </div>
      </div>
    </section>
  );
}

export default DewanJenderalSection;