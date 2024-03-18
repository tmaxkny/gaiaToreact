import * as React from "react";
import { Stack, Typography, Box } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const PromotionDashCard: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children }, ref) => {
    const headData = {
      averageClickRate: 14,
      averageConversionRate: 4,
      totalConversionPrice: 1236978498,
    };

    const cardStyle = {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      alignItems: "flexStart",
      gap: "10px",
      borderRadius: "12px",
      background: "#F9FAFB",
      padding: "24px",
    };

    const headerTypoStyle = {
      color: "#111928",
      fontSize: "14px",
      fontWeight: "600",
      lineHeight: "20px",
    };

    const contentTypoStyle = {
      color: "#1c64f2",
      fontSize: "24px",
      fontWeight: "700",
      lineHeight: "32px",
    };

    return (
      <div className={className} ref={ref}>
        {children}
        <Stack sx={{ flexDirection: "row", gap: "24px" }}>
          <Box sx={{ ...cardStyle }}>
            <Stack flexDirection="row">
              <Typography sx={{ ...headerTypoStyle }}>클릭률</Typography>
              <HelpOutlineIcon
                style={{
                  color: "#9CA3AF",
                  width: "16px",
                  height: "16px",
                  marginLeft: "8px",
                }}
              />
            </Stack>
            <Typography sx={{ ...contentTypoStyle }}>
              {headData.averageClickRate}%
            </Typography>
          </Box>
          <Box sx={{ ...cardStyle }}>
            <Stack flexDirection="row">
              <Typography sx={{ ...headerTypoStyle }}>전환률</Typography>
              <HelpOutlineIcon
                style={{
                  color: "#9CA3AF",
                  width: "16px",
                  height: "16px",
                  marginLeft: "8px",
                }}
              />
            </Stack>
            <Typography sx={{ ...contentTypoStyle }}>
              {headData.averageConversionRate}%
            </Typography>
          </Box>
          <Box sx={{ ...cardStyle }}>
            <Stack flexDirection="row">
              <Typography sx={{ ...headerTypoStyle }}>전환금액</Typography>
              <HelpOutlineIcon
                style={{
                  color: "#9CA3AF",
                  width: "16px",
                  height: "16px",
                  marginLeft: "8px",
                }}
              />
            </Stack>
            <Stack flexDirection="row" alignItems="flex-end">
              <Typography sx={{ ...contentTypoStyle }}>
                {headData.totalConversionPrice &&
                  headData.totalConversionPrice.toLocaleString()}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "20px",
                  ml: "5px",
                }}
              >
                원
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </div>
    );
  }
);

export default PromotionDashCard;
