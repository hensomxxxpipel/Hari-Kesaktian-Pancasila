import { useEffect, useState } from "react";

const figures = [
  {
    number: "01",
    role: "MILITER",
    name: "Untung",
    image: "/assets/tokoh-untung.png",
    description:
      "Komandan Batalyon I Resimen Tjakrabirawa yang tampil sebagai salah satu pemimpin gerakan yang menamakan dirinya Gerakan 30 September.",
    details: [
      "Untung Syamsuri merupakan perwira dari Resimen Tjakrabirawa, satuan pengawal Presiden Soekarno.",
      "Pada 1965, ia tampil sebagai salah satu pemimpin gerakan yang kemudian dikenal sebagai Gerakan 30 September.",
    ],
  },
  {
    number: "02",
    role: "POLITIK",
    name: "D.N. Aidit",
    image: "/assets/tokoh-aidit.png",
    description:
      "Ketua CC PKI pada 1965 yang namanya muncul dalam berbagai kajian mengenai rangkaian politik di sekitar peristiwa G30S.",
    details: [
      "D.N. Aidit merupakan Ketua CC PKI pada 1965.",
      "Namanya muncul dalam berbagai sumber dan kajian mengenai keterlibatan politik PKI dalam rangkaian peristiwa G30S.",
      "Bentuk dan tingkat keterlibatannya menjadi bagian dari perdebatan dalam historiografi mengenai peristiwa 1965.",
    ],
  },
  {
    number: "03",
    role: "BIRO KHUSUS",
    name: "Sjam Kamaruzaman",
    image: "/assets/tokoh-sjam.png",
    description:
      "Tokoh Biro Chusus PKI yang disebut dalam sejumlah sumber berkaitan dengan persiapan gerakan.",
    details: [
      "Sjam Kamaruzaman disebut dalam sejumlah sumber sebagai tokoh Biro Chusus Central PKI.",
      "Namanya muncul dalam kesaksian dan kajian mengenai jaringan yang berkaitan dengan persiapan G30S.",
      "Peran dan hubungan jaringannya ditafsirkan secara berbeda dalam berbagai kajian sejarah.",
    ],
  },
  {
    number: "04",
    role: "MILITER",
    name: "Kolonel Abdul Latief",
    image: "/assets/tokoh-latief.png",
    description:
      "Komandan Brigif 1 Jaya Sakti yang termasuk tokoh militer yang disebut dalam pembahasan mengenai G30S.",
    details: [
      "Kolonel Abdul Latief merupakan Komandan Brigif 1 Jaya Sakti.",
      "Namanya termasuk dalam pembahasan mengenai tokoh militer yang berkaitan dengan rangkaian G30S.",
      "Setelah peristiwa tersebut, keterangannya mengenai pertemuan dan hubungan antar-tokoh menjadi salah satu sumber yang digunakan dalam kajian mengenai peristiwa 1965.",
    ],
  },
];

function TokohSection() {
  const [activeFigure, setActiveFigure] = useState(null);
  const [visible, setVisible] = useState(false);

  /* =====================================================
     SECTION REVEAL
     ===================================================== */
  useEffect(() => {
    const section = document.getElementById("tokoh");

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  /* =====================================================
     MODAL
     ===================================================== */
  useEffect(() => {
    if (!activeFigure) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveFigure(null);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [activeFigure]);

  return (
    <section
      id="tokoh"
      className="
        relative
        overflow-hidden

        bg-[#080808]

        text-[#f2ede3]
      "
    >

      {/* =====================================================
          RED ATMOSPHERE — BACKGROUND UTAMA
          
          Seluruh TokohSection sekarang memiliki atmosfer merah.
          ===================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-[radial-gradient(
            ellipse_at_50%_18%,
            rgba(150,0,0,0.38) 0%,
            rgba(110,0,0,0.25) 25%,
            rgba(65,0,0,0.14) 48%,
            transparent 72%
          )]
        "
      />

      {/* =====================================================
          RED ATMOSPHERE SISI KIRI
          ===================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          -left-[15%]
          top-[5%]

          h-[650px]
          w-[650px]

          rounded-full

          bg-[#8f0000]/20

          blur-[130px]
        "
      />

      {/* =====================================================
          RED ATMOSPHERE SISI KANAN
          ===================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          -right-[15%]
          top-[18%]

          h-[600px]
          w-[600px]

          rounded-full

          bg-[#a00000]/16

          blur-[130px]
        "
      />

      {/* =====================================================
          DARK CENTER OVERLAY

          Membuat area card tetap gelap meskipun background
          section sekarang lebih merah.
          ===================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-[radial-gradient(
            ellipse_at_center,
            rgba(8,8,8,0.20) 0%,
            rgba(8,8,8,0.48) 55%,
            rgba(8,8,8,0.82) 100%
          )]
        "
      />

      {/* =====================================================
          TOP FADE

          Menyambungkan HeroTokoh → TokohSection.
          ===================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0

          h-[170px]

          bg-gradient-to-b
          from-[#080808]
          via-[#260000]/70
          to-transparent

          sm:h-[190px]

          md:h-[210px]
        "
      />

      {/* =====================================================
          BOTTOM FADE

          Supaya merah perlahan kembali menuju hitam
          sebelum section berikutnya.
          ===================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0

          h-[220px]

          bg-gradient-to-t
          from-[#080808]
          via-[#080808]/70
          to-transparent
        "
      />

      {/* =====================================================
          CONTENT
          ===================================================== */}
      <div
        className="
          relative
          z-10

          mx-auto
          max-w-[1600px]

          px-5
          pb-24
          pt-10

          sm:px-8
          sm:pb-28
          sm:pt-12

          md:px-12

          lg:px-16
          lg:pb-32
          lg:pt-14

          xl:px-20
        "
      >

        {/* =================================================
            CARDS
            ================================================= */}
        <div
          className={`
            grid
            gap-2

            sm:grid-cols-2

            transition-all
            duration-1000

            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }
          `}
        >
          {figures.map((figure) => (
            <button
              key={figure.number}
              type="button"
              onClick={() =>
                setActiveFigure(figure)
              }
              className="
                group
                relative
                overflow-hidden

                min-h-[190px]

                border
                border-[#3f0808]

                bg-[#090202]

                p-5

                text-left

                transition-all
                duration-500

                hover:border-[#9d1515]
                hover:bg-[#0d0202]

                sm:min-h-[205px]
                sm:p-6

                lg:min-h-[215px]
                lg:p-7
              "
            >
              {/* CARD RED ATMOSPHERE */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0

                  bg-[#7f0505]/[0.025]

                  opacity-0

                  transition-opacity
                  duration-500

                  group-hover:opacity-100
                "
              />

              {/* CARD CONTENT */}
              <div className="relative z-10">

                {/* TOP */}
                <div
                  className="
                    flex
                    items-start
                    justify-between
                  "
                >
                  <span
                    className="
                      font-display
                      text-3xl

                      text-[#d52222]

                      sm:text-4xl
                    "
                  >
                    {figure.number}
                  </span>

                  <span
                    className="
                      border
                      border-[#611010]

                      px-2
                      py-1

                      text-[7px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]

                      text-[#a66d6d]

                      sm:text-[8px]
                    "
                  >
                    {figure.role}
                  </span>
                </div>

                {/* NAME */}
                <div className="mt-7 sm:mt-8">

                  <h3
                    className="
                      font-display
                      text-xl

                      text-[#f3e8e8]

                      sm:text-2xl
                    "
                  >
                    {figure.name}
                  </h3>

                  <p
                    className="
                      mt-3

                      max-w-[90%]

                      text-[9px]
                      leading-5

                      text-[#9f8585]

                      sm:text-[10px]
                      sm:leading-6
                    "
                  >
                    {figure.description}
                  </p>

                </div>
              </div>

              {/* ARROW */}
              <span
                className="
                  absolute
                  bottom-5
                  right-5

                  flex
                  h-7
                  w-7
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-[#581010]

                  text-[10px]
                  text-[#b87979]

                  transition-all
                  duration-300

                  group-hover:translate-x-1
                  group-hover:border-[#c21d1d]
                  group-hover:text-[#ed3535]

                  sm:bottom-6
                  sm:right-6
                "
              >
                →
              </span>

              {/* RED BOTTOM LINE */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0

                  h-px
                  w-0

                  bg-[#d02222]

                  transition-all
                  duration-500

                  group-hover:w-full
                "
              />
            </button>
          ))}
        </div>

        {/* =================================================
            CATATAN SEJARAH
            ================================================= */}
        <div
          className="
            mt-24

            sm:mt-28

            lg:mt-32
          "
        >
          <div
            className="
              border-l
              border-[#a51616]

              pl-5

              sm:pl-8

              md:pl-10
            "
          >

            {/* HEADER */}
            <div
              className="
                flex
                items-center
                justify-between
              "
            >
              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.3em]

                  text-[#d02222]

                  sm:text-[9px]
                "
              >
                Catatan Sejarah
              </span>

              <span
                className="
                  hidden

                  text-[8px]
                  uppercase
                  tracking-[0.35em]

                  text-[#6f4141]

                  sm:block
                "
              >
                1965 / Jakarta
              </span>
            </div>

            {/* TEXT */}
            <p
              className="
                mt-6

                max-w-[1050px]

                text-sm
                leading-8

                text-[#b99d9d]

                sm:text-base
                sm:leading-9

                lg:text-lg
                lg:leading-10
              "
            >
              Hubungan antar-tokoh dan tingkat keterlibatan
              masing-masing menjadi bagian dari perdebatan
              historiografi mengenai G30S. Karena itu, setiap
              nama perlu dibaca bersama sumber dan konteks
              keterangannya.
            </p>

          </div>
        </div>

        {/* =================================================
            SECTION FOOTER
            ================================================= */}
        <div
          className="
            mt-24

            flex
            items-center
            justify-between

            border-t
            border-[#260606]

            pt-7

            text-[8px]
            uppercase
            tracking-[0.3em]

            text-[#6f4141]

            sm:mt-28
            sm:text-[9px]
          "
        >
          <span>
            04 — Tokoh
          </span>

          <span>
            Continue ↓
          </span>
        </div>

      </div>

      {/* =====================================================
          MODAL
          ===================================================== */}
      {activeFigure && (
        <div
          className="
            fixed
            inset-0
            z-50

            flex
            items-center
            justify-center

            bg-black/90

            p-5

            backdrop-blur-md
          "
          onClick={() =>
            setActiveFigure(null)
          }
        >
          <div
            className="
              relative

              max-h-[90vh]
              w-full
              max-w-3xl

              overflow-y-auto

              border
              border-[#691010]

              bg-[#180202]
            "
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* CLOSE */}
            <button
              type="button"
              onClick={() =>
                setActiveFigure(null)
              }
              aria-label="Tutup"
              className="
                absolute
                right-5
                top-5
                z-20

                flex
                h-9
                w-9
                items-center
                justify-center

                border
                border-[#711414]

                bg-[#180202]

                text-sm
                text-[#c38b8b]

                transition

                hover:border-[#c21d1d]
                hover:text-[#ed3535]
              "
            >
              ×
            </button>

            <div
              className="
                grid

                md:grid-cols-[280px_1fr]
              "
            >

              {/* IMAGE */}
              <div
                className="
                  relative
                  aspect-[4/5]
                  overflow-hidden

                  bg-[#240303]

                  md:aspect-auto
                "
              >
                <img
                  src={activeFigure.image}
                  alt={activeFigure.name}
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />

                <div
                  className="
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-[#160202]
                    via-[#7f0505]/20
                    to-transparent
                  "
                />
              </div>

              {/* DETAILS */}
              <div className="p-7 sm:p-9">

                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <span
                    className="
                      font-display
                      text-3xl

                      text-[#d02222]
                    "
                  >
                    {activeFigure.number}
                  </span>

                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.25em]

                      text-[#a76f6f]
                    "
                  >
                    {activeFigure.role}
                  </span>
                </div>

                <h3
                  className="
                    mt-5

                    font-display
                    text-3xl
                    leading-none

                    text-[#f2ede3]

                    sm:text-4xl
                  "
                >
                  {activeFigure.name}
                </h3>

                <div
                  className="
                    mt-6

                    h-px
                    w-14

                    bg-[#a51616]
                  "
                />

                <p
                  className="
                    mt-6

                    text-sm
                    leading-7

                    text-[#c9b2b2]
                  "
                >
                  {activeFigure.description}
                </p>

                <div className="mt-7 space-y-4">
                  {activeFigure.details.map(
                    (detail, index) => (
                      <div
                        key={index}
                        className="
                          flex
                          gap-4
                        "
                      >
                        <span
                          className="
                            mt-2

                            h-1.5
                            w-1.5

                            shrink-0
                            rounded-full

                            bg-[#c21d1d]
                          "
                        />

                        <p
                          className="
                            text-sm
                            leading-7

                            text-[#ae9292]
                          "
                        >
                          {detail}
                        </p>
                      </div>
                    )
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default TokohSection;