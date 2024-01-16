import { Stack } from "@mui/material";
import { SRTable } from "./SrTable";
import TableSelector from "./TableSelector";
import React from "react";

export const SrTechPage: React.FC = () => {
  return (
    <Stack gap="20px">
      <TableSelector />
      <SRTable />
    </Stack>
  );
};
