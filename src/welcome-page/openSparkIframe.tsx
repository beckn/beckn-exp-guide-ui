import React, { useState } from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";
import { IoWalletOutline } from "react-icons/io5";
import { SlEnergy } from "react-icons/sl";

const OpenSparkIframe = () => {
  const openSparkUrl = process.env.REACT_APP_OPEN_SPARK_WALLET_URL;
  const openSparkRetailStoreUrl = process.env.REACT_APP_OPEN_SPARK_RETAIL_URL;
  const [openSpark, setopenSpark] = useState(openSparkRetailStoreUrl);
  const [activeButton, setActiveButton] = useState("for_tetail_store");
  const [retailsModal, setRetailsModal] = useState(false);

  const handleOsmLink = (e: any) => {
    setopenSpark(openSparkUrl);
    setActiveButton("for_cutm_name");
    setRetailsModal(false);
  };
  const handleRetailStore = (e: any) => {
    setopenSpark(openSparkRetailStoreUrl);
    setActiveButton("for_tetail_store");
    setRetailsModal(true);
  };
  return (
    <div style={{ position: "relative" }}>
      <ChooseExperience
        // headingText="enabling commerce on  "
        textURL={"/assets/open-spark-text.svg"}
        descriptionText={
          <>
            Powered by the Unified Energy Interface, <b>Spark</b> turns energy
            into a tradeable asset. From EV charging, energy trading, and
            battery capacity rentals; to purchasing solar panels, and even
            availing energy financing, <b>Spark</b> gives you total control over
            the energy you own and the energy you need.
          </>
        }
        setTourismUrl={setopenSpark}
        iframeURL={openSpark}
        languageEng={"english"}
        languageFra={"français"}
        retailsModal={retailsModal}
      />

      <div className="osc_tab_change open-spark-tab-change">
        <div
          className={`for_tetail_store ${
            activeButton === "for_tetail_store" ? "active" : ""
          }`}
          onClick={handleRetailStore}
        >
          {activeButton === "for_tetail_store" ? (
            <div className="white-icon">
              <SlEnergy />
            </div>
          ) : (
            <div className="black-icon">
              {" "}
              <SlEnergy />{" "}
            </div>
          )}
          Spark App
        </div>
        <div
          className={`for_cutm_name ${
            activeButton === "for_cutm_name" ? "active" : ""
          }`}
          onClick={handleOsmLink}
        >
          {activeButton === "for_cutm_name" ? (
            <div className="white-icon">
              <IoWalletOutline />
            </div>
          ) : (
            <div className="black-icon">
              <IoWalletOutline />
            </div>
          )}
          Vault App
        </div>
      </div>
      <img
        src="/assets/open-spark-footer.svg"
        className="open-spark-footer-logo"
      />
    </div>
  );
};

export default OpenSparkIframe;
