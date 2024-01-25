import * as React from "react";
import { Button, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const RegisterTitle: React.FC<any> = React.forwardRef<any, any>(
  ({ className, onMoveList, onMoveCreate, children }, ref) => {
    return (
      <div className={className} ref={ref}>
        {children}
        <Stack
          direction="row"
          sx={{
            padding: "20px 32px",
            justifyContent: "space-between",
            borderBottom: "1px solid #E5E7EB",
          }}
          alignItems="center"
        >
          <Stack direction="row" sx={{ gap: "12px", alignItems: "center" }}>
            <ArrowBackIcon
              sx={{ width: "24px", height: "24px" }}
              onClick={onMoveList}
            />
            <Typography
              sx={{
                color: "#111928",
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "32px",
              }}
            >
              프로모션 등록
            </Typography>
          </Stack>
          <Stack direction="row" sx={{ gap: "16px", alignItems: "center" }}>
            <Button
              sx={{
                background: "#FFFFFF",
                border: "1px solid #A4CAFE",
                borderRadius: "6px",
                gap: "4px",
                padding: "10px 18px",
                color: "#1C64F2",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "26px",
              }}
            >
              미리보기
            </Button>
            <Button
              sx={{
                width: "92px",
                background: "#1C64F2",
                borderRadius: "6px",
                gap: "4px",
                padding: "10px 18px",
                color: "white",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "26px",
              }}
              onClick={onMoveCreate}
            >
              다음
            </Button>
          </Stack>
        </Stack>
      </div>
    );
  }
);

export default RegisterTitle;
