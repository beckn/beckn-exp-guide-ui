import React, { useState } from "react";
import VideoTemplate from "../videoTemplate/videoTemplate";
import Modal from "../../welcome-page/modal";
import HeaderTab from "../headerTab/HeaderTab";
import Gambia from "../product/Gambia";
import { AppDataMocks } from "../../utility/appsDataMocks";

const ChooseExperienceGambia = () => {
  const [flag, setFlag] = useState(true);
  const APP_NAME = "cityOfAfrica";
  const tabs = [
    {
      key: "logo",
      label: (
        <div>
          <img
            style={{ height: "35px", width: "135px" }}
            src={"/assets/beckn_lg.svg"}
            alt={"Icon"}
            width={"98%"}
          />
        </div>
      ),
      content: "",
      disabled: true
    },
    {
      key: "2",
      label: (
        <div
          className="tablinks"
          style={{ display: "flex", alignItems: "center" }}>
          <img src="/assets/bulbIcon.svg" alt={"Icon"} width={"25%"} />
          <div style={{ paddingLeft: "14.4px" }}>
            <span>
              {
                AppDataMocks.find(
                  (appData: any) => appData.appName === APP_NAME
                )?.tabs.find((tab: any) => tab.key === "2")?.tabHeaderText
              }
            </span>
          </div>
        </div>
      ),
      content: (
        <VideoTemplate mainIconUrl="https://player.vimeo.com/video/835295642?h=07cf8dbef3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
      ),
      disabled: false
    },
    {
      key: "3",
      label: (
        <div
          className="tablinks"
          style={{ display: "flex", alignItems: "center" }}>
          <img src="/assets/bulbIcon.svg" alt={"Icon"} width={"25%"} />
          <div style={{ paddingLeft: "14.4px" }}>
            <span>
              {
                AppDataMocks.find(
                  (appData: any) => appData.appName === APP_NAME
                )?.tabs.find((tab: any) => tab.key === "3")?.tabHeaderText
              }
            </span>
          </div>
        </div>
      ),
      content: <Gambia />,
      disabled: false
    },
    {
      key: "ForHomeIcon",
      label: (
        <div>
          <img src="/assets/home.svg" alt={"Icon"} width={"98%"} />
        </div>
      ),
      content: <Modal flag={flag} pathName={"/select-experience"} />,
      disabled: false
    }
  ];

  return (
    <div className="choosingExp_wrapper">
      <HeaderTab tabClassName="OSC-tab" tabs={tabs} defaultActiveKey={"3"} />
    </div>
  );
};

export default ChooseExperienceGambia;
