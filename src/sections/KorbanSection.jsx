import { useEffect, useRef, useState } from "react";

const timeline = [
  {
    date: "03 OKTOBER",
    year: "1965",
    title: "Penemuan",
    subtitle: "Lokasi para korban ditemukan",
    description:
      "Setelah pencarian dilakukan sejak 1 Oktober, lokasi tujuh korban ditemukan di sebuah sumur tua di kawasan Lubang Buaya. Proses pengangkatan mulai dilakukan pada hari ini, tetapi belum seluruhnya berhasil karena kondisi sumur dan keterbatasan alat.",
    number: "01",

    photos: [
      {
        src: "/assets/penemuan-1.jpg",
        caption: "Lokasi Lubang Buaya",
      },
      {
        src: "/assets/penemuan-2.jpg",
        caption: "Sumur Lubang Buaya",
      },
    ],
  },

  {
    date: "04 OKTOBER",
    year: "1965",
    title: "Evakuasi",
    subtitle: "Tujuh jenazah berhasil diangkat",
    description:
      "Proses pengangkatan dilanjutkan hingga seluruh jenazah berhasil dievakuasi dari sumur. Pada malam hari, ketujuh jenazah kemudian ditempatkan di Aula Departemen Angkatan Darat di Jalan Merdeka Utara.",
    number: "02",

    photos: [
      {
        src: "/assets/pengangkatan-1.jpg",
        caption: "Proses pengangkatan",
      },
      {
        src: "/assets/pengangkatan-2.jpeg",
        caption: "Proses evakuasi",
      },
    ],
  },

  {
    date: "05 OKTOBER",
    year: "1965",
    title: "Pemakaman",
    subtitle: "Pemakaman di Kalibata",
    description:
      "Sehari setelah evakuasi selesai, ketujuh korban dimakamkan di Taman Makam Pahlawan Kalibata. Pemakaman berlangsung bertepatan dengan Hari Ulang Tahun ke-20 Angkatan Bersenjata Republik Indonesia.",
    number: "03",

    photos: [
      {
        src: "/assets/pemakaman-1.jpg",
        caption: "Prosesi pemakaman",
      },
      {
        src: "/assets/pemakaman-2.jpeg",
        caption: "Penghormatan terakhir",
      },
    ],
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
  const [visible, setVisible] = useState(false);

  const sectionRef = useRef(null);

  /* =========================================================
     SECTION SCROLL OBSERVER

     Masuk viewport  -> muncul
     Keluar viewport -> menghilang
  ========================================================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.18,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="korban"
      className="relative min-h-screen overflow-hidden bg-[#181818] text-[#F2EDE3]"
    >
      {/* =========================================================
          BG 08
      ========================================================= */}

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/bg8.png')",
        }}
      />

      {/* =========================================================
          DARK OVERLAY
          Tetap gelap agar tekstur BG8 tidak mengganggu konten
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 bg-black/90" />

      {/* =========================================================
          GOLD OVERLAY
          Hanya muncul ketika section sedang terlihat
      ========================================================= */}

      <div
        className={`
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-[#C49A5A]/[0.08]
          transition-opacity
          duration-[1200ms]
          ease-out
          ${visible ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* =========================================================
          ORIGINAL ATMOSPHERE
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 z-[2]">
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

      {/* =========================================================
          CONTENT
          Original layout preserved
      ========================================================= */}

      <div
        className={`
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          py-24
          transition-all
          duration-[1000ms]
          ease-out
          lg:px-10
          lg:py-32
          ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }
        `}
      >
        {/* =======================================================
            HEADER
        ======================================================= */}

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

        {/* =======================================================
            MAIN TIMELINE
        ======================================================= */}

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* =====================================================
              TIMELINE NAVIGATION
          ===================================================== */}

          <div className="relative">
            <div className="absolute left-[7px] top-4 bottom-4 w-px bg-[#F2EDE3]/10" />

            <div className="space-y-3">
              {timeline.map((item, index) => {
                const isActive = active === index;

                return (
                  <button
                    key={item.number}
                    type="button"
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
                          isActive
                            ? "bg-[#C49A5A]"
                            : "bg-[#A8A29E]/30"
                        }`}
                      />
                    </div>

                    {/* Timeline content */}

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

          {/* =====================================================
              ACTIVE DETAIL CARD
          ===================================================== */}

          <div className="relative min-h-[500px] overflow-hidden border border-[#F2EDE3]/10 bg-[#111111]">
            {/* Archival number */}

            <div className="absolute right-6 top-2 font-display text-[10rem] leading-none text-[#F2EDE3]/[0.025]">
              {timeline[active].number}
            </div>

            <div className="relative flex h-full flex-col justify-between p-8 md:p-12">
              <div>
                {/* Record header */}

                <div className="mb-10 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#A8A29E]">
                    Historical Record
                  </span>

                  <span className="text-xs tracking-[0.2em] text-[#C49A5A]">
                    {timeline[active].date} / {timeline[active].year}
                  </span>
                </div>

                <div className="mb-8 h-px w-full bg-[#F2EDE3]/10" />

                {/* Title */}

                <h3 className="font-display text-4xl md:text-6xl">
                  {timeline[active].title}
                </h3>

                <p className="mt-6 max-w-xl text-base leading-8 text-[#A8A29E]">
                  {timeline[active].description}
                </p>

                {/* =================================================
                    TWO PHOTOS
                    Berubah mengikuti timeline yang dipilih
                ================================================= */}

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {timeline[active].photos.map((photo, index) => (
                    <figure
                      key={photo.src}
                      className="group relative overflow-hidden border border-[#F2EDE3]/10 bg-[#0B0B0B]"
                    >
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={photo.src}
                          alt={photo.caption}
                          loading="lazy"
                          className="h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                        />
                      </div>

                      {/* Photo overlay */}

                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent px-4 pb-3 pt-12">
                        <div className="flex items-end justify-between gap-3">
                          <figcaption className="text-[10px] uppercase tracking-[0.15em] text-[#F2EDE3]/80">
                            {photo.caption}
                          </figcaption>

                          <span className="font-mono text-[9px] text-[#C49A5A]/70">
                            0{index + 1}
                          </span>
                        </div>
                      </div>
                    </figure>
                  ))}
                </div>
              </div>

              {/* =================================================
                  SEVEN VICTIMS
              ================================================= */}

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

        {/* =======================================================
            REFLECTION
        ======================================================= */}

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

        {/* =======================================================
            BOTTOM MARKER
        ======================================================= */}

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