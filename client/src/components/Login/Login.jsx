import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/action/user/userActions";
import ErrorMessage from "../Message/errorMessage";
import Loading from "../Loading/Loading";

const Login = () => {
  const [emailId, setemailId] = useState("");
  const [UserPassword, setUserPassword] = useState("");

  const dispatch = useDispatch();

  //Before login in we will check if you have login the we redirect you

  const userLoginDetails = useSelector((state) => state.userLogin);

  const { loading, userInfo, error } = userLoginDetails;
  console.log(loading, userInfo, error);

  useEffect(() => {
    if (userInfo) {
    //  this.props.navigation.navigate('/');
    }
  }, [dispatch, userInfo]);
  //submit form
  const submitFormHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(emailId, UserPassword));
    console.log(emailId, UserPassword);
  };

  return (
    <div className="row container-height">
      <div className="col-lg-6 col-md-6 m-auto">
        <div className="container">
          {loading && <Loading />}
          {error && <ErrorMessage error={error} />}
          <h1 className="text-center">Login</h1>
          <form onSubmit={submitFormHandler}>
            <fieldset>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  value={emailId}
                  onChange={(e) => setemailId(e.target.value)}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  value={UserPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-info m-auto">
                Login
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
