import React from "react";
import { useSelector } from "react-redux";
import BasketItems from "./BasketItems";
import EmptyBasket from "./EmptyBasket";
import Layout from "./Layout";

export default function Basket() {
  const basketLentgh = useSelector(
    (state) => state.basketItemReducer.basketItems
  );

  if (basketLentgh.length === 0) {
    return (
      <Layout title={`Basket is empty`}>
        <EmptyBasket />
      </Layout>
    );
  }

  return (
    <Layout title={`Basket (${basketLentgh.length})`}>
      <BasketItems />
    </Layout>
  );
}
