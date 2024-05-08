"use client"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import AppAppBar from "./components/AppAppBar"

const LandingPage = () => {
  return (
    <AppRouterCacheProvider>
      <AppAppBar />
    </AppRouterCacheProvider>
  )
}


export default LandingPage