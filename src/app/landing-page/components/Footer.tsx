"use client"
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/link";
import OutlinedInput from "@mui/material/OutlinedInput";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";

import { Github } from "lucide-react";
import Script from "../data.json"

const FootRoot = styled("footer", {
  name: "MuiFooter",
  slot: "root",
})(({ theme }) => ({
}))

const Footer = () => {
  const menus: Record<string, string[]> = Script.menus;
  return (
    <FootRoot >
      <Container>
        <Box
          sx={{
            padding: "3rem 0",
            display: "flex",
            alignItems: "start",
            gap: 2,
            justifyContent: "space-between"
          }}
        >
          <Stack
            gap={1}
            width={"100%"}
          >
            <Typography>
              Logo
            </Typography>

            <Typography color="text.secondary">
              faça parte dessa comunidade<br />
              inscreva-se na nossa newsletter
            </Typography>

            <Stack direction="row" gap={1} width={{ xs: "100%", md: "50%" }}>

              <OutlinedInput
                size="small"
                placeholder="seu email"
                sx={{ width: "100%" }}
              />
              <Button
                variant="contained"
              >
                enviar
              </Button>

            </Stack>
          </Stack>

          <Box
            display={{ xs: "none", md: "flex" }}
            gap={3}
          >
            {
              Object.keys(menus).map((menu, mIndex) => (
                <Stack key={`menu-footer-${menu}-${mIndex}`}>
                  <Typography
                    sx={{ textTransform: "capitalize" }}
                  >
                    {menu}
                  </Typography>
                  {
                    menus[menu].map((item, index) => (
                      <Link
                        key={`footer-${menu}-${mIndex}-link-${index}`}
                        href={`#${item}`}
                      >
                        {item}
                      </Link>
                    ))
                  }
                </Stack>
              ))
            }
          </Box>
        </Box>

        <Divider />
        <Box sx={{
          padding: "3rem 0 ",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <Copyright />
          <Stack>
            <IconButton>
              <Github />
            </IconButton>
          </Stack>
        </Box>

      </Container>
    </FootRoot >
  )
}

const Copyright = () => {
  return (
    <Typography sx={{ display: "flex", gap: 1, userSelect: "none" }} variant="caption">
      {"Copyright © "}
      <Link href="/">
        Logo
      </Link>
      {new Date().getFullYear() + ". "}
    </Typography>
  )
}

export default Footer;