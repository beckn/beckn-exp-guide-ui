import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import "./tabs.css";
import Modal from "../../welcome-page/modal";
import { useNavigate } from "react-router-dom";
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
  const cityOfLight = localStorage.getItem("name") === "cityOfLight";
  const cityOfAfrica = localStorage.getItem("name") === "cityOfAfrica";
  const PCM = localStorage.getItem("name") === "PCM";
  const OSC = localStorage.getItem("name") === "OSC";
  const DSEP = localStorage.getItem("name") === "DSEP";
  const UEI = localStorage.getItem("name") === "UEI";
  const isDsepUnified = localStorage.getItem("name") === "dsepUnified";
  const isRetail = localStorage.getItem("name") === "retail";
  const DSNP = localStorage.getItem("name") === "DSNP";
  const DHP = localStorage.getItem("name") === "DHP";
  const isIndustry = localStorage.getItem("name") === "industry4.0";
  const ODR = localStorage.getItem("name") === "ODR";
  const ONDC = localStorage.getItem("name") === "ONDC";
  const isRegenerativeAgriculture =
    localStorage.getItem("name") === "regenerativeAgriculture";
  const isRegenUEI = localStorage.getItem("name") === "regenUEI";

  // for right side climate btn
  const isDragonFoods = localStorage.getItem("name") === "dragon-foods";
  const isSkyAnalytics = localStorage.getItem("name") === "sky-analytics";
  const isHarmoniaid = localStorage.getItem("name") === "harmoniaid";
  const isStateForestDep = localStorage.getItem("name") === "state-forest-dep";
  const isEarthSupport =
    localStorage.getItem("name") === "earth-support-initiative";
  const isEnvirogrowth = localStorage.getItem("name") === "envirogrowth";

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
                        ? { height: "unset", width: "unset" }
                        : { height: "35px", width: "135px" }
                    }
                    // src="/assets/logo2.png"

                    src={
                      cityOfLight ? "/assets/logo2.png" : "/assets/beckn_lg.svg"
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
                      without {cityOfLight ? "ROCC" : "beckn"}
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
                    <span>with {cityOfLight ? "ROCC" : "beckn"}</span>
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
                localStorage.setItem("name", "state-forest-dep");
                navigate("/progress");
              }}
              src="/assets/forest_health.svg"
              alt="curvedArrow"
              className={isStateForestDep ? "hideCursor" : ""}
            />
            <img
              onClick={() => {
                localStorage.setItem("name", "envirogrowth");
                navigate("/progress");
              }}
              src="/assets/forestrestoration.svg"
              alt="curvedArrow"
              className={isEnvirogrowth ? "hideCursor" : ""}
            />
            <img
              onClick={() => {
                localStorage.setItem("name", "earth-support-initiative");
                navigate("/progress");
              }}
              src="/assets/leadingfoodandbeveragecompany.svg"
              alt="curvedArrow"
              className={isEarthSupport ? "hideCursor" : ""}
            />
            <img
              onClick={() => {
                localStorage.setItem("name", "forest-conservation");
                navigate("/progress");
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
                localStorage.setItem("name", "dragon-foods");
                navigate("/progress");
              }}
              src="/assets/FMCG.svg"
              alt="img-icon"
              className={isDragonFoods ? "hideCursor" : ""}
            />
            <img
              onClick={() => {
                localStorage.setItem("name", "sky-analytics");
                navigate("/progress");
              }}
              src="/assets/Climate_Resilience-sb.svg"
              alt="img-icon"
              className={isSkyAnalytics ? "hideCursor" : ""}
            />
            <img
              onClick={() => {
                localStorage.setItem("name", "harmoniaid");
                navigate("/progress");
              }}
              src="/assets/humanitarian_aid.svg"
              alt="img-icon"
              className={isHarmoniaid ? "hideCursor" : ""}
            />
            <img
              onClick={() => {
                localStorage.setItem("name", "climate-resilience");
                navigate("/progress");
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
