import { createTheme } from "@mui/material/styles";

const heading = '"Manrope Variable", "Inter Variable", system-ui, sans-serif';
const body = '"Inter Variable", system-ui, sans-serif';

const theme = createTheme({
  palette: {
    primary: { main: "#0f766e", dark: "#115e59", contrastText: "#ffffff" },
    secondary: { main: "#c2410c", dark: "#9a3412", contrastText: "#ffffff" },
    background: { default: "#f0fdfa", paper: "#ffffff" },
    text: { primary: "#0f2e2b", secondary: "#475569" },
    error: { main: "#dc2626" },
    // legacy custom keys kept for existing components
    brandColor: { royalBlue: "#1E40AF", teal: "#34D399" },
    BrandTitle: { mainColor: "#64FCD9" },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: body,
    h1: { fontFamily: heading, fontWeight: 800 },
    h2: { fontFamily: heading, fontWeight: 800 },
    h3: { fontFamily: heading, fontWeight: 700 },
    h4: { fontFamily: heading, fontWeight: 700 },
    h5: { fontFamily: heading, fontWeight: 700 },
    h6: { fontFamily: heading, fontWeight: 700 },
    button: { fontFamily: heading, fontWeight: 700, textTransform: "none" },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 9999,
          minHeight: 44,
          paddingInline: 22,
          transition: "background-color 200ms ease-out, transform 200ms ease-out",
          "&:active": { transform: "scale(0.97)" },
        },
      },
    },
    MuiIconButton: { styleOverrides: { root: { minWidth: 44, minHeight: 44 } } },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          backgroundColor: "#fff",
          "& fieldset": { borderColor: "#99f6e4" },
          "&:hover fieldset": { borderColor: "#14b8a6" },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: "0 1px 2px rgb(19 78 74 / 0.06), 0 8px 24px rgb(19 78 74 / 0.08)",
        },
      },
    },
    MuiAppBar: { styleOverrides: { root: { boxShadow: "none" } } },
  },
});

export { theme };
