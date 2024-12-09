import React, { useState } from "react";
import ChooseExperience from "../../../Tabs/chooseExperience";

const DragonFoodsIframe = () => {
  const dragonFoodsUrl = process.env.REACT_APP_DRAGON_FOODS;

  return (
    <div>
      <ChooseExperience
        // headingText="dragon foods"
        textURL={"/assets/dragon-food-text.svg"}
        descriptionText="An FMCG company delivers flood-resilient
        farming advisory to its contract farmers"
        iframeURL={dragonFoodsUrl}
      />
    </div>
  );
};

export default DragonFoodsIframe;
