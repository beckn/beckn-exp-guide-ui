import React, { useState } from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";

const OscIframe = () => {
  const [openStreetCom, setOpenStreetCom] = useState(
    "https://osm-dev.becknprotocol.io/"
  );
  return (
    <div>
      <ChooseExperience
        textURL={"/assets/OSCtext.svg"}
        setTourismUrl={setOpenStreetCom}
        iframeURL={openStreetCom}
        languageEng={"english"}
        languageFra={"francais"}
      />
    </div>
  );
};

export default OscIframe;
