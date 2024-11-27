import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Modal from "../../../../welcome-page/modal";
import Tabs from "../../../Tabs/tabs";
import VideoTemplate from "../../../videoTemplate/videoTemplate";
import SkyAnalyticsIframe from "./harmoniaidIframe";

const Harmoniaid = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100vh" }}>
      <Tabs
        firstProps={
          <VideoTemplate mainIconUrl="https://player.vimeo.com/video/824663740?h=9464185e33&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
        }
        secondProps={<SkyAnalyticsIframe />}
        thirdProps={
          <VideoTemplate mainIconUrl="https://player.vimeo.com/video/935672602?h=c8a7ce7fb7&badge=0&autopause=0&player_id=0&app_id=58479" />
        }
        fourthProps={
          <VideoTemplate mainIconUrl="https://player.vimeo.com/video/936148929?h=05badaafe8&badge=0&autopause=0&player_id=0&app_id=58479" />
        }
      />
      <div className="exit-icon">
        {!openModal ? (
          <img
            onClick={() => setOpenModal(true)}
            src="/assets/curvedArrow.svg"
            alt="curvedArrow"
          />
        ) : (
          <Modal flag={openModal} pathName={"/ThankYou"} />
        )}
      </div>
    </div>
  );
};

export default Harmoniaid;
