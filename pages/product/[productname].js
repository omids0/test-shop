import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";

export default function ProductDetailes({ productName, fetchAllProducts }) {
  const [decoded, setdecoded] = useState("");
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);

  const productsState = useSelector(
    (state) => state.allProductsReducer.allProducts
  );

  useEffect(() => {
    const uri = productName;
    const encoded = encodeURI(uri);

    {
      productsState.length > 0
        ? setProducts(productsState)
        : setProducts(fetchAllProducts);
    }

    try {
      const decodeuri = decodeURI(encoded);
      setdecoded(decodeuri);
      console.log(decodeURI(encoded));
    } catch (e) {
      console.error(e);
    }
  }, []);

  useMemo(() => {
    const findProduct = products.find(
      (item) => item.title.replace(/\s/g, "") == decoded.replace(/\s/g, "")
    );
    console.log(findProduct);
  }, [products]);

  return <Layout>{productName}</Layout>;
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { productName } = params;

  const fetchProducts = await fetch("https://fakestoreapi.com/products").then(
    (response) => response.json()
  );

  return {
    props: {
      productName,
      fetchAllProducts: fetchProducts,
    },
  };
}
