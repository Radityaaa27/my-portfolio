// A restrained, decorative star-map motif. Purely aesthetic — does not
// represent any real feature or data from Cosmos Explorer.
const stars = [
  { x: 40, y: 60 }, { x: 140, y: 30 }, { x: 230, y: 90 }, { x: 320, y: 45 },
  { x: 400, y: 110 }, { x: 480, y: 60 }, { x: 560, y: 130 }, { x: 90, y: 160 },
  { x: 260, y: 190 }, { x: 420, y: 200 }, { x: 610, y: 70 }, { x: 190, y: 120 },
];

const links: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [1, 11], [11, 8], [8, 9], [9, 10],
];

interface ConstellationProps {
  className?: string;
  /** "cosmic" (default, used site-wide) or "accent" (reserved for Cosmos Explorer). */
  tone?: "cosmic" | "accent";
}

export default function Constellation({ className = "", tone = "cosmic" }: ConstellationProps) {
  const color = tone === "accent" ? "var(--color-accent)" : "var(--color-cosmic)";

  return (
    <svg
      className={className}
      viewBox="0 0 650 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {links.map(([a, b], i) => (
        <line
          key={i}
          x1={stars[a].x}
          y1={stars[a].y}
          x2={stars[b].x}
          y2={stars[b].y}
          stroke={color}
          strokeOpacity="0.18"
          strokeWidth="1"
        />
      ))}
      {stars.map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r={i % 3 === 0 ? 2 : 1.3} fill={color} fillOpacity="0.5" />
      ))}
    </svg>
  );
}
