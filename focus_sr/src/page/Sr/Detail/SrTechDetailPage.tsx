import { Stack } from "@mui/material";
import DetailHeader from "./DetailHeader";
import DetailPageHeader2 from "./DetailHeader2";
import DetailTitle from "./DetailTitle";
import CommentList from "./CommentList";
import React from "react";

export const SrTechDetailPage: React.FC = () => {
  return (
    <Stack>
      <DetailTitle />
      <DetailHeader />
      <DetailPageHeader2 />
      <CommentList />
    </Stack>
  );
};
