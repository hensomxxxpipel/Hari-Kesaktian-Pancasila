import Reveal from "../components/Reveal";

export default function AngkatanKelimaSection() {
  return (
    <section
      id="angkatan-kelima"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#080808]
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/assets/bg3.png"
          alt=""
          aria-hidden="true"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover

            object-[82%_top]

            md:object-[72%_center]
          "
        />

        {/* Overall overlay */}
        <div
          className="
            absolute
            inset-0
            bg-black/58
            md:bg-black/35
          "
        />

        {/* =====================================================
            DESKTOP LEFT GRADIENT
        ===================================================== */}
        <div
          className="
            absolute
            inset-0
            hidden
            bg-gradient-to-r
            from-[#080808]/95
            via-[#080808]/68
            to-transparent
            md:block
          "
        />

        {/* =====================================================
            MOBILE GRADIENT
        ===================================================== */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#080808]/90
            via-[#080808]/62
            to-[#080808]/92
            md:hidden
          "
        />

        {/* Mobile extra side darkness */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#080808]/65
            via-transparent
            to-[#080808]/45
            md:hidden
          "
        />

        {/* Bottom fade */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[25%]
            bg-gradient-to-t
            from-[#080808]
            via-[#080808]/65
            to-transparent
          "
        />

        {/* Top fade */}
        <div
          className="
            absolute
            inset-x-0
            top-0
            h-[12%]
            bg-gradient-to-b
            from-[#080808]/65
            to-transparent
          "
        />
      </div>

      {/* =========================================================
          DECORATIVE LINES
      ========================================================= */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
        "
      >
        <div
          className="
            absolute
            left-[7%]
            top-0
            h-full
            w-px
            bg-white/[0.05]
          "
        />

        <div
          className="
            absolute
            right-[7%]
            top-0
            h-full
            w-px
            bg-white/[0.05]
          "
        />

        <div
          className="
            absolute
            left-0
            right-0
            top-[18%]
            h-px
            bg-white/[0.035]
          "
        />
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-[min(1200px,calc(100%-32px))]
          px-4
          py-20

          md:flex
          md:min-h-screen
          md:w-[min(1200px,calc(100%-96px))]
          md:items-center
          md:px-8
          md:py-24
        "
      >
        <div className="w-full">

          {/* =====================================================
              CHAPTER
          ===================================================== */}
          <Reveal direction="left">
            <div
              className="
                mb-5
                flex
                items-center
                gap-3
                md:mb-6
                md:gap-4
              "
            >
              <span
                className="
                  h-px
                  w-8
                  bg-[#c49a5a]
                  md:w-14
                "
              />

              <span
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.32em]
                  text-[#c49a5a]
                  md:text-[9px]
                  md:tracking-[0.35em]
                "
              >
                Chapter 03
              </span>
            </div>
          </Reveal>

          {/* =====================================================
              TITLE
          ===================================================== */}
          <Reveal delay={100}>
            <h2
              className="
                max-w-3xl
                font-display
                text-[clamp(34px,9vw,48px)]
                font-medium
                leading-[0.94]
                tracking-[-0.04em]
                text-[#f2ede3]
                drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]

                md:text-[clamp(48px,5vw,68px)]
                md:leading-[0.94]
              "
            >
              Angkatan Kelima
              <br />
              dan{" "}
              <span className="text-[#c49a5a]">
                Penolakan Ahmad Yani
              </span>
            </h2>
          </Reveal>

          {/* =====================================================
              INTRO
          ===================================================== */}
          <Reveal delay={220}>
            <div
              className="
                mt-6
                max-w-xl
                md:mt-7
              "
            >
              <p
                className="
                  border-l
                  border-[#c49a5a]
                  pl-4
                  text-[12px]
                  leading-6
                  text-[#d1cbc1]
                  drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]

                  md:pl-5
                  md:text-sm
                  md:leading-7
                "
              >
                Dua pandangan tentang pertahanan negara
                berbenturan pada 1965. Bandingkan keduanya.
              </p>
            </div>
          </Reveal>

          {/* =====================================================
              COMPARISON
          ===================================================== */}
          <div
            className="
              mt-8
              grid
              grid-cols-1
              gap-4

              md:mt-10
              md:grid-cols-2
              md:gap-5
            "
          >

            {/* ===================================================
                CARD 01 — ANGKATAN KELIMA
            =================================================== */}
            <Reveal direction="left" delay={300}>
              <article
                className="
                  relative
                  border
                  border-white/[0.09]
                  bg-black/70
                  p-5
                  backdrop-blur-[7px]

                  md:p-6
                "
              >
                {/* Number */}
                <span
                  className="
                    absolute
                    right-5
                    top-4
                    font-display
                    text-3xl
                    text-white/[0.07]
                    md:right-6
                    md:top-5
                  "
                >
                  01
                </span>

                {/* Label */}
                <div
                  className="
                    mb-4
                    flex
                    items-center
                    gap-3
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#b91c1c]
                      md:h-2
                      md:w-2
                    "
                  />

                  <span
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-[#c49a5a]
                    "
                  >
                    Gagasan
                  </span>
                </div>

                {/* Heading */}
                <h3
                  className="
                    font-display
                    text-[23px]
                    font-medium
                    leading-tight
                    tracking-[-0.025em]
                    text-[#f2ede3]

                    md:text-[28px]
                  "
                >
                  Angkatan Kelima
                </h3>

                <div
                  className="
                    my-4
                    h-px
                    w-9
                    bg-[#c49a5a]

                    md:my-5
                    md:w-10
                  "
                />

                {/* Content */}
                <p
                  className="
                    text-[12px]
                    leading-6
                    text-[#d0cbc3]

                    md:text-sm
                    md:leading-7
                  "
                >
                  PKI mendukung gagasan pembentukan{" "}
                  <span className="text-[#f2ede3]">
                    Angkatan Kelima
                  </span>
                  , yaitu kekuatan bersenjata yang terdiri
                  atas buruh dan tani.
                </p>

                <p
                  className="
                    mt-4
                    text-[12px]
                    leading-6
                    text-[#d0cbc3]

                    md:text-sm
                    md:leading-7
                  "
                >
                  Gagasan ini dikemukakan untuk memperkuat
                  pertahanan nasional, terutama dalam
                  menghadapi Konfrontasi Indonesia–Malaysia.
                </p>

                {/* Footer */}
                <div
                  className="
                    mt-5
                    flex
                    items-center
                    gap-3
                    border-t
                    border-white/[0.07]
                    pt-4
                  "
                >
                  <span
                    className="
                      h-px
                      w-7
                      bg-[#b91c1c]
                    "
                  />

                  <span
                    className="
                      text-[7px]
                      uppercase
                      tracking-[0.25em]
                      text-[#918c84]
                    "
                  >
                    Buruh &amp; Tani
                  </span>
                </div>
              </article>
            </Reveal>

            {/* ===================================================
                CARD 02 — AHMAD YANI
            =================================================== */}
            <Reveal direction="right" delay={400}>
              <article
                className="
                  relative
                  border
                  border-white/[0.09]
                  bg-black/70
                  p-5
                  backdrop-blur-[7px]

                  md:p-6
                "
              >
                {/* Number */}
                <span
                  className="
                    absolute
                    right-5
                    top-4
                    font-display
                    text-3xl
                    text-white/[0.07]
                    md:right-6
                    md:top-5
                  "
                >
                  02
                </span>

                {/* Label */}
                <div
                  className="
                    mb-4
                    flex
                    items-center
                    gap-3
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#c49a5a]
                      md:h-2
                      md:w-2
                    "
                  />

                  <span
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-[#c49a5a]
                    "
                  >
                    Sikap Angkatan Darat
                  </span>
                </div>

                {/* Heading */}
                <h3
                  className="
                    font-display
                    text-[23px]
                    font-medium
                    leading-tight
                    tracking-[-0.025em]
                    text-[#f2ede3]

                    md:text-[28px]
                  "
                >
                  Ahmad Yani
                </h3>

                <div
                  className="
                    my-4
                    h-px
                    w-9
                    bg-[#c49a5a]

                    md:my-5
                    md:w-10
                  "
                />

                {/* Content */}
                <p
                  className="
                    text-[12px]
                    leading-6
                    text-[#d0cbc3]

                    md:text-sm
                    md:leading-7
                  "
                >
                  Jenderal Ahmad Yani, selaku
                  Menteri/Panglima Angkatan Darat, menolak
                  gagasan tersebut.
                </p>

                <p
                  className="
                    mt-4
                    text-[12px]
                    leading-6
                    text-[#d0cbc3]

                    md:text-sm
                    md:leading-7
                  "
                >
                  Pembentukan kekuatan bersenjata di luar
                  struktur militer dikhawatirkan dapat
                  mengubah keseimbangan kekuatan dan
                  memperbesar pengaruh politik PKI.
                </p>

                <p
                  className="
                    mt-4
                    text-[12px]
                    leading-6
                    text-[#d0cbc3]

                    md:text-sm
                    md:leading-7
                  "
                >
                  Ia juga menentang{" "}
                  <span className="text-[#f2ede3]">
                    Nasakomisasi ABRI
                  </span>
                  , yaitu gagasan memasukkan unsur politik
                  Nasakom ke dalam institusi militer.
                </p>

                {/* Footer */}
                <div
                  className="
                    mt-5
                    flex
                    items-center
                    gap-3
                    border-t
                    border-white/[0.07]
                    pt-4
                  "
                >
                  <span
                    className="
                      h-px
                      w-7
                      bg-[#c49a5a]
                    "
                  />

                  <span
                    className="
                      text-[7px]
                      uppercase
                      tracking-[0.25em]
                      text-[#918c84]
                    "
                  >
                    Angkatan Darat
                  </span>
                </div>
              </article>
            </Reveal>
          </div>

          {/* =====================================================
              CONCLUSION
          ===================================================== */}
          <Reveal delay={520}>
            <div
              className="
                mx-auto
                mt-7
                max-w-2xl
                border-t
                border-white/[0.08]
                pt-5
                text-center

                md:mt-8
                md:pt-6
              "
            >
              <p
                className="
                  font-display
                  text-[14px]
                  italic
                  leading-6
                  text-[#ddd6cb]
                  drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]

                  md:text-lg
                  md:leading-7
                "
              >
                Perbedaan pandangan ini semakin memperuncing
                ketegangan antara pimpinan Angkatan Darat
                dan PKI.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* =========================================================
          LARGE CHAPTER NUMBER — DESKTOP ONLY
      ========================================================= */}
      <div
        className="
          pointer-events-none
          absolute
          right-[7%]
          top-1/2
          z-10
          hidden
          -translate-y-1/2
          md:block
        "
      >
        <span
          className="
            font-display
            text-6xl
            font-medium
            tracking-[-0.05em]
            text-white/[0.08]
          "
        >
          03
        </span>
      </div>

      {/* =========================================================
          BOTTOM TRANSITION
      ========================================================= */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-20
          bg-gradient-to-t
          from-[#080808]
          to-transparent
        "
      />
    </section>
  );
}