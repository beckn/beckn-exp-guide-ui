import React from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";
const HimalayasIframe = () => {
  return (
    <div>
      <ChooseExperience
        textURL={"/assets/himalyasText.svg"}
        iframeURL={"https://tourism-app-staging.becknprotocol.io"}
      />
    </div>
  );
};

export default HimalayasIframe;
