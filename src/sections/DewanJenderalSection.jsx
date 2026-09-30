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
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("dewan-jenderal");

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="dewan-jenderal"
      className="
        relative min-h-screen overflow-hidden
        bg-[#160909]
        text-[#f2ede3]
        transition-colors duration-1000
      "
    >
      {/* =========================
          ATMOSPHERE
      ========================== */}

      <div
        className="
          pointer-events-none absolute
          left-[-200px] top-1/4
          h-[600px] w-[600px]
          rounded-full
          bg-[#7f1d1d]/10
          blur-[160px]
        "
      />

      <div
        className="
          pointer-events-none absolute
          right-[-200px] bottom-[-150px]
          h-[500px] w-[500px]
          rounded-full
          bg-[#806a4a]/5
          blur-[140px]
        "
      />

      {/* Archive lines */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute left-[8%] top-0 h-full w-px bg-white/10" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-white/5" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-white/10" />
      </div>

      {/* Giant number */}
      <div
        className="
          pointer-events-none absolute
          -left-12 top-0
          select-none
          font-display
          text-[22rem]
          leading-none
          text-white/[0.025]
        "
      >
        05
      </div>

      {/* =========================
          CONTENT
      ========================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-12">

        {/* Chapter */}
        <div
          className={`
            mb-10 flex items-center gap-4
            transition-all duration-1000
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }
          `}
        >
          <span className="h-px w-12 bg-[#b91c1c]" />

          <span className="text-[10px] uppercase tracking-[0.4em] text-[#a8a29e]">
            Chapter 05
          </span>

          <span className="text-[10px] uppercase tracking-[0.3em] text-[#806a4a]">
            The Question
          </span>
        </div>

        {/* =========================
            HEADER
        ========================== */}

        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">

          <div
            className={`
              transition-all duration-[1200ms]
              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }
            `}
          >
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#806a4a]">
              Sebuah isu yang menjadi pusat ketegangan
            </p>

            <h2 className="font-display text-5xl uppercase leading-[0.9] tracking-[-0.03em] md:text-7xl lg:text-8xl">
              DEWAN
              <br />

              <span className="text-[#b91c1c]">
                JENDERAL
              </span>
            </h2>

            <div className="mt-8 h-px w-24 bg-[#b91c1c]" />

            <p className="mt-8 max-w-xl text-sm leading-8 text-[#a8a29e] md:text-base">
              Menjelang G30S, muncul isu mengenai keberadaan kelompok
              perwira tinggi Angkatan Darat yang disebut sebagai Dewan
              Jenderal. Isu tersebut menjadi bagian dari ketegangan
              politik yang berkembang pada 1965.
            </p>
          </div>

          {/* =========================
              QUESTION CARD
          ========================== */}

          <div
            className={`
              flex items-center
              transition-all duration-[1400ms] delay-200
              ${
                visible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 opacity-0"
              }
            `}
          >
            <div className="relative w-full border border-white/10 bg-[#0d0d0d] p-8 md:p-10">

              {/* corner */}
              <div className="absolute left-0 top-0 h-12 w-px bg-[#b91c1c]" />
              <div className="absolute left-0 top-0 h-px w-12 bg-[#b91c1c]" />

              <p className="text-[9px] uppercase tracking-[0.35em] text-[#806a4a]">
                Pertanyaan
              </p>

              <h3 className="mt-6 font-display text-3xl uppercase leading-tight text-[#f2ede3] md:text-4xl">
                Benarkah Dewan
                <br />
                Jenderal akan
                <br />
                melakukan kudeta?
              </h3>

              <div className="my-7 h-px w-full bg-white/10" />

              <p className="text-sm leading-7 text-[#73706c]">
                Tuduhan mengenai rencana kudeta menjadi salah satu alasan
                yang disebut dalam narasi mengenai munculnya G30S.
                Namun, keberadaan Dewan Jenderal sebagai kelompok yang
                merencanakan kudeta tidak terbukti secara sederhana dan
                menjadi bagian dari perdebatan sejarah.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b91c1c]" />

                <span className="text-[9px] uppercase tracking-[0.25em] text-[#52504d]">
                  A historical question
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            TIMELINE
        ========================== */}

        <div className="mt-28">

          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#806a4a]">
                Jejak waktu
              </p>

              <h3 className="mt-3 font-display text-3xl uppercase md:text-4xl">
                MENUJU 30 SEPTEMBER
              </h3>
            </div>

            <span className="hidden font-mono text-[10px] text-[#52504d] md:block">
              1965 / TIMELINE
            </span>
          </div>

          {/* Timeline line */}
          <div className="relative">

            <div className="absolute left-0 right-0 top-[17px] hidden h-px bg-white/10 md:block" />

            <div className="grid gap-10 md:grid-cols-3">
              {timeline.map((item, index) => (
                <button
                  key={item.title}
                  onClick={() => setActive(index)}
                  className={`
                    group relative text-left
                    transition-all duration-700
                    ${
                      visible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }
                  `}
                  style={{
                    transitionDelay: `${500 + index * 180}ms`,
                  }}
                >
                  {/* node */}
                  <div className="relative z-10 mb-7 flex items-center">
                    <span
                      className={`
                        h-[9px] w-[9px] rounded-full
                        border
                        transition-all duration-500
                        ${
                          active === index
                            ? "scale-150 border-[#b91c1c] bg-[#b91c1c]"
                            : "border-[#806a4a] bg-[#160909]"
                        }
                      `}
                    />
                  </div>

                  <p className="font-mono text-xs tracking-[0.2em] text-[#b91c1c]">
                    {item.year}
                  </p>

                  <h4
                    className="
                      mt-3
                      font-display
                      text-2xl
                      uppercase
                      transition-colors duration-500
                      group-hover:text-[#b91c1c]
                    "
                  >
                    {item.title}
                  </h4>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-[#73706c]">
                    {item.text}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* =========================
            ACTIVE DETAIL
        ========================== */}

        <div
          className="
            mt-16
            border-t border-white/10
            pt-8
          "
        >
          <div
            className="
              grid gap-6
              md:grid-cols-[120px_1fr]
            "
          >
            <span className="font-mono text-xs tracking-[0.2em] text-[#7f1d1d]">
              0{active + 1}
            </span>

            <div>
              <p className="text-[9px] uppercase tracking-[0.35em] text-[#806a4a]">
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

        {/* =========================
            TRANSITION
        ========================== */}

        <div className="mt-24 flex items-center justify-between border-t border-white/10 pt-6">

          <span className="text-[9px] uppercase tracking-[0.3em] text-[#52504d]">
            05 — Dewan Jenderal
          </span>

          <span className="text-[9px] uppercase tracking-[0.3em] text-[#52504d]">
            The Night Begins ↓
          </span>

        </div>
      </div>
    </section>
  );
}

export default DewanJenderalSection;