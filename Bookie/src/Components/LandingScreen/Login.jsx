import React from "react";
import { Formik } from "formik";
import "./Login.css";

function Login() {
  const SignUpValues = [
    { id: 1, value: "Email" },
    { id: 2, value: "UserName" },
    { id: 3, value: "Password" },
    { id: 4, value: "Re-Password" },
  ];
  console.log(SignUpValues);

  return (
    <div id="mainContainer">
      <h1>Come read with us</h1>
      <main>
        <div>Enter Info Here</div>

        <Formik>
          {({}) => (
            <form>
              {SignUpValues.map((Signup, idx) => {
                return (
                  <div key={idx}>
                    <span>{Signup.value}</span>
                    <input type={Signup.value == "Email" ? "email" : "text"} />
                  </div>
                );
              })}
            </form>
          )}
        </Formik>
      </main>
    </div>
  );
}

export default Login;
