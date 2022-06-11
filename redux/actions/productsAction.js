export const getAllProducts = (data) => (dispatch) => {
  dispatch({ type: "GET_ALL_PRODUCTS", payload: data });
};
