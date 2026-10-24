import { useState } from "react";
import "./CSS/LoginSign.css";
function LoginSign() {
  // state for login and sign up user
  const [state, setState] = useState("Login");
  {
    /* function for the show password*/
  }
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // adding API for sign Up page
  const signup = async () => {
    console.log("Sign UP Function Run", formData);
    let responsedata;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accrpt: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responsedata = data));
    if (responsedata.success) {
      localStorage.setItem("auth-token", responsedata.token);
      window.location.replace("/");
    } else {
      alert(responsedata.errors);
    }
  };

  // adding API for Login page
  const login = async () => {
    console.log("Login Function Run", formData);
    let responsedata;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accrpt: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responsedata = data));
    if (responsedata.success) {
      localStorage.setItem("auth-token", responsedata.token);
      window.location.replace("/");
    } else {
      alert(responsedata.errors);
    }
  };

  return (
    <section className="loginsignup">
      <div className="loginsignup-contianer">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? (
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={changeHandler}
              placeholder="Your Name *"
              required
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Email Address *"
            required
          />
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={changeHandler}
              placeholder="Password *"
              required
            />

            <i
              className={
                showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"
              }
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
          typeof="submit"
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Creat new Account{" "}
            <span
              onClick={() => {
                setState("Sign Up");
              }}
            >
              SignUP here
            </span>
          </p>
        )}

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>
            By continuing, i agree to all the trems of use & privacy policy.
          </p>
        </div>
      </div>
    </section>
  );
}

export default LoginSign;
