import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import "./tabs.css";
import Modal from "../../welcome-page/modal";
import { useNavigate, useLocation } from "react-router-dom";
import ChooseExperience from "./chooseExperience";

interface TabsComponentPropsModal {
  firstProps?: any;
  secondProps?: any;
  thirdProps?: any;
  fourthProps?: any;
  FifthProps?: any;
}

const TabsComponent: React.FC<TabsComponentPropsModal> = ({
  firstProps,
  secondProps,
  thirdProps,
  fourthProps,
  FifthProps,
}: TabsComponentPropsModal) => {
  const [flag, setFlag] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const currentExperience = location.pathname.split("/")[1];

  const cityOfLight = currentExperience === "cityOfLight";
  const cityOfAfrica = currentExperience === "cityOfAfrica";
  const PCM = currentExperience === "PCM";
  const OSC = currentExperience === "OSC";
  const DSEP = currentExperience === "DSEP";
  const UEI = currentExperience === "UEI";
  const isDsepUnified = currentExperience === "dsep-unified";
  const isRetail = currentExperience === "retail";
  const DSNP = currentExperience === "DSNP";
  const DHP = currentExperience === "DHP";
  const isIndustry = currentExperience === "industry4.0";
  const ODR = currentExperience === "ODR";
  const ONDC = currentExperience === "ONDC";
  const isRegenerativeAgriculture =
    currentExperience === "regenerativeAgriculture";
  const isRegenUEI = currentExperience === "regenUEI";

  // for right side climate btn
  const isDragonFoods = currentExperience === "dragon-foods";
  const isSkyAnalytics = currentExperience === "sky-analytics";
  const isHarmoniaid = currentExperience === "harmoniaid";
  const isStateForestDep = currentExperience === "state-forest-dep";
  const isEarthSupport = currentExperience === "earth-support-initiative";
  const isEnvirogrowth = currentExperience === "envirogrowth";
  const isOpenSpark = currentExperience === "open-spark";

  const openCity = (evt: any, cityName: string) => {
    let i: number;
    let tabcontent: any = [];
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      const currentContent = tabcontent[i].innerHTML;
      tabcontent[i].innerHTML = currentContent;
    }
  };

  return (
    <>
      {DSEP ||
      UEI ||
      isDsepUnified ||
      isRetail ||
      isOpenSpark ||
      DSNP ||
      DHP ||
      isIndustry ||
      ODR ? (
        <Tabs
          className={"tabsConatiner cityOfAfrica DSEP_Wrapper"}
          defaultActiveKey="3"
          items={[
            {
              label: (
                <div>
                  <img
                    style={{ height: "35px", width: "135px" }}
                    // src="/assets/logo2.png"

                    src={"/assets/beckn_lg.svg"}
                    alt={"Icon"}
                    width={"98%"}
                  />
                </div>
              ),
              key: "1",
              className: "tabs-style",
              disabled: true,
            },

            {
              label: (
                <div className="tablinks" style={{ display: "flex" }}>
                  <img src="/assets/bulbIcon.svg" alt={"Icon"} width={"25%"} />
                  <div style={{ paddingLeft: "14.4px" }}>
                    <span>experience a world with beckn</span>
                  </div>
                </div>
              ),
              key: "3",
              className: "tabs-style",
              children: secondProps,
            },

            {
              label: (
                <div>
                  <img src="/assets/home.svg" alt={"Icon"} width={"98%"} />
                </div>
              ),
              key: "6",
              className: "home-tabs-style",
              children: <Modal flag={flag} pathName={"/select-experience"} />,
            },
          ]}
        />
      ) : PCM || OSC ? (
        <Tabs
          className={"tabsConatiner cityOfAfrica PCM_wrapper"}
          defaultActiveKey="3"
          items={[
            {
              label: (
                <div>
                  <img
                    style={{ height: "35px", width: "135px" }}
                    // src="/assets/logo2.png"

                    src={"/assets/beckn_lg.svg"}
                    alt={"Icon"}
                    width={"98%"}
                  />
                </div>
              ),
              key: "1",
              className: "tabs-style",
              disabled: true,
            },
            {
              label: (
                <div className="tablinks" style={{ display: "flex" }}>
                  <img src="/assets/worldIcon.svg" alt={"Icon"} width={"25%"} />
                  <div style={{ paddingLeft: "14.4px" }}>
                    <span>behind the scenes</span>
                  </div>
                </div>
              ),
              key: "2",
              className: "tabs-style",
              children: firstProps,
            },
            {
              label: (
                <div className="tablinks" style={{ display: "flex" }}>
                  <img src="/assets/bulbIcon.svg" alt={"Icon"} width={"25%"} />
                  <div style={{ paddingLeft: "14.4px" }}>
                    <span>experience a world with beckn</span>
                  </div>
                </div>
              ),
              key: "3",
              className: "tabs-style",
              children: secondProps,
            },

            {
              label: (
                <div>
                  <img src="/assets/home.svg" alt={"Icon"} width={"98%"} />
                </div>
              ),
              key: "6",
              className: "home-tabs-style",
              children: <Modal flag={flag} pathName={"/select-experience"} />,
            },
          ]}
        />
      ) : cityOfAfrica ? (
        <Tabs
          className={"tabsConatiner cityOfAfrica"}
          defaultActiveKey="2"
          items={[
            {
              label: (
                <div>
                  <img
                    style={{ height: "35px", width: "135px" }}
                    // src="/assets/logo2.png"

                    src={"/assets/beckn_lg.svg"}
                    alt={"Icon"}
                    width={"98%"}
                  />
                </div>
              ),
              key: "1",
              className: "tabs-style",
              disabled: true,
            },
            {
              label: (
                <div
                  className="tablinks"
                  style={{ display: "flex", alignItems: "center" }}
                  onClick={(event) => openCity(event, "aWorldWithoutBeckn")}
                >
                  <img src="/assets/worldIcon.svg" alt={"Icon"} width={"25%"} />
                  <div style={{ paddingLeft: "14.4px" }}>
                    <span style={{ width: "60% !important" }}>
                      {"Imagine with us"}
                    </span>
                  </div>
                </div>
              ),
              key: "2",
              className: "tabs-style",
              children: firstProps,
            },
            {
              label: (
                <div className="tablinks" style={{ display: "flex" }}>
                  <img src="/assets/bulbIcon.svg" alt={"Icon"} width={"25%"} />
                  <div style={{ paddingLeft: "14.4px" }}>
                    <span>a world with beckn</span>
                  </div>
                </div>
              ),
              key: "3",
              className: "tabs-style",
              children: secondProps,
            },

            {
              label: (
                <div>
                  <img src="/assets/home.svg" alt={"Icon"} width={"98%"} />
                </div>
              ),
              key: "6",
              className: "home-tabs-style",
              children: <Modal flag={flag} pathName={"/select-experience"} />,
            },
          ]}
        />
      ) : ONDC || isRegenerativeAgriculture || isRegenUEI ? (
        <Tabs
          className={"tabsConatiner ONDC PCM_wrapper"}
          defaultActiveKey="2"
          items={[
            {
              label: (
                <div>
                  <img
                    style={{ height: "35px", width: "135px" }}
                    // src="/assets/logo2.png"

                    src={"/assets/beckn_lg.svg"}
                    alt={"Icon"}
                    width={"98%"}
                  />
                </div>
              ),
              key: "1",
              className: "tabs-style",
              disabled: true,
            },
            {
              label: (
                <div
                  className="tablinks"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img src="/assets/worldIcon.svg" alt={"Icon"} width={"25%"} />
                  <div style={{ paddingLeft: "14.4px" }}>
                    <span>a world without Beckn</span>
                  </div>
                </div>
              ),
              key: "2",
              className: "tabs-style",
              children: firstProps,
            },
            {
              label: (
                <div
                  className="tablinks"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img src="/assets/bulbIcon.svg" alt={"Icon"} width={"25%"} />
                  <div style={{ paddingLeft: "14.4px" }}>
                    <span>a world with Beckn</span>
                  </div>
                </div>
              ),
              key: "3",
              className: "tabs-style",
              children: secondProps,
            },
            {
              label: (
                <div
                  className="tablinks"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img src="/assets/videoIcon.svg" alt={"Icon"} width={"25%"} />
                  <div style={{ paddingLeft: "14.4px" }}>
                    <span>behind the scenes</span>
                  </div>
                </div>
              ),
              key: "4",
              className: "tabs-style",
              children: thirdProps,
            },

            {
              label: (
                <div>
                  <img src="/assets/home.svg" alt={"Icon"} width={"98%"} />
                </div>
              ),
              key: "6",
              className: "home-tabs-style",
              children: <Modal flag={flag} pathName={"/RegenAg"} />,
            },
          ]}
        />
      ) : isStateForestDep ||
        isEarthSupport ||
        isEnvirogrowth ||
        isDragonFoods ||
        isSkyAnalytics ||
        isHarmoniaid ? (
        <Tabs
          className="tabsConatiner climate"
          defaultActiveKey="2"
          items={[
            {
              label: (
                <div>
                  <img
                    style={
                      cityOfLight
                        ? { height: "35px", width: "135px" }
                        : { height: "35px", width: "135px" }
                    }
                    // src="/assets/logo2.png"

                    src={
                      cityOfLight
                        ? "/assets/beckn_lg.svg"
                        : "/assets/beckn_lg.svg"
                    }
                    alt={"Icon"}
                    width={"98%"}
                  />
                </div>
              ),
              key: "1",
              className: "tabs-style",
              disabled: true,
            },

            {
              label: (
                <div
                  className="tablinks"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img src="/assets/bulbIcon.svg" alt={"Icon"} width={"25%"} />
                  <div style={{ paddingLeft: "14.4px" }}>
                    <span>a world with {cityOfLight ? "beckn" : "beckn"}</span>
                  </div>
                </div>
              ),
              key: "2",
              className: "tabs-style",
              children: secondProps,
            },
            {
              label: (
                <div
                  className="tablinks"
                  style={{ display: "flex", alignItems: "center" }}
                  onClick={(event) => openCity(event, "behiendTheScenes")}
                >
                  <img src="/assets/videoIcon.svg" alt={"Icon"} width={"25%"} />
                  <div style={{ paddingLeft: "14.4px" }}>
                    <span>behind the scenes</span>
                  </div>
                </div>
              ),
              key: "3",
              className: "tabs-style",
              children: thirdProps,
            },
            {
              label: (
                <div
                  className="tablinks"
                  style={{ display: "flex", alignItems: "center" }}
                  onClick={(event) => openCity(event, "imaginingTheFuture")}
                >
                  <img
                    src="/assets/rocketIcon.svg"
                    alt={"Icon"}
                    width={"25%"}
                  />
                  <div style={{ paddingLeft: "14.4px" }}>
                    <span>imagining the future</span>
                  </div>
                </div>
              ),
              key: "4",
              className: "tabs-style",
              children: fourthProps,
            },
            {
              label: (
                <div>
                  <img src="/assets/home.svg" alt={"Icon"} width={"98%"} />
                </div>
              ),
              key: "6",
              className: "home-tabs-style",
              children: <Modal flag={flag} pathName={"/select-experience"} />,
            },
          ]}
        />
      ) : (
        <Tabs
          className="tabsConatiner"
          defaultActiveKey="2"
          items={[
            {
              label: (
                <div>
                  <img
                    style={
                      cityOfLight
                        ? { height: "35px", width: "135px" }
                        : { height: "35px", width: "135px" }
                    }
                    // src="/assets/logo2.png"

                    src={
                      cityOfLight
                        ? "/assets/beckn_lg.svg"
                        : "/assets/beckn_lg.svg"
                    }
                    alt={"Icon"}
                    width={"98%"}
                  />
                </div>
              ),
              key: "1",
              className: "tabs-style",
              disabled: true,
            },
            {
              label: (
                <div
                  className="tablinks"
                  style={{ display: "flex" }}
                  onClick={(event) => openCity(event, "aWorldWithoutBeckn")}
                >
                  <img src="/assets/worldIcon.svg" alt={"Icon"} width={"25%"} />
                  <div className="worldIcon" style={{ paddingLeft: "14.4px" }}>
                    <span style={{ width: "60% !important" }}>a world</span>
                    <br />
                    <span style={{ width: "60% !important" }}>
                      without {cityOfLight ? "beckn" : "beckn"}
                    </span>
                  </div>
                </div>
              ),
              key: "2",
              className: "tabs-style",
              children: firstProps,
            },
            {
              label: (
                <div className="tablinks" style={{ display: "flex" }}>
                  <img src="/assets/bulbIcon.svg" alt={"Icon"} width={"25%"} />
                  <div style={{ paddingLeft: "14.4px" }}>
                    <span>a world</span>
                    <br />
                    <span>with {cityOfLight ? "beckn" : "beckn"}</span>
                  </div>
                </div>
              ),
              key: "3",
              className: "tabs-style",
              children: secondProps,
            },
            {
              label: (
                <div
                  className="tablinks"
                  style={{ display: "flex" }}
                  onClick={(event) => openCity(event, "behiendTheScenes")}
                >
                  <img src="/assets/videoIcon.svg" alt={"Icon"} width={"25%"} />
                  <div style={{ paddingLeft: "14.4px" }}>
                    <span>behind the</span>
                    <br />
                    <span>scenes</span>
                  </div>
                </div>
              ),
              key: "4",
              className: "tabs-style",
              children: thirdProps,
            },
            {
              label: (
                <div
                  className="tablinks"
                  style={{ display: "flex" }}
                  onClick={(event) => openCity(event, "imaginingTheFuture")}
                >
                  <img
                    src="/assets/rocketIcon.svg"
                    alt={"Icon"}
                    width={"25%"}
                  />
                  <div style={{ paddingLeft: "14.4px" }}>
                    <span>imagining the</span>
                    <br />
                    <span>future</span>
                  </div>
                </div>
              ),
              key: "5",
              className: "tabs-style",
              children: fourthProps,
            },
            {
              label: (
                <div>
                  <img src="/assets/home.svg" alt={"Icon"} width={"98%"} />
                </div>
              ),
              key: "6",
              className: "home-tabs-style",
              children: <Modal flag={flag} pathName={"/select-experience"} />,
            },
          ]}
        />
      )}
      <>
        {isStateForestDep || isEarthSupport || isEnvirogrowth ? (
          <div className="climate-resilience-tabs-btn">
            <img
              onClick={() => {
                navigate("/progress", {
                  state: { experienceId: "state-forest-dep" },
                });
              }}
              src="/assets/forest_health.svg"
              alt="curvedArrow"
              className={isStateForestDep ? "hideCursor" : ""}
            />
            <img
              onClick={() => {
                navigate("/progress", {
                  state: { experienceId: "envirogrowth" },
                });
              }}
              src="/assets/forestrestoration.svg"
              alt="curvedArrow"
              className={isEnvirogrowth ? "hideCursor" : ""}
            />
            <img
              onClick={() => {
                navigate("/progress", {
                  state: { experienceId: "earth-support-initiative" },
                });
              }}
              src="/assets/leadingfoodandbeveragecompany.svg"
              alt="curvedArrow"
              className={isEarthSupport ? "hideCursor" : ""}
            />
            <img
              onClick={() => {
                navigate("/progress", {
                  state: { experienceId: "forest-conservation" },
                });
              }}
              src="/assets/backarrow.svg"
              alt="img-icon"
            />
          </div>
        ) : (
          ""
        )}
        {isDragonFoods || isSkyAnalytics || isHarmoniaid ? (
          <div className="climate-resilience-tabs-btn">
            <img
              onClick={() => {
                navigate("/progress", {
                  state: { experienceId: "dragon-foods" },
                });
              }}
              src="/assets/FMCG.svg"
              alt="img-icon"
              className={isDragonFoods ? "hideCursor" : ""}
            />
            <img
              onClick={() => {
                navigate("/progress", {
                  state: { experienceId: "sky-analytics" },
                });
              }}
              src="/assets/Climate_Resilience-sb.svg"
              alt="img-icon"
              className={isSkyAnalytics ? "hideCursor" : ""}
            />
            <img
              onClick={() => {
                navigate("/progress", {
                  state: { experienceId: "harmoniaid" },
                });
              }}
              src="/assets/humanitarian_aid.svg"
              alt="img-icon"
              className={isHarmoniaid ? "hideCursor" : ""}
            />
            <img
              onClick={() => {
                navigate("/progress", {
                  state: { experienceId: "climate-resilience" },
                });
              }}
              src="/assets/backarrow.svg"
              alt="img-icon"
            />
          </div>
        ) : (
          ""
        )}
      </>
    </>
  );
};

export default TabsComponent;
