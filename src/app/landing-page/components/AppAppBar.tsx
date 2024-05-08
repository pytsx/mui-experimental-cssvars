"use client"

import ColorModeSwitcher from "@/app/components/modeSwitcher"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Container from "@mui/material/Container"

const AppAppBar = () => {
  return (
    <AppBar
      position="fixed"
    >
      <Container maxWidth="lg">
        <Toolbar>
          <div />
          <ColorModeSwitcher />
        </Toolbar>
      </Container>
    </AppBar>
  )
}


export default AppAppBar