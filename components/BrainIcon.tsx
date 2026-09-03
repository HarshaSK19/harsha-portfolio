type BrainIconProps = {
  className?: string;
  idPrefix?: string;
};

export default function BrainIcon({
  className = "",
  idPrefix = "brain",
}: BrainIconProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id={`${idPrefix}-fill`}
          x1="20%"
          y1="8%"
          x2="85%"
          y2="95%"
        >
          <stop offset="0%" stopColor="#ffd9f0" />
          <stop offset="45%" stopColor="#ff7ac9" />
          <stop offset="100%" stopColor="#e0299a" />
        </linearGradient>
        <linearGradient
          id={`${idPrefix}-shine`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* outer brain silhouette */}
      <path
        d="M100 18
           C78 18 62 28 56 44
           C36 44 22 60 24 78
           C10 84 6 104 18 116
           C10 130 16 150 34 156
           C34 170 48 182 64 180
           C70 190 88 194 100 188
           C112 194 130 190 136 180
           C152 182 166 170 166 156
           C184 150 190 130 182 116
           C194 104 190 84 176 78
           C178 60 164 44 144 44
           C138 28 122 18 100 18 Z"
        fill={`url(#${idPrefix}-fill)`}
        stroke="#ff9fd8"
        strokeWidth="1.5"
      />

      {/* central divide */}
      <path
        d="M100 22 C93 60 93 130 100 186"
        fill="none"
        stroke="#c21f80"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />

      {/* gyri folds - left hemisphere */}
      <path d="M46 56 C54 60 54 70 46 72" fill="none" stroke="#c21f80" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M32 80 C42 82 44 92 34 96" fill="none" stroke="#c21f80" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M26 108 C38 108 42 118 32 122" fill="none" stroke="#c21f80" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M42 138 C52 136 60 144 54 152" fill="none" stroke="#c21f80" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M70 165 C78 160 86 166 82 174" fill="none" stroke="#c21f80" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

      {/* gyri folds - right hemisphere */}
      <path d="M154 56 C146 60 146 70 154 72" fill="none" stroke="#c21f80" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M168 80 C158 82 156 92 166 96" fill="none" stroke="#c21f80" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M174 108 C162 108 158 118 168 122" fill="none" stroke="#c21f80" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M158 138 C148 136 140 144 146 152" fill="none" stroke="#c21f80" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M130 165 C122 160 114 166 118 174" fill="none" stroke="#c21f80" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

      {/* glossy highlight */}
      <ellipse
        cx="72"
        cy="52"
        rx="34"
        ry="20"
        fill={`url(#${idPrefix}-shine)`}
        transform="rotate(-25 72 52)"
      />

      {/* brain stem */}
      <path
        d="M90 186 C90 197 96 203 100 203 C104 203 110 197 110 186 Z"
        fill={`url(#${idPrefix}-fill)`}
        stroke="#ff9fd8"
        strokeWidth="1.5"
      />
    </svg>
  );
}