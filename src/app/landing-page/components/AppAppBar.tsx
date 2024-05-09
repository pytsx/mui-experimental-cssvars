"use client"

import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import ButtonBase from "@mui/material/ButtonBase"
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"
import MenuItem from "@mui/material/MenuItem"
import Stack from "@mui/material/Stack"
import Toolbar from "@mui/material/Toolbar"
import Script from "../data.json"

import ColorModeSwitcher from "@/app/components/modeSwitcher"

import {
  Menu
} from "lucide-react"
import React from "react"
import Drawer from "@/app/components/drawer"

const ResponsiveMenu: React.FC = () => {

  return (
    <React.Fragment>
      {/* md */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          width: "100%",

        }}
      >
        <Stack
          direction="row"
          width="100%"
          marginX={2}
        >
          {
            Script.menus.produto.map((item, index) => (
              <Button
                size="small"
                variant="text"
                href={`#${item}`}
                key={`appbar-${index}-button`}
              >
                {item}
              </Button>
            ))
          }
        </Stack>
      </Box>

      {/* xs */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" }
        }}
      >
        <Drawer
          anchor="top"
          className="border-b"
          trigger={
            <IconButton>
              <Menu className="w-5 h-5" />
            </IconButton>
          }
        >
          <Box
            sx={{
              padding: "1rem",
              minHeight: "40vh",
              position: "relative"
            }}
          >
            {
              Script.menus.produto.map((item, index) => (
                <MenuItem
                  key={`appbar-${index}-menuItem`}
                >
                  {item}
                </MenuItem>
              ))
            }
          </Box>
        </Drawer>
      </Box>
    </React.Fragment>
  )
}
const AppAppBar: React.FC = () => {
  return (
    <AppBar
      position="fixed"
    >
      <Container>
        <Toolbar>
          <ButtonBase
            component="a"
            href="/"
            sx={{
              fontWeight: "bold",
              opacity: 0.8,
              fontSize: "1.2rem",
              lineHeight: ".0rem",
            }}
          >
            logo
          </ButtonBase>

          <Stack
            direction="row"
            gap={.5}
            sx={{
              width: { xs: "fit-content", md: "100%" }
            }}
          >
            <ResponsiveMenu />
            <ColorModeSwitcher />
          </Stack>

        </Toolbar>
      </Container>
    </AppBar>
  )
}


export default AppAppBar