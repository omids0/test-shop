import { useEffect } from "react";
import HomePage from "../components/HomePage";
import Layout from "../components/Layout";

export default function Home() {

  useEffect(() => {
    const fetchProducts = async () => {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => console.log(data));
    };

    fetchProducts()
  }, []);

  return (
    <Layout description="تست اپ جهت بررسی و آزمایش می باشد.">
      <HomePage />
    </Layout>
  );
}
