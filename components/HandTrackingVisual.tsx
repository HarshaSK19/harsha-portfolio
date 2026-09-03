type Point = [number, number];

const WRIST: Point = [150, 248];

// index, middle, ring, pinky each: [base, mid1, mid2, tip]
// thumb: [base, mid, ip, tip]
const FINGERS: Point[][] = [
  [
    [124, 222],
    [100, 192],
    [82, 165],
    [70, 142],
  ],
  [
    [128, 202],
    [122, 152],
    [118, 112],
    [115, 82],
  ],
  [
    [152, 196],
    [152, 138],
    [152, 93],
    [152, 58],
  ],
  [
    [176, 200],
    [180, 146],
    [183, 106],
    [186, 76],
  ],
  [
    [198, 210],
    [204, 166],
    [208, 133],
    [212, 106],
  ],
];

function buildLines() {
  const lines: { x1: number; y1: number; x2: number; y2: number }[] = [];

  FINGERS.forEach((finger) => {
    lines.push({ x1: WRIST[0], y1: WRIST[1], x2: finger[0][0], y2: finger[0][1] });
    for (let i = 0; i < finger.length - 1; i++) {
      lines.push({
        x1: finger[i][0],
        y1: finger[i][1],
        x2: finger[i + 1][0],
        y2: finger[i + 1][1],
      });
    }
  });

  for (let i = 0; i < FINGERS.length - 1; i++) {
    lines.push({
      x1: FINGERS[i][0][0],
      y1: FINGERS[i][0][1],
      x2: FINGERS[i + 1][0][0],
      y2: FINGERS[i + 1][0][1],
    });
  }

  return lines;
}

const LINES = buildLines();
const DOTS: Point[] = [WRIST, ...FINGERS.flat()];

export default function HandTrackingVisual({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 300 300"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="hand-palm-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#55e6d1" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#55e6d1" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* orbit rings framing the hand */}
      <circle cx="150" cy="150" r="128" fill="none" stroke="rgba(85,230,209,0.18)" strokeWidth="1" />
      <circle cx="150" cy="150" r="128" fill="none" stroke="rgba(85,230,209,0.06)" strokeWidth="22" />

      {/* soft translucent hand silhouette */}
      <path
        d="M150 250
           C120 250 100 240 92 222
           C80 218 72 200 78 186
           C68 178 64 160 74 148
           C66 138 64 118 76 108
           C72 96 78 80 92 80
           C96 66 112 60 120 74
           C126 62 140 58 148 70
           C156 58 170 62 176 76
           C186 64 200 70 202 84
           C214 86 220 102 214 114
           C224 124 224 142 212 150
           C220 162 216 180 204 186
           C208 200 200 216 186 220
           C178 238 166 250 150 250 Z"
        fill="rgba(224,172,140,0.07)"
        stroke="rgba(224,172,140,0.16)"
        strokeWidth="1.5"
      />

      {/* landmark skeleton lines */}
      {LINES.map((l, i) => (
        <line
          key={i}
          x1={l.x1}
          y1={l.y1}
          x2={l.x2}
          y2={l.y2}
          stroke="rgba(85,230,209,0.55)"
          strokeWidth="1.4"
        />
      ))}

      {/* palm glow */}
      <circle cx="150" cy="205" r="26" fill="url(#hand-palm-glow)" />
      <circle cx="150" cy="205" r="6" fill="#55e6d1" />

      {/* landmark points */}
      {DOTS.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i === 0 ? 5 : 3.5}
          fill="#8ff5e6"
          stroke="#0b1224"
          strokeWidth="1"
        />
      ))}

      {/* ambient particles */}
      <circle cx="40" cy="60" r="3" fill="#4f9cff" opacity="0.6" />
      <circle cx="262" cy="88" r="2.5" fill="#9d70ff" opacity="0.5" />
      <circle cx="252" cy="232" r="3" fill="#55e6d1" opacity="0.5" />
      <circle cx="34" cy="222" r="2" fill="#ffffff" opacity="0.4" />
    </svg>
  );
}