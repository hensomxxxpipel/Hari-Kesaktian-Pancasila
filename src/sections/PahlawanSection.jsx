import { useState } from "react";

const heroes = [
  {
    number: "01",
    name: "Jenderal Ahmad Yani",
    rank: "Menteri / Panglima Angkatan Darat",
    description:
      "Ahmad Yani merupakan Menteri/Panglima Angkatan Darat pada 1965. Ia menjadi salah satu perwira senior yang menjadi sasaran penculikan pada awal Oktober 1965.",
  },
  {
    number: "02",
    name: "Mayjen R. Soeprapto",
    rank: "Deputi II Menteri/Panglima Angkatan Darat",
    description:
      "R. Soeprapto merupakan salah satu pejabat tinggi Angkatan Darat yang menjadi korban dalam rangkaian penculikan pada awal Oktober 1965.",
  },
  {
    number: "03",
    name: "Mayjen M.T. Haryono",
    rank: "Deputi III Menteri/Panglima Angkatan Darat",
    description:
      "M.T. Haryono merupakan pejabat tinggi Angkatan Darat yang menjadi salah satu korban dalam peristiwa penculikan dan pembunuhan pada awal Oktober 1965.",
  },
  {
    number: "04",
    name: "Mayjen S. Parman",
    rank: "Asisten I Menteri/Panglima Angkatan Darat",
    description:
      "S. Parman menjabat sebagai Asisten I Menteri/Panglima Angkatan Darat bidang intelijen. Ia termasuk dalam tujuh korban yang kemudian dimakamkan di Kalibata.",
  },
  {
    number: "05",
    name: "Brigjen D.I. Panjaitan",
    rank: "Asisten IV Menteri/Panglima Angkatan Darat",
    description:
      "D.I. Panjaitan merupakan Asisten IV Menteri/Panglima Angkatan Darat bidang logistik dan menjadi salah satu korban dalam rangkaian peristiwa tersebut.",
  },
  {
    number: "06",
    name: "Brigjen Sutoyo",
    rank: "Inspektur Kehakiman / Oditur Jenderal AD",
    description:
      "Sutoyo Siswomiharjo menjabat sebagai Inspektur Kehakiman/Oditur Jenderal Angkatan Darat dan termasuk dalam tujuh korban yang ditemukan di Lubang Buaya.",
  },
  {
    number: "07",
    name: "Lettu Pierre A. Tendean",
    rank: "Ajudan Jenderal A.H. Nasution",
    description:
      "Pierre A. Tendean merupakan perwira yang menjadi ajudan Jenderal A.H. Nasution. Ia menjadi salah satu dari tujuh korban yang ditemukan di Lubang Buaya.",
  },
];

function PahlawanSection() {
  const [activeHero, setActiveHero] = useState(null);
  const [candles, setCandles] = useState([]);

  const lightCandle = () => {
    if (candles.length < heroes.length) {
      setCandles([...candles, candles.length]);
    }
  };

  return (
    <section
      id="pahlawan"
      className="relative min-h-screen overflow-hidden bg-[#111111] text-[#F2EDE3]"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#C49A5A]/10 blur-[170px]" />

        <div className="absolute right-[-10%] bottom-[-10%] h-[600px] w-[600px] rounded-full bg-[#806A4A]/10 blur-[180px]" />

        {/* Gold vertical atmosphere */}
        <div className="absolute left-[12%] top-0 h-full w-px bg-[#C49A5A]/10" />
        <div className="absolute right-[12%] top-0 h-full w-px bg-[#C49A5A]/10" />

        {/* Giant chapter number */}
        <div className="absolute right-[5%] top-[5%] font-display text-[14rem] leading-none text-[#C49A5A]/[0.035]">
          09
        </div>

        {/* Subtle grain/grid */}
        <div className="absolute inset-0 opacity-[0.025]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#C49A5A 1px, transparent 1px), linear-gradient(90deg, #C49A5A 1px, transparent 1px)",
              backgroundSize: "100px 100px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        {/* Header */}
        <div className="mb-20 max-w-4xl">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-12 bg-[#C49A5A]" />

            <span className="text-xs uppercase tracking-[0.35em] text-[#C49A5A]">
              Chapter 09 — In Memory
            </span>
          </div>

          <h2 className="font-display text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            MENGENAL
            <br />
            PARA
            <br />
            <span className="text-[#C49A5A]">PAHLAWAN REVOLUSI</span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#A8A29E] md:text-lg">
            Tujuh nama yang kemudian dikenang sebagai Pahlawan Revolusi.
            Kenali mereka bukan hanya sebagai nama dalam sebuah peristiwa,
            tetapi sebagai individu yang memiliki jabatan dan kehidupan
            masing-masing sebelum Oktober 1965.
          </p>
        </div>

        {/* Heroes */}
        <div className="grid gap-px overflow-hidden border border-[#C49A5A]/10 bg-[#C49A5A]/10 sm:grid-cols-2 lg:grid-cols-4">
          {heroes.map((hero) => (
            <button
              key={hero.number}
              onClick={() => setActiveHero(hero)}
              className="group relative min-h-[320px] overflow-hidden bg-[#111111] p-6 text-left transition-all duration-500 hover:bg-[#1A1712]"
            >
              {/* Number */}
              <div className="absolute right-5 top-4 font-mono text-xs tracking-[0.2em] text-[#C49A5A]/50">
                {hero.number}
              </div>

              {/* Portrait placeholder */}
              <div className="relative mb-8 flex h-40 items-center justify-center overflow-hidden border border-[#C49A5A]/10 bg-[#181818]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#C49A5A]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="font-display text-6xl text-[#C49A5A]/20 transition-all duration-500 group-hover:scale-110 group-hover:text-[#C49A5A]/40">
                  {hero.number}
                </span>

                <div className="absolute bottom-3 left-3 text-[9px] uppercase tracking-[0.25em] text-[#A8A29E]/40">
                  Archive Portrait
                </div>
              </div>

              <div className="mb-2 text-[10px] uppercase tracking-[0.25em] text-[#C49A5A]">
                {hero.rank}
              </div>

              <h3 className="font-display text-2xl leading-tight text-[#F2EDE3]">
                {hero.name}
              </h3>

              <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#A8A29E]/50 transition-colors group-hover:text-[#C49A5A]">
                <span>Open Record</span>
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Candle memorial */}
        <div className="relative mt-24 overflow-hidden border border-[#C49A5A]/20 bg-[#0D0D0D]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#C49A5A]/5 via-transparent to-[#C49A5A]/5" />

          <div className="relative grid gap-12 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-10 bg-[#C49A5A]" />

                <span className="text-xs uppercase tracking-[0.3em] text-[#C49A5A]">
                  A Moment of Remembrance
                </span>
              </div>

              <h3 className="font-display text-4xl md:text-5xl">
                Nyalakan Lilin
                <br />
                <span className="text-[#C49A5A]">Penghormatan</span>
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#A8A29E]">
                Setiap cahaya menjadi simbol untuk mengingat nama-nama yang
                menjadi bagian dari sejarah bangsa.
              </p>

              <button
                onClick={lightCandle}
                disabled={candles.length >= heroes.length}
                className="mt-8 border border-[#C49A5A]/40 px-6 py-3 text-xs uppercase tracking-[0.25em] text-[#C49A5A] transition-all duration-300 hover:bg-[#C49A5A] hover:text-[#111111] disabled:cursor-default disabled:opacity-40"
              >
                {candles.length >= heroes.length
                  ? "Semua Lilin Menyala"
                  : "Nyalakan Lilin"}
              </button>
            </div>

            {/* Candles */}
            <div className="flex min-h-[150px] max-w-[400px] flex-wrap items-end justify-center gap-5">
              {heroes.map((hero, index) => {
                const isLit = candles.includes(index);

                return (
                  <div
                    key={hero.number}
                    className="flex flex-col items-center gap-2"
                  >
                    <div
                      className={`relative h-20 w-6 rounded-t-sm transition-all duration-700 ${
                        isLit
                          ? "bg-[#C49A5A]/60 shadow-[0_0_35px_rgba(196,154,90,0.35)]"
                          : "bg-[#292929]"
                      }`}
                    >
                      {isLit && (
                        <div className="absolute -top-7 left-1/2 h-8 w-4 -translate-x-1/2 rounded-full bg-[#C49A5A]/80 blur-[5px] animate-pulse" />
                      )}
                    </div>

                    <span className="font-mono text-[9px] text-[#A8A29E]/40">
                      {hero.number}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Counter */}
          <div className="border-t border-[#C49A5A]/10 px-8 py-4 md:px-12">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#A8A29E]/40">
                Lights of remembrance
              </span>

              <span className="font-mono text-xs text-[#C49A5A]">
                {String(candles.length).padStart(2, "0")} / 07
              </span>
            </div>
          </div>
        </div>

        {/* Closing quote */}
        <div className="mx-auto mt-24 max-w-3xl text-center">
          <div className="mx-auto mb-8 h-px w-16 bg-[#C49A5A]" />

          <p className="font-display text-2xl italic leading-relaxed text-[#F2EDE3]/80 md:text-4xl">
            “Sejarah tidak hanya menyimpan tanggal dan peristiwa.
            <br />
            Ia juga menyimpan nama.”
          </p>

          <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-[#A8A29E]/40">
            Remember the names
          </p>
        </div>

        {/* Bottom marker */}
        <div className="mt-24 flex items-center justify-between border-t border-[#F2EDE3]/10 pt-5">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#A8A29E]/50">
            09 — Pahlawan Revolusi
          </span>

          <span className="text-[10px] uppercase tracking-[0.3em] text-[#A8A29E]/50">
            Next — Dampak
          </span>
        </div>
      </div>

      {/* Modal */}
      {activeHero && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-md"
          onClick={() => setActiveHero(null)}
        >
          <div
            className="relative w-full max-w-2xl border border-[#C49A5A]/20 bg-[#111111] p-8 shadow-2xl md:p-12"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setActiveHero(null)}
              className="absolute right-6 top-6 text-xl text-[#A8A29E] transition-colors hover:text-[#C49A5A]"
              aria-label="Close"
            >
              ×
            </button>

            <div className="mb-8 flex items-center gap-4">
              <span className="font-mono text-xs text-[#C49A5A]">
                {activeHero.number}
              </span>

              <span className="h-px w-10 bg-[#C49A5A]/40" />

              <span className="text-[10px] uppercase tracking-[0.25em] text-[#A8A29E]/60">
                Historical Record
              </span>
            </div>

            <p className="text-xs uppercase tracking-[0.25em] text-[#C49A5A]">
              {activeHero.rank}
            </p>

            <h3 className="mt-3 font-display text-4xl md:text-5xl">
              {activeHero.name}
            </h3>

            <div className="my-8 h-px bg-[#F2EDE3]/10" />

            <p className="text-base leading-8 text-[#A8A29E]">
              {activeHero.description}
            </p>

            <div className="mt-10 border-l border-[#C49A5A]/40 pl-5">
              <p className="text-xs leading-6 text-[#A8A29E]/60">
                Catatan: bagian ini menyajikan informasi biografis singkat
                sebagai konteks sejarah. Foto arsip dan sumber primer dapat
                ditambahkan pada tahap final.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default PahlawanSection;