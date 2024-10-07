import * as React from "react";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const Studio2: React.FC<any> = React.forwardRef<any, any>(
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
      image: string;
      content: string;
      keyword1: string;
      keyword2: string;
    }[] = [
      {
        image: "./public/test.jpeg",
        content:
          "Figma ipsum component variant main layer. Bullet scrolling device frame main create editor project export reesizing.",
        keyword1: "keyword",
        keyword2: "keyword",
      },
      {
        image: "./public/test.jpeg",
        content:
          "Figma ipsum component variant main layer. Bullet scrolling device frame main create editor project export reesizing.",
        keyword1: "keyword",
        keyword2: "keyword",
      },
      {
        image: "./public/test.jpeg",
        content:
          "Figma ipsum component variant main layer. Bullet scrolling device frame main create editor project export reesizing.",
        keyword1: "keyword",
        keyword2: "keyword",
      },
      {
        image: "./public/test.jpeg",
        content:
          "Figma ipsum component variant main layer. Bullet scrolling device frame main create editor project export reesizing.",
        keyword1: "keyword",
        keyword2: "keyword",
      },
      {
        image: "./public/test.jpeg",
        content:
          "Figma ipsum component variant main layer. Bullet scrolling device frame main create editor project export reesizing.",
        keyword1: "keyword",
        keyword2: "keyword",
      },
      {
        image: "./public/test.jpeg",
        content:
          "Figma ipsum component variant main layer. Bullet scrolling device frame main create editor project export reesizing.",
        keyword1: "keyword",
        keyword2: "keyword",
      },
    ];

    const Card = ({
      image,
      content,
      keyword1,
      keyword2,
    }: {
      image: string;
      content: string;
      keyword1: string;
      keyword2: string;
    }) => {
      return (
        <Box sx={{ minWidth: "300px", height: "354px" }}>
          <Stack gap="32px">
            {image ? (
              <Box
                component={"img"}
                sx={{
                  display: "block",
                  width: "100%",
                  height: "200px",
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
                  height: "200px",
                  objectFit: "contain",
                  boxSizing: "border-box",
                }}
              />
            )}
            <Stack gap="18px">
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
              <Stack flexDirection="row" gap="14px">
                <Typography
                  sx={{
                    color: "#525966",
                    fontFamily: "Spoqa Han Sans Neo",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "160%",
                  }}
                >
                  {keyword1}
                </Typography>
                <Divider orientation="vertical" flexItem />
                <Typography
                  sx={{
                    color: "#525966",
                    fontFamily: "Spoqa Han Sans Neo",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "160%",
                  }}
                >
                  {keyword2}
                </Typography>
              </Stack>
            </Stack>
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

export default Studio2;
