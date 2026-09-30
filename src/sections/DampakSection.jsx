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
      className="relative min-h-screen overflow-hidden bg-[#414141] text-[#181818]"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-[#C49A5A]/20 blur-[180px]" />

        <div className="absolute right-[-10%] bottom-[-10%] h-[600px] w-[600px] rounded-full bg-[#806A4A]/10 blur-[180px]" />

        <div className="absolute inset-0 opacity-[0.035]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#181818 1px, transparent 1px), linear-gradient(90deg, #181818 1px, transparent 1px)",
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        <div className="absolute left-[8%] top-0 h-full w-px bg-[#181818]/10" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-[#181818]/10" />

        <div className="absolute right-[4%] top-[3%] font-display text-[14rem] leading-none text-[#181818]/[0.035]">
          10
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        {/* Header */}
        <div className="mb-20 max-w-5xl">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-12 bg-[#806A4A]" />

            <span className="text-xs uppercase tracking-[0.35em] text-[#806A4A]">
              Chapter 10 — The Legacy
            </span>
          </div>

          <h2 className="font-display text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            DAMPAK
            <br />
            <span className="text-[#806A4A]">DAN</span>
            <br />
            WARISAN SEJARAH
          </h2>

          <p className="mt-8 max-w-3xl text-base leading-8 text-[#4A4540] md:text-lg">
            Peristiwa 1965 tidak berhenti pada malam 30 September. Rangkaian
            peristiwa setelahnya ikut membentuk perubahan politik Indonesia
            pada 1966–1967, sementara 1 Oktober kemudian ditetapkan sebagai
            Hari Kesaktian Pancasila.
          </p>
        </div>

        {/* Main timeline */}
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-[7px] top-5 bottom-5 w-px bg-[#181818]/15" />

            <div className="space-y-3">
              {timeline.map((item, index) => {
                const isActive = active === index;

                return (
                  <button
                    key={item.year + item.title}
                    onClick={() => setActive(index)}
                    className={`group relative flex w-full gap-6 border text-left transition-all duration-500 ${
                      isActive
                        ? "border-[#806A4A]/30 bg-[#F2EDE3]"
                        : "border-transparent hover:bg-[#F2EDE3]/60"
                    }`}
                  >
                    <div className="relative z-10 mt-6 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#806A4A]/50 bg-[#E8E2D7]">
                      <div
                        className={`h-1.5 w-1.5 rounded-full transition-all ${
                          isActive
                            ? "bg-[#806A4A]"
                            : "bg-[#181818]/25"
                        }`}
                      />
                    </div>

                    <div className="py-5 pr-5">
                      <span className="font-mono text-xs tracking-[0.2em] text-[#806A4A]">
                        {item.year}
                      </span>

                      <h3
                        className={`mt-2 font-display text-2xl md:text-3xl ${
                          isActive
                            ? "text-[#181818]"
                            : "text-[#181818]/50 group-hover:text-[#181818]"
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
          <div className="relative min-h-[470px] overflow-hidden border border-[#181818]/10 bg-[#F2EDE3]">
            <div className="absolute right-8 top-0 font-display text-[12rem] leading-none text-[#806A4A]/[0.045]">
              {String(active + 1).padStart(2, "0")}
            </div>

            <div className="relative flex h-full flex-col justify-between p-8 md:p-12">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#806A4A]">
                    Historical Timeline
                  </span>

                  <span className="font-mono text-xs text-[#806A4A]">
                    {timeline[active].year}
                  </span>
                </div>

                <div className="my-10 h-px bg-[#181818]/10" />

                <h3 className="font-display text-4xl leading-tight md:text-6xl">
                  {timeline[active].title}
                </h3>

                <p className="mt-8 max-w-2xl text-base leading-8 text-[#5B554E]">
                  {timeline[active].description}
                </p>
              </div>

              <div className="mt-16 border-l-2 border-[#806A4A]/40 pl-5">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#806A4A]">
                  1965 — 1967
                </span>

                <p className="mt-3 text-sm leading-7 text-[#5B554E]">
                  Sebuah periode ketika peristiwa, keputusan politik, dan
                  perubahan kekuasaan saling berkaitan dalam perjalanan
                  sejarah Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hari Kesaktian Pancasila */}
        <div className="relative mt-24 overflow-hidden border border-[#806A4A]/25 bg-[#181818] text-[#F2EDE3]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#C49A5A]/10 via-transparent to-transparent" />

          <div className="relative grid gap-12 p-8 md:p-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#C49A5A]">
                01 Oktober
              </span>

              <h3 className="mt-4 font-display text-5xl md:text-7xl">
                Hari
                <br />
                <span className="text-[#C49A5A]">Kesaktian Pancasila</span>
              </h3>
            </div>

            <div>
              <p className="max-w-2xl text-base leading-8 text-[#A8A29E]">
                Keputusan Presiden Nomor 153 Tahun 1967, yang ditetapkan pada
                27 September 1967, menetapkan tanggal 1 Oktober sebagai Hari
                Kesaktian Pancasila.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="border border-[#C49A5A]/20 p-5">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C49A5A]">
                    Keputusan
                  </span>

                  <p className="mt-3 font-display text-2xl">
                    Keppres No. 153
                  </p>

                  <p className="mt-1 text-xs text-[#A8A29E]/60">
                    Tahun 1967
                  </p>
                </div>

                <div className="border border-[#C49A5A]/20 p-5">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C49A5A]">
                    Ditetapkan
                  </span>

                  <p className="mt-3 font-display text-2xl">
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

        {/* Reflection */}
        <div className="mx-auto mt-28 max-w-4xl text-center">
          <div className="mx-auto mb-8 h-px w-16 bg-[#806A4A]" />

          <span className="text-xs uppercase tracking-[0.35em] text-[#806A4A]">
            A Reflection
          </span>

          <h3 className="mt-6 font-display text-4xl leading-tight md:text-6xl">
            Apa yang kita lakukan
            <br />
            <span className="text-[#806A4A]">dengan sejarah?</span>
          </h3>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#5B554E]">
            Mempelajari sejarah bukan hanya tentang mengingat tanggal atau
            nama. Ia juga berarti memahami bagaimana sebuah peristiwa
            ditafsirkan, bagaimana keputusan masa lalu membentuk kehidupan
            berikutnya, dan bagaimana generasi hari ini memilih untuk
            mengingatnya.
          </p>
        </div>

        {/* Final statement */}
        <div className="mt-28 border-y border-[#181818]/10 py-16 text-center">
          <p className="font-display text-3xl leading-relaxed md:text-5xl">
            Menjaga Pancasila bukan hanya
            <br />
            <span className="text-[#806A4A]">
              mengingat sejarah.
            </span>
            <br />
            Tetapi memahami maknanya bagi masa depan.
          </p>
        </div>

        {/* Final navigation */}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-[#181818]/10 pt-6 md:flex-row">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#806A4A]">
            10 — Dampak & Warisan
          </span>

          <a
            href="#hero"
            className="group text-[10px] uppercase tracking-[0.3em] text-[#806A4A]"
          >
            Kembali ke awal
            <span className="ml-3 transition-transform group-hover:-translate-y-1">
              ↑
            </span>
          </a>
        </div>

        {/* End */}
        <div className="pb-8 pt-20 text-center">
          <span className="font-display text-2xl text-[#806A4A]/60">
            — SELESAI —
          </span>

          <p className="mt-4 text-[10px] uppercase tracking-[0.35em] text-[#181818]/30">
            Sebuah perjalanan sejarah Indonesia
          </p>
        </div>
      </div>
    </section>
  );
}

export default DampakSection;