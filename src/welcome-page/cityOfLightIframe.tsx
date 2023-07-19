import React, { useState } from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";

const CityOfLightIframe = () => {
  const cityOfLightUrl = process.env.REACT_APP_CITY_OF_LIGHT_URL;

  const [tourismUrl, setTourismUrl] = useState(cityOfLightUrl);

  return (
    <div>
      <ChooseExperience
        textURL={"/assets/city-of-light-text.png"}
        languageEng={"english"}
        languageFra={"francais"}
        setTourismUrl={setTourismUrl}
        iframeURL={tourismUrl}
      />
    </div>
  );
};

export default CityOfLightIframe;
