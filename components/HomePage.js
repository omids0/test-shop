import React from "react";
import { useSelector } from "react-redux";
import { Stack } from "@mui/material";

export default function HomePage() {
  const allProducts = useSelector(
    (state) => state.allProductsReducer.allProducts
  );
  console.log("Products:", allProducts.length);
  return <Stack>HomePage</Stack>;
}
