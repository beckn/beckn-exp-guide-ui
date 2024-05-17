import React, { useState } from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";

const RetailIframe = () => {
  const retail = process.env.REACT_APP_RETAIL_APP;

  return (
    <div style={{ position: "relative" }}>
      <ChooseExperience
        headingText="enhancing commerce with"
        textURL={"/assets/retail-text.svg"}
        descriptionText="Streamlining retail experiences with a user-friendly app, which simplifies the process of purchasing seamlessly."
        iframeURL={retail}
      />
    </div>
  );
};

export default RetailIframe;
