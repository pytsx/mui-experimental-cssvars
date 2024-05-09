"use client"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import AppAppBar from "./components/AppAppBar"
import Box from "@mui/material/Box"
import Hero from "./components/Hero"
const LandingPage = () => {
  return (
    <AppRouterCacheProvider>
      <AppAppBar />
      <Hero />
      <Box>
      </Box>

    </AppRouterCacheProvider>
  )
}


export default LandingPage