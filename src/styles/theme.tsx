import { PaletteMode, createTheme } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import NextLink from "next/link";
import { forwardRef } from "react";

const LinkBehaviour = forwardRef(function LinkBehaviour(props, ref) {
  return <NextLink ref={ref} {...props} />;
});
const rootElement = () => document.getElementById("__next");

export const getTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            // Palette values for light mode
            primary: {
              main: "#f97316",
            },
            secondary: {
              main: "#240900",
              contrastText: "#ffffff66",
            },
          }
        : {
            // Palette values for dark mode
            primary: {
              main: "#f97316",
            },
            secondary: {
              main: "#240900",
              contrastText: "#ffffff66",
            },
          }),
    },
    shape: {
      borderRadius: 8,
    },
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
    components: {
      MuiLink: {
        defaultProps: {
          component: LinkBehaviour,
        },
      },
      MuiButtonBase: {
        defaultProps: {
          LinkComponent: LinkBehaviour,
        },
      },
      MuiPopover: {
        defaultProps: {
          container: rootElement,
        },
      },
      MuiPopper: {
        defaultProps: {
          container: rootElement,
        },
      },
      MuiDialog: {
        defaultProps: {
          container: rootElement,
        },
      },
      MuiModal: {
        defaultProps: {
          container: rootElement,
        },
      },
    },
  });
