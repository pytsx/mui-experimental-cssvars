import { Metadata } from "next";
import { PropsWithChildren } from "react";
import {
  Experimental_CssVarsProvider as CssVarsProvider
} from "@mui/material/styles"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import theme from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import colorShemeScript from "./getInitialColorScript";
import "./global.css"

export const metadata: Metadata = {
  title: "mui layout",
  description: "mui layout",
}

export default async function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return ( 
    <html lang="en">
      <body>
        {colorShemeScript}
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <CssVarsProvider theme={theme} defaultMode="system"  >
            <CssBaseline />
            {children}
          </CssVarsProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}