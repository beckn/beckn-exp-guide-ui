import * as React from "react";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Container, Stack } from "@mui/material";

interface GradientColor {
  from: string;
  to: string;
}

interface ColoredLinearProgressProps
  extends Omit<LinearProgressProps, "color"> {
  value: number;
  color?: string | GradientColor;
}

const calculateBarColor = (
  color: string | GradientColor | undefined
): string => {
  if (typeof color === "string") {
    return color;
  } else if (color && typeof color === "object" && color.from && color.to) {
    return `linear-gradient(to right, ${color.from}, ${color.to})`;
  }
  return "#523f62";
};

function LinearProgressWithLabel(props: ColoredLinearProgressProps) {
  const { color, value, ...linearProgressProps } = props;

  const barColor = calculateBarColor(color);

  return (
    <>
      <Stack
        direction={"row"}
        alignItems="center"
        justifyContent={"space-between"}
        margin="80px auto 140px"
        width={"1260px"}
      >
        <Box>
          <img src={"/assets/beckn_lg.svg"} />
        </Box>
      </Stack>
      <Container maxWidth="md">
        <Box>
          <Box
            textAlign={"center"}
            fontSize="40px"
            fontWeight={"400"}
            color="#4e4646"
            mb={"60px"}
          >
            awesome.. setting up your experience
          </Box>
          <Box sx={{ width: "70%", margin: "0 auto" }}>
            <LinearProgress
              variant="determinate"
              value={value}
              sx={{
                background: "linear-gradient(to right, #523f62, #523f62)",
                "& .MuiLinearProgress-bar": {
                  background: barColor,
                  borderRadius: "10px",
                  left: "15px",
                },
                height: "10px",
                borderRadius: "10px",
                overflow: "hidden",
              }}
              {...linearProgressProps}
            />
          </Box>
          <Box sx={{ minWidth: 35 }} mt="40px">
            <Typography
              variant="body2"
              color="text.secondary"
              fontSize="20px"
              lineHeight={"30px"}
              fontWeight={"300"}
            >
              Loading... ({`${Math.round(value)}%`})
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 1
      );
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel
        value={progress}
        color={{ from: "#4383BF", to: "#CFE4F5" }}
      />
    </Box>
  );
}
