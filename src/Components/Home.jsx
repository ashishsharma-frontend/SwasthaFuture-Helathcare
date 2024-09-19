import React from "react";
import MainDoctor from "../ProjectsImage/MainCenter.png"; // Replace with your correct image path
import { FaHospital, FaCreditCard } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6"; // Example icons from react-icons
import "./Home.css"; // Add your CSS file

const Home = () => {
  return (
<div className="main-container">
<div className="home">
      <header style={{textAlign: 'center' , marginTop : '2rem'}} className="home-header">
        <span>Swastha Future</span>
        <h1 className="home-title">Healthcare</h1>
      </header>

      <main className="home-content">
        <section className="home-section">
          <div className="section-left">
            <div
              style={{
                display: "flex",
                justifyContent: "end",
              }}
              className="icons"
            >
              <div style={{ color: "#FFB22C" }} className="svg">
                <FaHospital className="icon" />
              </div>{" "}
              <span>Best Hospital</span>
            </div>
            <div
              style={{ paddingLeft: "2rem" }}
              className="section-description"
            >
              <p>
                Where care meets convenience, your trusted health partner for a
                better tomorrow. Together, we’re building a healthier, Swasth
                India.
              </p>
            </div>
          </div>

          <div className="section-center">
            <img
              style={{
                maxWidth: "800px",
                width: "100%",
              }}
              src={MainDoctor}
              alt="Healthcare Professional"
              className="center-image"
            />
          </div>

          <div className="section-right">
            <div className="icons">
              <div style={{ color: "#A594F9" }} className="svg">
                <FaCreditCard className="icon" />
              </div>{" "}
              <span>Swastha Card</span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "end",
                paddingRight: "2rem",
              }}
              className="section-action"
            >
              <button
                style={{
                  backgroundColor: "#4894FE",
                  color: "#F5EFFF",
                  borderRadius: "100px",
                  marginRight: "1rem",
                  padding: "10px",
                  border: "none",
                }}
                className="book-consultation-button"
              >
                Book Consultation
              </button>
              <span
                style={{
                  display: "flex",
                  alignItems: 'center',
                  backgroundColor: "#4894FE",
                  borderRadius: "50%",
                  color: "#F5EFFF",
                  padding: "0 10px",
                }}
                className="arrow"
              >
                <FaArrowRightLong />

              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
</div>
  );
};

export default Home;
