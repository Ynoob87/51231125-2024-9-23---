import React from "react";
import { Box, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box p={5} bgcolor="white" m={5} boxShadow={3}>
      <Typography variant="h1" component="h1">
        範例內容
      </Typography>
      <Typography variant="body1">這裡是來展示基本HTML CSS的範例</Typography>
    </Box>
  );
};

export default Hero;
