import React from "react";
import { Formik } from "formik";
import "./Login.css";

function Login() {
  return (
    <div id="mainContainer">
      <h1>Come read with us</h1>
      <main>
        <div>Enter Info Here</div>
        <Formik></Formik>
      </main>
    </div>
  );
}

export default Login;
