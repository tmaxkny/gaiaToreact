import { Stack } from "@mui/material";
import React from "react";
import RegisterTitle from "./RegisterTtile";
import PromotionOption from "./PromotionOption";

export const PromotionRegister: React.FC = () => {
  return (
    <Stack sx={{ gap: "20px" }}>
      <RegisterTitle />
      <PromotionOption />
    </Stack>
  );
};

export default PromotionRegister;
