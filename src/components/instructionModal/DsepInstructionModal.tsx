import React, { useState } from "react";
import InstructionButton from "../instructionButton/InstructionButton";
import ModalHTML from "../ModalHTML/modalHTML";

const instructionsData = [
  {
    step: "step 1",
    img: "/assets/DSEP_step1.svg",
    text: [
      <p>Login to the Skill Seeker app using the provided:</p>,
      <p>Phone number: </p>,
      <p>6251423251 </p>,
      <p>6 digit OTP: </p>,
      <p>726345 </p>,
    ],
  },
  {
    step: "step 2",
    img: "/assets/DSEP_step2.svg",
    text: [<p>From the landing page, search for a course, e.g., Design. </p>],
  },
  {
    step: "step 3",
    img: "/assets/DSEP_step3.svg",
    text: [
      <p>
        From your search list, select the course e.g., Design Thinking and
        proceed with the checkout flow.{" "}
      </p>,
    ],
  },
  {
    step: "step 4",
    img: "/assets/DSEP_step4.svg",
    text: [
      <p>Billing details you may need to proceed: </p>,
      <p>Name: Santosh Kumar </p>,
      <p>Address: 151-E, Janpath Road, New Delhi </p>,
      <p>Phone number: 6251423251 </p>,
      <p>Email ID: santosh.k@gmail.com </p>,
      <p>Payment Method: Free course </p>,
    ],
  },
  {
    step: "step 5",
    img: "/assets/DSEP_step5.svg",
    text: [
      <p>
        You can start learning by clicking 'Start Course', which will take you
        to the course details page.{" "}
      </p>,
    ],
  },
  {
    step: "step 6",
    img: "/assets/DSEP_step5.svg",
    text: [
      <p>
        You can start learning by clicking 'Start Course', which will take you
        to the course details page.{" "}
      </p>,
    ],
  },
  {
    step: "step 7",
    img: "/assets/DSEP_step5.svg",
    text: [
      <p>
        You can start learning by clicking 'Start Course', which will take you
        to the course details page.{" "}
      </p>,
    ],
  },
];

const DsepInstructionModal = () => {
  const [isModalOpenDSEP, setIsModalOpenDSEP] = useState(false);

  const handleInstructionModal = () => {
    setIsModalOpenDSEP(true);
  };

  const handleCancelDSEP = () => {
    setIsModalOpenDSEP(false);
  };

  return (
    <div style={{ marginTop: "-20px" }}>
      <InstructionButton handleInstructions={handleInstructionModal} />
      <ModalHTML
        open={isModalOpenDSEP}
        onCancel={handleCancelDSEP}
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

export default DsepInstructionModal;
