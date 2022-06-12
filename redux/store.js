import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { basketItemReducer } from "./reducers/basketReducer";
import { allProductsReducer } from "./reducers/productsReducer";

const finalReducers = combineReducers({
  allProductsReducer: allProductsReducer,
  basketItemReducer: basketItemReducer,
});

const initialState = {};

const composeEnhancer = composeWithDevTools({});

const store = createStore(
  finalReducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
