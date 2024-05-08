"use client"
import type { } from '@mui/material/themeCssVarsAugmentation';
import { experimental_extendTheme as extendTheme, responsiveFontSizes } from "@mui/material/styles"
import { palette } from "@pytsx/colors"


const brand = palette.sky

const getDesignTokens = (mode: "light" | "dark") => ({
  palette: {
    mode, primary: {
      light: brand[200],
      main: brand[900],
      dark: brand[800],
      contrastText: brand[50],
      ...(mode === "dark" && {
        contrastText: brand[50],
        light: brand[300],
        main: brand[400],
        dark: brand[800],
      }),
    },
    secondary: {
      light: palette.yellow[300],
      main: palette.yellow[500],
      dark: palette.yellow[800],
      contrastText: palette.neutral[50],
      ...(mode === "dark" && {
        contrastText: palette.neutral[50],
        light: palette.yellow[300],
        main: palette.yellow[400],
        dark: palette.yellow[800],
      }),
    },
    info: {
      light: brand[100],
      main: brand[300],
      dark: brand[600],
      contrastText: palette.neutral[50],
      ...(mode === "dark" && {
        contrastText: brand[300],
        light: brand[500],
        main: brand[700],
        dark: brand[900],
      }),
    },
    warning: {
      light: palette.orange[300],
      main: palette.orange[400],
      dark: palette.orange[800],
      ...(mode === "dark" && {
        light: palette.orange[400],
        main: palette.orange[500],
        dark: palette.orange[700],
      }),
    },
    error: {
      light: palette.red[300],
      main: palette.red[400],
      dark: palette.red[800],
      ...(mode === "dark" && {
        light: palette.red[400],
        main: palette.red[500],
        dark: palette.red[700],
      }),
    },
    success: {
      light: palette.green[300],
      main: palette.green[400],
      dark: palette.green[800],
      ...(mode === "dark" && {
        light: palette.green[400],
        main: palette.green[500],
        dark: palette.green[700],
      }),
    },
    grey: {
      ...palette.neutral,
    },
    background: {
      default: palette.neutral[100],
      paper: palette.neutral[200],
      ...(mode === "dark" && {
        default: palette.neutral[950],
        paper: palette.neutral[900],
      }),
    },
    text: {
      primary: palette.neutral[900],
      secondary: palette.neutral[700],
      ...(mode === "dark" && {
        primary: palette.neutral[200],
        secondary: palette.neutral[400],
      }),
    },
  }
})

const { palette: lightPalette, ...rest } = getDesignTokens("light");

const colorSchemes = {
  light: {
    palette: lightPalette,
  },
  dark: {
    palette: getDesignTokens("dark").palette,
  },
};

export default extendTheme({
  colorSchemes,
  ...rest,
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          boxShadow: "none",
          background: "none",
        }),
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableTouchRipple: true,
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: palette.sky[950],
          color: palette.sky[300],
          boxShadow: "none",
          ...theme.applyStyles("dark", {
            backgroundColor: palette.sky[300],
            color: palette.sky[900],
          }),
          ":hover": {
            backgroundColor: palette.sky[900],
            ...theme.applyStyles("dark", {
              backgroundColor: palette.sky[400],
            }),
          }
        }),
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: ({ theme }) => ({
          marginTop: "1rem",
          borderRadius: "1rem",
          border: `1px solid`,
          borderColor: palette.neutral[300],
          justifyContent: "space-between",
          ...theme.applyStyles("dark", {
            border: `1px dashed`,
            borderColor: palette.neutral[800],
          })
        }),
      }
    }
  }
})