import React, { useState } from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";

const CityOfLightIframe = () => {
  const tourismUrl = "https://tourism-app-french-infra.becknprotocol.io/";

  return (
    <div>
      <ChooseExperience
        textURL={"/assets/city-of-light-text.png"}
        languageEng={"English"}
        languageFra={"Francais"}
        iframeURL={tourismUrl}
      />
    </div>
  );
};

export default CityOfLightIframe;
