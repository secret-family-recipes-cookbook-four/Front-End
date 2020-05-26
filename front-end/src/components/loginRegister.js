import React, {useState} from "react";
import {connect} from "react-redux";
import Loader from "react-loader-spinner";
import styled from 'styled-components';
import {useHistory, withRouter} from "react-router-dom";

import {axioswithAuth} from "../utils/axiosWithAuth";
import {loginAction, registerAction} from "../store/actions";

const initialState = {
    username: "",
    password: "",
};

const Login = (props) => {
    const { push } = useHistory()
    const [login, setLogin] = useState(initialState)

    const handleChange = (e) => {
        e.preventDefault()
        setLogin({
            ...login,
            [e.target.name]: e.target.value,
        })
    }

const userLogin = (e) => {
    e.preventDefault()
    axioswithAuth()
    .post("/login", login)
    .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token))
        localStorage.setItem("userID", res.data.user.id)
        props.loginAction(res)
        push("/main")
    })
    .catch((err) => {
        console.log(err)
        alert("Please enter a valid username and password, or click the register button")
    })
}

const userRegister = (e) => {
    e.preventDefault()
    axioswithAuth()
    .post("/register", login)
    .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token))
        localStorage.setItem("userID", res.data.user.id)
        props.registerAction(res)
        push("/userProfile")
    })
    .catch((err) => {
        console.log(err)
        alert("There was an error registering, Please try again.")
    })
}
return (
    <>
    {props.isFetching && (
        <Loader type="Grid" color="#F2D5DB" height={70} width={70} /> 
    )}
    <h3 className="loginHeader">Login or Register!</h3>
    <form>
        <input
        label = "Username"
        type = "text"
        name = "username"
        placeholder = "username"
        value = {login.username}
        onChange={handleChange} 
        />
        <br />
        <input
        label = "Password"
        type = "password"
        name = "password"
        placeholder = "password"
        value = {login.password}
        onChange = {handleChange} 
        />
        <button onClick={userLogin}>Login!</button>
        <button onClick={userRegister}>Register!</button> 
    </form>
    </>
)
}

const mapStateToProps = (state) => {
    console.log(state.user)
    return {
        username: state.user.username,
        isFetching: state.user.isFetching,
        error:state.user.error,
    }
}

export default withRouter(
    connect(mapStatetoProps, {loginAction, registerAction}) (Login)
)