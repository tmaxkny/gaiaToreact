import { Stack } from "@mui/material";
import React from "react";
import Template from "./Template";
import PromotionTable from "./PromotionTable";

export const PromotionPage: React.FC = () => {
  return (
    <Stack sx={{ gap: "20px" }}>
      <Template />
      <PromotionTable />
    </Stack>
  );
};

export default PromotionPage;
