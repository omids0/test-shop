import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import React from "react";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "2rem" }}>
      <AppBar position="static" direction="row">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            backgroundColor: "#003366",
            alignItems: "center",
          }}
        >
          <Typography variant="h1" component="h1" sx={{ fontSize: "3rem" }}>
            تست شاپ
          </Typography>
          <LocalFloristIcon sx={{ fontSize: "5rem" }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
