import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OpenSparkExp from "../../common/Open-Spark/OpenSparkExp";
import Tabs from "../../common/Tabs/tabs";
import Modal from "../modal";

const OpenSpark = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100vh" }}>
      <Tabs secondProps={<OpenSparkExp />} />
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

export default OpenSpark;
