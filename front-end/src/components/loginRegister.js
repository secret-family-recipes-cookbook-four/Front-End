import React, {useState} from "react";
import {connect} from "react-redux";
import Loader from "react-loader-spinner";
import styled from 'styled-components';
import {useHistory, withRouter} from "react-router-dom";

import {axiosWithAuth} from "../utils/axiosWithAuth";
import { loginAction } from "../store/actions/loginAction";
import { registerAction } from "../store/actions/registerAction"
import axios from "axios"
import Rstyles from "./styles/styles";

const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
  };
  
  const Login = (props) => {
    const { push } = useHistory();
    const [login, setLogin] = useState(initialState);
  
    const handleChange = (e) => {
      e.preventDefault();
      setLogin({
        ...login,
        [e.target.name]: e.target.value,
      });
    };
  
    const userLogin = (e) => {
      e.preventDefault();
      axios
        .post("https://secretfamilyrecipes-backend.herokuapp.com/api/auth/login", login)
        .then((res) => {
            console.log(res)
          localStorage.setItem("token", JSON.stringify(res.data.token));
          localStorage.setItem("user_id", JSON.stringify(res.data.id));
          console.log({ res });
          props.loginAction(res);
          push("/recipes");
        })
        .catch((err) => {
          console.dir(err);
          alert("Please enter a valid username and password, or register a new account.")
        });
    };
    const userRegister = (e) => {
      e.preventDefault();
  
      axios
        .post("https://secretfamilyrecipes-backend.herokuapp.com/api/auth/register", login)
        .then((res) => {
            console.log(res)
          localStorage.setItem("token", JSON.stringify(res.data.token));
          localStorage.setItem("user_id", JSON.stringify(res.data.id));
          console.log({ res });
          props.registerAction(res);
        })
        .catch((err) => {
          console.dir(err);
          alert("There was an error. Please try again.")
          // console.log({err})
        });
    };
  
    return (
      <Rstyles>
        {props.isFetching && (
          <Loader type="Grid" color="#F0C9CA" height={80} width={80} />
        )}
        <h3> Login or Register</h3>
        <form className='lrform'>
        <input className= 'lrinput'
            label="first_name"
            type="text"
            name="first_name"
            placeholder="First Name"
            value={login.first_name}
            onChange={handleChange}
          />

        <input className= 'lrinput'
            label="last_name"
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={login.last_name}
            onChange={handleChange}
          />
         
        <input className= 'lrinput'
            label="email"
            type="text"
            name="email"
            placeholder="Email"
            value={login.email}
            onChange={handleChange}
          />
          
          <input className= 'lrinput'
            label="username"
            type="text"
            name="username"
            placeholder="Username"
            value={login.username}
            onChange={handleChange}
          />
          
          <input className= 'lrinput'
            label="password"
            type="password"
            name="password"
            placeholder="Password"
            value={login.password}
            onChange={handleChange}
          />
  
          <button onClick={userLogin} className= 'lrinput'>Login</button>
          <button onClick={userRegister} className= 'lrinput'>Register</button>
        </form>
      </Rstyles>
    );
  };
  
  const mapStateToProps = (state) => {
    console.log(state.user);
    return {};
  };
  
  export default withRouter(
    connect(mapStateToProps, { loginAction, registerAction })(Login)
  );