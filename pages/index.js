import { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomePage from "../components/HomePage";
import Layout from "../components/Layout";
import { getAllProducts } from "../redux/actions/productsAction";

export default function Home() {
  const dispatch = useDispatch();

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
