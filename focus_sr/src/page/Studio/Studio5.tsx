import * as React from "react";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const Studio5: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children }, ref) => {
    //캐러셀
    const carouselRef = React.useRef<HTMLDivElement>(null);
    const [currIndex, setCurrIndex] = React.useState(1);
    const TRANSITION_TIME = 500;
    React.useEffect(() => {
      if (carouselRef.current) {
        carouselRef.current.style.transform = `translateX(${
          -(currIndex - 1) * 300
        }px)`;
      }
    }, [currIndex]);

    const headline = "Headline Text";
    const data: {
      content: string;
      keyword: string;
      buttonName: string;
    }[] = [
      {
        content:
          "Figma ipsum component variant main layer. Bullet scrolling device frame main create editor project export reesizing.",
        keyword: "keyword",
        buttonName: "Default Button",
      },
      {
        content:
          "Figma ipsum component variant main layer. Bullet scrolling device frame main create editor project export reesizing.",
        keyword: "keyword",
        buttonName: "Default Button",
      },
      {
        content:
          "Figma ipsum component variant main layer. Bullet scrolling device frame main create editor project export reesizing.",
        keyword: "keyword",
        buttonName: "Default Button",
      },
      {
        content:
          "Figma ipsum component variant main layer. Bullet scrolling device frame main create editor project export reesizing.",
        keyword: "keyword",
        buttonName: "Default Button",
      },
      {
        content:
          "Figma ipsum component variant main layer. Bullet scrolling device frame main create editor project export reesizing.",
        keyword: "keyword",
        buttonName: "Default Button",
      },
      {
        content:
          "Figma ipsum component variant main layer. Bullet scrolling device frame main create editor project export reesizing.",
        keyword: "keyword",
        buttonName: "Default Button",
      },
      {
        content:
          "Figma ipsum component variant main layer. Bullet scrolling device frame main create editor project export reesizing.",
        keyword: "keyword",
        buttonName: "Default Button",
      },
    ];

    const Card = ({
      content,
      keyword,
      buttonName,
    }: {
      content: string;
      keyword: string;
      buttonName: string;
    }) => {
      return (
        <Box
          sx={{
            minWidth: "290px",
            height: "400px",
            border: "1px solid #CFD2D8",
            padding: "40px 32px",
          }}
        >
          <Stack height="100%" justifyContent="space-between">
            <Stack gap="12px">
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
            <Button
              sx={{
                padding: "10px 18px",
                height: "46px",
                width: "fit-content",
                background: "#FFFFFF",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "26px",
                color: "#1F2A37",
              }}
            >
              {buttonName}
            </Button>
          </Stack>
        </Box>
      );
    };
    return (
      <div className={className} ref={ref}>
        <Stack sx={{ gap: "24px", width: "1280px", overflow: "hidden" }}>
          <Stack flexDirection="row" justifyContent="space-between">
            <Typography
              sx={{
                color: "#14181F",
                fontFamily: "Spoqa Han Sans Neo",
                fontSize: "64px",
                fontWeight: 700,
                lineHeight: "160%",
              }}
            >
              {headline}
            </Typography>
            <Stack flexDirection="row" gap="32px" alignItems="center">
              <IconButton
                sx={{
                  background: "#E2E4E9",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => {
                  if (currIndex > 1) setCurrIndex((prev) => prev - 1);
                }}
              >
                <ArrowBackIosNewOutlinedIcon
                  sx={{
                    width: "22px",
                    height: "22px",
                    color: "#818A98",
                  }}
                />
              </IconButton>
              <IconButton
                sx={{
                  background: "#E2E4E9",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => {
                  if (currIndex < data.length - 1)
                    setCurrIndex((prev) => prev + 1);
                }}
              >
                <ArrowForwardIosOutlinedIcon
                  sx={{
                    width: "22px",
                    height: "22px",
                    color: "#818A98",
                  }}
                />
              </IconButton>
            </Stack>
          </Stack>
          <Stack
            ref={carouselRef}
            sx={{
              flex: 1,
              flexDirection: "row",
              gap: "26.67px",
              transition: `all ${TRANSITION_TIME}ms`,
            }}
          >
            {data && data.map((item, idx) => <Card key={idx} {...item} />)}
          </Stack>
        </Stack>
      </div>
    );
  }
);

export default Studio5;
