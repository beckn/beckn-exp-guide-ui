import React, { FC } from "react";
import "./ec-card.css";

interface CardProps {
  cardImage: string;
  cardText: string;
  handleNevigate: () => void;
}

const EcCards: FC<CardProps> = (props) => {
  const { cardImage, cardText, handleNevigate } = props;
  return (
    <>
      <div className="card_container" onClick={handleNevigate}>
        <div className="card_innr">
          <div className="card_with_image">
            <img src={cardImage} alt={"DSEP-img"} />
          </div>
          <p className="card_text">{cardText}</p>
        </div>
      </div>
    </>
  );
};

export default EcCards;
