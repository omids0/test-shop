import {
  Button,
  Card,
  CardMedia,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function ProductShow({ productItem }) {
  const [qty, setQty] = useState(1);

  const qtyHandler = (action) => {
    if(qty < 1){
    alert('مقدار صفر امکان پذیر نمیباشد')

    }

    if(action === 'minus'){
        setQty(qty -= 1)
    }

    if(action === 'plus'){
        setQty(qty += 1)
    }
  }

  return (
    <Stack p={4}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "400px", md: "600px" },
              height: { xs: "400px", md: "600px" },
            }}
          >
            <CardMedia
              component="img"
              image={productItem.image}
              alt={productItem.title}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h3" component="h1" color="#1a1a1a" my={4}>
            {productItem.title}
          </Typography>
          <Typography variant="h6" my={5} color="#595959">
            {productItem.description}
          </Typography>
          <Typography variant="h5" color="primary">
            {`${productItem.category}#`}
          </Typography>
          <Rating name="read-only" value={productItem.rating.rate} readOnly />
        </Grid>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: '#e6f0ff',
              padding: '2rem',
              borderRadius: '10px'
            }}
          >
            <Typography
              variant="h1"
              component="h1"
            >{`$ ${productItem.price}`}</Typography>
            <Box sx={{margin: '3rem 1rem', display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Button onClick={() => qtyHandler('plus')} sx={{fontSize: '4rem', backgroundColor:'#33cc33', padding: '0', color:'#ffffff'}}>+</Button>
                <Typography variant="h3" sx={{width:'8rem', textAlign: 'center'}}>{qty}</Typography>
                <Button onClick={() => qtyHandler('minus')} sx={{fontSize: '4rem', backgroundColor:'#ff0000', padding: '0', color:'#ffffff'}}>-</Button>
            </Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ffd700",
                color: "#000000",
                fontSize: "2.2rem",
              }}
              endIcon={<AddShoppingCartIcon sx={{ marginRight: '3rem'}} />}
            >
              {`$${productItem.price * Number(qty)}`}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
}
