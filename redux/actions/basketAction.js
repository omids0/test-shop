export const addToBasketAction = (item) => (dispatch) => {
  dispatch({ type: "ADD_TO_BASKET", payload: item });
};
