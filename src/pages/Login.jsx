import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Login = () => {
  return (
    <div className="auth">
      <h1>Welcome Back!</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          
        />
        <Link to="/"><button>Login</button></Link>
      
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
