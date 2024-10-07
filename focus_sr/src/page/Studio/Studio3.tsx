import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Studio3: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children }, ref) => {
    const headline = "Headline Text";
    const content =
      "Figma ipsum component variant main layer. Bullet scrolling device frame main create editor project export reesizing.";
    const image = "http://icon.daumcdn.net/w/icon/1606/08/150737977.png";
    return (
      <div className={className} ref={ref}>
        <Stack
          sx={{
            flexDirection: "row",
            gap: "13px",
            width: "620px",
          }}
        >
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
                width: "310px",
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
        </Stack>
      </div>
    );
  }
);

export default Studio3;
