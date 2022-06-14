import React from "react";
import { useSelector } from "react-redux";
import {
  Stack,
  Grid,
  Card,
  Skeleton,
  Box,
} from "@mui/material";
import EachProduct from "./EachProduct";

export default function HomePage() {
  const allProducts = useSelector(
    (state) => state.allProductsReducer.allProducts
  );

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
            <EachProduct item={item} />
          ))}
        </Grid>
      )}
    </Stack>
  );
}
