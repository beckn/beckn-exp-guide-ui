import React, { useState } from "react";
import ChooseExperience from "../../../Tabs/chooseExperience";

const SkyAnalyticsIframe = () => {
  const skyAnalyticsUrl = process.env.REACT_APP_SKY_ANALYTICS;

  return (
    <div>
      <ChooseExperience
        // headingText="sky-analytics"
        textURL={"/assets/sky-analytics-text.svg"}
        descriptionText="A climate services startup delivers flood
        predictions for early warnings"
        iframeURL={skyAnalyticsUrl}
      />
    </div>
  );
};

export default SkyAnalyticsIframe;
