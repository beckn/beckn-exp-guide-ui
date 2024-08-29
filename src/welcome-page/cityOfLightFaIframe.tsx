import React, { useEffect, useState } from "react";
import ChooseExpFa from "../common/Tabs/chooseExpFa";

const CityOfLightFaIframe = () => {
  const mobilityAppUrl = process.env.REACT_APP_MOBILITY_CITY_OF_LIGHT_URL;

  const cityOfLightUrlFa =
    JSON.parse(localStorage.getItem("mobility_external_url")!) ||
    process.env.REACT_APP_CITY_OF_LIGHT_FRENCH_URL;

  const [tourismUrlFa, setTourismUrlFa] = useState(cityOfLightUrlFa);

  useEffect(() => {
    const handleStorageChange = () => {
      const orderObjectUrl = JSON.parse(
        localStorage.getItem("mobility_external_url")!
      );

      setTourismUrlFa(`${mobilityAppUrl}?external_url=${orderObjectUrl}`);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      localStorage.removeItem("mobility_external_url");
    };
  }, []);

  return (
    <div>
      <ChooseExpFa
        headingText="expérimenter le"
        textURL={"/assets/city-of-light-text.svg"}
        descriptionText="Expérimentez par vous-même à quel point un voyage à Paris peut être sans souci."
        languageEng={"english"}
        languageFra={"français"}
        setTourismUrl={setTourismUrlFa}
        iframeURL={tourismUrlFa}
      />
    </div>
  );
};

export default CityOfLightFaIframe;
