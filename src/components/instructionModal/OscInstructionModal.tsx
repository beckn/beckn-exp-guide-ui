import React, { useState } from "react";
import ModalHTML from "../ModalHTML/modalHTML";
import InstructionButton from "../instructionButton/InstructionButton";

const instructionsData = [
  {
    step: "step 1",
    img: "/assets/OSM_step1_img.svg",
    text: [
      "Sign in to the Open Street Commerce app using the provided:",
      "Phone number:",
      "5678990532",
      "6 digit OTP:",
      "456012",
    ],
  },
  {
    step: "step 2",
    img: "/assets/OSM_step2_img.svg",
    text: [
      "From the map view, select location:",
      "Ménilmontant - Pelleport, Paris, France",
      "Select the option: 'restaurant'",
      "Select the restaurant 'benoit castle'.",
      "Click 'Shop'",
    ],
  },
  {
    step: "step 3",
    img: "/assets/OSM_step3-img.svg",
    text: [
      "Order a cheesecake for yourself :)",
      "There are multiple delivery services to choose from!",
    ],
  },
  {
    step: "step 4",
    img: "/assets/OSM_step4_img.svg",
    text: [
      "Information you may need for placing your order",
      "Name: Lisa",
      "Address: quai jacqus, paris, france",
      "Phone Number: 5678990532",
      "Email ID: lisa@email.com",
      "Payment Method: Cash on Delivery",
    ],
  },
  {
    step: "step 5",
    img: "/assets/OSM_step5_img.svg",
    text: ["Once the order is placed, you can track your order!"],
  },
];

const OscInstructionModal = () => {
  const [isModalOpenOSC, setIsModalOpenOSC] = useState(false);
  const handleInstructionModal = () => {
    setIsModalOpenOSC(true);
  };
  const handleCancelOSC = () => {
    setIsModalOpenOSC(false);
  };
  return (
    <>
      <InstructionButton handleInstructions={handleInstructionModal} />
      <ModalHTML
        open={isModalOpenOSC}
        onCancel={handleCancelOSC}
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
    </>
  );
};

export default OscInstructionModal;
