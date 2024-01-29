import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const BouncePosition: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children }, ref) => {
    const bounceData = [
      {
        mainCategory: "정보등록",
        bounceRate: 46,
        bounceCnt: 46,
        subCategory: [
          {
            name: "고객 정보 등록",
            bounceRate: 46,
          },
        ],
      },
      {
        mainCategory: "상품",
        bounceRate: 30,
        bounceCnt: 30,
        subCategory: [
          {
            name: "HOME(상품목록)",
            bounceRate: 15,
          },
          {
            name: "상품상세",
            bounceRate: 10,
          },
          {
            name: "상품사양/옵션선택",
            bounceRate: 5,
          },
        ],
      },
      {
        mainCategory: "문의",
        bounceRate: 24,
        bounceCnt: 24,
        subCategory: [
          {
            name: "SR 목록",
            bounceRate: 24,
          },
        ],
      },
    ];

    const POSITION_COLOR: { [key: string]: string } = {
      정보등록: "#F8B4B4",
      상품: "#A4CAFE",
      문의: "#D1D5DB",
    };

    const boxMainStyle = {
      display: "flex",
      flexDirection: "row",
      gap: "16px",
    };

    const boxContentStyle = {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    };

    const fontMainStyle = {
      color: "#111928",
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: "26px",
    };

    const fontContentStyle = {
      color: "#4B5563",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "20px",
    };

    return (
      <Stack
        justifyContent="space-between"
        sx={{
          width: "400px",
          height: "400px",
          padding: "48px 32px",
          borderRadius: "var(--8, 8px)",
          backgroundColor: "#F9FAFB",
        }}
      >
        {bounceData &&
          bounceData.map((item, index) => {
            return (
              <Box key={index} sx={{ ...boxMainStyle }}>
                <Box
                  sx={{
                    width: "24px",
                    height: "24px",
                    backgroundColor: POSITION_COLOR[item.mainCategory],
                  }}
                ></Box>
                <Box sx={{ ...boxContentStyle }}>
                  <Stack
                    flexDirection="row"
                    justifyContent="space-between"
                    sx={{ width: "100%" }}
                  >
                    <Typography sx={{ ...fontMainStyle }}>
                      {item.mainCategory}
                    </Typography>
                    <Typography sx={{ ...fontMainStyle }}>
                      {item.bounceRate}%
                    </Typography>
                  </Stack>
                  {item.subCategory &&
                    item.subCategory.map((item, index) => {
                      return (
                        <Stack
                          key={index}
                          flexDirection="row"
                          justifyContent="space-between"
                          sx={{ width: "100%" }}
                        >
                          <Typography sx={{ ...fontContentStyle }}>
                            {item.name}
                          </Typography>
                          <Typography sx={{ ...fontContentStyle }}>
                            {item.bounceRate}%
                          </Typography>
                        </Stack>
                      );
                    })}
                </Box>
              </Box>
            );
          })}
      </Stack>
    );
  }
);

export default BouncePosition;
