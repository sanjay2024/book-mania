import{legacy_createStore as createStore} from'redux';
import {combineReducers,applyMiddleware} from 'redux';
import * as thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'
import createBookReducer from '../reducers/books/createBookReducer';
import fetchBookReducer from "../reducers/books/fetchBookReducer";
import bookDetailReducer from '../reducers/books/bookDetailReducer';
import usersListReducer from "../reducers/user/userListReducer";
import userReducer from "../reducers/user/userAuthReducer";
import userProfileReducer from "../reducers/user/userProfileReducer";
import userUpdateReducer from "../reducers/user/userUpdateReducer";
const reducer = combineReducers({
  book: createBookReducer,
  bookList: fetchBookReducer,
  bookDetails: bookDetailReducer,
  userList: usersListReducer,
  userLogin: userReducer,
  userProfile: userProfileReducer,
  updatedUser: userUpdateReducer,
});
const store=createStore(reducer,composeWithDevTools(applyMiddleware(thunk.default)));
export {store};