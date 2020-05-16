import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducer/userReducer";
import productReducer from "./reducer/productReducer";
import transReducer from "./reducer/transactionReducer";

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  trans: transReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.warn("cek state store", store.getState());
});
export default store;
