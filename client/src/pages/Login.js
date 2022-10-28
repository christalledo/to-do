import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

const Login = (props) => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);



  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      console.log(data);
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setUserFormData({
      email: '',
      password: '',
    });
  };

  return (
    <main className="flex-row justify-center mb-4">
    <LoginForm error={error} onSubmit={handleFormSubmit} userFormData={userFormData} setUserFormData={setUserFormData}/>
    <SignupForm/>
    </main>
  );
};

export default Login;
