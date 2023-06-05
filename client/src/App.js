import './App.css';
import React from "react";
import { Route,Routes} from "react-router-dom";
import AddBook from './components/Book/addBook';
import Navbar from './components/NavBar/NavBar';
import BookDetail from './components/Book/BookDetail';
import Books from './components/Book/Books';
import Home from './components/Home/Home';
import Login from './components/Login/Login'
import Register from "./components/Register/Register";
import Users from './components/Users/Users';
import Profile from './components/Profile/Profile'
const App=()=>{
  return (
    <>
      <Navbar />

        <Routes>
          <Route path="/login" element={<Login></Login>} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/books" element={<Books></Books>} />
          <Route path="/addBook" element={<AddBook></AddBook>}></Route>
          <Route path="/book/:id" element={<BookDetail></BookDetail>} />
          <Route path="/users" element={<Users></Users>} />
          <Route path="/profile" element={<Profile></Profile>} />
        </Routes>
    </>
  );
}

export default App;
