import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Default: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children }, ref) => {
    const pageType = "BEFORE";

    const dummyData = {
      BEFORE: {
        media: "EMAIL",
        promotionTitle: "Tibero에서...",
        content: "",
        target: "-",
        popupUrl: "-",
        ctaLink: "-",
      },
      ONSITE: {
        media: "EMAIL",
        promotionTitle: "Tibero에서...",
        content: "",
        target: "-",
        popupUrl: "-",
        ctaLink: "-",
      },
    };

    const fontTitleStyle = {
      width: "302px",
      fontSize: "18px",
      fontWeight: "600",
      lineHeight: "24px",
      color: "#111928",
    };

    const fontContentStyle = {
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "26px",
      color: "#111928",
    };

    return (
      <Stack
        sx={{
          borderRadius: "10px",
          border: "1px solid #D1D5DB",
        }}
      >
        <Box
          sx={{
            height: "76px",
            backgroundColor: "#F9FAFB",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#111928",
              lineHeight: "26px",
              marginLeft: "32px",
              marginTop: "25px",
            }}
          >
            기본정보
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            padding: "32px 0px 32px 32px",
          }}
        >
          <Stack flexDirection="row" gap="16px">
            <Typography
              sx={{
                ...fontTitleStyle,
              }}
            >
              매체
            </Typography>
            <Typography
              sx={{
                ...fontContentStyle,
              }}
            >
              {dummyData[pageType].media}
            </Typography>
          </Stack>
          <Stack flexDirection="row" gap="16px">
            <Typography
              sx={{
                ...fontTitleStyle,
              }}
            >
              컨텐츠 제목
            </Typography>
            <Typography
              sx={{
                ...fontContentStyle,
              }}
            >
              {dummyData[pageType].promotionTitle}
            </Typography>
          </Stack>
          <Stack flexDirection="row" gap="16px">
            <Typography
              sx={{
                ...fontTitleStyle,
              }}
            >
              컨텐츠 내용
            </Typography>
            <Typography
              sx={{
                ...fontContentStyle,
              }}
            >
              {dummyData[pageType].content}
            </Typography>
          </Stack>
          <Stack flexDirection="row" gap="16px">
            <Typography
              sx={{
                ...fontTitleStyle,
              }}
            >
              타깃
            </Typography>
            <Typography
              sx={{
                ...fontContentStyle,
              }}
            >
              {dummyData[pageType].target}
            </Typography>
          </Stack>
          {pageType === "BEFORE" && (
            <Stack flexDirection="row" gap="16px">
              <Typography
                sx={{
                  ...fontTitleStyle,
                }}
              >
                노출 위치
              </Typography>
              <Typography
                sx={{
                  ...fontContentStyle,
                }}
              >
                {dummyData[pageType].popupUrl}
              </Typography>
            </Stack>
          )}
          <Stack flexDirection="row" gap="16px">
            <Typography
              sx={{
                ...fontTitleStyle,
              }}
            >
              도착 URL
            </Typography>
            <Typography
              sx={{
                ...fontContentStyle,
              }}
            >
              {dummyData[pageType].ctaLink}
            </Typography>
          </Stack>
        </Box>
      </Stack>
    );
  }
);

export default Default;
