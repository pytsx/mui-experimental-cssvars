"use client"
import { AppRouterCacheProvider, AppRouterCacheProviderProps } from "@mui/material-nextjs/v14-appRouter"
import AppAppBar from "./components/AppAppBar"
const LandingPage = (props: AppRouterCacheProviderProps) => {
  return (
    <AppRouterCacheProvider
      {...props}
    >
      <AppAppBar />
    </AppRouterCacheProvider>
  )
}


export default LandingPage