import * as React from "react";
import { Stack, Checkbox, Typography, Button } from "@mui/material";
import * as MUI_ICON from "@mui/icons-material";

const Confirmed: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children, moveToNext }, ref) => {
    return (
      <Stack alignItems="center">
        <MUI_ICON.CheckCircle
          sx={{ fontSize: "60px", color: "#1C64F2", marginBottom: "24px" }}
        />
        <Typography
          sx={{
            color: "#111928",
            fontSize: "28px",
            lineHeight: "28px",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          답변 완료! 감사합니다.
        </Typography>
        <Typography
          sx={{
            color: "#374151",
            fontSize: "20px",
            lineHeight: "24px",
            fontWeight: "500",
          }}
        >
          답변해주신 정보로 더 좋은 서비스를 제공해 드릴게요.
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%", height: "94px", gap: "16px", marginTop: "24px" }}
        >
          <Button
            onClick={moveToNext}
            sx={{
              padding: "10px 18px",
              backgroundColor: "#1C64F2",
              color: "#FFFFFF",
              borderRadius: "6px",
              fontWeight: 600,
              lineHeight: "26px",
              fontSize: "16px",
              border: "1px solid #1C64F2",
              "&.Mui-disabled": {
                backgroundColor: "#E5E7EB",
                color: "#9CA3AF",
                borderColor: "#E5E7EB",
              },
              "&:hover": {
                backgroundColor: "#004BEB",
              },
            }}
          >
            FOCUS 홈으로 이동
          </Button>
        </Stack>
      </Stack>
    );
  }
);

export default Confirmed;
