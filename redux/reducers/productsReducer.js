export const allProductsReducer = (state = { allProducts: [] }, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return {
        allProducts: action.payload,
      };
    default:
      return state;
  }
};
