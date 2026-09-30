import { useState } from "react";

const timeline = [
  {
    date: "03 OKTOBER",
    year: "1965",
    title: "Penemuan",
    subtitle: "Lokasi para korban ditemukan",
    description:
      "Setelah pencarian dilakukan sejak 1 Oktober, lokasi tujuh korban ditemukan di sebuah sumur tua di kawasan Lubang Buaya. Proses pengangkatan mulai dilakukan pada hari ini, tetapi belum seluruhnya berhasil karena kondisi sumur dan keterbatasan alat.",
    number: "01",
  },
  {
    date: "04 OKTOBER",
    year: "1965",
    title: "Evakuasi",
    subtitle: "Tujuh jenazah berhasil diangkat",
    description:
      "Proses pengangkatan dilanjutkan hingga seluruh jenazah berhasil dievakuasi dari sumur. Pada malam hari, ketujuh jenazah kemudian ditempatkan di Aula Departemen Angkatan Darat di Jalan Merdeka Utara.",
    number: "02",
  },
  {
    date: "05 OKTOBER",
    year: "1965",
    title: "Pemakaman",
    subtitle: "Pemakaman di Kalibata",
    description:
      "Sehari setelah evakuasi selesai, ketujuh korban dimakamkan di Taman Makam Pahlawan Kalibata. Pemakaman berlangsung bertepatan dengan Hari Ulang Tahun ke-20 Angkatan Bersenjata Republik Indonesia.",
    number: "03",
  },
];

const victims = [
  "Jenderal Ahmad Yani",
  "Mayjen R. Soeprapto",
  "Mayjen M.T. Haryono",
  "Mayjen S. Parman",
  "Brigjen D.I. Panjaitan",
  "Brigjen Sutoyo",
  "Lettu Pierre A. Tendean",
];

function KorbanSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="korban"
      className="relative min-h-screen overflow-hidden bg-[#181818] text-[#F2EDE3]"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#806A4A]/10 blur-[150px]" />
        <div className="absolute right-[-10%] bottom-[10%] h-[500px] w-[500px] rounded-full bg-[#292929]/70 blur-[150px]" />

        <div className="absolute inset-0 opacity-[0.035]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#F2EDE3 1px, transparent 1px), linear-gradient(90deg, #F2EDE3 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="absolute left-[8%] top-0 h-full w-px bg-[#F2EDE3]/5" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-[#F2EDE3]/5" />

        <div className="absolute right-[7%] top-[8%] font-display text-[14rem] leading-none text-[#F2EDE3]/[0.025]">
          08
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        {/* Header */}
        <div className="mb-20 max-w-4xl">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-12 bg-[#C49A5A]" />

            <span className="text-xs font-medium uppercase tracking-[0.35em] text-[#C49A5A]">
              Chapter 08 — The Aftermath
            </span>
          </div>

          <h2 className="font-display text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            PENEMUAN
            <br />
            <span className="text-[#C49A5A]">DAN</span>
            <br />
            PEMAKAMAN
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#A8A29E] md:text-lg">
            Tiga hari setelah pencarian dimulai, rangkaian penemuan,
            pengangkatan, dan pemakaman tujuh korban menjadi salah satu bagian
            penting dari ingatan sejarah Indonesia pada Oktober 1965.
          </p>
        </div>

        {/* Main timeline */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Timeline navigation */}
          <div className="relative">
            <div className="absolute left-[7px] top-4 bottom-4 w-px bg-[#F2EDE3]/10" />

            <div className="space-y-3">
              {timeline.map((item, index) => {
                const isActive = active === index;

                return (
                  <button
                    key={item.number}
                    onClick={() => setActive(index)}
                    className={`group relative flex w-full items-start gap-6 border text-left transition-all duration-500 ${
                      isActive
                        ? "border-[#C49A5A]/40 bg-[#C49A5A]/5"
                        : "border-transparent hover:border-[#F2EDE3]/10"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="relative z-10 mt-6 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#C49A5A]/50 bg-[#181818]">
                      <div
                        className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                          isActive ? "bg-[#C49A5A]" : "bg-[#A8A29E]/30"
                        }`}
                      />
                    </div>

                    <div className="py-5 pr-5">
                      <div className="mb-2 flex items-center gap-3">
                        <span className="text-xs tracking-[0.2em] text-[#C49A5A]">
                          {item.date}
                        </span>

                        <span className="text-[10px] tracking-[0.15em] text-[#A8A29E]/50">
                          {item.year}
                        </span>
                      </div>

                      <h3
                        className={`font-display text-2xl transition-colors duration-300 md:text-3xl ${
                          isActive
                            ? "text-[#F2EDE3]"
                            : "text-[#A8A29E]/60 group-hover:text-[#F2EDE3]"
                        }`}
                      >
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm text-[#A8A29E]/70">
                        {item.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active detail */}
          <div className="relative min-h-[500px] overflow-hidden border border-[#F2EDE3]/10 bg-[#111111]">
            {/* Archival number */}
            <div className="absolute right-6 top-2 font-display text-[10rem] leading-none text-[#F2EDE3]/[0.025]">
              {timeline[active].number}
            </div>

            <div className="relative flex h-full flex-col justify-between p-8 md:p-12">
              <div>
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#A8A29E]">
                    Historical Record
                  </span>

                  <span className="text-xs tracking-[0.2em] text-[#C49A5A]">
                    {timeline[active].date} / {timeline[active].year}
                  </span>
                </div>

                <div className="mb-8 h-px w-full bg-[#F2EDE3]/10" />

                <h3 className="font-display text-4xl md:text-6xl">
                  {timeline[active].title}
                </h3>

                <p className="mt-6 max-w-xl text-base leading-8 text-[#A8A29E]">
                  {timeline[active].description}
                </p>
              </div>

              {/* Seven victims */}
              <div className="mt-16">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#C49A5A]" />
                  <span className="text-xs uppercase tracking-[0.25em] text-[#C49A5A]">
                    Tujuh Korban
                  </span>
                </div>

                <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {victims.map((victim, index) => (
                    <div
                      key={victim}
                      className="flex items-center gap-3 border-b border-[#F2EDE3]/5 pb-3"
                    >
                      <span className="font-mono text-[10px] text-[#C49A5A]/70">
                        0{index + 1}
                      </span>

                      <span className="text-sm text-[#A8A29E]">
                        {victim}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reflection */}
        <div className="mt-24 grid gap-8 border-t border-[#F2EDE3]/10 pt-10 md:grid-cols-3">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#A8A29E]/50">
              03 Oktober
            </span>

            <p className="mt-3 text-sm leading-7 text-[#A8A29E]">
              Lokasi dan korban ditemukan di sebuah sumur tua di Lubang Buaya.
            </p>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#A8A29E]/50">
              04 Oktober
            </span>

            <p className="mt-3 text-sm leading-7 text-[#A8A29E]">
              Seluruh jenazah berhasil dievakuasi dari sumur.
            </p>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#A8A29E]/50">
              05 Oktober
            </span>

            <p className="mt-3 text-sm leading-7 text-[#A8A29E]">
              Ketujuh korban dimakamkan di Taman Makam Pahlawan Kalibata.
            </p>
          </div>
        </div>

        {/* Bottom marker */}
        <div className="mt-20 flex items-center justify-between border-t border-[#F2EDE3]/10 pt-5">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#A8A29E]/50">
            08 — Korban
          </span>

          <span className="text-[10px] uppercase tracking-[0.3em] text-[#A8A29E]/50">
            Next — Para Pahlawan Revolusi
          </span>
        </div>
      </div>
    </section>
  );
}

export default KorbanSection;