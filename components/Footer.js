import React from "react";
import { Box, Stack, Typography, Grid } from "@mui/material";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import HistoryToggleOffOutlinedIcon from "@mui/icons-material/HistoryToggleOffOutlined";
import SwipeLeftOutlinedIcon from "@mui/icons-material/SwipeLeftOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";

export default function Footer() {
  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e6f3ff",
      }}
    >
      <Grid container justifyContent="space-between">
        <Grid item sx={6} sm={6} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#1a90ff",
              textAlign: "center",
              height: "20rem",
              padding: '1rem'
            }}
          >
            <StoreOutlinedIcon
              sx={{ fontSize: "7rem", marginBottom: "2rem" }}
            />
            <Typography variant="p">امکان پرداخت در محل</Typography>
          </Box>
        </Grid>
        <Grid item sx={6} sm={6} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#1a90ff",
              textAlign: "center",
              height: "20rem",
              padding: '1rem'
            }}
          >
            <HistoryToggleOffOutlinedIcon
              sx={{ fontSize: "7rem", marginBottom: "2rem" }}
            />
            <Typography variant="p">۷ روز هفته، ۲۴ ساعته</Typography>
          </Box>
        </Grid>
        <Grid item sx={6} sm={6} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#1a90ff",
              textAlign: "center",
              height: "20rem",
              padding: '1rem'
            }}
          >
            <SwipeLeftOutlinedIcon
              sx={{ fontSize: "7rem", marginBottom: "2rem" }}
            />
            <Typography variant="p">هفت روز ضمانت برگشت کالا</Typography>
          </Box>
        </Grid>
        <Grid item sx={6} sm={6} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#1a90ff",
              textAlign: "center",
              height: "20rem",
              padding: '1rem'
            }}
          >
            <CheckBoxOutlinedIcon
              sx={{ fontSize: "7rem", marginBottom: "2rem" }}
            />
            <Typography variant="p">ضمانت اصل بودن کالا</Typography>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
}
