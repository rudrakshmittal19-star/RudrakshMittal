export function hexToRgba(hex: string, alpha: number): string {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const bigint = parseInt(full, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/** Mixes a hex color toward white or black by `amount` (0-1). */
export function mix(hex: string, target: "white" | "black", amount: number): string {
  const h = hex.replace("#", "");
  const bigint = parseInt(h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  const t = target === "white" ? 255 : 0;
  const mixed = [r, g, b].map((c) => Math.round(c + (t - c) * amount));
  return `rgb(${mixed[0]}, ${mixed[1]}, ${mixed[2]})`;
}
