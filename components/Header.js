import { AppBar, Badge, Box, Toolbar, Typography } from "@mui/material";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Header() {
  const basketLentgh = useSelector(state => state.basketItemReducer.basketItems)

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
          <Box
            sx={{
              width: "150px",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "space-between",
            }}
          >
            <Link href='/basket' passHref>
            <Badge
              badgeContent={basketLentgh.length}
              color="error"
              sx={{
                "& .MuiBadge-badge": {
                  fontSize: "2rem",
                  height: 22,
                  minWidth: 15,
                },
              }}
            >
              <ShoppingCartIcon color="#ffffff" sx={{ fontSize: "3rem" }} />
            </Badge>
            </Link>
            <Typography variant="h1" component="h1" sx={{ fontSize: "3rem" }}>
              تست شاپ
            </Typography>
          </Box>
          <Link href="/" passHref>
            <LocalFloristIcon sx={{ fontSize: "5rem" }} />
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
