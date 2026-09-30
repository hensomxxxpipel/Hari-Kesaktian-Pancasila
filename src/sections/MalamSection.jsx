import { useEffect, useState } from "react";

function MalamSection() {
  const [isActive, setIsActive] = useState(false);
  const [sceneVisible, setSceneVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("malam");

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      {
        threshold: 0.18,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isActive) {
      setSceneVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      setSceneVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [isActive]);

  return (
    <section
      id="malam"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#070707]
        text-[#f2ede3]
      "
    >
      {/* atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          -left-[180px]
          top-[15%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#7f1d1d]/10
          blur-[180px]
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
          blur-[180px]
        "
      />

      {/* archive grid */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-[8%] top-0 h-full w-px bg-white/[0.045]" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-white/[0.045]" />
        <div className="absolute left-0 right-0 top-[18%] h-px bg-white/[0.035]" />
        <div className="absolute left-0 right-0 bottom-[18%] h-px bg-white/[0.035]" />
      </div>

      {/* giant chapter number */}
      <div
        className="
          pointer-events-none
          absolute
          -right-8
          top-[-2rem]
          select-none
          font-display
          text-[18rem]
          font-medium
          leading-none
          tracking-[-0.08em]
          text-white/[0.025]
          md:text-[25rem]
        "
      >
        06
      </div>

      {/* main content */}
      <div
        className={`
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          py-28
          lg:px-12
          lg:py-36
          transition-all
          duration-[1200ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            isActive
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-16 opacity-0"
          }
        `}
      >
        {/* chapter header */}
        <div
          className={`
            mb-16
            flex
            items-center
            gap-4
            transition-all
            duration-[900ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              isActive
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }
          `}
        >
          <span className="h-px w-12 bg-[#b91c1c]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#a8a29e]">
            Chapter 06
          </span>

          <span className="text-[10px] uppercase tracking-[0.3em] text-[#b91c1c]">
            The Night
          </span>
        </div>

        {/* intro */}
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div
            className={`
              transition-all
              duration-[1100ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                isActive
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }
            `}
          >
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#806a4a]">
              30 September - 1 Oktober 1965
            </p>

            <h2
              className="
                font-display
                text-5xl
                uppercase
                leading-[0.88]
                tracking-[-0.045em]
                md:text-7xl
                lg:text-8xl
              "
            >
              MALAM
              <br />
              <span className="text-[#b91c1c]">
                YANG BERGERAK
              </span>
            </h2>

            <div className="mt-8 h-px w-24 bg-[#b91c1c]" />
          </div>

          <div
            className={`
              transition-all
              delay-150
              duration-[1100ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                isActive
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 opacity-0"
              }
            `}
          >
            <p className="max-w-md text-sm leading-8 text-[#a8a29e] md:text-base">
              Malam itu, rangkaian operasi mulai berlangsung
              di Jakarta. Sejumlah perwira Angkatan Darat
              menjadi sasaran penculikan dan peristiwa
              kemudian berlanjut hingga dini hari 1 Oktober.
            </p>
          </div>
        </div>

        {/* scene 01 — film illustration */}
        <div
          className={`
            mt-28
            grid
            gap-12
            lg:grid-cols-[1.15fr_0.85fr]
            lg:items-center
            transition-all
            duration-[1200ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              sceneVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }
          `}
        >
          <div className="group relative overflow-hidden border border-white/[0.08] bg-[#0d0d0d]">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src="/assets/adegan-film-g30spki.jpg"
                alt="Salah satu adegan dari film Pengkhianatan G30S PKI produksi tahun 1984"
                className="
                  h-full
                  w-full
                  object-cover
                  grayscale
                  opacity-80
                  transition-transform
                  duration-[1800ms]
                  ease-out
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/85 via-[#050505]/10 to-[#050505]/20" />

              <div className="absolute left-5 top-5 max-w-[85%]">
                <span className="hidden border border-white/10 bg-black/50 px-3 py-2 text-[9px] uppercase leading-5 tracking-[0.2em] text-[#a8a29e] backdrop-blur-sm md:inline-block">
                  Salah satu adegan dari film Pengkhianatan G30S PKI dengan sutradara Arifin C Noer produksi tahun 1984.
                </span>
              </div>

              <div className="absolute bottom-5 left-5">
                <p className="font-mono text-[9px] tracking-[0.2em] text-[#b91c1c]">
                  Ilustrasi
                </p>
              </div>
            </div>
          </div>

          <div
            className={`
              transition-all
              delay-200
              duration-[1100ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                sceneVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 opacity-0"
              }
            `}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="font-mono text-xs tracking-[0.2em] text-[#b91c1c]">
                01
              </span>

              <span className="h-px w-8 bg-[#b91c1c]/50" />

              <span className="text-[9px] uppercase tracking-[0.3em] text-[#b91c1c]">
                Representasi Film
              </span>
            </div>

            <h3 className="font-display text-3xl uppercase leading-[1] md:text-4xl">
              Sebuah
              <br />
              <span className="text-[#b91c1c]">
                Representasi
              </span>
              <br />
              Peristiwa
            </h3>

            <p className="mt-7 max-w-lg text-sm leading-8 text-[#8f8982]">
              Gambar ini bukan dokumentasi langsung dari malam
              30 September 1965, melainkan salah satu adegan
              dari film Pengkhianatan G30S PKI yang diproduksi
              pada tahun 1984.
            </p>

            <div className="mt-8 border-l border-[#b91c1c]/50 pl-5">
              <p className="text-xs leading-6 text-[#a8a29e]">
                Film tersebut disutradarai oleh Arifin C. Noer
                dan menggambarkan kembali rangkaian peristiwa
                yang berkaitan dengan G30S.
              </p>
            </div>
          </div>
        </div>

        {/* timeline transition */}
        <div
          className={`
            my-28
            flex
            items-center
            gap-5
            transition-all
            duration-[1000ms]
            ${sceneVisible ? "opacity-100" : "opacity-0"}
          `}
        >
          <span className="font-mono text-[10px] tracking-[0.25em] text-[#b91c1c]">
            30.09
          </span>

          <div className="relative h-px flex-1 overflow-hidden bg-white/[0.08]">
            <div
              className={`
                absolute
                left-0
                top-0
                h-px
                bg-[#b91c1c]
                transition-all
                duration-[1800ms]
                ease-out
                ${sceneVisible ? "w-full" : "w-0"}
              `}
            />
          </div>

          <span className="text-[9px] uppercase tracking-[0.3em] text-[#b91c1c]">
            Dini hari
          </span>
        </div>

        {/* scene 02 — S. Parman illustration */}
        <div
          className={`
            grid
            gap-12
            lg:grid-cols-[0.8fr_1.2fr]
            lg:items-center
            transition-all
            duration-[1300ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              sceneVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }
          `}
        >
          <div className="order-2 lg:order-1">
            <div className="mb-6 flex items-center gap-3">
              <span className="font-mono text-xs tracking-[0.2em] text-[#b91c1c]">
                02
              </span>

              <span className="h-px w-8 bg-[#b91c1c]/50" />

              <span className="text-[9px] uppercase tracking-[0.3em] text-[#b91c1c]">
                Ilustrasi Peristiwa
              </span>
            </div>

            <h3 className="font-display text-3xl uppercase leading-[1] md:text-4xl">
              Mayjen
              <br />
              <span className="text-[#b91c1c]">
                S. Parman
              </span>
            </h3>

            <p className="mt-7 max-w-lg text-sm leading-8 text-[#8f8982]">
              Adegan pada gambar kedua merupakan ilustrasi
              yang menggambarkan Mayjen S. Parman dalam
              rangkaian peristiwa yang terjadi pada malam
              30 September hingga 1 Oktober 1965.
            </p>

            <div className="mt-8 border-l border-[#b91c1c]/50 pl-5">
              <p className="text-xs leading-6 text-[#a8a29e]">
                Gambar ini merupakan ilustrasi, bukan foto
                dokumentasi langsung dari peristiwa tersebut.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#b91c1c]">
                ILUSTRASI
              </span>

              <span className="h-px w-10 bg-[#b91c1c]/40" />

              <span className="text-[9px] uppercase tracking-[0.25em] text-[#5f5a55]">
                S. Parman
              </span>
            </div>
          </div>

          <div className="group order-1 relative overflow-hidden border border-white/[0.08] bg-[#0d0d0d] lg:order-2">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src="/assets/ilustrasi-penyiksaan.jpg"
                alt="Ilustrasi yang menggambarkan Mayjen S. Parman"
                className="
                  h-full
                  w-full
                  object-cover
                  grayscale
                  opacity-80
                  transition-transform
                  duration-[2000ms]
                  ease-out
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-[#050505]/15" />

              <div className="absolute left-5 top-5">
                <span className="border border-[#b91c1c]/20 bg-black/55 px-3 py-2 text-[9px] uppercase tracking-[0.25em] text-[#b91c1c] backdrop-blur-sm">
                  Ilustrasi
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#a8a29e]">
                  Mayjen S. Parman
                </span>

                <span className="font-mono text-[9px] text-[#b91c1c]">
                  ILUSTRASI
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* cliffhanger */}
        <div
          className={`
            mt-32
            border-t
            border-white/[0.08]
            pt-10
            transition-all
            duration-[1100ms]
            ${
              sceneVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }
          `}
        >
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-[9px] uppercase tracking-[0.35em] text-[#806a4a]">
                Berikutnya
              </p>

              <h3 className="mt-4 max-w-3xl font-display text-3xl uppercase leading-[1] tracking-[-0.02em] md:text-5xl">
                Suara itu
                <br />
                mulai terdengar.
              </h3>

              <p className="mt-6 max-w-2xl text-sm leading-8 text-[#77716b]">
                Apa yang kemudian diumumkan melalui radio?
                Dan bagaimana pengumuman tersebut disampaikan
                kepada masyarakat?
              </p>
            </div>

            <div className="text-left md:text-right">
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#5c5752]">
                Next
              </span>

              <p className="mt-2 font-display text-2xl text-[#b91c1c]">
                07
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-[#77716b]">
                Siaran
              </p>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="mt-24 flex items-center justify-between border-t border-white/[0.06] pt-6">
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#4f4b47]">
            06 — Malam 30 September
          </span>

          <span className="text-[9px] uppercase tracking-[0.3em] text-[#4f4b47]">
            The Voice Begins ↓
          </span>
        </div>
      </div>
    </section>
  );
}

export default MalamSection;