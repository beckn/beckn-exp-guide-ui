import React, { useState } from "react";
import ModalHTML from "../ModalHTML/modalHTML";
import InstructionButton from "../instructionButton/InstructionButton";

const instructionsData = [
  {
    step: "step 1",
    img: "/assets/PC_step1_img.svg",
    text: [
      "Sign in to the Pass Culture app using the provided:",
      "Email address: enterthefuture01@gmail.com",
      "Password: Test@1234567",
    ],
  },
  {
    step: "step 2",
    img: "/assets/PC_step2_img.svg",
    text: ["Using Pass Culture app, search for an event and reserve."],
  },
  {
    step: "step 3",
    img: "/assets/PC_step3_img.svg",
    text: [
      "From the reservation confirmation page, select the third option:",
      "‘Show travel options’",
      "Select 'taxi'.",
    ],
  },
  {
    step: "step 4",
    img: "/assets/PC_step4_img.svg",
    text: [
      "Ensure that you specify:",
      "Pick-up location: quai jacques chirac, 75007 paris, france",
      "Drop-off location: The app will pick up this location.",
    ],
  },
  {
    step: "step 5",
    img: "/assets/PC_step5_img.svg",
    text: [
      "Sit tight and wait for your cab to arrive, and you'll be all set to embark on your journey!",
    ],
  },
];

const PcmInstructionModalPc = () => {
  const [isModalOpenPC, setIsModalOpenPC] = useState(false);

  const handleInstructionModalPc = () => {
    setIsModalOpenPC(true);
  };

  const handleCancelPC = () => {
    setIsModalOpenPC(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <InstructionButton handleInstructions={handleInstructionModalPc} />
      <ModalHTML
        open={isModalOpenPC}
        onCancel={handleCancelPC}
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

export default PcmInstructionModalPc;
