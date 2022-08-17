import { extendTheme } from "@chakra-ui/react"

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
}

const colors = {
  base: "rgba(143,159,151,0.8)",
  primary: "rgba(219,223,212,0.8)",
  secondary: "rgba(145,175,157,0.8)",
}

const fontSizes = {
  "2xs": "0.45rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem",
}

const letterSpacing = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em",
}

export const appTheme = extendTheme({
  breakpoints,
  colors,
  fontSizes,
  letterSpacing,
})
