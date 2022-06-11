import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ title, description, children }) {
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Test Shop` : "Test Shop"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <Header />
      <div className="layout-children">{children}</div>
      <Footer />
    </div>
  );
}
