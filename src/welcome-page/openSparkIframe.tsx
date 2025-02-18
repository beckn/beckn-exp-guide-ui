import React, { useState } from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";
import { IoWalletOutline } from "react-icons/io5";
import { SlEnergy } from "react-icons/sl";

const OpenSparkIframe = () => {
  const openSparkVaultUrl = process.env.REACT_APP_OPEN_SPARK_WALLET_URL;
  const openSparkRetailStoreUrl = process.env.REACT_APP_OPEN_SPARK_RETAIL_URL;
  const openSparkLendUrl = process.env.REACT_APP_OPEN_SPARK_LEND_URL;
  const openSparkSolaris = process.env.REACT_APP_OPEN_SPARK_Solaris_URL;
  const [openSpark, setopenSpark] = useState(openSparkRetailStoreUrl);
  const [activeButton, setActiveButton] = useState("for_tetail_store");
  const [retailsModal, setRetailsModal] = useState(false);
  const [lendModal, setLendModal] = useState(false);
  const [vaultModal, setVaultModal] = useState(false);

  const handleOsmLink = (e: any) => {
    setopenSpark(openSparkSolaris);
    setActiveButton("for_cutm_name");
    setRetailsModal(false);
    setLendModal(false);
    setVaultModal(false);
  };
  const handleRetailStore = (e: any) => {
    setopenSpark(openSparkRetailStoreUrl);
    setActiveButton("for_tetail_store");
    setRetailsModal(true);
    setLendModal(false);
    setVaultModal(false);
  };
  const handleLendApp = (e: any) => {
    setopenSpark(openSparkLendUrl);
    setActiveButton("for_lend_name");
    setRetailsModal(false);
    setLendModal(true);
    setVaultModal(false);
  };
  const handVaultApp = (e: any) => {
    setopenSpark(openSparkVaultUrl);
    setActiveButton("for_Vault");
    setRetailsModal(false);
    setLendModal(false);
    setVaultModal(true);
  };
  return (
    <div style={{ position: "relative" }}>
      <ChooseExperience
        // headingText="enabling commerce on  "
        textURL={"/assets/spark-text.svg"}
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
          className={`for_tetail_store open-spark-btn ${
            activeButton === "for_tetail_store" ? "active" : ""
          }`}
          onClick={handleRetailStore}
        >
          {activeButton === "for_tetail_store" ? (
            <img src="/assets/Kuza_Logo_White_Trans.svg" />
          ) : (
            <img src="/assets/Kuza_Logo_White_Trans-1.svg" />
          )}
          Spark
        </div>
        <div
          className={`for_cutm_name open-spark-btn ${
            activeButton === "for_cutm_name" ? "active" : ""
          }`}
          onClick={handleOsmLink}
        >
          {activeButton === "for_cutm_name" ? (
            <img src="/assets/battery-1.svg" />
          ) : (
            <img src="/assets/battery.svg" />
          )}
          Solaris
        </div>
        <div
          className={`for_cutm_name open-spark-btn ${
            activeButton === "for_lend_name" ? "active" : ""
          }`}
          onClick={handleLendApp}
        >
          {activeButton === "for_lend_name" ? (
            <img src="/assets/money_white.svg" />
          ) : (
            <img src="/assets/money_bag.svg" />
          )}
          Lend Ease
        </div>
        <div
          className={`for_cutm_name open-spark-btn ${
            activeButton === "for_Vault" ? "active" : ""
          }`}
          onClick={handVaultApp}
        >
          {activeButton === "for_Vault" ? (
            <img src="/assets/vault-active.svg" />
          ) : (
            <img src="/assets/vault.svg" />
          )}
          Vault
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
