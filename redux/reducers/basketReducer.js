export const basketItemReducer = (state = { basketItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const alreadyAdded = state.basketItems.find(
        (item) => item.id === action.payload.id
      );

      //   const result = state.basketItems.map((item) =>
      //   item.id === action.payload.id ? action.payload : item
      // )

      // return {
      //   ...state,
      //   basketItems: alreadyAdded ? result : [...state.basketItems, action.payload]
      // }

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
    case "REMOVE_FROM_BASKET":
      const basketItems = state.basketItems.filter(
        (item) => item.id !== action.payload
      );

      console.log("basketItems", basketItems);

      return {
        basketItems: [
          ...state.basketItems.filter((item) => item.id !== action.payload),
        ],
        // basketItems
      };
    default:
      return state;
  }
};

const getBasketItems = (state) => state.basketItemReducer.basketItems;

export { getBasketItems };
