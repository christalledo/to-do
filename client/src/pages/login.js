import React, { useState } from "react";
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
    <main className="row flex-row justify-content-center ">
      <div className=" col-4 m-3">
        <LoginForm error={error} onSubmit={handleFormSubmit} userFormData={userFormData} setUserFormData={setUserFormData}/>
      </div>
      <div className=" col-6 m-3">
        <SignupForm error={error} onSubmit={handleFormSubmit} userFormData={userFormData} setUserFormData={setUserFormData}/>
      </div>
    </main>
  );
};

export default Login;