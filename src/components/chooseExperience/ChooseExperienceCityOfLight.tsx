import React, { useState } from "react";
import VideoTemplate from "../videoTemplate/videoTemplate";
import Modal from "../../welcome-page/modal";
import HeaderTab from "../headerTab/HeaderTab";
import CityOfLight from "../product/CityOfLight";
import { AppDataMocks } from "../../utility/appsDataMocks";

const ChooseExperienceCityOfLight = () => {
  const [flag, setFlag] = useState(true);
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
                  (appData: any) => appData.appName === "cityOfLight"
                )?.tabs.find((tab: any) => tab.key === "2")?.tabHeaderText
              }
            </span>
          </div>
        </div>
      ),
      content: (
        <VideoTemplate mainIconUrl="https://player.vimeo.com/video/824663740?h=9464185e33&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
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
                  (appData: any) => appData.appName === "cityOfLight"
                )?.tabs.find((tab: any) => tab.key === "3")?.tabHeaderText
              }
            </span>
          </div>
        </div>
      ),
      content: <CityOfLight />,
      disabled: false
    },
    {
      key: "4",
      label: (
        <div
          className="tablinks"
          style={{ display: "flex", alignItems: "center" }}>
          <img src="/assets/bulbIcon.svg" alt={"Icon"} width={"25%"} />
          <div style={{ paddingLeft: "14.4px" }}>
            <span>
              {
                AppDataMocks.find(
                  (appData: any) => appData.appName === "cityOfLight"
                )?.tabs.find((tab: any) => tab.key === "4")?.tabHeaderText
              }
            </span>
          </div>
        </div>
      ),
      content: (
        <VideoTemplate mainIconUrl="https://player.vimeo.com/video/824744961?h=772d3cf1cc&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
      ),
      disabled: false
    },
    {
      key: "5",
      label: (
        <div
          className="tablinks"
          style={{ display: "flex", alignItems: "center" }}>
          <img src="/assets/bulbIcon.svg" alt={"Icon"} width={"25%"} />
          <div style={{ paddingLeft: "14.4px" }}>
            <span>
              {
                AppDataMocks.find(
                  (appData: any) => appData.appName === "cityOfLight"
                )?.tabs.find((tab: any) => tab.key === "5")?.tabHeaderText
              }
            </span>
          </div>
        </div>
      ),
      content: (
        <VideoTemplate mainIconUrl="https://player.vimeo.com/video/824729531?h=b973254da6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
      ),
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
      <HeaderTab
        tabClassName="himalyas-tab"
        tabs={tabs}
        defaultActiveKey={"3"}
      />
    </div>
  );
};

export default ChooseExperienceCityOfLight;
