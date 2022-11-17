import { createStore, combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { menuListReducer, menuDetailsReducer } from "./reducers/menuReducers";
import { userLoginReducer } from "./reducers/userReducers"

const reducer = combineReducers({
  productList: menuListReducer,
  productDetails: menuDetailsReducer,
  userLogin: userLoginReducer
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {

  userLogin: {userInfo: userInfoFromStorage}
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
