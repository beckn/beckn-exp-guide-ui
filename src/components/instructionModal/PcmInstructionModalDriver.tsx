import React, { useState } from "react";
import ModalHTML from "../ModalHTML/modalHTML";
import InstructionButton from "../instructionButton/InstructionButton";

const instructionsData = [
  {
    step: "step 1",
    img: "/assets/driver_step1_img.svg",
    text: [
      "Sign in as a ‘driver’ using the following information:",
      "Phone number: 9493143166",
      "4 digit OTP: 7891",
    ],
  },
  {
    step: "step 2",
    img: "/assets/driver_step2_img.svg",
    text: [
      "Ride request needs to be triggered from Pass Culture app. The toggle must be 'ON' to receive new ride requests.",
    ],
  },
  {
    step: "step 3",
    img: "/assets/driver_step3_img.svg",
    text: ["Accept the ride!"],
  },
  {
    step: "step 4",
    img: "/assets/driver_step4_img.svg",
    text: ["Enter the OTP received from the passenger and start the ride."],
  },
  {
    step: "step 5",
    img: "/assets/driver_step5_img.svg",
    text: ["Payment will be completed by the customer after the ride."],
  },
];

const PcmInstructionModalDriver = () => {
  const [isModalOpenDriver, setSsModalOpenDriver] = useState(false);
  const handleInstructionModalDriver = () => {
    setSsModalOpenDriver(true);
  };
  const handleCancelDriver = () => {
    setSsModalOpenDriver(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <InstructionButton handleInstructions={handleInstructionModalDriver} />
      <ModalHTML
        open={isModalOpenDriver}
        onCancel={handleCancelDriver}
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

export default PcmInstructionModalDriver;
