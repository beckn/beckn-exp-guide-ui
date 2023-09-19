import React, { useState } from "react";
import InstructionButton from "../instructionButton/InstructionButton";
import ModalHTML from "../ModalHTML/modalHTML";

const instructionsData = [
  {
    step: "step 1",
    img: "/assets/OSM_step1_img.svg",
    text: [
      "You are about to login as a ‘seller’ for ClicPaye. This application helps manage products and process orders on the",
      "‘Open Street Commerce’",
      "Login details:",
      "Phone number: 9876522222",
      "Password: root123",
    ],
  },
  {
    step: "step 2",
    img: "/assets/BPP_step2_img.svg",
    text: [
      "Here are a few things you can do on ClicPaye:",
      "- View/manage orders placed in your store",
      "- View all products in your store",
      "- Manage all products in your store",
    ],
  },
  {
    step: "step 3",
    img: "/assets/BPP_step3_img.svg",
    text: [
      "The activities you perform on ClicPaye get reflected on the",
      "‘Open Street Commerce’ app.",
    ],
  },
];

const OscRetailsInstructionModal = () => {
  const [isModalOpenOSCRetailer, setIsModalOpenOSCRetailer] = useState(false);
  const handleInstructions = () => {
    setIsModalOpenOSCRetailer(true);
  };
  const handleCancelRetailer = () => {
    setIsModalOpenOSCRetailer(false);
  };
  return (
    <div>
      <InstructionButton handleInstructions={handleInstructions} />
      <ModalHTML
        open={isModalOpenOSCRetailer}
        onCancel={handleCancelRetailer}
        modalHeading="Follow these steps for the best possible experience as a customer!"
      >
        {instructionsData.map((instruction, index) => (
          <>
            <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
              {instruction.step}
            </h3>
            <img src={instruction.img} alt={`Step ${index + 1}`} />
            <div key={index} className="text_wrapper_modal">
              {instruction.text.map((item, i) => (
                <p key={i} style={{ color: "#000" }}>
                  {item}
                </p>
              ))}
            </div>
          </>
        ))}
      </ModalHTML>
    </div>
  );
};

export default OscRetailsInstructionModal;
