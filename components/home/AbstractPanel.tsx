export default function AbstractPanel() {
  return (
    <svg viewBox="0 0 300 340" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <linearGradient id="panelBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3E4750" />
          <stop offset="100%" stopColor="#161512" />
        </linearGradient>
        <linearGradient id="panelChrome" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F4F2ED" stopOpacity="0.05" />
          <stop offset="50%" stopColor="#F4F2ED" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#F4F2ED" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      <rect width="300" height="340" fill="url(#panelBg)" />

      <g stroke="url(#panelChrome)" strokeWidth="1" fill="none">
        <line x1="0" y1="90" x2="300" y2="90" strokeOpacity="0.5" />
        <line x1="0" y1="250" x2="300" y2="250" strokeOpacity="0.3" />
        <line x1="90" y1="0" x2="90" y2="340" strokeOpacity="0.25" />
      </g>

      <g transform="translate(170 190)">
        <circle r="70" fill="none" stroke="#F4F2ED" strokeOpacity="0.6" strokeWidth="1" />
        <circle r="46" fill="none" stroke="#A9BEDD" strokeOpacity="0.7" strokeWidth="1" />
        <circle r="4" fill="#F4F2ED" fillOpacity="0.85" />
      </g>
    </svg>
  );
}
