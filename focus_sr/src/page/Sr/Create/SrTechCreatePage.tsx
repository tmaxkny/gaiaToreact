import { Stack } from "@mui/material";
import DetailHeader from "../Detail/DetailHeader";
import DetailPageHeader2 from "../Detail/DetailHeader2";
import CreateTitle from "./CreateTitle";
import React from "react";

export const SrTechCreatePage: React.FC = () => {
  return (
    <Stack>
      <CreateTitle />
      <DetailHeader />
      <DetailPageHeader2 />
    </Stack>
  );
};
