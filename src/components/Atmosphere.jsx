import { useEffect } from "react";

function Atmosphere() {
  useEffect(() => {
    let ticking = false;

    const stops = [
      { position: 0.00, color: [8, 8, 8] },
      { position: 0.25, color: [70, 14, 14] },
      { position: 0.45, color: [128, 106, 74] },
      { position: 0.65, color: [55, 53, 48] },
      { position: 0.82, color: [196, 154, 90] },
      { position: 1.00, color: [210, 198, 175] },
    ];

    const updateAtmosphere = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        maxScroll > 0
          ? Math.min(Math.max(window.scrollY / maxScroll, 0), 1)
          : 0;

      let left = stops[0];
      let right = stops[stops.length - 1];

      for (let i = 0; i < stops.length - 1; i++) {
        if (
          progress >= stops[i].position &&
          progress <= stops[i + 1].position
        ) {
          left = stops[i];
          right = stops[i + 1];
          break;
        }
      }

      const range = right.position - left.position;

      const localProgress =
        range === 0
          ? 0
          : (progress - left.position) / range;

      const r = Math.round(
        left.color[0] +
          (right.color[0] - left.color[0]) *
            localProgress
      );

      const g = Math.round(
        left.color[1] +
          (right.color[1] - left.color[1]) *
            localProgress
      );

      const b = Math.round(
        left.color[2] +
          (right.color[2] - left.color[2]) *
            localProgress
      );

      const x =
        50 +
        Math.sin(progress * Math.PI * 2) * 18;

      const y =
        40 +
        Math.cos(progress * Math.PI * 2) * 12;

      document.documentElement.style.setProperty(
        "--atmo-r",
        r
      );

      document.documentElement.style.setProperty(
        "--atmo-g",
        g
      );

      document.documentElement.style.setProperty(
        "--atmo-b",
        b
      );

      document.documentElement.style.setProperty(
        "--atmo-x",
        `${x}%`
      );

      document.documentElement.style.setProperty(
        "--atmo-y",
        `${y}%`
      );

      document.documentElement.style.setProperty(
        "--atmo-progress",
        progress
      );

      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;
      requestAnimationFrame(updateAtmosphere);
    };

    updateAtmosphere();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleScroll
      );
    };
  }, []);

  return (
    <div
      className="site-atmosphere"
      aria-hidden="true"
    >
      <div className="site-atmosphere__glow" />
      <div className="site-atmosphere__vignette" />
    </div>
  );
}

export default Atmosphere;