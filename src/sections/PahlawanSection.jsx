import { useEffect, useRef, useState } from "react";

const heroes = [
  {
    number: "01",
    name: "Jenderal Ahmad Yani",
    rank: "Menteri / Panglima Angkatan Darat",
    description:
      "Ahmad Yani merupakan Menteri/Panglima Angkatan Darat pada 1965. Ia menjadi salah satu perwira senior yang menjadi sasaran penculikan pada awal Oktober 1965.",
    image: "/assets/ahmad-yani.jpeg",
  },
  {
    number: "02",
    name: "Mayjen R. Soeprapto",
    rank: "Deputi II Menteri/Panglima Angkatan Darat",
    description:
      "R. Soeprapto merupakan salah satu pejabat tinggi Angkatan Darat yang menjadi korban dalam rangkaian penculikan pada awal Oktober 1965.",
    image: "/assets/mayjen-r-soeprapto.jpeg",
  },
  {
    number: "03",
    name: "Mayjen M.T. Haryono",
    rank: "Deputi III Menteri/Panglima Angkatan Darat",
    description:
      "M.T. Haryono merupakan pejabat tinggi Angkatan Darat yang menjadi salah satu korban dalam peristiwa penculikan dan pembunuhan pada awal Oktober 1965.",
    image: "/assets/mayjen-mt-haryono.jpeg",
  },
  {
    number: "04",
    name: "Mayjen S. Parman",
    rank: "Asisten I Menteri/Panglima Angkatan Darat",
    description:
      "S. Parman menjabat sebagai Asisten I Menteri/Panglima Angkatan Darat bidang intelijen. Ia termasuk dalam tujuh korban yang kemudian dimakamkan di Kalibata.",
    image: "/assets/mayjen-s-parman.jpeg",
  },
  {
    number: "05",
    name: "Brigjen D.I. Panjaitan",
    rank: "Asisten IV Menteri/Panglima Angkatan Darat",
    description:
      "D.I. Panjaitan merupakan Asisten IV Menteri/Panglima Angkatan Darat bidang logistik dan menjadi salah satu korban dalam rangkaian peristiwa tersebut.",
    image: "/assets/brigjen-di-panjaitan.jpeg",
  },
  {
    number: "06",
    name: "Brigjen Sutoyo",
    rank: "Inspektur Kehakiman / Oditur Jenderal AD",
    description:
      "Sutoyo Siswomiharjo menjabat sebagai Inspektur Kehakiman/Oditur Jenderal Angkatan Darat dan termasuk dalam tujuh korban yang ditemukan di Lubang Buaya.",
    image: "/assets/brigjen-sutoyo.jpeg",
  },
  {
    number: "07",
    name: "Lettu Pierre A. Tendean",
    rank: "Ajudan Jenderal A.H. Nasution",
    description:
      "Pierre A. Tendean merupakan perwira yang menjadi ajudan Jenderal A.H. Nasution. Ia menjadi salah satu dari tujuh korban yang ditemukan di Lubang Buaya.",
    image: "/assets/lettu-pierre-tendean.jpeg",
  },
  {
    number: "08",
    name: "Brigjen Katamso",
    rank: "Komandan Korem 072/Pamungkas",
    description:
      "Katamso merupakan perwira Angkatan Darat yang menjadi korban dalam rangkaian peristiwa 1965 di Yogyakarta.",
    image: "/assets/brigjen-katamso.jpeg",
  },
  {
    number: "09",
    name: "Kolonel Sugiyono",
    rank: "Kepala Staf Korem 072/Pamungkas",
    description:
      "Sugiyono merupakan perwira Angkatan Darat yang menjadi korban dalam rangkaian peristiwa 1965 di Yogyakarta.",
    image: "/assets/kolonel-sugiyono.jpeg",
  },
  {
    number: "10",
    name: "Brigpol Karel Satsuit Tubun",
    rank: "Anggota Brimob / Pengawal Kediaman J. Leimena",
    description:
      "Karel Satsuit Tubun merupakan anggota Brimob yang menjadi korban dalam rangkaian peristiwa 1965 ketika menjalankan tugas pengamanan.",
    image: "/assets/brigpol-karel-satsuit-tubun.jpeg",
  },
];

/* =========================================================
   SVG LILIN
========================================================= */

function CandleSVG({ lit = false, small = false }) {
  const flameId = `flame-${small ? "small" : "large"}-${lit}`;
  const waxId = `wax-${small ? "small" : "large"}-${lit}`;
  const glowId = `glow-${small ? "small" : "large"}-${lit}`;

  return (
    <svg
      viewBox="0 0 100 150"
      className={`transition-all duration-700 ${
        small ? "h-24 w-16" : "h-32 w-24"
      }`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={flameId}
          x1="0"
          y1="1"
          x2="0"
          y2="0"
        >
          <stop offset="0%" stopColor="#C49A5A" />
          <stop offset="55%" stopColor="#E6C27A" />
          <stop offset="100%" stopColor="#FFF1C4" />
        </linearGradient>

        <linearGradient
          id={waxId}
          x1="0"
          y1="0"
          x2="1"
          y2="0"
        >
          <stop
            offset="0%"
            stopColor={lit ? "#8E6A38" : "#151515"}
          />

          <stop
            offset="50%"
            stopColor={lit ? "#D2AA64" : "#252525"}
          />

          <stop
            offset="100%"
            stopColor={lit ? "#8E6A38" : "#111111"}
          />
        </linearGradient>

        <filter
          id={glowId}
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feGaussianBlur
            stdDeviation="6"
            result="blur"
          />

          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {lit && (
        <g
          filter={`url(#${glowId})`}
          className="animate-candle-flame"
        >
          <path
            d="
              M50 7
              C42 19 37 27 40 38
              C42 45 47 48 50 48
              C57 48 62 43 62 35
              C62 26 56 17 50 7Z
            "
            fill={`url(#${flameId})`}
          />

          <path
            d="
              M50 21
              C47 28 45 32 47 37
              C48 40 50 42 52 42
              C55 40 56 36 55 32
              C54 28 52 24 50 21Z
            "
            fill="#FFF7D6"
            opacity="0.9"
          />
        </g>
      )}

      <rect
        x="48"
        y="45"
        width="4"
        height="12"
        rx="2"
        fill={lit ? "#2A2115" : "#555555"}
      />

      <path
        d="
          M29 56
          C29 53 32 51 35 51
          H65
          C68 51 71 53 71 56
          V120
          C71 124 68 127 64 127
          H36
          C32 127 29 124 29 120Z
        "
        fill={`url(#${waxId})`}
        stroke={lit ? "#C49A5A" : "#3A3A3A"}
        strokeWidth="1"
      />

      <ellipse
        cx="50"
        cy="56"
        rx="21"
        ry="5"
        fill={lit ? "#D6B574" : "#2D2D2D"}
        opacity={lit ? "0.8" : "1"}
      />

      <path
        d="
          M63 56
          C64 65 60 69 63 76
          C65 81 64 86 63 91
        "
        fill="none"
        stroke={lit ? "#E2C485" : "#3A3A3A"}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />

      <ellipse
        cx="50"
        cy="127"
        rx="25"
        ry="5"
        fill={lit ? "#C49A5A" : "#292929"}
        opacity="0.7"
      />
    </svg>
  );
}

/* =========================================================
   HERO CARD
========================================================= */

function HeroCard({
  hero,
  isLit,
  onLight,
  onOpen,
}) {
  return (
    <article
      className={`group relative min-h-[500px] overflow-hidden border transition-all duration-700 sm:min-h-[470px] ${
        isLit
          ? "border-[#C49A5A]/40 bg-[#211A11] shadow-[inset_0_0_80px_rgba(196,154,90,0.08)]"
          : "border-[#C49A5A]/10 bg-[#0B0B0B]"
      }`}
    >
      {/* Dark veil */}
      <div
        className={`pointer-events-none absolute inset-0 z-20 bg-black transition-opacity duration-700 ${
          isLit ? "opacity-10" : "opacity-45"
        }`}
      />

      {/* Gold illumination */}
      <div
        className={`pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_30%,rgba(196,154,90,0.20),transparent_55%)] transition-opacity duration-1000 ${
          isLit ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="relative z-30 flex h-full flex-col p-5 sm:p-6">
        {/* Number */}
        <div className="mb-3 flex h-5 items-center justify-end">
          <div
            className={`font-mono text-xs tracking-[0.2em] transition-colors duration-700 ${
              isLit
                ? "text-[#C49A5A]"
                : "text-[#C49A5A]/30"
            }`}
          >
            {hero.number}
          </div>
        </div>

        {/* Portrait */}
        <div
          className={`relative mx-auto mb-5 flex h-44 w-[94%] items-start justify-center overflow-hidden transition-all duration-700 sm:h-40 sm:w-[86%] ${
            isLit
              ? "bg-[#211A11]"
              : "bg-[#0B0B0B]"
          }`}
        >
          {hero.image ? (
            <img
              src={hero.image}
              alt={hero.name}
              className={`absolute inset-0 h-full w-full object-contain object-top transition-all duration-1000 ${
                isLit
                  ? "scale-100 opacity-90 grayscale-[0.15]"
                  : "scale-[1.01] opacity-25 grayscale"
              }`}
            />
          ) : (
            <div
              className={`font-display text-8xl transition-all duration-700 ${
                isLit
                  ? "scale-100 text-[#C49A5A]/40"
                  : "scale-90 text-[#C49A5A]/10"
              }`}
            >
              {hero.number}
            </div>
          )}

          {/* Image darkness */}
          <div
            className={`absolute inset-0 transition-all duration-700 ${
              isLit
                ? "bg-gradient-to-t from-[#0B0906]/70 via-transparent to-transparent"
                : "bg-black/65"
            }`}
          />

          {/* Archive label */}
          <div
            className={`absolute bottom-3 left-3 text-[9px] uppercase tracking-[0.25em] transition-colors duration-700 ${
              isLit
                ? "text-[#C49A5A]/80"
                : "text-[#A8A29E]/30"
            }`}
          >
            Archive Portrait
          </div>

          {/* Candle */}
          <button
            type="button"
            onClick={onLight}
            aria-label={
              isLit
                ? `Lilin ${hero.name} sudah menyala`
                : `Nyalakan lilin ${hero.name}`
            }
            className={`absolute bottom-0 right-0 z-40 flex h-32 w-24 items-end justify-center rounded-full transition-all duration-500 focus:outline-none focus:ring-1 focus:ring-[#C49A5A]/60 ${
              isLit
                ? "bg-[#C49A5A]/10 shadow-[0_0_45px_rgba(196,154,90,0.16)]"
                : "hover:bg-[#C49A5A]/5"
            }`}
          >
            <CandleSVG lit={isLit} />
          </button>
        </div>

        {/* Rank */}
        <div
          className={`mb-2 text-[10px] uppercase tracking-[0.25em] transition-colors duration-700 ${
            isLit
              ? "text-[#C49A5A]"
              : "text-[#C49A5A]/50"
          }`}
        >
          {hero.rank}
        </div>

        {/* Name */}
        <h3
          className={`font-display text-2xl leading-tight transition-all duration-700 ${
            isLit
              ? "text-[#F2EDE3]"
              : "text-[#F2EDE3]/55"
          }`}
        >
          {hero.name}
        </h3>

        {/* Description */}
        <p
          className={`mt-4 text-sm leading-7 transition-colors duration-700 ${
            isLit
              ? "text-[#A8A29E]"
              : "text-[#A8A29E]/60"
          }`}
        >
          {hero.description}
        </p>

        {/* Divider */}
        <div
          className={`mt-5 h-px transition-all duration-700 ${
            isLit
              ? "bg-[#C49A5A]/30"
              : "bg-[#F2EDE3]/5"
          }`}
        />

        {/* Actions */}
        <div className="mt-auto flex items-center justify-between pt-5">
          <button
            type="button"
            onClick={onOpen}
            className={`text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
              isLit
                ? "text-[#A8A29E] hover:text-[#C49A5A]"
                : "text-[#A8A29E]/35 hover:text-[#C49A5A]"
            }`}
          >
            Open Record
          </button>

          <button
            type="button"
            onClick={onLight}
            className={`text-[9px] uppercase tracking-[0.18em] transition-all duration-500 ${
              isLit
                ? "text-[#C49A5A]"
                : "text-[#A8A29E]/30 group-hover:text-[#C49A5A]/70"
            }`}
          >
            {isLit ? "Lit" : "Light Candle"}
          </button>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

function PahlawanSection() {
  const [activeHero, setActiveHero] = useState(null);

  const [litCandles, setLitCandles] = useState(
    new Set()
  );

  const sectionRef = useRef(null);

  const [sectionVisible, setSectionVisible] =
    useState(true);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setSectionVisible(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const toggleCandle = (index) => {
    setLitCandles((previous) => {
      const next = new Set(previous);

      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }

      return next;
    });
  };

  const litCount = litCandles.size;

  return (
    <section
      ref={sectionRef}
      id="pahlawan"
      className="relative min-h-screen overflow-hidden bg-[#090909] text-[#F2EDE3]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(8,8,8,0.84), rgba(8,8,8,0.94)), url('/assets/bg-pahlawan.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* ATMOSPHERE */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute left-[15%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#C49A5A]/8 blur-[170px]" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-[#806A4A]/10 blur-[180px]" />

        <div className="absolute left-[12%] top-0 h-full w-px bg-[#C49A5A]/10" />

        <div className="absolute right-[12%] top-0 h-full w-px bg-[#C49A5A]/10" />

        <div className="absolute right-[5%] top-[5%] font-display text-[14rem] leading-none text-[#C49A5A]/[0.035]">
          09
        </div>

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

      {/* CONTENT */}
      <div
        className={`relative z-10 mx-auto max-w-7xl px-5 py-20 transition-all duration-1000 ease-out sm:px-6 sm:py-24 lg:px-10 lg:py-32 ${
          sectionVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        {/* HEADER */}
        <div className="mb-16 max-w-4xl sm:mb-20">
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
            <span className="text-[#C49A5A]">
              PAHLAWAN REVOLUSI
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#A8A29E] md:text-lg">
            Sepuluh nama yang dikenang sebagai Pahlawan
            Revolusi. Kenali mereka bukan hanya sebagai
            nama dalam sebuah peristiwa, tetapi sebagai
            individu yang memiliki jabatan dan kehidupan
            masing-masing sebelum Oktober 1965.
          </p>
        </div>

        {/* HERO CARDS */}
        <div className="grid gap-px overflow-hidden border border-[#C49A5A]/10 bg-[#C49A5A]/10 sm:grid-cols-2 lg:grid-cols-4">
          {heroes.map((hero, index) => (
            <HeroCard
              key={hero.number}
              hero={hero}
              isLit={litCandles.has(index)}
              onLight={() => toggleCandle(index)}
              onOpen={() => setActiveHero(hero)}
            />
          ))}
        </div>

        {/* MEMORIAL */}
        <div className="relative mt-20 overflow-hidden border border-[#C49A5A]/20 bg-[#0B0B0B]/95 sm:mt-24">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#C49A5A]/5 via-transparent to-[#C49A5A]/5" />

          <div className="relative p-6 sm:p-8 md:p-12">
            {/* Header */}
            <div className="mb-10 flex flex-col justify-between gap-8 md:mb-12 md:flex-row md:items-end">
              <div>
                <div className="mb-5 flex items-center gap-4">
                  <span className="h-px w-10 bg-[#C49A5A]" />

                  <span className="text-xs uppercase tracking-[0.3em] text-[#C49A5A]">
                    A Moment of Remembrance
                  </span>
                </div>

                <h3 className="font-display text-4xl md:text-5xl">
                  Sepuluh Lilin
                  <br />
                  <span className="text-[#C49A5A]">
                    Sepuluh Nama
                  </span>
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-7 text-[#A8A29E]">
                  Setiap cahaya merepresentasikan satu nama.
                  Nyalakan lilin pada setiap card untuk
                  memberikan penghormatan.
                </p>
              </div>

              {/* Counter */}
              <div className="shrink-0 border border-[#C49A5A]/20 px-6 py-4 text-right">
                <div className="text-[9px] uppercase tracking-[0.25em] text-[#A8A29E]/40">
                  Lights of remembrance
                </div>

                <div className="mt-1 font-mono text-2xl text-[#C49A5A]">
                  {String(litCount).padStart(2, "0")}

                  <span className="text-[#A8A29E]/30">
                    {" "}
                    / 10
                  </span>
                </div>
              </div>
            </div>

            {/* FINAL CANDLES */}
            <div className="border-t border-[#C49A5A]/10 pt-10 sm:pt-12">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-5 sm:gap-5">
                {heroes.map((hero, index) => {
                  const isLit = litCandles.has(index);

                  return (
                    <button
                      key={hero.number}
                      type="button"
                      onClick={() => toggleCandle(index)}
                      className={`group flex flex-col items-center border p-3 transition-all duration-700 ${
                        isLit
                          ? "border-[#C49A5A]/30 bg-[#C49A5A]/5"
                          : "border-transparent bg-transparent"
                      }`}
                      aria-label={
                        isLit
                          ? `Matikan lilin ${hero.name}`
                          : `Nyalakan lilin ${hero.name}`
                      }
                    >
                      <div
                        className={`relative flex h-32 w-full items-end justify-center transition-all duration-700 ${
                          isLit
                            ? "drop-shadow-[0_0_18px_rgba(196,154,90,0.30)]"
                            : "opacity-50"
                        }`}
                      >
                        <CandleSVG
                          lit={isLit}
                          small
                        />
                      </div>

                      <span
                        className={`mt-2 font-mono text-[9px] transition-colors duration-500 ${
                          isLit
                            ? "text-[#C49A5A]"
                            : "text-[#A8A29E]/30"
                        }`}
                      >
                        {hero.number}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom memorial status */}
          <div className="border-t border-[#C49A5A]/10 px-6 py-4 sm:px-8 md:px-12">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#A8A29E]/40">
                Remember the names
              </span>

              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C49A5A]/70">
                {litCount === 10
                  ? "All ten candles are lit"
                  : `${litCount} of 10 candles are lit`}
              </span>
            </div>
          </div>
        </div>

        {/* CLOSING QUOTE */}
        <div className="mx-auto mt-20 max-w-3xl text-center sm:mt-24">
          <div className="mx-auto mb-8 h-px w-16 bg-[#C49A5A]" />

          <p className="font-display text-2xl italic leading-relaxed text-[#F2EDE3]/80 md:text-4xl">
            “Sejarah tidak hanya menyimpan tanggal dan
            peristiwa.
            <br />
            Ia juga menyimpan nama.”
          </p>

          <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-[#A8A29E]/40">
            Remember the names
          </p>
        </div>

        {/* BOTTOM MARKER */}
        <div className="mt-20 flex items-center justify-between border-t border-[#F2EDE3]/10 pt-5 sm:mt-24">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#A8A29E]/50">
            09 — Pahlawan Revolusi
          </span>

          <span className="text-right text-[10px] uppercase tracking-[0.3em] text-[#A8A29E]/50">
            Next — Dampak
          </span>
        </div>
      </div>

      {/* MODAL */}
      {activeHero && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-5 backdrop-blur-md sm:p-6"
          onClick={() => setActiveHero(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-[#C49A5A]/20 bg-[#111111] p-6 shadow-2xl sm:p-8 md:p-12"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setActiveHero(null)}
              className="absolute right-5 top-5 text-xl text-[#A8A29E] transition-colors hover:text-[#C49A5A] sm:right-6 sm:top-6"
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

            {/* Candle status */}
            <div className="mt-10 flex items-center gap-5 border-l border-[#C49A5A]/40 pl-5">
              <CandleSVG
                lit={litCandles.has(
                  heroes.findIndex(
                    (hero) =>
                      hero.number ===
                      activeHero.number
                  )
                )}
                small
              />

              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#C49A5A]">
                  Memorial Light
                </p>

                <p className="mt-2 text-xs leading-6 text-[#A8A29E]/60">
                  {litCandles.has(
                    heroes.findIndex(
                      (hero) =>
                        hero.number ===
                        activeHero.number
                    )
                  )
                    ? "Lilin penghormatan untuk nama ini telah dinyalakan."
                    : "Lilin penghormatan untuk nama ini belum dinyalakan."}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    toggleCandle(
                      heroes.findIndex(
                        (hero) =>
                          hero.number ===
                          activeHero.number
                      )
                    )
                  }
                  className="mt-4 border border-[#C49A5A]/30 px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-[#C49A5A] transition-all hover:bg-[#C49A5A] hover:text-[#111111]"
                >
                  {litCandles.has(
                    heroes.findIndex(
                      (hero) =>
                        hero.number ===
                        activeHero.number
                    )
                  )
                    ? "Matikan Lilin"
                    : "Nyalakan Lilin"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CANDLE ANIMATION */}
      <style>{`
        @keyframes candle-flame {
          0% {
            transform: translateY(0) scale(1);
          }

          25% {
            transform: translateY(-1px) scale(1.04, 0.96);
          }

          50% {
            transform: translateY(0) scale(0.96, 1.04);
          }

          75% {
            transform: translateY(-1px) scale(1.03, 0.97);
          }

          100% {
            transform: translateY(0) scale(1);
          }
        }

        .animate-candle-flame {
          transform-origin: 50% 90%;
          animation: candle-flame 1.3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default PahlawanSection;