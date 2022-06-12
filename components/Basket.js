import React from 'react'
import { useSelector } from 'react-redux'
import Layout from './Layout'

export default function Basket() {
  const basketLentgh = useSelector(state => state.basketItemReducer.basketItems)

  return (
    <Layout title={`Basket (${basketLentgh.length})`}>Basket</Layout>
  )
}
