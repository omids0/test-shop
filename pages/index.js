import Head from "next/head";
import Image from "next/image";
import App from "../components/App";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Layout>
        <App />
      </Layout>
    </div>
  );
}
