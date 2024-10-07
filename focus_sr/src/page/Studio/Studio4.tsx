import * as React from "react";
import { Box, Button, Stack, SvgIcon, Typography } from "@mui/material";

const Studio4: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children }, ref) => {
    const image = "http://icon.daumcdn.net/w/icon/1606/08/150737977.png";
    const headline = "Headline Text";
    const content =
      "Figma ipsum component variant main layer. Bullet scrolling device frame main create editor project export reesizing.";
    const buttonName = "Default Button";

    return (
      <div className={className} ref={ref}>
        <Stack gap="32px">
          <Stack
            sx={{
              flexDirection: "row",
              gap: "13px",
              width: "620px",
            }}
          >
            <Stack gap="10px">
              <Typography
                sx={{
                  color: "#14181F",
                  fontFamily: "Spoqa Han Sans Neo",
                  fontSize: "32px",
                  fontWeight: 700,
                  lineHeight: "normal",
                }}
              >
                {headline}
              </Typography>
              <Typography
                sx={{
                  color: "#3A404B",
                  fontFamily: "Spoqa Han Sans Neo",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "160%",
                }}
              >
                {content}
              </Typography>
            </Stack>
            {image ? (
              <Box
                component={"img"}
                sx={{
                  display: "block",
                  width: "102px",
                  height: "102px",
                  objectFit: "fill",
                  boxSizing: "border-box",
                }}
                src={image}
              />
            ) : (
              <Box
                sx={{
                  display: "block",
                  width: "102",
                  height: "102px",
                  objectFit: "contain",
                  boxSizing: "border-box",
                }}
              />
            )}
          </Stack>
          <Button
            sx={{
              background: "#1F2A37",
              padding: "10px 18px",
              height: "46px",
              width: "fit-content",
              color: "#FFFFFF",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "26px",
              borderRadius: "8px",
            }}
          >
            {buttonName}
          </Button>
        </Stack>
      </div>
    );
  }
);

export default Studio4;
