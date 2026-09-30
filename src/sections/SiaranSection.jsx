import { useEffect, useState } from "react";

const broadcastLines = [
  {
    time: "14:00",
    title: "Pengumuman pertama",
    text: "Melalui siaran radio, Gerakan 30 September mengumumkan bahwa mereka telah mengambil tindakan terhadap apa yang disebut sebagai Dewan Jenderal.",
  },
  {
    time: "14:00+",
    title: "Dewan Revolusi",
    text: "Dalam pengumuman tersebut juga disampaikan pembentukan Dewan Revolusi Indonesia.",
  },
  {
    time: "—",
    title: "Klaim politik",
    text: "Siaran radio menjadi sarana penting bagi gerakan untuk menyampaikan klaim dan legitimasi politiknya kepada masyarakat.",
  },
];

function SiaranSection() {
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("siaran");

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="siaran"
      className="
        relative min-h-screen overflow-hidden
        bg-[#100d0a]
        text-[#f2ede3]
      "
    >
      {/* =====================================
          ARCHIVE ATMOSPHERE
      ====================================== */}

      <div
        className="
          pointer-events-none absolute
          inset-0
          opacity-40
          bg-[radial-gradient(circle_at_50%_30%,rgba(128,106,74,0.12),transparent_45%)]
        "
      />

      <div
        className="
          pointer-events-none absolute
          right-[-180px] top-1/3
          h-[500px] w-[500px]
          rounded-full
          bg-[#7f1d1d]/10
          blur-[160px]
        "
      />

      {/* Archive grid */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute left-[8%] top-0 h-full w-px bg-[#f2ede3]" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-[#f2ede3]" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-[#f2ede3]" />

        <div className="absolute left-0 right-0 top-1/3 h-px bg-[#f2ede3]" />
        <div className="absolute left-0 right-0 top-2/3 h-px bg-[#f2ede3]" />
      </div>

      {/* Giant number */}
      <div
        className="
          pointer-events-none absolute
          right-[-30px] top-8
          select-none
          font-display
          text-[20rem]
          leading-none
          text-white/[0.02]
          md:text-[28rem]
        "
      >
        07
      </div>

      {/* =====================================
          CONTENT
      ====================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-12">

        {/* Chapter */}
        <div
          className={`
            flex items-center gap-4
            transition-all duration-1000
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }
          `}
        >
          <span className="h-px w-12 bg-[#b91c1c]" />

          <span className="text-[10px] uppercase tracking-[0.4em] text-[#a8a29e]">
            Chapter 07
          </span>

          <span className="text-[10px] uppercase tracking-[0.3em] text-[#806a4a]">
            The Broadcast
          </span>
        </div>

        {/* =====================================
            HEADER
        ====================================== */}

        <div className="mt-12 grid gap-16 lg:grid-cols-[1fr_0.8fr]">

          <div
            className={`
              transition-all duration-[1300ms]
              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }
            `}
          >
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#806a4a]">
              Suara dari radio
            </p>

            <h2 className="font-display text-5xl uppercase leading-[0.88] tracking-[-0.04em] md:text-7xl lg:text-8xl">
              SIARAN
              <br />

              <span className="text-[#b91c1c]">
                G30S
              </span>

              <br />

              DAN
              <br />

              DEWAN
              <br />

              REVOLUSI
            </h2>

            <div className="mt-8 h-px w-24 bg-[#b91c1c]" />

            <p className="mt-8 max-w-xl text-sm leading-8 text-[#a8a29e] md:text-base">
              Setelah gerakan berlangsung, radio digunakan sebagai media
              untuk menyampaikan pengumuman politik. Siaran tersebut
              menjadi bagian penting dalam upaya gerakan menjelaskan
              tindakannya kepada publik.
            </p>
          </div>

          {/* =====================================
              RADIO PLAYER
          ====================================== */}

          <div
            className={`
              transition-all duration-[1400ms] delay-200
              ${
                visible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 opacity-0"
              }
            `}
          >
            <div className="relative border border-[#806a4a]/30 bg-[#0b0b0b] p-7 md:p-9">

              {/* Radio top */}
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.35em] text-[#806a4a]">
                    Historical Broadcast
                  </p>

                  <p className="mt-2 font-mono text-xs text-[#73706c]">
                    RADIO REPUBLIK INDONESIA
                  </p>
                </div>

                <div
                  className={`
                    h-2 w-2 rounded-full
                    ${
                      playing
                        ? "animate-pulse bg-[#b91c1c]"
                        : "bg-[#292929]"
                    }
                  `}
                />
              </div>

              {/* Frequency */}
              <div className="py-12 text-center">

                <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#52504d]">
                  FREQUENCY
                </p>

                <p className="mt-3 font-mono text-5xl tracking-[0.08em] text-[#f2ede3]">
                  92.4
                </p>

                <p className="mt-2 font-mono text-[9px] tracking-[0.3em] text-[#806a4a]">
                  ARCHIVAL SIGNAL
                </p>

                {/* waveform */}
                <div className="mt-10 flex h-12 items-center justify-center gap-[3px]">
                  {Array.from({ length: 36 }).map((_, index) => (
                    <span
                      key={index}
                      className={`
                        w-[2px]
                        transition-all duration-300
                        ${
                          playing
                            ? "bg-[#b91c1c]"
                            : "bg-[#292929]"
                        }
                      `}
                      style={{
                        height: playing
                          ? `${12 + ((index * 17) % 30)}px`
                          : "8px",
                        animationDelay: `${index * 40}ms`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Play button */}
              <button
                onClick={() => setPlaying(!playing)}
                className="
                  flex w-full
                  items-center justify-center gap-4
                  border border-white/10
                  bg-[#111111]
                  px-6 py-5
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-[#a8a29e]
                  transition-all duration-500
                  hover:border-[#b91c1c]
                  hover:bg-[#170909]
                  hover:text-[#f2ede3]
                "
              >
                <span className="text-lg">
                  {playing ? "Ⅱ" : "▶"}
                </span>

                {playing
                  ? "Pause Siaran"
                  : "Dengarkan Siaran"}
              </button>

              <p className="mt-4 text-center text-[8px] leading-5 text-[#52504d]">
                AUDIO ARSIP / REKONSTRUKSI
                <br />
                Sumber audio akan ditambahkan pada tahap final.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================
            BROADCAST TIMELINE
        ====================================== */}

        <div className="mt-28">

          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#806a4a]">
                Isi pengumuman
              </p>

              <h3 className="mt-3 font-display text-3xl uppercase md:text-4xl">
                APA YANG DISIARKAN?
              </h3>
            </div>

            <span className="hidden font-mono text-[10px] tracking-[0.2em] text-[#52504d] md:block">
              ARCHIVE / 1965
            </span>
          </div>

          <div className="grid gap-px bg-white/10 md:grid-cols-3">
            {broadcastLines.map((line, index) => (
              <button
                key={line.title}
                onClick={() => setActiveLine(index)}
                className={`
                  group
                  min-h-[250px]
                  bg-[#0b0b0b]
                  p-7
                  text-left
                  transition-all duration-500
                  ${
                    activeLine === index
                      ? "bg-[#180b0b]"
                      : "hover:bg-[#130909]"
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`
                      font-mono text-xs
                      ${
                        activeLine === index
                          ? "text-[#b91c1c]"
                          : "text-[#52504d]"
                      }
                    `}
                  >
                    {line.time}
                  </span>

                  <span className="text-[#292929] transition-colors group-hover:text-[#7f1d1d]">
                    →
                  </span>
                </div>

                <h4 className="mt-14 font-display text-2xl uppercase">
                  {line.title}
                </h4>

                <p className="mt-4 text-sm leading-7 text-[#73706c]">
                  {line.text}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* =====================================
            ACTIVE BROADCAST
        ====================================== */}

        <div className="mt-12 border-l border-[#7f1d1d] pl-6">
          <p className="text-[9px] uppercase tracking-[0.35em] text-[#806a4a]">
            Selected record
          </p>

          <p
            key={activeLine}
            className="
              mt-4 max-w-3xl
              text-sm leading-8 text-[#a8a29e]
              animate-fade-up
            "
          >
            {broadcastLines[activeLine].text}
          </p>
        </div>

        {/* =====================================
            HISTORICAL NOTE
        ====================================== */}

        <div
          className="
            mt-20
            border border-white/10
            bg-[#0b0b0b]
            p-7
            md:p-9
          "
        >
          <div className="flex gap-5">
            <span className="font-display text-2xl text-[#b91c1c]">
              !
            </span>

            <div>
              <p className="text-[9px] uppercase tracking-[0.35em] text-[#806a4a]">
                Catatan
              </p>

              <p className="mt-4 max-w-4xl text-sm leading-7 text-[#73706c]">
                Audio yang nantinya digunakan harus dibedakan antara
                rekaman arsip asli dan rekonstruksi. Jika rekaman asli
                tidak tersedia atau tidak dapat digunakan, pengalaman
                audio dapat dibuat sebagai rekonstruksi yang diberi label
                secara jelas.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-24 flex items-center justify-between border-t border-white/10 pt-6">
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#52504d]">
            07 — Siaran
          </span>

          <span className="text-[9px] uppercase tracking-[0.3em] text-[#52504d]">
            Next — The Victims ↓
          </span>
        </div>
      </div>
    </section>
  );
}

export default SiaranSection;