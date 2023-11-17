import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import { Box, Container, Typography, Stack, Button } from "@mui/material";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box textAlign={"center"} mt="100px">
        <img className="Beckn-logo" src="/assets/beckn_lg.svg" alt={"Logo"} />
      </Box>
      <Box mt="94px">
        <Typography
          fontSize={"64px"}
          fontWeight="400"
          lineHeight={"96px"}
          textAlign="center"
        >
          welcome to the
        </Typography>
        <Typography
          fontSize={"64px"}
          fontWeight="400"
          lineHeight={"96px"}
          textAlign="center"
        >
          beckn experience center
        </Typography>
      </Box>
      <Box textAlign={"center"} mt="94px">
        <Button
          variant="contained"
          onClick={() => navigate("/select-experience")}
          style={{
            background: "#77aede",
            textTransform: "lowercase",
            height: "55px",
            width: "228px",
            boxShadow: "0 4px 4px #00000040",
          }}
        >
          <Stack direction="row" alignItems={"center"}>
            <Typography color="#FFFF" fontSize={"28px"} pr="10px">
              begin
            </Typography>
            <img style={{ width: "16px" }} src="/assets/tiltArrow.svg" alt="" />
          </Stack>
        </Button>
      </Box>
    </Container>
  );
};

export default LandingPage;
