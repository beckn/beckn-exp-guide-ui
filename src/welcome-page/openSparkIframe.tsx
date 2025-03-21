import { useState } from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";
import ModalSlider from "../common/ModalHTML/ModalSlider";
import { Button } from "antd";

const imageStyle = {
  borderRadius: "50%",
  width: "200px",
  height: "200px",
  objectFit: "cover",
  margin: "0 auto",
  display: "block",
} as const;

const OpenSparkIframe = () => {
  const openSparkVaultUrl = process.env.REACT_APP_OPEN_SPARK_WALLET_URL;
  const openSparkRetailStoreUrl = process.env.REACT_APP_OPEN_SPARK_RETAIL_URL;
  const openSparkLendUrl = process.env.REACT_APP_OPEN_SPARK_LEND_URL;
  const openSparkSolaris = process.env.REACT_APP_OPEN_SPARK_Solaris_URL;
  const [openSpark, setopenSpark] = useState(openSparkVaultUrl);
  const [activeButton, setActiveButton] = useState("for_Vault");
  const [currentActiveApp, setCurrentActiveApp] = useState({
    for_Vault: true,
    for_tetail_store: false,
    for_cutm_name: false,
    for_lend_name: false,
  });
  const [retailsModal, setRetailsModal] = useState(false);
  const [lendModal, setLendModal] = useState(false);
  const [vaultModal, setVaultModal] = useState(false);
  const [isModalOpenhimalayas, setIsModalOpenhimalayas] = useState(false);

  // const handleOsmLink = (e: any) => {
  //   setopenSpark(openSparkSolaris);
  //   setActiveButton("for_cutm_name");
  //   setRetailsModal(false);
  //   setLendModal(false);
  //   setVaultModal(false);
  // };
  // const handleRetailStore = (e: any) => {
  //   setopenSpark(openSparkRetailStoreUrl);
  //   setActiveButton("for_tetail_store");
  //   setRetailsModal(true);
  //   setLendModal(false);
  //   setVaultModal(false);
  // };
  // const handleLendApp = (e: any) => {
  //   setopenSpark(openSparkLendUrl);
  //   setActiveButton("for_lend_name");
  //   setRetailsModal(false);
  //   setLendModal(true);
  //   setVaultModal(false);
  // };

  // const handVaultApp = (e: any) => {
  //   setopenSpark(openSparkVaultUrl);
  //   setActiveButton("for_Vault");
  //   setRetailsModal(false);
  //   setLendModal(false);
  //   setVaultModal(true);
  // };

  const handleAppSelection = (appType: string) => {
    switch (appType) {
      case "for_cutm_name":
        setopenSpark(openSparkSolaris);
        setActiveButton("for_cutm_name");
        setRetailsModal(false);
        setLendModal(false);
        setVaultModal(false);
        break;

      case "for_tetail_store":
        setopenSpark(openSparkRetailStoreUrl);
        setActiveButton("for_tetail_store");
        setRetailsModal(true);
        setLendModal(false);
        setVaultModal(false);
        break;

      case "for_lend_name":
        setopenSpark(openSparkLendUrl);
        setActiveButton("for_lend_name");
        setRetailsModal(false);
        setLendModal(true);
        setVaultModal(false);
        break;

      case "for_Vault":
        setopenSpark(openSparkVaultUrl);
        setActiveButton("for_Vault");
        setRetailsModal(false);
        setLendModal(false);
        setVaultModal(true);
        break;

      default:
        console.warn("Unknown app type selected");
    }
  };

  const showModalhimalayas = () => {
    setIsModalOpenhimalayas(true);
  };

  const handleCancelhimalayas = () => {
    setIsModalOpenhimalayas(false);
  };

  const onIframeLoad = () => {
    setCurrentActiveApp({
      for_Vault: activeButton === "for_Vault",
      for_tetail_store: activeButton === "for_tetail_store",
      for_cutm_name: activeButton === "for_cutm_name",
      for_lend_name: activeButton === "for_lend_name",
    });
  };

  return (
    <>
      <div style={{ position: "relative" }} className={"open-spark-app"}>
        <ChooseExperience
          // headingText="enabling commerce on  "
          textURL={"/assets/spark-text1.svg"}
          descriptionText={
            <div style={{ fontWeight: 400 }}>
              Turn your battery into a money-maker! Rent, trade, and finance
              energy effortlessly with UEI-powered apps. Link your wallet,
              unlock better deals, and watch your energy assets work for you.
              The future of smart energy is here—power up and profit!
            </div>
          }
          setTourismUrl={setopenSpark}
          iframeURL={openSpark}
          languageEng={"english"}
          languageFra={"français"}
          retailsModal={retailsModal}
          onIframeLoad={onIframeLoad}
        />

        <div className="osc_tab_change open-spark-tab-change">
          <div
            className={`for_cutm_name open-spark-btn ${
              currentActiveApp["for_Vault"] ? "active" : ""
            } ${
              activeButton === "for_Vault" && !currentActiveApp["for_Vault"]
                ? "opacity"
                : ""
            }`}
            onClick={() => handleAppSelection("for_Vault")}
          >
            {activeButton === "for_Vault" && !currentActiveApp["for_Vault"] ? (
              <>
                <div className="spinner"></div> Loading...
              </>
            ) : (
              <>
                {currentActiveApp["for_Vault"] ? (
                  <img src="/assets/vault-active.svg" alt="vault-active" />
                ) : (
                  <img src="/assets/vault.svg" alt="vault" />
                )}
                Vault
              </>
            )}
          </div>
          <div
            className={`for_tetail_store open-spark-btn ${
              currentActiveApp["for_tetail_store"] ? "active" : ""
            } ${
              activeButton === "for_tetail_store" &&
              !currentActiveApp["for_tetail_store"]
                ? "opacity"
                : ""
            }`}
            onClick={() => handleAppSelection("for_tetail_store")}
          >
            {activeButton === "for_tetail_store" &&
            !currentActiveApp["for_tetail_store"] ? (
              <>
                <div className="spinner"></div> Loading...
              </>
            ) : (
              <>
                {currentActiveApp["for_tetail_store"] ? (
                  <img
                    src="/assets/Kuza_Logo_White_Trans.svg"
                    alt="Kuza_Logo_White_Trans"
                  />
                ) : (
                  <img
                    src="/assets/Kuza_Logo_White_Trans-1.svg"
                    alt="Kuza_Logo_White_Trans-1"
                  />
                )}
                Spark
              </>
            )}
          </div>
          <div
            className={`for_cutm_name open-spark-btn ${
              currentActiveApp["for_cutm_name"] ? "active" : ""
            } ${
              activeButton === "for_cutm_name" &&
              !currentActiveApp["for_cutm_name"]
                ? "opacity"
                : ""
            }`}
            onClick={() => handleAppSelection("for_cutm_name")}
          >
            {activeButton === "for_cutm_name" &&
            !currentActiveApp["for_cutm_name"] ? (
              <>
                <div className="spinner"></div> Loading...
              </>
            ) : (
              <>
                {currentActiveApp["for_cutm_name"] ? (
                  <img src="/assets/battery-1.svg" alt="battery-1" />
                ) : (
                  <img src="/assets/battery.svg" alt="battery" />
                )}
                Solaris
              </>
            )}
          </div>
          <div
            className={`for_cutm_name open-spark-btn ${
              currentActiveApp["for_lend_name"] ? "active" : ""
            } ${
              activeButton === "for_lend_name" &&
              !currentActiveApp["for_lend_name"]
                ? "opacity"
                : ""
            }`}
            onClick={() => handleAppSelection("for_lend_name")}
          >
            {activeButton === "for_lend_name" &&
            !currentActiveApp["for_lend_name"] ? (
              <>
                <div className="spinner"></div> Loading...
              </>
            ) : (
              <>
                {currentActiveApp["for_lend_name"] ? (
                  <img src="/assets/money_white.svg" alt="money_white" />
                ) : (
                  <img src="/assets/money_bag.svg" alt="money_bag" />
                )}
                Lend Ease
              </>
            )}
          </div>
        </div>
        <img
          src="/assets/open-spark-footer3.svg"
          className="open-spark-footer-logo"
          alt="open-spark-footer"
        />

        <div className="DSEP-intruction spark-instruction">
          <Button
            type="primary"
            onClick={showModalhimalayas}
            style={{
              position: "absolute",
              bottom: "80px",
              left: "0",
              margin: "unset",
              display: "flex",
              alignItems: "center",
              padding: "6px 20px",
              height: "48px",
              borderRadius: "5px",
              fontSize: "20px",
              fontWeight: "400",
            }}
          >
            instructions
            <img
              style={{ paddingLeft: "5px" }}
              src="/assets/arrow_back.svg"
              alt="Arrow"
            />
          </Button>
          {activeButton === "for_Vault" && (
            <ModalSlider
              className1="open-spark-app"
              open={isModalOpenhimalayas}
              onCancel={handleCancelhimalayas}
              modalHeading={
                "Follow these steps for the best possible experience as an energy Prosumer!"
              }
            >
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  Step 1
                </h3>
                <img src="/assets/step1.svg" alt="Step 1" style={imageStyle} />
                <div className="text_wrapper_modal">
                  <p
                    style={{
                      paddingBottom: "10px",
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    Sign In to the Vault App
                  </p>
                  <p style={{ paddingBottom: "20px" }}>
                    Open the{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'Vault'
                    </span>{" "}
                    app from the landing page.
                  </p>
                  <p>
                    Sign in using your mobile number :{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      {" "}
                      9999988888
                    </span>
                  </p>
                  <p style={{ paddingTop: "20px" }}>
                    Enter the{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      6-digit OTP : 123456
                    </span>{" "}
                    to verify your mobile number
                  </p>
                  <p style={{ paddingTop: "20px" }}>
                    If you already have an account, you will be logged in and
                    redirected to the homepage.
                  </p>
                  <p style={{ paddingTop: "20px" }}>
                    If you are a new user, an account will be created
                    automatically.
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  Step 2
                </h3>
                <img src="/assets/step2.svg" alt="Step 2" style={imageStyle} />
                <div className="text_wrapper_modal">
                  <p
                    style={{
                      paddingBottom: "10px",
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    Add a New Connection
                  </p>
                  <p style={{ paddingBottom: "6px" }}>
                    On the landing page, click{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      {" "}
                      Connections.
                    </span>
                  </p>
                  <p style={{ paddingBottom: "6px" }}>
                    Click{" "}
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#000",
                        textTransform: "capitalize",
                      }}
                    >
                      Add New.
                    </span>
                  </p>
                  <p style={{ paddingBottom: "6px" }}>
                    Enter the following details:
                  </p>
                  <p style={{ paddingBottom: "6px" }}>
                    <ul>
                      <li style={{ fontWeight: "bold", color: "#000" }}>
                        Connection Number: 5487774000
                      </li>
                      <li style={{ fontWeight: "bold", color: "#000" }}>
                        Utility Company: Bangalore Electricity Supply Ltd
                      </li>
                      <li style={{ fontWeight: "bold", color: "#000" }}>
                        Verification Method: Registered Mobile Number
                      </li>
                    </ul>
                  </p>

                  <p>
                    Click{" "}
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#000",
                        textTransform: "capitalize",
                      }}
                    >
                      Add{" "}
                    </span>{" "}
                    and enter the{" "}
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#000",
                        textTransform: "capitalize",
                      }}
                    >
                      6-digit OTP{" "}
                    </span>{" "}
                    to confirm.
                  </p>
                  <p style={{ paddingTop: "10px" }}>
                    Click{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      Back{" "}
                    </span>{" "}
                    to return to the home screen.{" "}
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  Step 3
                </h3>
                <img src="/assets/step3.svg" alt="Step 3" style={imageStyle} />
                <div className="text_wrapper_modal">
                  <p
                    style={{
                      paddingBottom: "10px",
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    Add Energy Credentials
                  </p>
                  <p>
                    Navigate to{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      Energy Assets →
                    </span>{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      {" "}
                      My Credentials →
                    </span>{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      {" "}
                      Add New.{" "}
                    </span>{" "}
                  </p>
                  <p>Fill in the following details:</p>
                  <p>
                    <ul>
                      <li style={{ fontWeight: "bold", color: "#000" }}>
                        Credential Type: Document
                      </li>
                      <li style={{ fontWeight: "bold", color: "#000" }}>
                        Document Name: Solar Panel Ownership Certificate
                      </li>
                      <li style={{ fontWeight: "bold", color: "#000" }}>
                        Upload File: Less than 1MB
                      </li>
                    </ul>
                  </p>
                  <p style={{ paddingTop: "10px" }}>
                    Click{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      Add ,
                    </span>{" "}
                    then click{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      Back
                    </span>{" "}
                    to return to the energy assets screen.
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  Step 4
                </h3>
                <img src="/assets/step4.svg" alt="Step 4" style={imageStyle} />
                <div className="text_wrapper_modal">
                  <p
                    style={{
                      paddingBottom: "10px",
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    Add Physical Assets
                  </p>
                  <p>
                    Navigate to{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      Physical Assets → Add New
                    </span>{" "}
                  </p>
                  <p>Enter the following details:</p>
                  <p style={{ paddingBottom: "10px" }}>
                    <ul>
                      <li style={{ fontWeight: "bold", color: "#000" }}>
                        Type: Battery
                      </li>
                      <li style={{ fontWeight: "bold", color: "#000" }}>
                        Upload File: Less than 1MB
                      </li>
                    </ul>
                  </p>
                  <p style={{ paddingTop: "10px" }}>
                    Click{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      Add ,
                    </span>{" "}
                    then click{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      Back
                    </span>{" "}
                    twice to return to the home screen.
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  Step 5
                </h3>
                <img src="/assets/step5.svg" alt="Step 5" style={imageStyle} />
                <div className="text_wrapper_modal">
                  <p
                    style={{
                      paddingBottom: "10px",
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    View Energy Transactions
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    Click{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      Energy Transactions.
                    </span>{" "}
                  </p>
                  <p>
                    Browse all energy transactions available in your wallet.
                  </p>
                </div>
              </>
            </ModalSlider>
          )}
          {activeButton === "for_tetail_store" && (
            <ModalSlider
              className1="open-spark-app"
              open={isModalOpenhimalayas}
              onCancel={handleCancelhimalayas}
              modalHeading={
                "Follow these steps for the best possible experience as an energy Prosumer!"
              }
            >
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  Step 1
                </h3>
                <img src="/assets/step6.svg" alt="Step 6" style={imageStyle} />
                <div className="text_wrapper_modal">
                  <p
                    style={{
                      paddingBottom: "10px",
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    Sign In to the Spark App
                  </p>

                  <p style={{ paddingTop: "10px" }}>
                    Click
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'Spark'
                    </span>{" "}
                    on the landing screen.
                  </p>
                  <p style={{ paddingTop: "10px" }}>
                    Sign in using your mobile number:{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      9999988888
                    </span>{" "}
                  </p>

                  <p style={{ paddingTop: "10px" }}>
                    Enter the{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      6-digit OTP
                    </span>{" "}
                    (e.g.,{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      123456
                    </span>
                    ) to verify your number.
                  </p>
                  <p style={{ paddingTop: "10px" }}>
                    You will be logged in to the{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      Spark App.
                    </span>{" "}
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  Step 2
                </h3>
                <img src="/assets/step7.svg" alt="Step 7" style={imageStyle} />
                <div className="text_wrapper_modal">
                  <p
                    style={{
                      paddingBottom: "10px",
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    Connect Vault Wallet (For New Users)
                  </p>
                  <p>
                    Upon signing in for the first time, you will see the{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      Connect Wallet
                    </span>{" "}
                    option in the navigation bar.
                  </p>
                  <p style={{ paddingTop: "10px" }}>
                    Click{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'Connect My Wallet'.
                    </span>{" "}
                  </p>
                  <p style={{ paddingTop: "10px" }}>
                    Select{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      Vault App
                    </span>{" "}
                    and sign in using your{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      Vault ID: /subj****8888.
                    </span>{" "}
                  </p>
                  <p style={{ paddingTop: "10px" }}>
                    Enter your{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      phone number
                    </span>{" "}
                    in the text box and verify using a{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      6-digit OTP
                    </span>{" "}
                    (e.g.,{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      123456
                    </span>
                    )
                  </p>
                  <p style={{ paddingTop: "10px" }}>
                    On the alert pop-up, select all options and click{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'Confirm'.
                    </span>{" "}
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  Step 3
                </h3>
                <img src="/assets/step8.svg" alt="Step 8" style={imageStyle} />
                <div className="text_wrapper_modal">
                  <p
                    style={{
                      paddingBottom: "10px",
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    Purchase a Battery
                  </p>

                  <p>
                    On the landing screen, select{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'Marketplace'.
                    </span>
                  </p>
                  <p style={{ paddingTop: "10px" }}>
                    Search for{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'Battery'
                    </span>{" "}
                    and select{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'Luminous Optimus 4500 4KVA'.
                    </span>{" "}
                  </p>
                  <p style={{ paddingTop: "10px" }}>
                    Set{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      Quantity = 1,
                    </span>{" "}
                    click{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'Add to Cart',
                    </span>{" "}
                    then go to the cart.{" "}
                  </p>
                  <p style={{ paddingTop: "10px" }}>
                    Click{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'Proceed',
                    </span>{" "}
                    then{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'Add Shipping Details'.
                    </span>{" "}
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  Step 4
                </h3>
                <img src="/assets/step9.svg" alt="Step 9" style={imageStyle} />
                <div className="text_wrapper_modal">
                  <p
                    style={{
                      paddingBottom: "10px",
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    Enter Shipping Details
                  </p>

                  <p>Fill in the following details:</p>
                  <p style={{ paddingTop: "10px" }}>
                    <ul>
                      <li>
                        <span style={{ fontWeight: "bold", color: "#000" }}>
                          {" "}
                          Name:
                        </span>{" "}
                        Ravi Prakash
                      </li>
                      <li>
                        <span style={{ fontWeight: "bold", color: "#000" }}>
                          {" "}
                          Mobile Number:
                        </span>{" "}
                        9999988888
                      </li>
                      <li>
                        <span style={{ fontWeight: "bold", color: "#000" }}>
                          {" "}
                          Email:
                        </span>{" "}
                        ravi.prakash@gmail.com
                      </li>
                      <li>
                        <span style={{ fontWeight: "bold", color: "#000" }}>
                          {" "}
                          Address:
                        </span>{" "}
                        1202 B2, Bengaluru Urban, Karnataka
                      </li>
                      <li>
                        <span style={{ fontWeight: "bold", color: "#000" }}>
                          {" "}
                          Zip Code:
                        </span>{" "}
                        560078
                      </li>
                    </ul>
                  </p>
                  <p style={{ paddingTop: "10px" }}>
                    Click{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'Save Shipping Details'
                    </span>{" "}
                    and check{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'Billing same as Shipping'.
                    </span>{" "}
                  </p>

                  <p style={{ paddingTop: "10px" }}>
                    Click{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'Proceed'.
                    </span>{" "}
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  Step 5
                </h3>
                <img
                  src="/assets/step10.svg"
                  alt="Step 10"
                  style={imageStyle}
                />
                <div className="text_wrapper_modal">
                  <p
                    style={{
                      paddingBottom: "10px",
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    EMI Payment ( Optional)
                  </p>
                  <p>
                    On the{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      Checkout
                    </span>{" "}
                    screen, click{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'EMI'
                    </span>{" "}
                    and select{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'Bajaj Finserv'.
                    </span>{" "}
                  </p>
                  <p style={{ paddingTop: "10px" }}>
                    Click{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'Sync Now'
                    </span>{" "}
                    to get better interest rates. This will share your energy
                    transaction data with the provider.
                  </p>
                  <p style={{ paddingTop: "10px" }}>
                    Click{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'Proceed'
                    </span>{" "}
                    to open the{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      EMI Application
                    </span>{" "}
                    form.
                  </p>
                  <p style={{ paddingTop: "10px" }}>
                    Click{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'Sync Wallet'
                    </span>{" "}
                    to sync your wallet information and pre-fill the form.
                  </p>

                  <p style={{ paddingTop: "5px" }}>
                    Select{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      '12 Months'
                    </span>{" "}
                    under{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      Loan Tenure
                    </span>{" "}
                    and click{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'Submit'.
                    </span>{" "}
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  Step 6
                </h3>
                <img
                  src="/assets/step11.svg"
                  alt="Step 11"
                  style={imageStyle}
                />
                <div className="text_wrapper_modal">
                  <p
                    style={{
                      paddingBottom: "10px",
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    Complete the Remaining Payment
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    After{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      EMI approval,
                    </span>{" "}
                    click{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'Proceed to Payment'.
                    </span>{" "}
                  </p>

                  <p style={{ paddingBottom: "10px" }}>
                    Select{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'PhonePe UPI'
                    </span>{" "}
                    and enter your{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      UPI PIN (1234).
                    </span>{" "}
                  </p>

                  <p style={{ paddingBottom: "10px" }}>
                    Click{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'Submit'.
                    </span>{" "}
                  </p>

                  <p>
                    View the{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      order confirmation
                    </span>{" "}
                    and click{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'View Order Details'.
                    </span>{" "}
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  Step 7
                </h3>
                <img src="/assets/step7.svg" alt="Step 12" style={imageStyle} />
                <div className="text_wrapper_modal">
                  <p
                    style={{
                      paddingBottom: "10px",
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    Add Battery to Wallet
                  </p>

                  <p>
                    Go to{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      Order History,
                    </span>{" "}
                    select the order, and click{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'Add to Wallet'.
                    </span>{" "}
                  </p>
                  <p style={{ paddingBottom: "10px", paddingTop: "10px" }}>
                    The battery will be added to your wallet under{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      Physical Assets.
                    </span>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    In order details, go to{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      ‘scan qr code’
                    </span>{" "}
                    section, to import the order in solaris application
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  Step8
                </h3>
                <img
                  src="/assets/step13.svg"
                  alt="Step 13"
                  style={imageStyle}
                />
                <div className="text_wrapper_modal">
                  <p
                    style={{
                      paddingBottom: "10px",
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    Rent a Battery
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    On the landing screen, select{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'Battery Rental'.
                    </span>{" "}
                  </p>
                  <p>
                    Search for{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'Battery Rental'{" "}
                    </span>
                    and select{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      Ravi Prakash’s Flour Mill'.{" "}
                    </span>
                  </p>
                  <p style={{ paddingTop: "10px" }}>
                    Click{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'Proceed'
                    </span>{" "}
                    and set:
                  </p>
                  <p style={{ paddingTop: "10px" }}>
                    <ul>
                      <li>
                        <span style={{ fontWeight: "bold", color: "#000" }}>
                          {" "}
                          Date:
                        </span>{" "}
                        Select any available date.
                      </li>
                      <li style={{ fontWeight: "bold", color: "#000" }}>
                        Time: 8:00 PM - 9:00 PM.
                      </li>
                    </ul>
                  </p>
                  <p style={{ paddingTop: "10px" }}>
                    Click{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'Confirm & Proceed'.
                    </span>
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  Step 9
                </h3>
                <img
                  src="/assets/step14.svg"
                  alt="Step 14"
                  style={imageStyle}
                />
                <div className="text_wrapper_modal">
                  <p
                    style={{
                      paddingBottom: "10px",
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    Enter Billing Details
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    Fill in the following details:
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    <ul>
                      <li>
                        <span style={{ fontWeight: "bold", color: "#000" }}>
                          {" "}
                          Name:
                        </span>{" "}
                        Faiz
                      </li>
                      <li>
                        <span style={{ fontWeight: "bold", color: "#000" }}>
                          {" "}
                          Mobile Number:
                        </span>{" "}
                        9999977777
                      </li>
                      <li>
                        <span style={{ fontWeight: "bold", color: "#000" }}>
                          {" "}
                          Email:
                        </span>{" "}
                        faiz@gmail.com
                      </li>
                      <li>
                        <span style={{ fontWeight: "bold", color: "#000" }}>
                          {" "}
                          Address:
                        </span>{" "}
                        1202 B2, Bengaluru Urban, Karnataka
                      </li>
                      <li>
                        <span style={{ fontWeight: "bold", color: "#000" }}>
                          {" "}
                          Zip Code:
                        </span>{" "}
                        560078
                      </li>
                    </ul>
                  </p>
                  <p>
                    Click{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'Save Billing Details'
                    </span>
                  </p>
                  <p style={{ paddingTop: "10px" }}>
                    and then{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'Proceed'.
                    </span>{" "}
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  Step 10
                </h3>
                <img
                  src="/assets/step15.svg"
                  alt="Step 15"
                  style={imageStyle}
                />
                <div className="text_wrapper_modal">
                  <p
                    style={{
                      paddingBottom: "10px",
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    Complete Payment for Rental
                  </p>

                  <p>
                    On the checkout screen, click{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'Proceed to Payment'.
                    </span>{" "}
                  </p>
                  <p style={{ paddingTop: "10px" }}>
                    Select{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'PhonePe UPI'{" "}
                    </span>{" "}
                    and enter your{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      UPI PIN (1234).{" "}
                    </span>{" "}
                  </p>
                  <p style={{ paddingTop: "10px" }}>
                    Click{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'Submit'.{" "}
                    </span>{" "}
                  </p>
                  <p style={{ paddingTop: "10px" }}>
                    Click{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      'View My Rentals'{" "}
                    </span>
                    on the order confirmation screen to navigate to the{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      My Orders{" "}
                    </span>
                    page.
                  </p>
                </div>
              </>
            </ModalSlider>
          )}
          {activeButton === "for_cutm_name" && (
            <ModalSlider
              className1="open-spark-app"
              open={isModalOpenhimalayas}
              onCancel={handleCancelhimalayas}
              modalHeading={
                "Follow these steps for the best possible experience as an energy Prosumer!"
              }
            >
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  Step 1
                </h3>
                <img src="/assets/step1.svg" alt="Step 1" style={imageStyle} />
                <div className="text_wrapper_modal">
                  <p
                    style={{
                      paddingBottom: "10px",
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    Sign In to the Solaris App
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    Tap{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      "Solaris"
                    </span>{" "}
                    on the landing screen.
                  </p>
                  <p>
                    Enter your mobile number{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      {" "}
                      (e.g.,{" "}
                      <span style={{ fontWeight: "bold", color: "#000" }}>
                        9999988888
                      </span>{" "}
                      ){" "}
                    </span>
                    to sign in.
                  </p>
                  <p style={{ paddingTop: "10px" }}>
                    Enter the{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      6-digit OTP
                    </span>{" "}
                    (e.g.,{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      123456
                    </span>
                    ) to verify your number.
                  </p>
                  <p style={{ paddingTop: "10px" }}>
                    You will be logged into the{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      Solaris App.
                    </span>
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  Step 2
                </h3>
                <img
                  src="/assets/step16.svg"
                  alt="Step 16"
                  style={imageStyle}
                />
                <div className="text_wrapper_modal">
                  <p
                    style={{
                      paddingBottom: "10px",
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    Offer a Battery for Rental
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    Tap{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      "Provide Rental Services" → "Add from Wallet".
                    </span>{" "}
                    or{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      ‘Scan qr code’
                    </span>{" "}
                    to import the battery from spark application
                  </p>

                  <p style={{ paddingBottom: "10px" }}>
                    Select a battery{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      (Source: Spark){" "}
                    </span>{" "}
                    and tap{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      "Next".{" "}
                    </span>
                  </p>
                  <p>Set the rental details: </p>

                  <p style={{ paddingTop: "10px" }}>
                    <ul>
                      <li>
                        <span style={{ fontWeight: "bold", color: "#000" }}>
                          {" "}
                          Date:
                        </span>{" "}
                        Choose a desired date.
                      </li>
                      <li style={{ fontWeight: "bold", color: "#000" }}>
                        Time: 7:00 PM - 10:00 PM.
                      </li>
                      <li style={{ fontWeight: "bold", color: "#000" }}>
                        Price: ₹100/hour.
                      </li>
                    </ul>
                  </p>

                  <p style={{ paddingTop: "10px" }}>
                    Tap{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      "Submit and Publish".{" "}
                    </span>{" "}
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  Step 3
                </h3>
                <img
                  src="/assets/step17.svg"
                  alt="Step 17"
                  style={imageStyle}
                />
                <div className="text_wrapper_modal">
                  <p
                    style={{
                      paddingBottom: "10px",
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    My Services
                  </p>

                  <p>
                    Tap{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      "My Services"
                    </span>{" "}
                    on the homepage.
                  </p>
                  <p style={{ paddingTop: "10px" }}>
                    You will be redirected to the{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      My Services
                    </span>{" "}
                    page, where you can view all batteries available for rent.
                  </p>
                </div>
              </>
            </ModalSlider>
          )}
          {activeButton === "for_lend_name" && (
            <ModalSlider
              className1="open-spark-app"
              open={isModalOpenhimalayas}
              onCancel={handleCancelhimalayas}
              modalHeading={
                "Follow these steps for the best possible experience as an energy Prosumer!"
              }
            >
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  Step 1
                </h3>
                <img src="/assets/step1.svg" alt="Step 1" style={imageStyle} />
                <div className="text_wrapper_modal">
                  <p
                    style={{
                      paddingBottom: "10px",
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    Sign In to the LendEase App
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    Tap{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      "LendEase"
                    </span>{" "}
                    on the landing screen.
                  </p>
                  <p>
                    Sign in using your mobile number{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      {" "}
                      (e.g.,{" "}
                      <span style={{ fontWeight: "bold", color: "#000" }}>
                        7674955426
                      </span>{" "}
                      ){" "}
                    </span>
                    to sign in.
                  </p>
                  <p style={{ paddingTop: "10px" }}>
                    Enter the{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      6-digit OTP
                    </span>{" "}
                    (e.g.,{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      123456
                    </span>
                    ) to verify your number.
                  </p>
                  <p style={{ paddingTop: "10px" }}>
                    You will be logged into the{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      LendEase App.
                    </span>
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  Step 2
                </h3>
                <img
                  src="/assets/step16.svg"
                  alt="Step 16"
                  style={imageStyle}
                />
                <div className="text_wrapper_modal">
                  <p
                    style={{
                      paddingBottom: "10px",
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    Loan Applications
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    After a successful login, you will see all recent loan
                    applications.
                  </p>

                  <p style={{ paddingBottom: "10px" }}>
                    Tap{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      "See All"{" "}
                    </span>{" "}
                    to view the complete list of loan applications.
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  Step 3
                </h3>
                <img
                  src="/assets/step17.svg"
                  alt="Step 17"
                  style={imageStyle}
                />
                <div className="text_wrapper_modal">
                  <p
                    style={{
                      paddingBottom: "10px",
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    Manage Loan Catalogue
                  </p>

                  <p>
                    Tap{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      "Manage Loan Catalogue".
                    </span>{" "}
                  </p>
                  <p style={{ paddingTop: "10px" }}>
                    Tap{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      "Energy Financing".
                    </span>{" "}
                  </p>
                  <p style={{ paddingTop: "10px" }}>
                    You will see your loan catalogue under{" "}
                    <span style={{ fontWeight: "bold", color: "#000" }}>
                      Energy Financing.
                    </span>{" "}
                  </p>
                </div>
              </>
            </ModalSlider>
          )}
        </div>
      </div>
    </>
  );
};

export default OpenSparkIframe;
