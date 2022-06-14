import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Card,
  Box,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Link from "next/link";
import {
  addToBasketAction,
  removeFromBasketAction,
} from "../redux/actions/basketAction";

export default function EachProduct({ item }) {
  useSelector;
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const [selection, setSelection] = useState(false);

  const addToBasket = (selectedProduct) => {
    setSelection(true);
    const product = {
      category: selectedProduct.category,
      description: selectedProduct.description,
      id: selectedProduct.id,
      image: selectedProduct.image,
      price: selectedProduct.price,
      rating: {
        rate: selectedProduct.rating.rate,
        count: selectedProduct.rating.count,
      },
      title: selectedProduct.title,
      qty,
      totalPrice: selectedProduct.price * 1,
    };
    if (qty > 0) {
      dispatch(addToBasketAction(product));
    } else {
      setSelection(false);
      setQty(1);
      dispatch(removeFromBasketAction(item.id));
    }
  };

  const qtyHandler = (action) => {
    if (qty > 0) {
      if (action === "minus") {
        setQty((qty -= 1));
      }
      if (action === "plus") {
        setQty((qty += 1));
      }
    }
  };

  return (
    <Grid item xs={12} sm={4} md={4} lg={3} key={item.id}>
      <Box
        sx={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card sx={{ width: "350px", height: "600px" }}>
          <Link href={`/product/${item.title}`} passHref>
            <CardMedia
              component="img"
              height="350"
              image={item.image}
              alt={item.title}
            />
          </Link>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "25rem",
            }}
          >
            <Typography gutterBottom variant="h4" component="h1">
              {item.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography variant="h3">{`$ ${item.price}`}</Typography>
              <Button onClick={() => addToBasket(item)}>
                {selection ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      onClick={() => qtyHandler("plus")}
                      sx={{
                        fontSize: "2rem",
                        backgroundColor: "#33cc33",
                        padding: "0",
                        color: "#ffffff",
                      }}
                    >
                      +
                    </Button>
                    <Typography
                      variant="h4"
                      sx={{
                        width: "2rem",
                        textAlign: "center",
                        color: "#000000",
                      }}
                    >
                      {qty}
                    </Typography>
                    <Button
                      onClick={() => qtyHandler("minus")}
                      sx={{
                        fontSize: "2rem",
                        backgroundColor: "#ff1a1a",
                        padding: "0",
                        color: "#ffffff",
                      }}
                    >
                      -
                    </Button>
                  </Box>
                ) : (
                  <AddShoppingCartIcon
                    sx={{ fontSize: "3.5rem", color: "red" }}
                  />
                )}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
}
