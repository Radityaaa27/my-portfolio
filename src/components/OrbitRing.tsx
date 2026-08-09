// A single faint orbit ring with one slow-moving point. Used sparingly —
// this is the astronomy motif's "quiet" register, distinct from the denser
// constellation treatment reserved for Cosmos Explorer.
export default function OrbitRing({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <svg viewBox="0 0 240 240" className="w-full h-full">
        <ellipse
          cx="120"
          cy="120"
          rx="110"
          ry="70"
          stroke="var(--color-cosmic)"
          strokeOpacity="0.25"
          strokeWidth="1"
          fill="none"
        />
        <ellipse
          cx="120"
          cy="120"
          rx="70"
          ry="95"
          stroke="var(--color-cosmic)"
          strokeOpacity="0.14"
          strokeWidth="1"
          fill="none"
        />
      </svg>
      <div
        className="absolute inset-0 motion-safe:animate-[orbit-spin_46s_linear_infinite]"
        style={{ transformOrigin: "50% 50%" }}
      >
        <span
          className="absolute w-1.5 h-1.5 rounded-full bg-accent"
          style={{ top: "50%", left: "8%", boxShadow: "0 0 6px var(--color-accent)" }}
        />
      </div>
    </div>
  );
}
