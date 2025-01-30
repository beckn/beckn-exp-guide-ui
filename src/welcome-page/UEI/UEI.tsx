// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Tabs from "../../common/Tabs/tabs";
// import VideoTemplate from "../../common/videoTemplate/videoTemplate";
// import Modal from "../modal";
// import UeiIframe from "../ueiIframe";

// const UEI = () => {
// const [openModal, setOpenModal] = useState(false);
// const navigate = useNavigate();
//   return (
//     <div style={{ display: "flex", justifyContent: "center", height: "100vh" }}>
//       <Tabs secondProps={<UeiIframe />} />
//       <div className="exit-icon">
//         {!openModal ? (
//           <img
//             onClick={() => setOpenModal(true)}
//             src="/assets/curvedArrow.svg"
//             alt="curvedArrow"
//           />
//         ) : (
//           <Modal flag={openModal} pathName={"/ThankYou"} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default UEI;

import { Button, QRCode } from "antd";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import VideoTemplate from "../../common/videoTemplate/videoTemplate";
import Modal from "../modal";
import ModalSlider from "../../common/ModalHTML/ModalSlider";

const UEI = () => {
  const pulseEnergyWhatsappUrl =
    process.env.REACT_APP_PULSE_ENERGY_WHATSAPP_URL;
  const sheruAppUrl = process.env.REACT_APP_SHERU_APP_URL;
  const kazamAppUrl = process.env.REACT_APP_KAZAM_APP_URL;
  const turnoAppUrl = process.env.REACT_APP_TURNO_APP_URL;
  const pulseEnergyVideoUrl = process.env.REACT_APP_PULSE_ENERGY_VIDEO_URL;
  const [pulseEnergy, setPulseEnergy] = useState("");
  const [activeUrl, setActiveUrl] = useState(sheruAppUrl);
  const [activeVideoUrl, setActiveVideoUrl] = useState(pulseEnergyVideoUrl);
  const [activeButton, setActiveButton] = useState("Pulse energy");
  const UEI = localStorage.getItem("name") === "UEI";
  const [isModalOpenPulseEnergy, setIsModalOpenPulseEnergy] = useState(false);
  const showModalPulseEnergy = () => {
    setIsModalOpenPulseEnergy(true);
  };
  const handleCancelPulseEnergy = () => {
    setIsModalOpenPulseEnergy(false);
  };
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleSheruApp = (e: any) => {
    setActiveButton("Sheru App");
    setActiveUrl(sheruAppUrl);
    setPulseEnergy("");
  };
  const handlePulseEnergy = (e: any) => {
    setActiveButton("Pulse energy");
    setPulseEnergy("Pulse energy");
  };
  const handleKazam = (e: any) => {
    setActiveButton("Kazam");
    setActiveUrl(kazamAppUrl);
    setPulseEnergy("");
  };
  const handleTurnoApp = (e: any) => {
    setActiveButton("Turno app");
    setActiveUrl(turnoAppUrl);
    setPulseEnergy("");
  };
  useEffect(() => {
    setPulseEnergy("Pulse energy");
  }, []);

  return (
    <div className="UEI_NewFlow_container">
      <div
        className={
          activeButton === "Pulse energy"
            ? "UEI_NewFlow_container_innr UEI_QrFlow_container_innr"
            : "UEI_NewFlow_container_innr"
        }
      >
        <div className="beckn_logo_UEI">
          <img src="/assets/becknImageNew.svg" alt="beckn logo" />
          <div className="UEI_text">welcome to open networks for energy</div>
        </div>
        <div className="UEI_newFlow">
          {activeButton === "Pulse energy" ? (
            <div className="regenUEI_flow_QRcode_new_flow_wrrp">
              <div className="QR-wrapper regenUEI_flow_QRcode_new_flow">
                <div className="QR_custom QR_custom_pulse_energy">
                  <QRCode
                    className="QR_code_pulse_energy regenUEI_flow_QR"
                    value={pulseEnergyWhatsappUrl || "_"}
                  />
                  <p style={{ paddingBottom: "15px" }}>Or</p>
                  <a
                    href={pulseEnergyWhatsappUrl || "_"}
                    target={"/"}
                    style={{ cursor: "pointer" }}
                  >
                    <img src="/assets/whatsappImg.svg" />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="smartphone-wrapper">
                <div className="smartphone">
                  <div className="content">
                    <iframe
                      //@ts-ignore
                      className="ChooseExpIframe"
                      allow="clipboard-read; clipboard-write; geolocation"
                      src={activeUrl}
                      frameBorder="0"
                      allowFullScreen
                      scrolling={"no"}
                      width={"100%"}
                      height={"100%"}
                      style={{ borderRadius: "36px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="UEI_newFlow_right_section">
            <div className="regenUEI_flow_btn UEI_newFlow_btn UEI_flow_btn_text">
              <div className="add_text_UEI_btn">
                <div
                  onClick={handlePulseEnergy}
                  className={
                    activeButton === "Pulse energy"
                      ? "active UEI_new_btn"
                      : "UEI_new_btn"
                  }
                >
                  Pulse Energy
                </div>
                <p>ev charging aggregator</p>
              </div>
              <div className="add_text_UEI_btn">
                <div
                  onClick={handleKazam}
                  className={
                    activeButton === "Kazam"
                      ? "active UEI_new_btn"
                      : "UEI_new_btn"
                  }
                >
                  Kazam
                </div>
                <p>ev charging enabler</p>
              </div>
              <div className="add_text_UEI_btn">
                <div
                  onClick={handleSheruApp}
                  className={
                    activeButton === "Sheru App"
                      ? "active UEI_new_btn"
                      : "UEI_new_btn"
                  }
                >
                  Sheru
                </div>
                <p>virtual energy aggregator</p>
              </div>
              <div className="add_text_UEI_btn">
                <div
                  onClick={handleTurnoApp}
                  className={
                    activeButton === "Turno app"
                      ? "active UEI_new_btn"
                      : "UEI_new_btn"
                  }
                >
                  Turno
                </div>
                <p>battery aggregator</p>
              </div>
            </div>
            <VideoTemplate mainIconUrl={activeVideoUrl} />
            <div className="UEI_footer_new">
              <div className="UEI_footer_icons">
                <img src="/assets/uei_logo_new_logo.svg" alt="UEI logo" />
              </div>
              <div className="UEI_footer_icons">
                <img src="/assets/pulseIconImage.svg" />
                Pulse Energy
              </div>
              <div className="UEI_footer_icons">
                <img src="/assets/sheruIconImg.svg" />
              </div>
              <div className="UEI_footer_icons">
                <img src="/assets/turnoIconImg.svg" />
                Turno
              </div>
              <div className="UEI_footer_icons">
                <img src="/assets/kazamIconImg.svg" />
                Kazam
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="exit-icon">
        {!openModal ? (
          <img
            onClick={() => setOpenModal(true)}
            src="/assets/curvedArrow.svg"
            alt="curvedArrow"
          />
        ) : (
          <Modal flag={openModal} pathName={"/select-experience"} />
        )}
      </div>
      {UEI ? (
        <div className="PCM_modal OSM_custom UEI_modal UEI_flow">
          <Button
            type="primary"
            onClick={showModalPulseEnergy}
            style={{ marginTop: "116px" }}
          >
            instructions
            <img style={{ paddingLeft: "5px" }} src="/assets/arrow_back.svg" />
          </Button>
          <ModalSlider
            open={isModalOpenPulseEnergy}
            onCancel={handleCancelPulseEnergy}
            modalHeading={
              "follow these steps for the best possible experience for Unified energy Interface"
            }
          >
            <>
              <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                step 1
              </h3>
              <img src={"/assets/UEI_step1.svg"} alt={`StepImage`} />
              <div className="text_wrapper_modal">
                <p style={{ paddingBottom: "10px" }}>
                  <span style={{ fontWeight: "bolder", color: "#000" }}>
                    Scan the QR code{" "}
                  </span>
                  to access Pulse Energy's WhatsApp chat window
                </p>
                <p style={{ paddingBottom: "10px" }}>
                  initiate the conversation with a greeting like "Hi."
                </p>
              </div>
            </>
            <>
              <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                step 2
              </h3>
              <img src={"/assets/UEI_step2.svg"} alt={`StepImage`} />
              <div className="text_wrapper_modal">
                <p style={{ paddingBottom: "10px" }}>
                  Share the location as per the request made by Pulse Energy.
                </p>

                <p
                  style={{
                    fontWeight: "bolder",
                    color: "#000",
                    paddingBottom: "10px",
                  }}
                >
                  confirm location.
                </p>
              </div>
            </>
            <>
              <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                step 3
              </h3>
              <img src={"/assets/UEI_step3.svg"} alt={`StepImage`} />
              <div className="text_wrapper_modal">
                <p style={{ paddingBottom: "10px" }}>
                  <span
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    select
                  </span>{" "}
                  4W (4 wheeler).
                </p>
                <p style={{ paddingBottom: "10px" }}>
                  From the available Charger List,
                </p>
                <p style={{ paddingBottom: "10px" }}>
                  <span
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    select
                  </span>{" "}
                  "Pulse Energy HQ”
                </p>
              </div>
            </>
            <>
              <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                step 4
              </h3>
              <img src={"/assets/UEI_step4.svg"} alt={`StepImage`} />
              <div className="text_wrapper_modal">
                <p style={{ paddingBottom: "10px" }}>You will see 2 options:</p>

                <p style={{ paddingBottom: "10px" }}>
                  1) ₹15/Unit (Bescom) and
                </p>
                <p style={{ paddingBottom: "10px" }}>
                  2) ₹13/Unit (UEI) option.
                </p>

                <p style={{ paddingBottom: "10px" }}>
                  <span
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    select
                  </span>{" "}
                  the 2nd option ₹13/Unit (UEI).
                </p>
                <p style={{ paddingBottom: "10px" }}>
                  <span
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    Enter
                  </span>{" "}
                  the amount above{" "}
                  <span
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    ₹
                  </span>
                  10, (e.g. ₹20)
                </p>
              </div>
            </>
            <>
              <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                step 5
              </h3>
              <img src={"/assets/UEI_step5.svg"} alt={`StepImage`} />
              <div className="text_wrapper_modal">
                <p style={{ paddingBottom: "10px" }}>
                  It will ask for payment options such as UPI and Link.
                </p>
                <p style={{ paddingBottom: "10px" }}>
                  Select any one option; the demand note will be created.
                </p>
                <p style={{ paddingBottom: "10px" }}>
                  No further action required on WhatsApp for Pulse Energy.
                </p>
                <p style={{ paddingBottom: "10px" }}>
                  <span
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    Click on{" "}
                  </span>{" "}
                  ‘sheru app’ for next step
                </p>
              </div>
            </>
            <>
              <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                step 6
              </h3>
              <img src={"/assets/UEI_step6.svg"} alt={`StepImage`} />
              <div className="text_wrapper_modal">
                <p style={{ paddingBottom: "10px" }}>
                  <p>login to sheru app:</p>
                  <p>
                    email-{" "}
                    <span style={{ textDecoration: "underline" }}>
                      ueidemo@sheru.se
                    </span>
                  </p>
                  <p>password - ueidemo</p>
                </p>
                <p style={{ paddingBottom: "10px" }}>
                  <span style={{ fontWeight: "bolder", color: "#000" }}>
                    select{" "}
                  </span>
                  ‘Check Demands’
                </p>
                <p style={{ paddingBottom: "10px" }}>
                  A list of available demand notes will be displayed. select one
                  option and{" "}
                  <span style={{ fontWeight: "bolder", color: "#000" }}>
                    click{" "}
                  </span>{" "}
                  ‘Buy’
                </p>
                <p style={{ paddingBottom: "10px" }}>
                  success message will be displayed;
                </p>
              </div>
            </>
            <>
              <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                step 7
              </h3>
              <img src={"/assets/UEI_step7.svg"} alt={`StepImage`} />
              <div className="text_wrapper_modal">
                <p style={{ paddingBottom: "10px" }}>
                  next,{" "}
                  <span style={{ fontWeight: "bolder", color: "#000" }}>
                    click
                  </span>{" "}
                  ‘Check Suppliers’.
                </p>

                <p
                  style={{
                    paddingBottom: "10px",
                  }}
                >
                  Turno, the green energy supplier, will show the list of energy
                  available.
                </p>
                <p
                  style={{
                    paddingBottom: "10px",
                  }}
                >
                  Select one and{" "}
                  <span style={{ fontWeight: "bolder", color: "#000" }}>
                    click
                  </span>{" "}
                  Buy.
                </p>
                <p
                  style={{
                    paddingBottom: "10px",
                  }}
                >
                  success message will be displayed;{" "}
                  <span style={{ fontWeight: "bolder", color: "#000" }}>
                    select
                  </span>{" "}
                  ‘view order summary
                </p>
              </div>
            </>
            <>
              <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                step 8
              </h3>
              <img src={"/assets/UEI_step8.svg"} alt={`StepImage`} />

              <div className="text_wrapper_modal">
                <p style={{ paddingBottom: "10px" }}>
                  order summary screen will display:
                </p>
                <ul>
                  <li>Cash Outflow for Demand Notes</li>
                  <li>Cash Outflow for Supply to Turno</li>
                  <li>Approximate Earnings from Supply to the Grid</li>
                </ul>
              </div>
            </>
            <>
              <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                step 9
              </h3>
              <img src={"/assets/UEI_step9.svg"} alt={`StepImage`} />

              <div className="text_wrapper_modal">
                <p style={{ paddingBottom: "10px" }}>
                  on order summary screen,{" "}
                  <span
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    Click
                  </span>{" "}
                  ‘push to grid’
                </p>
                <p style={{ paddingBottom: "10px" }}>
                  ‘Push to Grid’ is Sheru's readiness to feed green energy from
                  Turno into the grid.
                </p>
              </div>
            </>
            <>
              <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                step 10
              </h3>
              <img src={"/assets/UEI_step10.svg"} alt={`StepImage`} />

              <div className="text_wrapper_modal">
                <p style={{ paddingBottom: "10px" }}>
                  access your ‘order history’ page in the Sheru app from the
                  3-dot menu on the Home Page.
                </p>
                <p style={{ paddingBottom: "10px" }}>
                  screen will provide detailed description of cash outflow of
                  demand notes, suppy and earnings
                </p>
                <p style={{ paddingBottom: "10px" }}>
                  <span
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    Click on
                  </span>{" "}
                  ‘turno app’ for next steps
                </p>
              </div>
            </>
            <>
              <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                step 11
              </h3>
              <img src={"/assets/UEI_step11.svg"} alt={`StepImage`} />

              <div className="text_wrapper_modal">
                <p style={{ paddingBottom: "10px" }}>
                  You'll see the details of energy suppliers like Turno, the
                  green energy producer that fulfills demands for companies like
                  Sheru after storing it in batteries.
                </p>
                <p>details include: battery id, </p>
                <p style={{ paddingBottom: "10px" }}>
                  capacity of units it can fulfill, and price.
                </p>
              </div>
            </>
          </ModalSlider>
        </div>
      ) : null}
    </div>
  );
};

export default UEI;
