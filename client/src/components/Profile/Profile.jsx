import React, { useEffect } from "react";
import "./Profile.css";
import profilePic from '../../assets/img/bookpic.jpg'
import { useSelector, useDispatch } from "react-redux";
import { getUserProfile } from "../../redux/action/user/userActions";
import Loading from "../Loading/Loading";
import { Link, useNavigate } from "react-router-dom";
const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch, navigate]);
  //Check if user is login otherwise redirect
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (userInfo === null) navigate("/login");
  }, [userInfo, navigate]);
  //Get user Profile
  const userProfile = useSelector((state) => state.userProfile);
  const { loading, user } = userProfile;

  const book = userProfile.user && userProfile.user.books;

  const renderTable = () => {
    if (book) {
      return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Author</th>
              <th scope="col">Book Name</th>
              <th scope="col">Delete</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>
            {book.map((book) => {
              return (
                <tr className="table-dark" key={book._id}>
                  <th scope="row">{book.author}</th>
                  <td>{book.title}</td>
                  <td>Delete</td>
                  <td>Update</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    } else {
      return (
        <>
          <h1>You don't have any book created.</h1>
          <Link className=".text" to='/addbook'>Start Creating</Link>
        </>
      );
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col mt-5">
          {loading && !user ? (
            <Loading />
          ) : (
            <div className="card m-auto " style={{ width: "50%" }}>
              <img
                src={profilePic}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{user && user.email}</h5>
                <p className="card-text">{user && user.name}</p>
                <Link to="/user-update" className="btn btn-primary">
                  Update your profile
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="row">
        <div className="col">{renderTable()}</div>
      </div>
    </div>
  );
};

export default Profile;
