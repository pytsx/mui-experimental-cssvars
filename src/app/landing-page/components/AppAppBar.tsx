"use client"

import ColorModeSwitcher from "@/app/components/modeSwitcher"
import AppBar from "@mui/material/AppBar"
import ToolBar from "@mui/material/ToolBar"
import Container from "@mui/material/Container"

const AppAppBar = () => {
  return (
    <AppBar
      position="fixed"
    >
      <Container maxWidth="lg">
        <ToolBar>
          <div />
          <ColorModeSwitcher />
        </ToolBar>
      </Container>
    </AppBar>
  )
}


export default AppAppBar