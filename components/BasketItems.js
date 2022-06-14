import { Button, Card, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { addToBasketAction, removeFromBasketAction } from "../redux/actions/basketAction";

export default function BasketItems() {
  const basket = useSelector((state) => state.basketItemReducer.basketItems);
  const dispatch = useDispatch()

  const qtyHandler = (action, qty, item) => {
    let newQty = qty

    if (qty >= 1) {
      
      if (action === "minus" && qty > 1) {
        newQty--;
      }

      if (action === "plus") {
        newQty++;
      }

      const product = {
        category: item.category,
        description: item.description,
        id: item.id,
        image: item.image,
        price: item.price,
        rating: {
          rate: item.rating.rate,
          count: item.rating.count,
        },
        title: item.title,
        qty: newQty,
        totalPrice: item.price * Number(qty),
      };
      dispatch(addToBasketAction(product));
    }
  };

  return (
    <Stack p={2}>
      <Typography
        variant="h3"
        component="div"
        sx={{ marginBottom: "4rem", color: "text.main" }}
      >
        لیست سفارشات شما
      </Typography>
      <Stack
        width="100%"
        direction={{ xs: "column", sm: "column", lg: "row" }}
        justifyContent="space-around"
      >
        <Stack sx={{ display: "flex", flexDirection: "column" }}>
          {basket.map((item) => (
            <Card sx={{ marginBottom: "2rem", padding: "1rem", width: { lg: '50rem'} }}>
              <Typography variant="h4" color="text.main">
                {item.title}
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems="center"
                my={4}
              >
                <Box>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={80}
                    height={80}
                  />
                </Box>
                <Box>
                  <Typography variant="h4">{`$ ${item.price}`}</Typography>
                </Box>
                <Box
                  sx={{
                    margin: "3rem 1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Button
                    onClick={() => qtyHandler("plus", item.qty, item)}
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
                    sx={{ width: "4rem", textAlign: "center" }}
                  >
                    {item.qty}
                  </Typography>
                  <Button
                    onClick={() => qtyHandler("minus", item.qty, item)}
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
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textAlign: "center",
                  backgroundColor: "#ccffff",
                  padding: "1rem",
                  borderRadius: "7px",
                }}
              >
                <Typography variant="h4">
                  {`جمع کل ${item.price * item.qty}`}
                </Typography>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#ff0000", fontSize: "1.6rem" }}
                  onClick={() => dispatch(removeFromBasketAction(item.id))}
                >
                  حذف
                </Button>
              </Stack>
            </Card>
          ))}
        </Stack>
        <Stack direction="column">
          <Card>form</Card>
          <Button variant="contained" sx={{ my: "2rem" }}>
            taaid va sabt
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
