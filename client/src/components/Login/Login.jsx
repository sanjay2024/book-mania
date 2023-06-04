import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/action/user/userActions";
import errorMessage from "../Message/errorMessage";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Before login in we will check if you have login the we redirect you

  const userLoginDetails = useSelector((state) => state.userLogin);

  const { loading, userInfo, error } = userLoginDetails;
  console.log(loading, userInfo, error);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [dispatch, userInfo, navigate]);
  //submit form
  const submitFormHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
    console.log(email, password);
  };

  return (
    <div className="row container-height">
      <div className="col-lg-6 col-md-6 m-auto">
        <div className="container">
          {loading && <Loading />}
          {error && <errorMessage error={error} />}
          <h1 className="text-center">Login</h1>
          <form onSubmit={submitFormHandler}>
            <fieldset>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
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
