import Cookies from "js-cookie";

export const addToBasketAction = (payload) => (dispatch, getState) => {
  dispatch({ type: "ADD_TO_BASKET", payload });
  const basketInitial = getState().basketItemReducer.basketItems;
  Cookies.set("user-basket", JSON.stringify(basketInitial));
};

export const removeFromBasketAction = (payload) => (dispatch, getState) => {
  dispatch({ type: "REMOVE_FROM_BASKET", payload });
  const basketInitial = getState().basketItemReducer.basketItems;
  Cookies.set("user-basket", JSON.stringify(basketInitial));
};

// export const removeFromBasketAction = (payload)  => ({
//   type:"REMOVE_FROM_BASKET", payload
// })


// export const removeFromBasketAction = (payload)  => {
//   return {
//     type:"REMOVE_FROM_BASKET", payload
//   }
// }
