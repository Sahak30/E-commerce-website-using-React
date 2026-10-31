import { useState } from "react";
import "./CSS/LoginSign.css";

function LoginSign() {
  const [state, setState] = useState("Login");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  // Handle input changes
  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  // Handle Login and Sign Up
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    setLoading(true);

    try {
      const endpoint =
        state === "Login"
          ? "http://localhost:4000/login"
          : "http://localhost:4000/signup";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (!response.ok || !responseData.success) {
        setError(
          responseData.errors ||
            responseData.message ||
            "Something went wrong. Please try again.",
        );
        return;
      }

      // Save authentication token
      localStorage.setItem("auth-token", responseData.token);

      // Redirect to homepage
      window.location.replace("/");
    } catch (err) {
      console.error("Authentication error:", err);
      setError("Unable to connect to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Switch between Login and Sign Up
  const toggleState = () => {
    setState(state === "Login" ? "Sign Up" : "Login");
    setError("");
    setShowPassword(false);
  };

  return (
    <section className="loginsignup">
      <div className="loginsignup-contianer">
        <h1>{state}</h1>

        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            {state === "Sign Up" && (
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={changeHandler}
                placeholder="Your Name *"
                autoComplete="name"
                required
              />
            )}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={changeHandler}
              placeholder="Email Address *"
              autoComplete="email"
              required
            />

            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={changeHandler}
                placeholder="Password *"
                autoComplete={
                  state === "Login" ? "current-password" : "new-password"
                }
                required
              />

              <i
                className={
                  showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"
                }
                onClick={() => setShowPassword(!showPassword)}
                role="button"
                tabIndex={0}
                aria-label={showPassword ? "Hide password" : "Show password"}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setShowPassword(!showPassword);
                  }
                }}
              ></i>
            </div>
          </div>

          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Please wait..." : "Continue"}
          </button>
        </form>

        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span onClick={toggleState}>Login here</span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create a new account <span onClick={toggleState}>Sign up here</span>
          </p>
        )}

        <div className="loginsignup-agree">
          <input type="checkbox" id="agree-terms" />

          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </section>
  );
}

export default LoginSign;
