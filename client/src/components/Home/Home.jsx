import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import videoSource from '../../assets/img/books.mp4'
import profileImg from '../../assets/img/book.jpg'
const Home = () => {
  return (
    <div className="Container">
      <video autoPlay="autoplay" loop="loop" muted className="Video">
        <source src={videoSource} type="video/mp4" />
      </video>
      <div className="Content">
        <div className="SubContent">
          <h1>Book Catolog</h1>
          <p>Manage your Books with Ease</p>
          <button type="button" className="btn btn-outline-dark">
            <Link className="text-link " to="/addBook">
              Get started
            </Link>
          </button>
          <img src={profileImg} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Home;
