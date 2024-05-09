"use client"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { alpha, styled } from "@mui/material/styles"
import { palette } from "@pytsx/colors"
import React from "react"

const RadialBackground = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "100%",
  top: 0,
  length: 0,
  height: "100vh",
  backgroundImage:
    `radial-gradient(ellipse 80% 50% at 50% -20%, ${alpha(palette.blue[400], .4)}, transparent)`,
  backgroundRepeat: "no-repeat",
  ...theme.applyStyles("dark", {
    backgroundImage:
      `radial-gradient(ellipse 80% 50% at 50% -20%, ${alpha(palette.blue[400], .2)}, transparent)`,
  })
}))

const PromoImage = styled("div")(({ theme }) => ({
  margin: "0 auto",
  width: "98%",
  height: 700,
  borderRadius: theme.shape.borderRadius,
  outline: "3px solid",
  backgroundImage: `url(${"/promoImg_sm.png"})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  outlineColor: alpha(theme.palette.primary.dark, .6),
  marginTop: theme.spacing(4),
  [theme.breakpoints.up("sm")]: {
    backgroundImage: `url(${"/promoImg.png"})`,
    marginTop: theme.spacing(10),
    height: 700,
  },
  ...theme.applyStyles("light", {
    outlineColor: alpha(theme.palette.primary.main, .6),
    backgroundImage: `url(${"/promoImg.png"})`,
  }),
}))

const Hero = () => {
  return (
    <React.Fragment>
      <RadialBackground />

      <Container sx={{ mt: 16, mb: 8 }}>
        <Stack
          alignItems="center"
          spacing={2}
        >

          <Typography
            variant="h1"
            sx={(theme) => ({
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "clamp(3rem, 10vw, 3.5rem)",
              color: "transparent",
              backgroundImage: `linear-gradient(45deg, ${theme.palette.secondary.dark} 0%, ${theme.palette.secondary.light} 25%, ${theme.palette.secondary.dark} 65%)`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              whiteSpace: "nowrap",
            })}
          >
            Nosso último&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: "inherit",
                color: "primary.light",
                ...theme.applyStyles("light", {
                  color: "primary.dark",
                }),
              })}
            >
              lançamento
            </Typography>
          </Typography>

          <Typography
            variant="subtitle1"
            textAlign="center"
            color="text.secondary"
            sx={{ width: { sm: "100%", md: "80%" } }}
          >
            Explore um universo de aplicativos web de uso pessoal, profissional e acadêmico.
          </Typography>


          <Stack
            direction={{ sm: "column", md: "row" }}
            width={{ xs: "100%", md: "fit-content" }}
            gap={1}
            sx={{ pt: 4 }}
          >
            <TextField
              id="email-hero"
              variant="outlined"
              size="small"
              placeholder="insira seu email"
              aria-label="insira seu email"
              inputProps={{
                autocomplete: "off",
                "aria-label": "insira seu email"
              }}

            />
            <Button variant="contained">
              começar agora
            </Button>
          </Stack>

        </Stack>


        <PromoImage />
      </Container>

    </React.Fragment >
  )
}

export default Hero