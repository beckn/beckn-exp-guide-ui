import React, { useState, useEffect } from "react";
import "../Tabs/tabs.css";

export interface SelectExpModalProps {
  headingText?: string;
  btmHeading?: string;
}

const OpenSparkExp: React.FC<SelectExpModalProps> = ({
  headingText,
  btmHeading,
}) => {
  const openSparkUrls = {
    for_tetail_store: process.env.REACT_APP_OPEN_SPARK_RETAIL_URL,
    for_cutm_name: process.env.REACT_APP_OPEN_SPARK_Solaris_URL,
    for_lend_name: process.env.REACT_APP_OPEN_SPARK_LEND_URL,
    for_Vault: process.env.REACT_APP_OPEN_SPARK_WALLET_URL,
  };

  const savedTab =
    (localStorage.getItem("activeSparkTab") as keyof typeof openSparkUrls) ||
    "for_tetail_store";
  const [activeButton, setActiveButton] =
    useState<keyof typeof openSparkUrls>(savedTab);

  useEffect(() => {
    localStorage.setItem("activeSparkTab", activeButton);
  }, [activeButton]);

  const handleTabClick = (tabKey: keyof typeof openSparkUrls) => {
    setActiveButton(tabKey);
  };
  console.log(activeButton);
  return (
    <div className="tab-wrappper-content">
      <div className="text_wrapper" style={{ marginTop: "-100px" }}>
        <div className="heading-text">{headingText}</div>
        <img
          src={"/assets/spark-text.svg"}
          alt="header-content-text"
          style={{ marginBottom: "-10px" }}
        />
        <div className="heading-text" style={{ lineHeight: "unset" }}>
          {btmHeading}
        </div>
        <div className="description-text">
          Powered by the Unified Energy Interface, <b>Spark</b> turns energy
          into a tradeable asset. From EV charging, energy trading, and battery
          capacity rentals; to purchasing solar panels, and even availing energy
          financing, <b>Spark</b> gives you total control over the energy you
          own and the energy you need.
        </div>

        {/* --- Button Group --- */}
        <div className="osc_tab_change open-spark-tab-change">
          <div
            className={`for_tetail_store open-spark-btn ${
              activeButton === "for_tetail_store" ? "active" : ""
            }`}
            onClick={() => handleTabClick("for_tetail_store")}
          >
            <img
              src={
                activeButton === "for_tetail_store"
                  ? "/assets/Kuza_Logo_White_Trans.svg"
                  : "/assets/Kuza_Logo_White_Trans-1.svg"
              }
            />
            Spark
          </div>
          <div
            className={`for_cutm_name open-spark-btn ${
              activeButton === "for_cutm_name" ? "active" : ""
            }`}
            onClick={() => handleTabClick("for_cutm_name")}
          >
            <img
              src={
                activeButton === "for_cutm_name"
                  ? "/assets/battery-1.svg"
                  : "/assets/battery.svg"
              }
            />
            Solaris
          </div>
          <div
            className={` for_cutm_name for_lend_name open-spark-btn ${
              activeButton === "for_lend_name" ? "active" : ""
            }`}
            onClick={() => handleTabClick("for_lend_name")}
          >
            <img
              src={
                activeButton === "for_lend_name"
                  ? "/assets/money_white.svg"
                  : "/assets/money_bag.svg"
              }
            />
            Lend Ease
          </div>
          <div
            className={` for_cutm_name for_Vault open-spark-btn ${
              activeButton === "for_Vault" ? "active" : ""
            }`}
            onClick={() => handleTabClick("for_Vault")}
          >
            <img
              src={
                activeButton === "for_Vault"
                  ? "/assets/vault-active.svg"
                  : "/assets/vault.svg"
              }
            />
            Vault
          </div>
        </div>
      </div>

      {/* --- Iframe Section --- */}
      <div className="smartphone-wrapper">
        <div className="smartphone">
          <div className="content">
            {Object.keys(openSparkUrls).map((key, ind) => (
              <iframe
                key={ind}
                className="ChooseExpIframe"
                allow="clipboard-read; clipboard-write; geolocation *"
                src={openSparkUrls[key as keyof typeof openSparkUrls]}
                frameBorder="0"
                allowFullScreen
                scrolling="yes"
                width="100%"
                height="100%"
                style={{
                  display: activeButton === key ? "block" : "none",
                  borderRadius: "36px",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* --- Footer Image --- */}
      <img
        src="/assets/open-spark-footer.svg"
        className="open-spark-footer-logo"
      />
    </div>
  );
};

export default OpenSparkExp;
