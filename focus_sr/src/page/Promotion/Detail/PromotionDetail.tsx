import { Stack } from "@mui/material";
import React from "react";
import Default from "./Default";
import DetailTitle from "./DetailTitle";
import TargetTable from "./TargetTable";
import Information from "./Information";
import BouncePosition from "./BouncePosition";
import PurchaseProduct from "./PurchaseProduct";

const PromotionDetail: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children }, ref) => {
    return (
      <Stack>
        <DetailTitle />
        <Stack sx={{ padding: "24px 32px", gap: "32px" }}>
          <Default />
          <TargetTable />
          <Information />
          <BouncePosition />
          <PurchaseProduct />
        </Stack>
      </Stack>
    );
  }
);

export default PromotionDetail;
