"use client"; // Marking the component as a Client Component

import { Fragment, useState, useEffect } from "react";
import ProfileCard from "@/components/ProfileCard";
import Shape from "@/components/Shape";
import ImageView from "@/components/popup/ImageView";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import AgreeTerms from "@/components/AgreeTerms"; // Importing the separate component

const FolioLayout = ({ children, homePage = false }) => {
  const [accessGranted, setAccessGranted] = useState(false); // State to track if access is granted

  useEffect(() => {
    // Check if user has already logged in after page refresh
    const loggedIn = localStorage.getItem("accessGranted");
    if (loggedIn) {
      setAccessGranted(true);
    }

    // Set a timeout to clear localStorage every 30 minutes
    const clearLocalStorageTimeout = setTimeout(() => {
      localStorage.removeItem("accessGranted");
      setAccessGranted(false); // Reset accessGranted state
    }, 10 * 60 * 1000); // 30 minutes in milliseconds

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(clearLocalStorageTimeout);
  }, []);

  const handleLogout = () => {
    localStorage.clear(); // Clear all localStorage data
    setAccessGranted(false); // Reset accessGranted state
    window.close(); // Close the current tab
  };

  return (
    <Fragment>
      {/* Render passkey input form only if access is not granted */}
      {!accessGranted && <AgreeTerms setAccessGranted={setAccessGranted} />}

      {/* Render the layout only if access is granted */}
      {accessGranted && (
        <main>
          {/* Show the header part */}
          <Header />

          {/* main area part start */}
          <section className={homePage ? "home-area" : "content-box-area mt-4"}>
            <div className="container">
              <div className="row g-4">
                <div className="col-xl-4">
                  <ProfileCard />
                </div>
                {children}
              </div>
            </div>
          </section>

          {/* background shape area */}
          <Shape />

          {/* Show ImageView after passkey validation */}
          <ImageView />

          {/* footer part */}
          <Footer />

          {/* Logout Button placed at the end */}
          <div style={{ textAlign: "center", margin: "15px" }}>
            <button
              onClick={handleLogout}
              className="btn btn-logout"
              style={{
                width: "100%", // Full width of the container
                maxWidth: "1115px", // Restrict max width for larger screens
                padding: "10px 1px", // Padding for touch-friendly design
              }}
            >
              Logout
            </button>
          </div>
        </main>
      )}
    </Fragment>
  );
};

export default FolioLayout;
