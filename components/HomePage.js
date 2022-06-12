import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Stack,
  Grid,
  Card,
  Skeleton,
  Box,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Link from "next/link";
import { addToBasketAction } from "../redux/actions/basketAction";

export default function HomePage() {
  const allProducts = useSelector(
    (state) => state.allProductsReducer.allProducts
  );

  const dispatch = useDispatch();

  const addToBasket = (selectedProduct) => {
    
    const product = {
      category: selectedProduct.category,
      description: selectedProduct.description,
      id: selectedProduct.id,
      image: selectedProduct.image,
      price: selectedProduct.price,
      rating: { rate: selectedProduct.rating.rate , count: selectedProduct.rating.count },
      title: selectedProduct.title,
      qty: 1,
      totalPrice : selectedProduct.price * 1
    };

    dispatch(addToBasketAction(product));
  };

  return (
    <Stack p={2}>
      {allProducts.length === 0 ? (
        <Grid container rowSpacing={8} columnSpacing={2}>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Box
              sx={{
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card sx={{ width: "300px", height: "550px" }}>
                <Skeleton variant="rectangular" width={"100%"} height={350} />
                <Box p={2}>
                  <Skeleton variant="text" height={40} />
                  <Skeleton variant="text" />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: "8rem",
                    }}
                  >
                    <Skeleton variant="text" width={70} height={40} />
                    <Skeleton variant="text" width={40} height={40} />
                  </Box>
                </Box>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Box
              sx={{
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card sx={{ width: "300px", height: "550px" }}>
                <Skeleton variant="rectangular" width={"100%"} height={350} />
                <Box p={2}>
                  <Skeleton variant="text" height={40} />
                  <Skeleton variant="text" />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: "8rem",
                    }}
                  >
                    <Skeleton variant="text" width={70} height={40} />
                    <Skeleton variant="text" width={40} height={40} />
                  </Box>
                </Box>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Box
              sx={{
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card sx={{ width: "300px", height: "550px" }}>
                <Skeleton variant="rectangular" width={"100%"} height={350} />
                <Box p={2}>
                  <Skeleton variant="text" height={40} />
                  <Skeleton variant="text" />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: "8rem",
                    }}
                  >
                    <Skeleton variant="text" width={70} height={40} />
                    <Skeleton variant="text" width={40} height={40} />
                  </Box>
                </Box>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Box
              sx={{
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card sx={{ width: "300px", height: "550px" }}>
                <Skeleton variant="rectangular" width={"100%"} height={350} />
                <Box p={2}>
                  <Skeleton variant="text" height={40} />
                  <Skeleton variant="text" />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: "8rem",
                    }}
                  >
                    <Skeleton variant="text" width={70} height={40} />
                    <Skeleton variant="text" width={40} height={40} />
                  </Box>
                </Box>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Box
              sx={{
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card sx={{ width: "300px", height: "550px" }}>
                <Skeleton variant="rectangular" width={"100%"} height={350} />
                <Box p={2}>
                  <Skeleton variant="text" height={40} />
                  <Skeleton variant="text" />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: "8rem",
                    }}
                  >
                    <Skeleton variant="text" width={70} height={40} />
                    <Skeleton variant="text" width={40} height={40} />
                  </Box>
                </Box>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Box
              sx={{
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card sx={{ width: "300px", height: "550px" }}>
                <Skeleton variant="rectangular" width={"100%"} height={350} />
                <Box p={2}>
                  <Skeleton variant="text" height={40} />
                  <Skeleton variant="text" />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: "8rem",
                    }}
                  >
                    <Skeleton variant="text" width={70} height={40} />
                    <Skeleton variant="text" width={40} height={40} />
                  </Box>
                </Box>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Box
              sx={{
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card sx={{ width: "300px", height: "550px" }}>
                <Skeleton variant="rectangular" width={"100%"} height={350} />
                <Box p={2}>
                  <Skeleton variant="text" height={40} />
                  <Skeleton variant="text" />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: "8rem",
                    }}
                  >
                    <Skeleton variant="text" width={70} height={40} />
                    <Skeleton variant="text" width={40} height={40} />
                  </Box>
                </Box>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Box
              sx={{
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card sx={{ width: "300px", height: "550px" }}>
                <Skeleton variant="rectangular" width={"100%"} height={350} />
                <Box p={2}>
                  <Skeleton variant="text" height={40} />
                  <Skeleton variant="text" />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: "8rem",
                    }}
                  >
                    <Skeleton variant="text" width={70} height={40} />
                    <Skeleton variant="text" width={40} height={40} />
                  </Box>
                </Box>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Box
              sx={{
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card sx={{ width: "300px", height: "550px" }}>
                <Skeleton variant="rectangular" width={"100%"} height={350} />
                <Box p={2}>
                  <Skeleton variant="text" height={40} />
                  <Skeleton variant="text" />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: "8rem",
                    }}
                  >
                    <Skeleton variant="text" width={70} height={40} />
                    <Skeleton variant="text" width={40} height={40} />
                  </Box>
                </Box>
              </Card>
            </Box>
          </Grid>
        </Grid>
      ) : (
        <Grid container rowSpacing={8} columnSpacing={2}>
          {allProducts.map((item) => (
            <Grid item xs={12} sm={4} md={4} lg={3} key={item.id}>
              <Box
                sx={{
                  margin: "0 auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Card sx={{ width: "300px", height: "650px" }}>
                  <Link href={`/product/${item.title}`} passHref>
                    <CardMedia
                      component="img"
                      height="350"
                      image={item.image}
                      alt="green iguana"
                    />
                  </Link>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "30rem",
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
                        <AddShoppingCartIcon
                          sx={{ fontSize: "3.5rem", color: "red" }}
                        />
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Stack>
  );
}
