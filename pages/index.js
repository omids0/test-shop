import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import HomePage from "../components/HomePage";
import Layout from "../components/Layout";
import { getAllProducts } from "../redux/actions/productsAction";

export default function Home({userData}) {
  const dispatch = useDispatch();
  console.log(userData);

  useEffect(() => {
    const fetchProducts = async () => {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          dispatch(getAllProducts(data))
        });
    };
    
    fetchProducts();
  }, []);

  return (
    <Layout description="تست اپ جهت بررسی و آزمایش می باشد.">
      <HomePage />
    </Layout>
  );
}

export async function getServerSideProps(context){
  const {req, res} = context
  // console.log(req.headers.cookie);
  const userData = req.headers.cookie
  // res.setHeader('Set-Cookie', `testUserData=userData`)
  return {
    props: {
      userData
    }
  }
}