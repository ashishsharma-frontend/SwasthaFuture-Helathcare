import React, { useState } from "react";
import MainDoctor from "../ProjectsImage/MainCenter.png";
import FindDoctorImage from "../ProjectsImage/FindDoctor.jpg";
import MedicinesImage from "../ProjectsImage/MediShop.jpg";
import ConsultantImage from "../ProjectsImage/Consultant.jpg";
import RegisterImage from "../ProjectsImage/RegisterImage.svg";
import HospitalImage from "../ProjectsImage/Hospital.jpg";
import { IoIosArrowDropright } from "react-icons/io";
import { FaHospital, FaCreditCard } from "react-icons/fa";
import { FaLocationArrow, FaArrowRightLong } from "react-icons/fa6";
import "./Home.css";

const Home = () => {
  const [activeTab, setActiveTab] = useState("find-doctor");

  const tabData = [
    {
      id: "find-doctor",
      title: "Find Doctor",
      description:
        "We have the best doctors in our country with high professional standards.",
      image: FindDoctorImage,
    },
    {
      id: "video-consultant",
      title: "Video Consultant",
      description:
        "Connect with a healthcare professional via secure video consultation.",
      image: ConsultantImage,
    },
    {
      id: "medicines",
      title: "Medicines",
      description:
        "Get your medicines delivered to your doorstep with a prescription.",
      image: MedicinesImage,
    },
  ];

  const hospitals = [
    "Kailash Superspeciality Hospital",
    "Apollo Hospital",
    "Fortis Healthcare",
  ];

  const renderTabContent = () => {
    const currentTab = tabData.find((tab) => tab.id === activeTab);
    if (!currentTab) return null;

    return (
      <div style={{ padding: "0px" }} className="tab-content-container">
        <div className="main-title">
          <h3>{currentTab.title}</h3>
          <p className="tab-paragraph">{currentTab.description}</p>
        </div>
        <div
          style={{
            maxWidth: "650px",
            height: "300px",
            position: "relative",
            marginTop: "3.5rem",
          }}
          className="image-container"
        >
          <img
            src={currentTab.image}
            alt={currentTab.title}
            className="tab-image"
          />
          <div className="tab-image-icon">
            <FaLocationArrow style={{ color: "#FFFFFF" }} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "0 auto",
        alignItems: "center",
        padding: "10px",
      }}
      className="main-container"
    >
      {/* <div
        style={{
          maxWidth: "1250px",
          width: "100%",
          borderRadius: "16px",
          backgroundColor: "#DEF9C4",
          textAlign: "center",
          height : '368px'
        }}
        className="home"
      >
        <header className="home-header">
          <span>Swastha Future</span>
          <h1
            style={{
              fontSize: "clamp(3rem, 8vw, 10rem)",
              color: "#1F1F1F",
              textAlign: "center",
              marginBottom: "-8rem",
            }}
            className="home-title"
          >
            Healthcare
          </h1>
        </header>

        <main className="home-content">
          <section
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
            className="home-section"
          >
            <div className="section-left">
              <div className="icons">
                <div className="svg">
                  <FaHospital className="icon" style={{ color: "#FFB22C" }} />
                </div>{" "}
                <span>Best Hospital</span>
              </div>
            </div>

            <div className="section-center">
              <img
                style={{ maxWidth: "500px" , width : '100%'}}
                src={MainDoctor}
                alt="Healthcare Professional"
                className="center-image"
              />
            </div>

            <div className="section-right">
              <div className="icons">
                <div className="svg">
                  <FaCreditCard className="icon" style={{ color: "#A594F9" }} />
                </div>{" "}
                <span>Swastha Card</span>
              </div>
            </div>
          </section>
        </main>
      </div> */}

      {/* Tabs Section */}
      <section className="tab-section">
        <div
          style={{
            padding: "10px",
            backgroundColor: "#E0FBE2",
            borderRadius: "8px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            padding: "10px",
            gap: "2rem",
          }}
          className="tabs"
        >
          {tabData.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="tab-content">{renderTabContent()}</div>
      </section>

      {/* Register Section */}
      <section className="register-section">
        <div className="main-title">
          <h3>List Our Services</h3>
          <p>
            Register on Swasth Future for seamless doctor-hospital patient
            connections.
          </p>
        </div>
        <div className="register-img">
          <img
            style={{ maxWidth: "700px", width: "100%" }}
            src={RegisterImage}
            alt="Register"
          />
        </div>
      </section>

      {/* Most Visited Hospitals Section */}
      <section className="most-visited-hospital">
        <div className="main-title">
          <h3>Most Visited Hospitals</h3>
          <p>Discover Top Rated Local Hospitals</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "2rem",
          }}
          className="hospitals-card"
        >
          {hospitals.map((hospital, index) => (
            <div
              key={index}
              className="hospital-card"
              style={{
                maxWidth: "320px",
                height: "auto",
                padding: "8px",
                borderRadius: "16px",
                marginTop: "-0rem",
                boxShadow: "rgba(0, 0, 0, 0.1) -4px 9px 25px -6px",
              }}
            >
              <div className="card-img">
                <img
                  style={{
                    width: "100%",
                    height: "70%",
                    objectFit: "cover",
                    borderRadius: "16px",
                  }}
                  src={HospitalImage}
                  alt={hospital}
                />
              </div>
              <div style={{ display : 'flex' , gap : '1rem' , justifyContent : 'space-between' , alignItems : 'center' , margin : '10px' , }} className="card-text">
                <h3 style={{ fontSize: "1rem" }}>{hospital}</h3>
                <IoIosArrowDropright />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
