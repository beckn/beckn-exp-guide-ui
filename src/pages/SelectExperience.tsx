import { Container, Stack, Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EcCards from "../components/EcCards/ec-card";
import { cardsData } from "../utility/EcData/EcData";

const SelectExperience = () => {
  const navigate = useNavigate();
  const [isInProgess, setIsInProgress] = useState(false);

  const getButtonStyles = () => ({
    minWidth: "55px",
    height: "55px",
    borderRadius: "50%",
    background: "#e9ebed",
  });

  const handleNavigate = (url: any) => {
    navigate({
      // pathname: "/progress",
      search: `?url=${url}`,
    });
    setIsInProgress(true);
  };

  return (
    <>
      <Stack
        direction={"row"}
        alignItems="center"
        justifyContent={"space-between"}
        margin="80px auto 60px"
        width={"1260px"}
      >
        <Box className="header_img">
          <img src={"/assets/beckn_lg.svg"} />
        </Box>
        <Button style={getButtonStyles()} onClick={() => navigate("/")}>
          <img src={"/assets/home.svg"} alt="home-icon" />
        </Button>
      </Stack>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          flexWrap={"wrap"}
          width="90%"
          margin={"0 auto"}
          className="select_experience_container"
        >
          {cardsData.map((item, ind) => (
            <EcCards
              key={ind}
              cardImage={item.cardImg}
              cardText={item.cardText}
              handleNevigate={() => {
                handleNavigate(item.id);
              }}
            />
          ))}
        </Stack>
      </Container>
    </>
  );
};

export default SelectExperience;
