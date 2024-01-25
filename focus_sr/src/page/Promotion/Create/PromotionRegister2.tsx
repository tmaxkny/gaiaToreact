import { Stack } from "@mui/material";
import React from "react";
import RegisterTitle from "./RegisterTtile";
import PromotionOption2 from "./PromotionOption2";

export const PromotionRegister2: React.FC = () => {
  return (
    <Stack sx={{ gap: "20px" }}>
      <RegisterTitle />
      <PromotionOption2 />
    </Stack>
  );
};

export default PromotionRegister2;
