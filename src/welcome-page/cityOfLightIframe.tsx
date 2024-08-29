import React, { useEffect, useState } from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";

const CityOfLightIframe = () => {
  const mobilityAppUrl = process.env.REACT_APP_MOBILITY_CITY_OF_LIGHT_URL;

  const cityOfLightUrl = JSON.parse(localStorage.getItem("mobility_external_url")!) || process.env.REACT_APP_CITY_OF_LIGHT;

  const [tourismUrl, setTourismUrl] = useState(cityOfLightUrl);

  useEffect(() => {
    const handleStorageChange = () => {
        const orderObjectUrl = JSON.parse(localStorage.getItem("mobility_external_url")!)
        if (orderObjectUrl) {
          setTourismUrl(`${mobilityAppUrl}?external_url=${orderObjectUrl}`);
        }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
        window.removeEventListener('storage', handleStorageChange);
        localStorage.removeItem("mobility_external_url")
    };
}, []);

  return (
    <div>
      <ChooseExperience
        headingText="experience the"
        textURL={"/assets/city-of-light-text.svg"}
        descriptionText="experience for yourself how seamless a trip to Paris can be."
        languageEng={"english"}
        languageFra={"français"}
        setTourismUrl={setTourismUrl}
        iframeURL={tourismUrl}
      />
    </div>
  );
};

export default CityOfLightIframe;
