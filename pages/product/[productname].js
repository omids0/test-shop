import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout";

export default function ProductDetailes({ productname }) {
    
  const allProducts = useSelector(
    (state) => state.allProductsReducer.allProducts
  );

  const product = allProducts.find(item => item.title === productname)
  console.log(product ? product.price : 'not found');
  return <Layout>{productname}</Layout>;
}

export function getServerSideProps(context) {
  const { params } = context;
  const { productname } = params;

  return {
    props: {
      productname,
    },
  };
}
