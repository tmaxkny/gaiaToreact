import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Studio1: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children }, ref) => {
    const keyword = "Keyword";
    const headline = "Headline Text";
    const content =
      "Figma ipsum component variant main layer. Bullet scrolling device frame main create editor project export reesizing. Vertical opacity rectangle scale bullet comment background strikethrough. Connection text draft mask effect prototype";
    const image = "http://icon.daumcdn.net/w/icon/1606/08/150737977.png";

    return (
      <div className={className} ref={ref}>
        <Stack sx={{ gap: "32px", width: "620px" }}>
          {image ? (
            <Box
              component={"img"}
              sx={{
                display: "block",
                width: "100%",
                height: "300px",
                objectFit: "fill",
                boxSizing: "border-box",
              }}
              src={image}
            />
          ) : (
            <Box
              sx={{
                display: "block",
                width: "100%",
                height: "300px",
                objectFit: "contain",
                boxSizing: "border-box",
              }}
            />
          )}
          <Stack gap="6px">
            <Typography
              sx={{
                color: "#525966",
                fontFamily: "Spoqa Han Sans Neo",
                fontSize: "14px",
                fontWeight: 700,
                lineHeight: "160%",
              }}
            >
              {keyword}
            </Typography>
            <Stack>
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
          </Stack>
        </Stack>
      </div>
    );
  }
);

export default Studio1;
