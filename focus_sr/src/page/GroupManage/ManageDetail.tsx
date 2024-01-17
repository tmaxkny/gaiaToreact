import * as React from "react";
import { Stack, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import ManageDetailLeft from "./ManageDetailLeft";
import ManageDetailRight from "./ManageDetailRight";

export const ManageDetail: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children, moveToList }, ref) => {
    return (
      <div className={className} ref={ref}>
        {children}
        <Stack
          direction="row"
          sx={{
            padding: "20px 32px",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <ArrowBack
            sx={{ width: "32px", height: "32px", color: "#111928" }}
            onClick={moveToList}
          />
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "32px",
              color: "#111928",
            }}
          >
            직무 그룹 상세
          </Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{
            padding: "32px",
            gap: "32px",
          }}
        >
          <ManageDetailLeft />
          <ManageDetailRight />
        </Stack>
      </div>
    );
  }
);

export default ManageDetail;
