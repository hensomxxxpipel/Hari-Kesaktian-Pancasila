import { useEffect, useState } from "react";

const officers = [
  {
    number: "01",
    name: "Jenderal Ahmad Yani",
    role: "Menteri / Panglima Angkatan Darat",
    short: "Menjadi salah satu sasaran utama operasi penculikan.",
    detail:
      "Pasukan datang ke kediaman Ahmad Yani pada dini hari 1 Oktober 1965. Ia diminta ikut dengan alasan akan menghadap Presiden. Peristiwa di kediamannya kemudian berakhir dengan tewasnya Ahmad Yani.",
  },
  {
    number: "02",
    name: "Mayjen R. Soeprapto",
    role: "Deputi II Men/Pangad",
    short: "Dibawa dari kediamannya menuju Lubang Buaya.",
    detail:
      "Soeprapto termasuk perwira tinggi Angkatan Darat yang menjadi sasaran penculikan. Ia kemudian dibawa ke kawasan Lubang Buaya dan menjadi salah satu korban yang ditemukan di sana.",
  },
  {
    number: "03",
    name: "Mayjen M.T. Haryono",
    role: "Deputi III Men/Pangad",
    short: "Menjadi korban dalam operasi penculikan pada dini hari.",
    detail:
      "M.T. Haryono menjadi salah satu sasaran operasi pada dini hari 1 Oktober 1965. Ia kemudian menjadi salah satu korban yang ditemukan di Lubang Buaya.",
  },
  {
    number: "04",
    name: "Mayjen S. Parman",
    role: "Asisten I Men/Pangad",
    short: "Dibawa dari kediamannya pada pagi hari.",
    detail:
      "S. Parman disergap di kediamannya pada sekitar pukul 04.00. Rombongan yang datang menggunakan seragam militer membawanya pergi dari rumah.",
  },
  {
    number: "05",
    name: "Brigjen D.I. Panjaitan",
    role: "Asisten IV Men/Pangad",
    short: "Menjadi sasaran operasi di kediamannya.",
    detail:
      "Pasukan datang ke kediaman D.I. Panjaitan pada dini hari. Setelah terjadi perlawanan, Panjaitan ditembak dan kemudian dibawa oleh rombongan tersebut.",
  },
  {
    number: "06",
    name: "Brigjen Sutoyo",
    role: "Oditur Jenderal / Inspektur Kehakiman AD",
    short: "Dibawa dari kediamannya pada pagi hari.",
    detail:
      "Sutoyo didatangi rombongan yang menyampaikan bahwa ia diminta menghadap Presiden. Ia kemudian dibawa menggunakan kendaraan menuju kawasan Lubang Buaya.",
  },
  {
    number: "07",
    name: "Lettu Pierre A. Tendean",
    role: "Ajudan A.H. Nasution",
    short: "Ditangkap setelah disangka sebagai A.H. Nasution.",
    detail:
      "Pierre Tendean merupakan ajudan A.H. Nasution. Ketika pasukan datang mencari Nasution, Tendean tertangkap dan disangka sebagai jenderal tersebut. Nasution berhasil melarikan diri.",
  },
];

function MalamSection() {
  const [visible, setVisible] = useState(false);
  const [activeOfficer, setActiveOfficer] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    const section = document.getElementById("malam");

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="malam"
      className="
        relative min-h-screen overflow-hidden
        bg-[#050505]
        text-[#f2ede3]
      "
    >
      {/* =====================================
          ATMOSPHERE
      ====================================== */}

      <div
        className="
          pointer-events-none absolute
          left-1/2 top-1/3
          h-[500px] w-[500px]
          -translate-x-1/2
          rounded-full
          bg-[#7f1d1d]/5
          blur-[180px]
        "
      />

      <div
        className="
          pointer-events-none absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_0%,#050505_75%)]
        "
      />

      {/* subtle vertical archive lines */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute left-[8%] top-0 h-full w-px bg-white/10" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-white/10" />
      </div>

      {/* Giant chapter */}
      <div
        className="
          pointer-events-none absolute
          left-1/2 top-20
          -translate-x-1/2
          select-none
          font-display
          text-[18rem]
          leading-none
          text-white/[0.018]
          md:text-[25rem]
        "
      >
        06
      </div>

      {/* =====================================
          CONTENT
      ====================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-12">

        {/* Chapter label */}
        <div
          className={`
            flex items-center gap-4
            transition-all duration-[1200ms]
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }
          `}
        >
          <span className="h-px w-12 bg-[#b91c1c]" />

          <span className="text-[10px] uppercase tracking-[0.4em] text-[#a8a29e]">
            Chapter 06
          </span>

          <span className="text-[10px] uppercase tracking-[0.3em] text-[#52504d]">
            The Night
          </span>
        </div>

        {/* =====================================
            TITLE
        ====================================== */}

        <div
          className={`
            mt-12 max-w-5xl
            transition-all duration-[1400ms] delay-100
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }
          `}
        >
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#806a4a]">
            30 September — 1 October 1965
          </p>

          <h2 className="font-display text-6xl uppercase leading-[0.82] tracking-[-0.04em] md:text-8xl lg:text-[9rem]">
            MALAM
            <br />

            <span className="text-[#b91c1c]">YANG</span>
            <br />

            MENGUBAH
            <br />

            SEJARAH
          </h2>
        </div>

        {/* Intro */}
        <div
          className={`
            mt-14 max-w-2xl
            border-l border-[#7f1d1d]
            pl-6
            transition-all duration-[1400ms] delay-300
            ${
              visible
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }
          `}
        >
          <p className="text-sm leading-8 text-[#a8a29e] md:text-base">
            Malam itu, sejumlah perwira tinggi Angkatan Darat menjadi
            sasaran operasi penculikan. Klik setiap nama untuk melihat
            potongan peristiwa yang terjadi pada malam hingga dini hari
            tersebut.
          </p>
        </div>

        {/* =====================================
            OFFICER GRID
        ====================================== */}

        <div className="mt-20">

          <div className="mb-8 flex items-center justify-between">
            <p className="text-[9px] uppercase tracking-[0.35em] text-[#806a4a]">
              Sasaran operasi
            </p>

            <p className="font-mono text-[9px] tracking-[0.2em] text-[#52504d]">
              07 NAMES
            </p>
          </div>

          <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {officers.map((officer, index) => (
              <button
                key={officer.name}
                onClick={() => setActiveOfficer(officer)}
                className={`
                  group relative
                  min-h-[280px]
                  overflow-hidden
                  bg-[#0b0b0b]
                  p-7
                  text-left
                  transition-all duration-700
                  hover:bg-[#150909]
                  ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-14 opacity-0"
                  }
                `}
                style={{
                  transitionDelay: `${450 + index * 100}ms`,
                }}
              >
                {/* Number */}
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] tracking-[0.25em] text-[#7f1d1d]">
                    {officer.number}
                  </span>

                  <span
                    className="
                      h-2 w-2
                      rounded-full
                      bg-[#292929]
                      transition-all duration-500
                      group-hover:bg-[#b91c1c]
                      group-hover:shadow-[0_0_15px_rgba(185,28,28,0.6)]
                    "
                  />
                </div>

                {/* Portrait placeholder */}
                <div
                  className="
                    absolute
                    right-6 top-16
                    flex h-20 w-20
                    items-center justify-center
                    border border-white/10
                    bg-[#111111]
                    transition-all duration-700
                    group-hover:border-[#7f1d1d]
                    group-hover:scale-105
                  "
                >
                  <span className="font-display text-3xl text-white/10">
                    {officer.number}
                  </span>
                </div>

                {/* Name */}
                <div className="absolute bottom-7 left-7 right-7">
                  <p className="mb-3 max-w-[170px] text-[9px] uppercase leading-4 tracking-[0.2em] text-[#806a4a]">
                    {officer.role}
                  </p>

                  <h3 className="max-w-[230px] font-display text-2xl uppercase leading-tight text-[#f2ede3] transition-transform duration-500 group-hover:translate-x-1">
                    {officer.name}
                  </h3>

                  <div className="mt-5 flex items-center gap-3 text-[9px] uppercase tracking-[0.25em] text-[#52504d] transition-colors group-hover:text-[#b91c1c]">
                    <span>Open record</span>
                    <span>→</span>
                  </div>
                </div>

                {/* Bottom red line */}
                <div
                  className="
                    absolute bottom-0 left-0
                    h-[2px] w-full
                    origin-left
                    scale-x-0
                    bg-[#b91c1c]
                    transition-transform duration-700
                    group-hover:scale-x-100
                  "
                />
              </button>
            ))}
          </div>
        </div>

        {/* =====================================
            NOTE
        ====================================== */}

        <div className="mt-12 flex gap-4 border-t border-white/10 pt-6">
          <span className="mt-1 text-[#b91c1c]">●</span>

          <p className="max-w-3xl text-xs leading-6 text-[#52504d]">
            Tampilan ini menggunakan foto arsip sebagai elemen dokumenter.
            Hindari penggunaan gambar grafis atau eksplisit; fokus visual
            berada pada identitas, waktu, dan konteks peristiwa.
          </p>
        </div>

        {/* =====================================
            BOTTOM
        ====================================== */}

        <div className="mt-24 flex items-center justify-between border-t border-white/10 pt-6">
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#52504d]">
            06 — Malam 30 September
          </span>

          <span className="text-[9px] uppercase tracking-[0.3em] text-[#52504d]">
            Next — The Broadcast ↓
          </span>
        </div>
      </div>

      {/* =====================================
          DETAIL MODAL
      ====================================== */}

      {activeOfficer && (
        <div
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/85
            px-6
            backdrop-blur-md
          "
          onClick={() => setActiveOfficer(null)}
        >
          <div
            className="
              relative
              w-full max-w-2xl
              border border-white/10
              bg-[#0b0b0b]
              p-8
              shadow-2xl
              md:p-12
              animate-fade-up
            "
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setActiveOfficer(null)}
              className="
                absolute right-6 top-5
                text-2xl
                text-[#52504d]
                transition-colors
                hover:text-[#b91c1c]
              "
              aria-label="Tutup"
            >
              ×
            </button>

            <div className="flex items-center gap-4">
              <span className="font-mono text-xs tracking-[0.2em] text-[#b91c1c]">
                {activeOfficer.number}
              </span>

              <span className="h-px w-10 bg-[#7f1d1d]" />

              <span className="text-[9px] uppercase tracking-[0.3em] text-[#806a4a]">
                Historical Record
              </span>
            </div>

            <h3 className="mt-8 max-w-xl font-display text-4xl uppercase leading-tight md:text-6xl">
              {activeOfficer.name}
            </h3>

            <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-[#806a4a]">
              {activeOfficer.role}
            </p>

            <div className="my-8 h-px w-full bg-white/10" />

            <p className="text-sm leading-8 text-[#a8a29e] md:text-base">
              {activeOfficer.detail}
            </p>

            <div className="mt-8 border-l border-[#7f1d1d] pl-5">
              <p className="text-xs leading-6 text-[#73706c]">
                Rangkaian penculikan tersebut berlangsung pada malam
                30 September hingga dini hari 1 Oktober 1965.
              </p>
            </div>

            <button
              onClick={() => setActiveOfficer(null)}
              className="
                mt-10
                border border-white/10
                px-5 py-3
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-[#a8a29e]
                transition-all
                hover:border-[#b91c1c]
                hover:text-[#f2ede3]
              "
            >
              Close Record
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default MalamSection;