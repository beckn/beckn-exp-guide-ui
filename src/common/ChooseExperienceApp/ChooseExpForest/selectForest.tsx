import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../welcome-page/selectExperience.css";
import VideoTemplate from "../../videoTemplate/videoTemplate";

const SelectForest = () => {
  const navigate = useNavigate();

  const handleNevigate = (id: any) => {
    localStorage.setItem("name", id);
    navigate("/progress");
  };

  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="headLogo-image">
        <img className="Beckn-image" src="/assets/beckn_lg.svg" alt={"Logo"} />
        <div>
          <p className="climate-gesilience-header-text">
            Climate Resilience Data Highways for Disaster Resilience
          </p>
          <p className="climate-gesilience-header-text">Disaster Resilience</p>
          <p className="climate-gesilience-sub-text">
            A decentralized network for secure access to reliable data
          </p>
        </div>
        <button
          onClick={() => navigate("/")}
          style={{ width: "55px", marginTop: "-10px" }}
          className="home-buttom-nevigate"
        >
          <span>
            <img
              style={{ width: "24px", position: "relative" }}
              src="/assets/home.svg"
              alt=""
            />
          </span>
        </button>
      </div>
      <div className="welcome-Screen-container">
        <div className="child-container">
          <div className="animates fadeIns fives home-card-container cliement-resilience">
            <ul className="card-sub-containers">
              <li onClick={() => handleNevigate("state-forest-dep")}>
                <div className="card-with-image">
                  <img
                    className="first-image-card"
                    src="/assets/forest_health.svg"
                    alt={"forest_health"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">
                      a state forest department assesses forest health
                    </span>
                    <br />
                    <span className="font-color">
                      and prioritizes areas for intervention
                    </span>
                  </p>
                </div>
              </li>
              <li onClick={() => handleNevigate("envirogrowth")}>
                <div className="card-with-image">
                  <img
                    className="first-image-card"
                    src="/assets/forestrestoration.svg"
                    alt={"forestrestoration"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">
                      a project implementing agency
                    </span>
                    <br />
                    <span className="font-color">
                      creates forest restoration strategy
                    </span>
                  </p>
                </div>
              </li>
              <li onClick={() => handleNevigate("earth-support-initiative")}>
                <div className="card-with-image">
                  <img
                    className="first-image-card"
                    src="/assets/leadingfoodandbeveragecompany.svg"
                    alt={"leadingfoodandbeveragecompany"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">An impact investor</span>
                    <br />
                    <span className="font-color">
                      tracks performance of a restoration project
                    </span>
                  </p>
                </div>
              </li>
            </ul>
            <div className="cliement-resilience-video-section-header">
              <img
                className=""
                src="/assets/imaginefuture.svg"
                alt={"imaginefuture"}
              />
              <p>Imagine the Future</p>
            </div>
            <VideoTemplate mainIconUrl="https://player.vimeo.com/video/944714344?h=52bf4b1299&badge=0&autopause=0&player_id=0&app_id=58479" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectForest;
