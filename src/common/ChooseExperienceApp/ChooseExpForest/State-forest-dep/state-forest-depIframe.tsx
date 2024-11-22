import React, { useState } from "react";
import ChooseExperience from "../../../Tabs/chooseExperience";

const StateForestDepIframe = () => {
  const stateForestDepUrl = process.env.REACT_APP_STATE_FOREST_DEP;

  return (
    <div>
      <ChooseExperience
        // headingText="stateForestDepUrl"
        textURL={"/assets/State-Forest-Department-text.svg"}
        descriptionText="A state forest department assesses forest health and
        prioritizes areas for intervention"
        iframeURL={stateForestDepUrl}
      />
    </div>
  );
};

export default StateForestDepIframe;
