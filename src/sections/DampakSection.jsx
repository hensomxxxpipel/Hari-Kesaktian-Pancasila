import { useState } from "react";

const timeline = [
  {
    year: "1965",
    title: "Peristiwa G30S",
    description:
      "Rangkaian penculikan dan pembunuhan sejumlah perwira Angkatan Darat pada akhir September dan awal Oktober 1965 menjadi titik penting dalam krisis politik Indonesia.",
  },
  {
    year: "1966",
    title: "Perubahan Politik",
    description:
      "Tahun 1966 ditandai oleh perubahan besar dalam kehidupan politik Indonesia. Surat Perintah 11 Maret 1966 menjadi salah satu dokumen penting dalam perkembangan kekuasaan pada periode tersebut.",
  },
  {
    year: "1967",
    title: "Peralihan Kekuasaan",
    description:
      "Pada 12 Maret 1967, MPRS menetapkan Soeharto sebagai Pejabat Presiden Republik Indonesia setelah proses politik yang berlangsung sejak 1966.",
  },
  {
    year: "27 SEPTEMBER",
    title: "Penetapan Hari Kesaktian Pancasila",
    description:
      "Keputusan Presiden Nomor 153 Tahun 1967 ditetapkan pada 27 September 1967 dan menetapkan tanggal 1 Oktober sebagai Hari Kesaktian Pancasila.",
  },
];

function DampakSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="dampak"
      className="relative min-h-screen overflow-hidden bg-[#090909] text-[#F2EDE3]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(5,5,5,0.86), rgba(5,5,5,0.94)), url('/assets/monumen-pancasila.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute left-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-[#C49A5A]/8 blur-[180px]" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-[#806A4A]/8 blur-[180px]" />

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

        <div className="absolute left-[8%] top-0 h-full w-px bg-[#C49A5A]/10" />

        <div className="absolute right-[8%] top-0 h-full w-px bg-[#C49A5A]/10" />

        <div className="absolute right-[4%] top-[3%] font-display text-[14rem] leading-none text-[#C49A5A]/[0.035]">
          10
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        {/* ===================================================
            HEADER
        =================================================== */}
        <div className="mb-16 max-w-5xl">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-12 bg-[#C49A5A]" />

            <span className="text-xs uppercase tracking-[0.35em] text-[#C49A5A]">
              Chapter 10 — The Legacy
            </span>
          </div>

          <h2 className="font-display text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            DAMPAK
            <br />
            <span className="text-[#C49A5A]">DAN</span>
            <br />
            WARISAN SEJARAH
          </h2>

          <p className="mt-8 max-w-3xl text-base leading-8 text-[#A8A29E] md:text-lg">
            Peristiwa 1965 tidak berhenti pada malam 30 September. Rangkaian
            peristiwa setelahnya ikut membentuk perubahan politik Indonesia
            pada 1966–1967, sementara 1 Oktober kemudian ditetapkan sebagai
            Hari Kesaktian Pancasila.
          </p>
        </div>

        {/* ===================================================
            MONUMEN PANCASILA — VISUAL CONTENT
        =================================================== */}
        <div className="relative mb-20 overflow-hidden border border-[#C49A5A]/20 bg-[#0B0B0B]/90">
          <div className="grid lg:grid-cols-[1.35fr_0.65fr]">
            {/* Image */}
            <div className="relative min-h-[360px] overflow-hidden sm:min-h-[460px] lg:min-h-[520px]">
              <img
                src="/assets/monumen-pancasila.jpg"
                alt="Monumen Pancasila Sakti"
                className="absolute inset-0 h-full w-full object-cover object-center grayscale-[0.15]"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/20 to-[#0B0B0B]" />

              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                <span className="border border-[#C49A5A]/40 bg-[#0B0B0B]/70 px-3 py-2 text-[9px] uppercase tracking-[0.3em] text-[#C49A5A] backdrop-blur-sm">
                  Monumen Pancasila Sakti
                </span>
              </div>
            </div>

            {/* Context */}
            <div className="relative flex flex-col justify-between p-7 sm:p-10 lg:p-12">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C49A5A]">
                  Historical Landmark
                </span>

                <h3 className="mt-5 font-display text-3xl leading-tight text-[#F2EDE3] sm:text-4xl">
                  Monumen
                  <br />
                  <span className="text-[#C49A5A]">
                    Pancasila Sakti
                  </span>
                </h3>

                <div className="my-7 h-px bg-[#F2EDE3]/10" />

                <p className="text-sm leading-7 text-[#A8A29E]">
                  Monumen Pancasila Sakti di Lubang Buaya menjadi salah satu
                  tempat yang berkaitan erat dengan ingatan sejarah mengenai
                  peristiwa 1965 dan para korban yang kemudian dikenang sebagai
                  Pahlawan Revolusi.
                </p>

                <p className="mt-5 text-sm leading-7 text-[#A8A29E]">
                  Kehadiran monumen ini memperlihatkan bagaimana suatu
                  peristiwa sejarah tidak hanya dicatat melalui dokumen,
                  tetapi juga diabadikan melalui ruang dan simbol yang terus
                  dikenang.
                </p>
              </div>

              <div className="mt-10 border-l-2 border-[#C49A5A]/40 pl-5">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#C49A5A]">
                  Chapter 10
                </span>

                <p className="mt-2 text-xs leading-6 text-[#A8A29E]/70">
                  Sebuah ruang untuk melihat bagaimana sejarah terus hadir
                  dalam ingatan publik.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            MAIN TIMELINE
        =================================================== */}
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute bottom-5 left-[7px] top-5 w-px bg-[#C49A5A]/15" />

            <div className="space-y-3">
              {timeline.map((item, index) => {
                const isActive = active === index;

                return (
                  <button
                    key={item.year + item.title}
                    type="button"
                    onClick={() => setActive(index)}
                    className={`group relative flex w-full gap-6 border text-left transition-all duration-500 ${
                      isActive
                        ? "border-[#C49A5A]/30 bg-[#15120E]/95"
                        : "border-transparent bg-[#0B0B0B]/60 hover:border-[#C49A5A]/10 hover:bg-[#11100E]/90"
                    }`}
                  >
                    <div className="relative z-10 mt-6 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#C49A5A]/50 bg-[#0B0B0B]">
                      <div
                        className={`h-1.5 w-1.5 rounded-full transition-all ${
                          isActive
                            ? "bg-[#C49A5A]"
                            : "bg-[#A8A29E]/25"
                        }`}
                      />
                    </div>

                    <div className="py-5 pr-5">
                      <span className="font-mono text-xs tracking-[0.2em] text-[#C49A5A]">
                        {item.year}
                      </span>

                      <h3
                        className={`mt-2 font-display text-2xl md:text-3xl ${
                          isActive
                            ? "text-[#F2EDE3]"
                            : "text-[#F2EDE3]/50 group-hover:text-[#F2EDE3]/80"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detail */}
          <div className="relative min-h-[470px] overflow-hidden border border-[#C49A5A]/15 bg-[#0B0B0B]/95">
            <div className="absolute right-8 top-0 font-display text-[12rem] leading-none text-[#C49A5A]/[0.045]">
              {String(active + 1).padStart(2, "0")}
            </div>

            <div className="relative flex h-full flex-col justify-between p-8 md:p-12">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C49A5A]">
                    Historical Timeline
                  </span>

                  <span className="font-mono text-xs text-[#C49A5A]">
                    {timeline[active].year}
                  </span>
                </div>

                <div className="my-10 h-px bg-[#F2EDE3]/10" />

                <h3 className="font-display text-4xl leading-tight text-[#F2EDE3] md:text-6xl">
                  {timeline[active].title}
                </h3>

                <p className="mt-8 max-w-2xl text-base leading-8 text-[#A8A29E]">
                  {timeline[active].description}
                </p>
              </div>

              <div className="mt-16 border-l-2 border-[#C49A5A]/40 pl-5">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C49A5A]">
                  1965 — 1967
                </span>

                <p className="mt-3 text-sm leading-7 text-[#A8A29E]">
                  Sebuah periode ketika peristiwa, keputusan politik, dan
                  perubahan kekuasaan saling berkaitan dalam perjalanan
                  sejarah Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            HARI KESAKTIAN PANCASILA
        =================================================== */}
        <div className="relative mt-24 overflow-hidden border border-[#C49A5A]/25 bg-[#0B0B0B]/95 text-[#F2EDE3]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#C49A5A]/10 via-transparent to-transparent" />

          <div className="relative grid gap-12 p-8 md:p-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#C49A5A]">
                01 Oktober
              </span>

              <h3 className="mt-4 font-display text-5xl md:text-7xl">
                Hari
                <br />
                <span className="text-[#C49A5A]">
                  Kesaktian Pancasila
                </span>
              </h3>
            </div>

            <div>
              <p className="max-w-2xl text-base leading-8 text-[#A8A29E]">
                Keputusan Presiden Nomor 153 Tahun 1967, yang ditetapkan pada
                27 September 1967, menetapkan tanggal 1 Oktober sebagai Hari
                Kesaktian Pancasila.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="border border-[#C49A5A]/20 bg-[#11100E] p-5">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C49A5A]">
                    Keputusan
                  </span>

                  <p className="mt-3 font-display text-2xl text-[#F2EDE3]">
                    Keppres No. 153
                  </p>

                  <p className="mt-1 text-xs text-[#A8A29E]/60">
                    Tahun 1967
                  </p>
                </div>

                <div className="border border-[#C49A5A]/20 bg-[#11100E] p-5">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C49A5A]">
                    Ditetapkan
                  </span>

                  <p className="mt-3 font-display text-2xl text-[#F2EDE3]">
                    27 September
                  </p>

                  <p className="mt-1 text-xs text-[#A8A29E]/60">
                    1967
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            REFLECTION
        =================================================== */}
        <div className="mx-auto mt-28 max-w-4xl text-center">
          <div className="mx-auto mb-8 h-px w-16 bg-[#C49A5A]" />

          <span className="text-xs uppercase tracking-[0.35em] text-[#C49A5A]">
            A Reflection
          </span>

          <h3 className="mt-6 font-display text-4xl leading-tight text-[#F2EDE3] md:text-6xl">
            Apa yang kita lakukan
            <br />
            <span className="text-[#C49A5A]">
              dengan sejarah?
            </span>
          </h3>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#A8A29E]">
            Mempelajari sejarah bukan hanya tentang mengingat tanggal atau
            nama. Ia juga berarti memahami bagaimana sebuah peristiwa
            ditafsirkan, bagaimana keputusan masa lalu membentuk kehidupan
            berikutnya, dan bagaimana generasi hari ini memilih untuk
            mengingatnya.
          </p>
        </div>

        {/* ===================================================
            FINAL STATEMENT
        =================================================== */}
        <div className="mt-28 border-y border-[#F2EDE3]/10 py-16 text-center">
          <p className="font-display text-3xl leading-relaxed text-[#F2EDE3] md:text-5xl">
            Menjaga Pancasila bukan hanya
            <br />
            <span className="text-[#C49A5A]">
              mengingat sejarah.
            </span>
            <br />
            Tetapi memahami maknanya bagi masa depan.
          </p>
        </div>

        {/* ===================================================
            FINAL NAVIGATION
        =================================================== */}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-[#F2EDE3]/10 pt-6 md:flex-row">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C49A5A]">
            10 — Dampak & Warisan
          </span>

          <a
            href="#hero"
            className="group text-[10px] uppercase tracking-[0.3em] text-[#C49A5A]"
          >
            Kembali ke awal
            <span className="ml-3 transition-transform group-hover:-translate-y-1">
              ↑
            </span>
          </a>
        </div>

        {/* ===================================================
            END
        =================================================== */}
        <div className="pb-8 pt-20 text-center">
          <span className="font-display text-2xl text-[#C49A5A]/60">
            — SELESAI —
          </span>

          <p className="mt-4 text-[10px] uppercase tracking-[0.35em] text-[#A8A29E]/30">
            Sebuah perjalanan sejarah Indonesia
          </p>
        </div>
      </div>
    </section>
  );
}

export default DampakSection;