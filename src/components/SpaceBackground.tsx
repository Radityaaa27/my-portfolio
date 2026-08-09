// Fixed, full-viewport ambient backdrop — mounted once at the app root.
// Because it's `position: fixed`, page content scrolling over it produces
// a natural parallax with zero JS and no scroll listeners.

const TWINKLE_STARS = [
  { top: "12%", left: "18%", size: 2, delay: "0s", duration: "5s" },
  { top: "22%", left: "72%", size: 1.5, delay: "1.2s", duration: "6.5s" },
  { top: "38%", left: "42%", size: 1.5, delay: "2.4s", duration: "7s" },
  { top: "58%", left: "85%", size: 2, delay: "0.6s", duration: "5.5s" },
  { top: "68%", left: "8%", size: 1.5, delay: "3s", duration: "6s" },
  { top: "80%", left: "55%", size: 2, delay: "1.8s", duration: "7.5s" },
  { top: "90%", left: "28%", size: 1.5, delay: "2.6s", duration: "6.2s" },
  { top: "5%", left: "50%", size: 1.5, delay: "0.9s", duration: "5.8s" },
];

export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* base */}
      <div className="absolute inset-0 bg-bg" />

      {/* soft nebula glow — two low-opacity radial blobs, no blur filter for cheap perf */}
      <div
        className="absolute -top-1/4 -right-1/4 w-[70vw] h-[70vw] rounded-full opacity-[0.10]"
        style={{
          background:
            "radial-gradient(circle, var(--color-cosmic) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute -bottom-1/3 -left-1/4 w-[60vw] h-[60vw] rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent) 0%, transparent 65%)",
        }}
      />

      {/* dense static starfield via tiled radial-gradient points — cheap, no DOM cost */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 20px 30px, rgba(233,231,224,0.9) 100%, transparent), " +
            "radial-gradient(1px 1px at 90px 140px, rgba(233,231,224,0.7) 100%, transparent), " +
            "radial-gradient(1px 1px at 160px 60px, rgba(233,231,224,0.8) 100%, transparent), " +
            "radial-gradient(1px 1px at 220px 190px, rgba(233,231,224,0.6) 100%, transparent), " +
            "radial-gradient(1px 1px at 40px 200px, rgba(233,231,224,0.7) 100%, transparent), " +
            "radial-gradient(1px 1px at 280px 90px, rgba(233,231,224,0.8) 100%, transparent)",
          backgroundSize: "300px 260px",
        }}
      />

      {/* a handful of individually twinkling stars for organic life */}
      {TWINKLE_STARS.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-cosmic motion-safe:animate-[star-breathe_var(--dur)_ease-in-out_infinite]"
          style={
            {
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              opacity: 0.7,
              animationDelay: s.delay,
              "--dur": s.duration,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
