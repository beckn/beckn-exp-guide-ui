import { Link } from "react-router-dom";
import Title from "../common/title";
import Card from "../common/Cards/card";
import { useNavigate } from "react-router-dom";
import "./selectExperience.css";
import { useEffect } from "react";
import { Typography } from "antd";

const SelectExperience = () => {
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
          <div className="animates fadeIns fives home-card-container">
            <ul className="card-sub-containers">
              <li onClick={() => handleNevigate("retail")}>
                <div className="card-with-image">
                  <img
                    className="first-image-card"
                    src="/assets/retail-card.svg"
                    alt={"BecknLogoIcon"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">enhancing commerce</span>
                    <br />
                    <span className="font-color">with kuza one</span>
                  </p>
                </div>
              </li>
              <li onClick={() => handleNevigate("ODR")}>
                <div className="card-with-image">
                  <img
                    className="first-image-card"
                    src="/assets/ODR_card.svg"
                    alt={"BecknLogoIcon"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">resolving disputes</span>
                    <br />
                    <span className="font-color">online with LegalEase</span>
                  </p>
                </div>
              </li>
              <li onClick={() => handleNevigate("UEI")}>
                <div className="card-with-image">
                  <img
                    className="first-image-card"
                    src="/assets/UEI_cardImg.svg"
                    alt={"BecknLogoIcon"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">Unified Energy</span>
                    <br />
                    <span className="font-color">Interface</span>
                  </p>
                </div>
              </li>
              <li onClick={() => handleNevigate("dsepUnified")}>
                <div className="card-with-image">
                  <img
                    className="first-image-card"
                    src="/assets/dsep_card.svg"
                    alt={"dsep_cardImg"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">grow your career</span>
                    <br />
                    <span className="font-color">with SkillUp</span>
                  </p>
                </div>
              </li>
              <li onClick={() => handleNevigate("DSNP")}>
                <div className="card-with-image">
                  <img
                    className="first-image-card"
                    src="/assets/DSNP_card.svg"
                    alt={"dsep_cardImg"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">Beckn & DSNP</span>
                  </p>
                </div>
              </li>
              <li onClick={() => handleNevigate("industry4.0")}>
                <div className="card-with-image">
                  <img
                    className="first-image-card"
                    src="/assets/industry-card.svg"
                    alt={"industry_cardImg"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">revolutionizing with</span>
                    <br />
                    <span className="font-color">Industry 4.0 </span>
                  </p>
                </div>
              </li>
              {/* <li onClick={() => handleNevigate("DHP")}>
                <div className="card-with-image">
                  <img
                    className="first-image-card"
                    src="/assets/DHP_card.svg"
                    alt={"dsep_cardImg"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">Healthcare Hub: </span>
                    <br />
                    <span className="font-color">Doctor, Meds, Labs</span>
                  </p>
                </div>
              </li> */}
              {/* <li onClick={() => handleNevigate("DSEP")}>
                <div className="card-with-image">
                  <img
                    className="first-image-card"
                    src="/assets/DSEP.svg"
                    alt={"BecknLogoIcon"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">empowering limitless </span>
                    <br />
                    <span className="font-color">online learning</span>
                  </p>
                </div>
              </li> */}
              <li onClick={() => handleNevigate("himalayas")}>
                <div className="card-with-image">
                  <img
                    className="first-image-card"
                    src="/assets/XXX.png"
                    alt={"BecknLogoIcon"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">a tryst with the</span>
                    <br />
                    <span className="font-color">himalayas</span>
                  </p>
                </div>
              </li>
              {/* <li onClick={() => handleNevigate("cities")}>
                <div className="card-with-image">
                  <img
                    className="second-image-card"
                    src="/assets/YYY.png"
                    alt={"BecknLogoIcon"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">enabling</span>
                    <br />
                    <span className="font-color">smart cities</span>
                  </p>
                </div>
              </li> */}
              <li onClick={() => handleNevigate("OSC")}>
                <div className="card-with-image">
                  <img
                    style={{ borderRadius: "35px" }}
                    className="first-image-card"
                    src="/assets/OSC.svg"
                    alt={"BecknLogoIcon"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">enabling commerce </span>
                    <br />
                    <span className="font-color">on OpenStreetMap</span>
                  </p>
                </div>
              </li>
              {/* <li onClick={() => handleNevigate("PCM")}>
                <div className="card-with-image">
                  <img
                    style={{ borderRadius: "35px" }}
                    className="first-image-card"
                    src="/assets/PCM.svg"
                    alt={"BecknLogoIcon"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">enriching pass Culture </span>
                    <br />
                    <span className="font-color">with mobility</span>
                  </p>
                </div>
              </li> */}
              {/* <li onClick={() => handleNevigate("cityOfAfrica")}>
                <div className="card-with-image">
                  <img
                    style={{ borderRadius: "35px" }}
                    className="first-image-card"
                    src="/assets/smartafrica.png"
                    alt={"BecknLogoIcon"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">enabling smart</span>
                    <br />
                    <span className="font-color">gambia</span>
                  </p>
                </div>
              </li> */}
              <li onClick={() => handleNevigate("cityOfLight")}>
                <div className="card-with-image">
                  <img
                    className="first-image-card"
                    src="/assets/city-of-light.png"
                    alt={"BecknLogoIcon"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">experience the</span>
                    <br />
                    <span className="font-color">city of lights</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectExperience;
