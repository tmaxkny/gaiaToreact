import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Information: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children }, ref) => {
    const pageType = "ONSITE";

    const dummyData = {
      BEFORE: {
        sendCnt: 3000,
        clickCnt: 2500,
        clickRate: 83,
        bounceCnt: 2000,
        bounceRat: 80,
        conversionCnt: 500,
        conversionRate: 20,
        conversionPrice: 150000,
      },
      ONSITE: {
        sendCnt: 3000,
        clickCnt: 2500,
        clickRate: 83,
        bounceCnt: 2000,
        bounceRate: 80,
        conversionCnt: 500,
        conversionRate: 20,
        conversionPrice: 150000,
      },
    };

    const boxStyle = {
      height: "108px",
      display: "flex",
      flexDirection: "column",
      flex: 1,
      justifyContent: "center",
      gap: "8px",
      padding: "var(--24, 24px)",
      borderRadius: "var(--8, 8px)",
      background: "#F9FAFB",
      boxSizing: "border-box",
    };
    const fontTitleStyle = {
      fontSize: "14px",
      fontWeight: "600",
      lineHeight: "20px",
      color: "#111928",
    };
    const fontContentStyle = {
      fontSize: "24px",
      fontWeight: "700",
      lineHeight: "32px",
      color: "#111928",
    };
    const fontContentRateStyle = {
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "26px",
      color: "#E02424",
    };

    if ((pageType as string) === "BEFORE") {
      return (
        <Stack>
          <Box
            sx={{
              height: "50px",
              padding: "12px 0px",
              display: "flex",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                lineHeight: "24px",
                color: "#4B5563",
              }}
            >
              프로모션 분석
            </Typography>
          </Box>
          <Stack
            sx={{
              height: "300px",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#F9FAFB",
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "500",
                lineHeight: "24px",
                color: "#111928",
              }}
            >
              데이터가 존재하지 않습니다.
            </Typography>
          </Stack>
        </Stack>
      );
    } else {
      return (
        <Stack>
          <Box
            sx={{
              height: "50px",
              padding: "12px 0px",
              display: "flex",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                lineHeight: "24px",
                color: "#4B5563",
              }}
            >
              프로모션 분석
            </Typography>
          </Box>
          <Stack
            sx={{
              flexDirection: "row",
              height: "108px",
              gap: "20px",
            }}
          >
            <Box sx={{ ...boxStyle }}>
              <Typography sx={{ ...fontTitleStyle }}>전송 수</Typography>
              <Typography sx={{ ...fontContentStyle }}>
                {dummyData[pageType].sendCnt}건
              </Typography>
            </Box>
            <Box sx={{ ...boxStyle }}>
              <Typography sx={{ ...fontTitleStyle }}>클릭 수</Typography>
              <Stack flexDirection="row" alignItems="flex-end" gap="8px">
                <Typography sx={{ ...fontContentStyle }}>
                  {dummyData[pageType].clickCnt &&
                    `${dummyData[pageType].clickCnt.toLocaleString()}건`}
                </Typography>
                <Typography sx={{ ...fontContentRateStyle }}>
                  {dummyData[pageType].clickRate &&
                    `${dummyData[pageType].clickRate.toLocaleString()}%`}
                </Typography>
              </Stack>
            </Box>
            <Box sx={{ ...boxStyle }}>
              <Typography sx={{ ...fontTitleStyle }}>이탈 수</Typography>
              <Stack flexDirection="row" alignItems="flex-end" gap="8px">
                <Typography sx={{ ...fontContentStyle }}>
                  {dummyData[pageType].bounceCnt &&
                    `${dummyData[pageType].bounceCnt.toLocaleString()}건`}
                </Typography>
                <Typography sx={{ ...fontContentRateStyle }}>
                  {dummyData[pageType].bounceRate &&
                    `${dummyData[pageType].bounceRate.toLocaleString()}%`}
                </Typography>
              </Stack>
            </Box>
            <Box sx={{ ...boxStyle }}>
              <Typography sx={{ ...fontTitleStyle }}>전환 수</Typography>
              <Stack flexDirection="row" alignItems="flex-end" gap="8px">
                <Typography sx={{ ...fontContentStyle }}>
                  {dummyData[pageType].conversionCnt &&
                    `${dummyData[pageType].conversionCnt.toLocaleString()}건`}
                </Typography>
                <Typography sx={{ ...fontContentRateStyle }}>
                  {dummyData[pageType].conversionRate &&
                    `${dummyData[pageType].conversionRate.toLocaleString()}%`}
                </Typography>
              </Stack>
            </Box>
            <Box sx={{ ...boxStyle }}>
              <Typography sx={{ ...fontTitleStyle }}>전환 금액</Typography>
              <Typography sx={{ ...fontContentStyle }}>
                {dummyData[pageType].conversionPrice.toLocaleString()}건
              </Typography>
            </Box>
          </Stack>
        </Stack>
      );
    }
  }
);

export default Information;
