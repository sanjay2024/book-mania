import {  combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "../reducers/user/userAuthReducer";
import userProfileReducer from "../reducers/user/userProfileReducer";
import userUpdateReducer from "../reducers/user/userUpdateReducer";
import createBookReducer from "../reducers/books/createBookReducer";
import fetchBookReducer from "../reducers/books/fetchBookReducer";
import bookDetailReducer from "../reducers/books/bookDetailReducer";
import usersListReducer from "../reducers/user/userListReducer";

const middleware = [thunk];

const reducer = combineReducers({
  userLogin: userReducer,
  userProfile: userProfileReducer,
  updatedUser: userUpdateReducer,
  bookCreated: createBookReducer,
  booksList: fetchBookReducer,
  bookDetails: bookDetailReducer,
  usersList: usersListReducer,
});


const userAuthFromStorage = localStorage.getItem("userAuthData")
  ? JSON.parse(localStorage.getItem("userAuthData"))
  : null;

const initialState = {
  userLogin: { userInfo: userAuthFromStorage },
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export  {store};
