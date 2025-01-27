"use client"; // Marking the component as a Client Component

import { useState, useEffect } from "react";
import Alert from "@mui/material/Alert"; // Material UI Alert for warnings

const AgreeTerms = ({ setAccessGranted }) => {
  const [email, setEmail] = useState(""); // State to store email input
  const [passkey, setPasskey] = useState(""); // State to store passkey input
  const [username, setUsername] = useState(""); // State to store username input
  const [agreedToTerms, setAgreedToTerms] = useState(false); // State to track if terms are agreed
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [step, setStep] = useState(1); // Track the step of the process
  const [isChecking, setIsChecking] = useState(true); // State to manage loading check for login status
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track if the form is being submitted
  const [showTerms, setShowTerms] = useState(false); // State to show/hide terms and privacy policy
  const [failedAttempts, setFailedAttempts] = useState(0); // Track failed passkey attempts
  const [lockout, setLockout] = useState(false); // Lockout state for 2 minutes
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages

  const correctPasskey = "Tharanee@25262001//SSTR//"; // The correct passkey
  const correctUsername = "TharaneeTharan"; // The correct username

  useEffect(() => {
    // Check if access has already been granted in localStorage
    const accessGranted = localStorage.getItem("accessGranted");
    if (accessGranted === "true") {
      setAccessGranted(true); // If granted, skip the login process
    }
    setIsChecking(false); // Once check is complete, stop the loading state

    // Load failed attempts and lockout status from localStorage
    const storedFailedAttempts = parseInt(localStorage.getItem("failedAttempts") || "0");
    const storedLockout = localStorage.getItem("lockout") === "true";
    setFailedAttempts(storedFailedAttempts);
    setLockout(storedLockout);

    // Lockout timer logic
    if (storedLockout) {
      const lockoutTime = parseInt(localStorage.getItem("lockoutTime") || "0");
      const currentTime = new Date().getTime();
      const remainingTime = lockoutTime - currentTime;

      if (remainingTime <= 0) {
        setLockout(false);  // Unlock after 2 minutes
        setFailedAttempts(0);
        localStorage.removeItem("lockoutTime");
        localStorage.removeItem("failedAttempts");
      } else {
        setTimeout(() => {
          setLockout(false);
          setFailedAttempts(0);
          localStorage.removeItem("lockoutTime");
          localStorage.removeItem("failedAttempts");
        }, remainingTime);
      }
    }
  }, [setAccessGranted]);

  const handlePasskeySubmit = (e) => {
    e.preventDefault();

    if (lockout) return; // Prevent submission during lockout period

    if (step === 1) {
      setLoading(true);
      setIsSubmitting(true);
      setTimeout(() => {
        if (
          passkey === correctPasskey &&
          username.toLowerCase() === correctUsername.toLowerCase()
        ) {
          setStep(2); // Move to the terms agreement step
          setFailedAttempts(0); // Reset failed attempts on success
          localStorage.setItem("failedAttempts", "0");
        } else {
          const newFailedAttempts = failedAttempts + 1;
          setFailedAttempts(newFailedAttempts);
          localStorage.setItem("failedAttempts", newFailedAttempts.toString());

          if (newFailedAttempts >= 3) {
            const lockoutTime = new Date().getTime() + 50 * 60 * 1000; // 2 minutes in milliseconds
            setLockout(true);
            localStorage.setItem("lockout", "true");
            localStorage.setItem("lockoutTime", lockoutTime.toString());
            setErrorMessage("Too many failed attempts. Login attempt failed. Please contact the administration for further assistance.");
          } else {
            setErrorMessage("Incorrect username or passkey. Please try again.");
          }
        }
        setLoading(false);
        setIsSubmitting(false);
      }, 3000);
    }

    if (step === 2) {
      if (agreedToTerms) {
        setLoading(true);
        setIsSubmitting(true);
        setTimeout(() => {
          setAccessGranted(true);
          localStorage.setItem("accessGranted", "true");
          setLoading(false);
          setIsSubmitting(false);
        }, 3000);
      } else {
        setErrorMessage("You must agree to the Terms and Conditions.");
      }
    }
  };

  const handleTermsClick = () => {
    setShowTerms(!showTerms);
  };

  const handleInputChange = () => {
    // Clear error message when user starts typing
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  // Display lockout message when in lockout period
  if (lockout) {
    return (
      <div
        style={{
          textAlign: "center",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Alert severity="warning" style={{ marginBottom: "20px" }}>
          Too many failed attempts. Login attempt failed. Please contact the administration for further assistance.
        </Alert>
        <div>If you need fast assistance, please contact us at --
          <a href="mailto:tharaneetharans@gmail.com">tharaneetharans@gmail.com</a>
        </div>
      </div>
    );
  }

  if (isChecking) {
    return (
      <div
        style={{
          textAlign: "center",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <section
      className="passkey-area"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handlePasskeySubmit} style={{ textAlign: "center" }}>
              <h3 style={{ marginBottom: "20px", color: "#4770ff" }}>
                {step === 1
                  ? "Enter Your Username and Passkey"
                  : "Agree to Terms and Conditions"}
              </h3>

              {step === 1 && !isSubmitting && (
                <div className="container" style={{ marginBottom: "20px" }}>
                  <div className="mb-3">
                    <label
                      htmlFor="username"
                      className="form-label"
                      style={{ color: "grey" }}
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                        handleInputChange(); // Clear error message on typing
                      }}
                      required
                      placeholder="Enter your username"
                      style={{ maxWidth: "400px", margin: "0 auto" }}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="passkey"
                      className="form-label"
                      style={{ color: "grey" }}
                    >
                      Passkey
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="passkey"
                      value={passkey}
                      onChange={(e) => {
                        setPasskey(e.target.value);
                        handleInputChange(); // Clear error message on typing
                      }}
                      required
                      placeholder="Enter your passkey"
                      style={{ maxWidth: "400px", margin: "0 auto" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ marginTop: "10px" }}
                  >
                    Submit
                  </button>
                </div>
              )}

              {isSubmitting && !loading && (
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <div>Processing...</div>
                </div>
              )}

              {step === 2 && !isSubmitting && (
                <div className="container">
                  <div
                    className="mb-3"
                    style={{ textAlign: "center", marginLeft: "20px" }}
                  >
                    <p style={{ color: "grey" }}>
                      By using this website, you agree to our Terms and
                      Conditions and Privacy Policy. Please read them carefully
                      before proceeding.
                      <a
                        href="#"
                        onClick={handleTermsClick}
                        style={{ color: "#4770ff" }}
                      >
                        Terms and Conditions
                      </a>
                      .
                    </p>

                    {showTerms && (
                      <div
                        style={{ marginTop: "20px", textAlign: "center" }}
                      >
                        <h4 style={{ color: "#4770ff" }}>Terms and Conditions</h4>
                        <p style={{ color: "grey" }}>
                          By accessing and using this website, you acknowledge
                          and agree to abide by the terms outlined in this
                          Terms and Conditions document. These terms are
                          designed to ensure a safe, secure, and seamless
                          experience for all users, respecting your rights and
                          privacy.
                        </p>
                        <h4 style={{ color: "#4770ff" }}>Privacy Policy</h4>
                        <p style={{ color: "grey" }}>
                          Your privacy is of paramount importance to us. Our
                          Privacy Policy outlines how we collect, use, and
                          protect your personal information. We are committed
                          to safeguarding your data and ensuring that your
                          personal details are handled with the utmost care and
                          respect.
                        </p>
                      </div>
                    )}

                    <div
                      className="checkbox-wrapper"
                      style={{
                        marginBottom: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <input
                        type="checkbox"
                        id="check1-61"
                        className="check"
                        checked={agreedToTerms}
                        onChange={() => setAgreedToTerms(!agreedToTerms)}
                      />
                      <label
                        htmlFor="check1-61"
                        className="label"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          cursor: "pointer",
                          color: "grey",
                        }}
                      >
                        <svg width="45" height="45" viewBox="0 0 95 95">
                          <rect
                            x="30"
                            y="20"
                            width="50"
                            height="50"
                            stroke="black"
                            fill="none"
                          ></rect>
                          <g transform="translate(0,-952.36222)">
                            <path
                              d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4"
                              stroke="black"
                              stroke-width="3"
                              fill="none"
                              className="path1"
                            ></path>
                          </g>
                        </svg>
                        <span>I agree to the Terms and Conditions</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading || !agreedToTerms}
                  >
                    Agree and Submit
                  </button>
                </div>
              )}

              {loading && (
                <div
                  className="dots-container"
                  style={{ textAlign: "center", marginTop: "20px" }}
                >
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              )}

              {errorMessage && (
                <Alert
                  severity="error"
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {errorMessage}
                </Alert>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgreeTerms;
