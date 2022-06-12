export const basketItemReducer = (state = { basketItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const alreadyAdded = state.basketItems.find(
        (item) => item.id === action.payload.id
      );

      if (alreadyAdded) {
        return {
          ...state,
          basketItems: state.basketItems.map((item) =>
            item.id === action.payload.id ? action.payload : item
          ),
        };
      } else {
        return {
          ...state,
          basketItems: [...state.basketItems, action.payload],
        };
      }
    default:
      return state;
  }
};
