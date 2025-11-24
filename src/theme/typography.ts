export const typography = {
  // Font families - using system fonts
  fonts: {
    regular: "System",
    medium: "System",
    bold: "System",
  },

  // Font sizes
  sizes: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    "2xl": 24,
    "3xl": 30,
    "4xl": 36,
    "5xl": 48,
  },

  // Line heights
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },

  // Font weights
  weights: {
    regular: "400" as const,
    medium: "500" as const,
    bold: "700" as const,
  },
};

export type Typography = typeof typography;
