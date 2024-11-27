import React, { useState } from "react";
import ChooseExperience from "../../../Tabs/chooseExperience";

const EarthSupportInitiativeIframe = () => {
  const earchSupportUrl = process.env.REACT_APP_EARTH_SUPPORT;

  return (
    <div>
      <ChooseExperience
        // headingText="sky-analytics"
        textURL={"/assets/ESI-text.svg"}
        descriptionText="An impact investor tracks performance of a restoration
        project"
        iframeURL={earchSupportUrl}
      />
    </div>
  );
};

export default EarthSupportInitiativeIframe;
