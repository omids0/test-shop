import React from "react";
import { useSelector } from "react-redux";
import { Stack, Grid, Card } from "@mui/material";

export default function HomePage() {
  const allProducts = useSelector(
    (state) => state.allProductsReducer.allProducts
  );

  return (
    <Stack p={2}>
      {allProducts.length === 0 ? (
        <Grid container>
          <Grid item xs={12} sm={4} md={4}>
            <Card sx={{ minWidth: "200px", maxWidth: "400px"}}>skeleton</Card>
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={2}>
          {allProducts.map((item) => (
            <Grid item xs={12} sm={4} md={4}>
              <Card sx={{ minWidth: "200px",maxWidth: "400px" }}>{item.title}</Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Stack>
  );
}
