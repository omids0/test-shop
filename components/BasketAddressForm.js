import { Button, Stack, Typography } from "@mui/material";
import React from "react";

export default function BasketAddressForm({ basket }) {
  const totalPrice = basket.reduce((c, x) => c + x.totalPrice, 0);
  const payHandler = () => {
    alert('پرداخت شما با موفقیت انجام شد.')
    window.location.href = '/'
  }
  return (
    <Stack mt={4} p={2} borderRadius='7px' backgroundColor='#f2f2f2'>
      <Stack>
        <input
          type="number"
          placeholder="شماره تماس"
          className="basket-input"
        />
        <input type="number" placeholder="کد پستی" className="basket-input" />
        <textarea className="basket-input" placeholder="آدرس"></textarea>
      </Stack>
      <Stack my={4}>
        <Typography
          variant="h4"
          component="div"
        >{`مجموع مبلغ قابل پرداخت $ ${totalPrice}`}</Typography>
      </Stack>
      <Button
        variant="contained"
        onClick={payHandler}
        sx={{
          my: "2rem",
          fontSize: "2rem",
          backgroundColor: "#009933",
          "&:hover": {
            backgroundColor: "#00802b",
          },
        }}
      >
        تایید و پرداخت
      </Button>
    </Stack>
  );
}
