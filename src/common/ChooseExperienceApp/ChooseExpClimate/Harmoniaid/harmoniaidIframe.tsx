import React, { useState } from "react";
import ChooseExperience from "../../../Tabs/chooseExperience";

const HarmoniaidIframe = () => {
  const harmoniaidUrl = process.env.REACT_APP_HARMONIAID;

  return (
    <div>
      <ChooseExperience
        // headingText="harmoniaid"
        textURL={"/assets/HarmoniAid-text.svg"}
        descriptionText="A humanitarian aid organization plans for
        anticipatory aid"
        iframeURL={harmoniaidUrl}
      />
    </div>
  );
};

export default HarmoniaidIframe;
