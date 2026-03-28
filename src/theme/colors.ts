/**
 * App palette — keep in sync with `@theme` in `src/styles/global.css`.
 * Use Tailwind utilities (text-ink, bg-night, …) in components; this object
 * is for typed reference, canvas/SVG in JS, or documentation.
 */
export const themeColors = {
  ink: "#090040",
  lightPurple: "#b030b0",
  darkPurple: "#202040",
  surface: "#ffffff",
  night: "#0c0630",
  nightRaised: "#160d45",
  nightBorder: "#2a2160",
} as const;

export type ThemeColorName = keyof typeof themeColors;
