import { useEffect, useState } from "react";

const figures = [
  {
    number: "01",
    role: "MILITER",
    name: "Letkol Untung",
    description:
      "Komandan Batalyon I Resimen Tjakrabirawa yang memimpin gerakan yang menyebut dirinya Gerakan 30 September.",
    accent: "military",
  },
  {
    number: "02",
    role: "POLITIK",
    name: "D.N. Aidit",
    description:
      "Ketua CC PKI pada 1965. Namanya kemudian dikaitkan dengan G30S dalam berbagai kesaksian dan kajian sejarah.",
    accent: "political",
  },
  {
    number: "03",
    role: "BIRO KHUSUS",
    name: "Sjam Kamaruzaman",
    description:
      "Tokoh Biro Chusus PKI yang disebut dalam berbagai sumber sebagai salah satu tokoh yang terkait dengan persiapan gerakan.",
    accent: "political",
  },
  {
    number: "04",
    role: "MILITER",
    name: "Kolonel Abdul Latief",
    description:
      "Perwira militer yang disebut memiliki hubungan dengan persiapan gerakan dan terlibat dalam rangkaian peristiwa G30S.",
    accent: "military",
  },
];

function TokohSection() {
  const [activeFigure, setActiveFigure] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("tokoh");

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="tokoh"
      className={`
        relative min-h-screen overflow-hidden
        bg-[#080808] text-[#f2ede3]
        transition-colors duration-1000
        ${visible ? "bg-[#160909]" : "bg-[#080808]"}
      `}
    >
      {/* Atmospheric red glow */}
      <div
        className="
          pointer-events-none absolute
          -right-40 top-20
          h-[500px] w-[500px]
          rounded-full
          bg-[#7f1d1d]/10
          blur-[140px]
          transition-all duration-[1800ms]
        "
      />

      <div
        className="
          pointer-events-none absolute
          bottom-[-200px] left-[-150px]
          h-[450px] w-[450px]
          rounded-full
          bg-[#b91c1c]/5
          blur-[120px]
        "
      />

      {/* Vertical archive lines */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute left-[8%] top-0 h-full w-px bg-[#f2ede3]/10" />
        <div className="absolute left-[50%] top-0 h-full w-px bg-[#f2ede3]/5" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-[#f2ede3]/10" />
      </div>

      {/* Giant chapter number */}
      <div
        className="
          pointer-events-none absolute
          -right-8 top-10
          select-none
          font-display
          text-[22rem]
          leading-none
          text-white/[0.025]
        "
      >
        04
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-12">
        {/* Chapter label */}
        <div
          className={`
            mb-8 flex items-center gap-4
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
            Chapter 04
          </span>

          <span className="text-[10px] uppercase tracking-[0.3em] text-[#7f1d1d]">
            The Figures
          </span>
        </div>

        {/* Heading */}
        <div
          className={`
            max-w-4xl
            transition-all duration-[1200ms] delay-100
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }
          `}
        >
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#806a4a]">
            Siapa saja yang berada di balik gerakan?
          </p>

          <h2 className="font-display text-5xl font-medium uppercase leading-[0.9] tracking-[-0.03em] md:text-7xl lg:text-8xl">
            TOKOH
            <br />

            <span className="text-[#b91c1c]">DI BALIK</span>
            <br />

            GERAKAN
          </h2>

          <div className="mt-8 h-px w-24 bg-[#b91c1c]" />

          <p className="mt-8 max-w-2xl text-sm leading-7 text-[#a8a29e] md:text-base">
            Gerakan 30 September melibatkan sejumlah tokoh dari lingkungan
            militer dan politik. Bagian ini memperkenalkan beberapa nama yang
            sering muncul dalam pembahasan mengenai peristiwa tersebut.
          </p>
        </div>

        {/* Figures */}
        <div className="mt-20 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
          {figures.map((figure, index) => (
            <button
              key={figure.name}
              onClick={() => setActiveFigure(figure)}
              className={`
                group relative overflow-hidden
                min-h-[270px]
                bg-[#111111]
                p-7 text-left
                transition-all duration-700
                hover:bg-[#1a0b0b]
                md:p-9
                ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }
              `}
              style={{
                transitionDelay: `${300 + index * 120}ms`,
              }}
            >
              {/* Hover red sweep */}
              <div
                className="
                  absolute inset-x-0 bottom-0 h-1
                  origin-left scale-x-0
                  bg-[#b91c1c]
                  transition-transform duration-700
                  group-hover:scale-x-100
                "
              />

              <div className="flex items-start justify-between">
                <span className="font-mono text-xs tracking-[0.2em] text-[#7f1d1d]">
                  {figure.number}
                </span>

                <span className="border border-white/10 px-3 py-1 text-[9px] uppercase tracking-[0.25em] text-[#806a4a]">
                  {figure.role}
                </span>
              </div>

              <div className="mt-16">
                <h3 className="font-display text-3xl uppercase tracking-tight text-[#f2ede3] transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                  {figure.name}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-6 text-[#73706c]">
                  {figure.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-8 right-8 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#a8a29e] transition-all duration-500 group-hover:border-[#b91c1c] group-hover:text-[#b91c1c]">
                →
              </div>
            </button>
          ))}
        </div>

        {/* Historical note */}
        <div
          className={`
            mt-16 flex flex-col gap-6 border-l border-[#7f1d1d]
            pl-6 transition-all duration-1000 delay-[800ms]
            md:flex-row md:items-start md:justify-between
            ${
              visible
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }
          `}
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#806a4a]">
              Catatan sejarah
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#a8a29e]">
              Hubungan antar-tokoh dan tingkat keterlibatan masing-masing
              menjadi bagian dari perdebatan historiografi mengenai G30S.
              Karena itu, setiap nama perlu dibaca bersama sumber dan konteks
              keterangannya.
            </p>
          </div>

          <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.3em] text-[#52504d]">
            1965 / Jakarta
          </span>
        </div>

        {/* Bottom transition */}
        <div className="mt-24 flex items-center justify-between border-t border-white/10 pt-6">
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#52504d]">
            04 — Tokoh
          </span>

          <span className="text-[9px] uppercase tracking-[0.3em] text-[#52504d]">
            Continue ↓
          </span>
        </div>
      </div>

      {/* Modal */}
      {activeFigure && (
        <div
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/80 px-6
            backdrop-blur-md
          "
          onClick={() => setActiveFigure(null)}
        >
          <div
            className="
              relative w-full max-w-2xl
              border border-white/10
              bg-[#111111]
              p-8 shadow-2xl
              md:p-12
              animate-fade-up
            "
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setActiveFigure(null)}
              className="
                absolute right-6 top-6
                text-xl text-[#73706c]
                transition-colors
                hover:text-[#b91c1c]
              "
              aria-label="Tutup"
            >
              ×
            </button>

            <p className="text-[10px] uppercase tracking-[0.35em] text-[#7f1d1d]">
              {activeFigure.role}
            </p>

            <h3 className="mt-5 font-display text-4xl uppercase text-[#f2ede3] md:text-5xl">
              {activeFigure.name}
            </h3>

            <div className="my-7 h-px w-20 bg-[#b91c1c]" />

            <p className="text-sm leading-8 text-[#a8a29e] md:text-base">
              {activeFigure.description}
            </p>

            <p className="mt-8 border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.25em] text-[#52504d]">
              Klik di luar panel untuk menutup
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default TokohSection;