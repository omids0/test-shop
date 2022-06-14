export const addToBasketAction = (item) => (dispatch) => {
  dispatch({ type: "ADD_TO_BASKET", payload: item });
};

export const removeFromBasketAction = (id) => (dispatch) => {
  dispatch({ type: "REMOVE_FROM_BASKET", payload: id });
};
