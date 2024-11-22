import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../welcome-page/selectExperience.css";
import VideoTemplate from "../../videoTemplate/videoTemplate";

const SelectClimate = () => {
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
              <li onClick={() => handleNevigate("dragon-foods")}>
                <div className="card-with-image">
                  <img
                    className="first-image-card"
                    src="/assets/FMCG.svg"
                    alt={"FMCG"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">
                      An FMCG company delivers flood-resilience
                    </span>
                    <br />
                    <span className="font-color">
                      farming advisory to its contract farmers
                    </span>
                  </p>
                </div>
              </li>
              <li onClick={() => handleNevigate("sky-analytics")}>
                <div className="card-with-image">
                  <img
                    className="first-image-card"
                    src="/assets/Climate_Resilience-sb.svg"
                    alt={"forest_conservation"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">
                      A climate services startup delivers
                    </span>
                    <br />
                    <span className="font-color">
                      flood predictions for early warnings
                    </span>
                  </p>
                </div>
              </li>
              <li onClick={() => handleNevigate("harmoniaid")}>
                <div className="card-with-image">
                  <img
                    className="first-image-card"
                    src="/assets/humanitarian_aid.svg"
                    alt={"harmoniaid"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">
                      A humanitarian aid organization
                    </span>
                    <br />
                    <span className="font-color">
                      plans for anticipatory aid
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
              <p>
                Imagine Disaster Resilience with Climate Resilience Data
                Highways
              </p>
            </div>
            <VideoTemplate mainIconUrl="https://player.vimeo.com/video/936514306?h=89570ff4e0&badge=0&autopause=0&player_id=0&app_id=58479" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectClimate;
