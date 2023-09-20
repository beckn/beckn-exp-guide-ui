import React, { useState } from "react";
import IframeComp from "../iframe/IframeComp";

const CityOfLight = () => {
  const [cityOfLightUrl, setCityOfLightUrl] = useState<string>(
    process.env.REACT_APP_TOURISM_URL as string
  );
  // const cityOfLightUrl = process.env.REACT_APP_TOURISM_URL;
  const [language, setLanguage] = useState("english");

  const handleLanguageEn = () => {
    setLanguage("english");
    setCityOfLightUrl(`${process.env.REACT_APP_TOURISM_URL}`);
  };
  const handleLanguageFa = () => {
    setLanguage("france");
    setCityOfLightUrl(`${process.env.REACT_APP_TOURISM_URL}?lang=fa`);
  };
  return (
    <div>
      <IframeComp
        heading1={"experience the"}
        heading2={"/assets/CityOfLightIcon.svg"}
        heading3={" "}
        description_text={
          "experience for yourself how seamless a trip to Paris can be."
        }
        IframeURL={cityOfLightUrl}
        scrolling={"no"}
        english={"english"}
        france={"français"}
        handleLanguageEn={handleLanguageEn}
        activeEn={language === "english" ? "active" : ""}
        handleLanguageFa={handleLanguageFa}
        activeFa={language === "france" ? "active" : ""}
      />
    </div>
  );
};

export default CityOfLight;
