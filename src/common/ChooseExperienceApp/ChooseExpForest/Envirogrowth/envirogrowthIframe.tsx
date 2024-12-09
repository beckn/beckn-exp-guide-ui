import React, { useState } from "react";
import ChooseExperience from "../../../Tabs/chooseExperience";

const EnvirogrowthIframe = () => {
  const envirogrowthdUrl = process.env.REACT_APP_ENVIROGROWTH;

  return (
    <div>
      <ChooseExperience
        // headingText="envirogrowth"
        textURL={"/assets/Envirogrowth-text.svg"}
        descriptionText="A project implementing agency creates forest restoration
        strategy"
        iframeURL={envirogrowthdUrl}
      />
    </div>
  );
};

export default EnvirogrowthIframe;
