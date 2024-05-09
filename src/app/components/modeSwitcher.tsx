"use client"
import IconButton from "@mui/material/IconButton"
import { useColorScheme } from "@mui/material/styles"
import React from "react"
import { Sun, Moon } from "lucide-react"

const ColorModeSwitcher = () => {

  const { mode, setMode } = useColorScheme()
  const toggleMode = () => setMode(mode === "light" ? "dark" : "light")
  const [mounted, setMounted] = React.useState<boolean>(false)
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // fot ssr
    return null
  }
  return (
    <IconButton onClick={toggleMode}>
      {mode === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </IconButton>
  )
}

export default ColorModeSwitcher