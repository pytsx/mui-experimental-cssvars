"use client"
import type { } from '@mui/material/themeCssVarsAugmentation';
import { alpha, experimental_extendTheme as extendTheme } from "@mui/material/styles"
import { palette } from "@pytsx/colors"


const brand = palette.neutral

const getDesignTokens = (mode: "light" | "dark") => ({
  palette: {
    mode,
    primary: {
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
      light: palette.sky[400],
      main: palette.sky[500],
      dark: palette.sky[700],
      contrastText: palette.neutral[50],
      ...(mode === "dark" && {
        contrastText: palette.neutral[50],
        light: palette.sky[200],
        main: palette.sky[400],
        dark: palette.sky[600],
      }),
    },
    info: {
      light: palette.neutral[100],
      main: palette.neutral[700],
      dark: palette.neutral[800],
      contrastText: palette.neutral[50],
      ...(mode === "dark" && {
        contrastText: palette.neutral[300],
        light: palette.neutral[700],
        main: palette.neutral[800],
        dark: palette.neutral[900],
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
      default: palette.neutral[50],
      paper: palette.neutral[100],
      ...(mode === "dark" && {
        default: palette.neutral[950],
        paper: palette.neutral[950],
      }),
    },
    text: {
      primary: palette.neutral[900],
      secondary: palette.neutral[700],
      ...(mode === "dark" && {
        primary: palette.neutral[300],
        secondary: palette.neutral[500],
      }),
    },
    divider: mode === "dark" ? divider.dark : divider.light,
  }
})
const divider = {
  light: palette.neutral[300],
  dark: palette.neutral[900]
}
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
  shape: {
    borderRadius: 9
  },
  components: {
    MuiAccordion: {
      defaultProps: {
        elevation: 0,
        disableGutters: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          background: "none",
          border: `1px solid`,
          borderTop: "none",
          padding: ".32rem",
          borderColor: divider.light,
          ...theme.applyStyles("dark", {
            borderColor: divider.dark,
          }),
          "&:before": {
            backgroundColor: "transparent",
          },
          "&:first-of-type": {
            borderTop: `1px solid`,
            borderColor: divider.light,
            ...theme.applyStyles("dark", {
              borderColor: divider.dark,
            })
          }
        })
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: ({ theme }) => ({
          textTransform: "none",
          borderRadius: theme.shape.borderRadius,
          color: theme.palette.text.secondary,
          "&:hover": {
            backgroundColor: alpha(palette.neutral[400], .2),
          },

        })
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: (theme) => ({
          boxShadow: "none",
          background: "none",
        }),
      }
    },
    MuiButtonBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          whiteSpace: "nowrap",
          color: palette.neutral[900],
          textTransform: "capitalize",
          ...theme.applyStyles('dark', {
            color: palette.neutral[300],
          })
        })
      },
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({

        }),

      },
      defaultProps: {
        disableElevation: true,
      },
      variants: [
        {
          props: { variant: "contained" },

          style: ({ theme }) => ({
            color: "white",
            backgroundColor: palette.sky[400],
            boxShadow: `inset 0 2px 0 ${alpha(palette.sky[300], .2)}, inset 0 -2px 0 ${palette.sky[500]}`,
            border: `2px solid`,
            borderColor: palette.sky[300],
            ...theme.applyStyles("dark", {
              color: "white",
              borderColor: palette.sky[600],
              backgroundColor: palette.sky[700],
              boxShadow: `inset 0 2px 0 ${alpha(palette.sky[500], .2)}, inset 0 -2px 0 ${palette.sky[800]}`,
            }),
            ":hover": {
              boxShadow: `inset 0 2px 0 ${alpha(palette.sky[200], .2)}, inset 0 -2px 0 ${palette.sky[600]}`,
              borderColor: palette.sky[400],
              backgroundColor: palette.sky[500],
              ...theme.applyStyles("dark", {
                backgroundColor: palette.sky[700],
                borderColor: palette.sky[800],
                boxShadow: `inset 0 2px 0 ${alpha(palette.sky[400], .2)}, inset 0 -2px 0 ${palette.sky[900]}`,

              }),
            },
            ":active": {
              boxShadow: "none",
              transform: "scaleY(.98)",
              transformOrigin: "bottom center",
              [theme.breakpoints.up("md")]: {
                transform: "scale(.98)",
                transformOrigin: "bottom left  "
              }
            }
          })
        },
        {
          props: { variant: "text" },
          style: ({ theme }) => ({
            minWidth: 0,
            padding: "0 .64rem",
            lineHeight: 1,
          })
        }
      ]
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: ({ theme }) => ({
          background: alpha(palette.neutral[50], .8),
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid",
          borderColor: divider.light,
          ...theme.applyStyles("dark", {
            borderColor: divider.dark,
            background: alpha(palette.neutral[950], .8),
          })
        })
      },
      variants: [
        {
          props: { anchor: "top" },
          style: {
            paper: {
            }
          },

        },

      ],
      defaultProps: {
        elevation: 0
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: ".4rem",
          border: `1px solid`,
          borderColor: alpha(divider.light, .5),
          ...theme.applyStyles("dark", {
            borderColor: divider.dark,
          })
        })
      }
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          whiteSpace: "nowrap",
          color: palette.sky[400],

        })
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: ".4rem",
          padding: "1rem"
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          boxShadow: ` inset 0px 0px 0px 3px ${palette.neutral[950]}, inset 0px 0px 0px 5px #0066cc32`,
          borderRadius: theme.shape.borderRadius,
          ":hover": {
          },

        }),

      },

    },
    MuiToolbar: {
      styleOverrides: {
        root: ({ theme }) => ({
          marginTop: ".64rem",
          borderRadius: theme.shape.borderRadius,
          border: `1px solid`,
          justifyContent: "space-between",
          background: alpha(palette.neutral[50], .64),
          backdropFilter: "blur(8px)",
          borderColor: divider.light,
          ...theme.applyStyles("dark", {
            background: alpha(palette.neutral[950], .8),
            border: `1px dashed`,
            borderColor: palette.neutral[900],
          })
        }),
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: ({ theme }) => ({
        }),
      },
    }
  }
})