import React from "react";

import {
  Divider,
  Link,
  Box,
  Stack,
  Typography,
  Breadcrumbs,
  Button,
} from "@mui/material";
import Home from "@mui/icons-material/Home";
import Receipt from "@mui/icons-material/Receipt";
import Print from "@mui/icons-material/Print";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import NavigateNext from "@mui/icons-material/NavigateNext";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
/* import { EventObject } from "extractor/types";


const EventInfos: EventObject[] = [
  {
    Name: "onClick",
    Type: "MouseEvent",
    Inputs: ["e"],
    Description: "클릭 시 텍스트 색상이 바뀐다.",
  },
];
interface Props {
  // 조건 2-1, 조건 2-2
  className: string | undefined; // 조건 2-3
  propertyName: string;
}
 */
const PayDetail = React.forwardRef<any, Props>(({ className }, ref) => {
  const paymentInfo = {
    ID: "123456789104",
    paymentAt: "2023-12-31",
    paymentStatus: "결제완료",
    card: {
      company: "신한카드",
      number: "1234-5678-9***-***6",
    },
  };

  /*  const usedData = {
    startDate: "2023.09.01",
    endDate: "2023.10.01",
    hour: "123",
    minute: "42",
    timeRatio: "-99.9",
    increased: 1,
    increasedHour: "23",
    increasedMinute: "42",
    price: "999,999,999",
    priceRatio: "-99.9",
    increasedPrice: "+99.9",
  };

  const planData = {
    basicPlan: "999,999",
    usedPrice: "999,999",
    tax: "99,000",
    usedCredit: "900",
  };

  const itemData = {
    name: "Tibero 7, TAC",
    description: "상품설명",
    option: "T3 / 4vCPU / 32GB",
    plan: "Standard",
  }; */

  const paymentFontStyle = {
    color: "#111928",
    fontSize: "18px",
    lineHeight: "24px",
  };

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit">
      <Home />
    </Link>,
    <Link underline="hover" key="2" color="inherit">
      결제관리
    </Link>,
    <Link underline="hover" key="2" color="inherit">
      청구서
    </Link>,
    <Typography key="3" color="text.primary">
      세부 결제내역
    </Typography>,
  ];

  const downloadFile = (filePath: string, fileName: string) => {
    try {
      const xhr = new XMLHttpRequest();

      // TODO: 다운로드 파일에 따라 URL 정보만 변경될 수 있게 코드 작성하면 편할 듯 합니다.

      xhr.open("GET", filePath, true);

      xhr.responseType = "blob";

      xhr.onload = function () {
        const blob = xhr.response;

        // Blob 객체의 URL 생성

        const blobUrl = URL.createObjectURL(blob);

        // 다운로드 링크 생성

        const downloadElement = document.createElement("a");

        downloadElement.href = blobUrl;

        downloadElement.download = fileName;

        // 링크를 클릭하여 다운로드 트리거

        document.body.appendChild(downloadElement);

        downloadElement.click();

        // Blob 객체의 URL 해제

        URL.revokeObjectURL(blobUrl);

        // 리소스 해제

        document.body.removeChild(downloadElement);
      };

      xhr.send();
    } catch (error) {
      console.error("파일을 다운로드하는 중 오류 발생: ", error);
    }
  };

  const cardFontStyle = {
    color: "#1F2A37",
    fontSize: "16px",
    lineHeight: "26px",
  };

  type CardProps = {
    title: string;
    option1: string;
    option2: string;
    option3: string;
    amount: string;
  };

  const cardData: CardProps[] = [
    {
      title: "구매 조건",
      option1: "옵션 구성1",
      option2: "옵션 구성2",
      option3: "옵션 구성3",
      amount: "999999",
    },
    {
      title: "구매 조건",
      option1: "옵션 구성1",
      option2: "옵션 구성2",
      option3: "옵션 구성3",
      amount: "999999",
    },
    {
      title: "구매 조건",
      option1: "옵션 구성1",
      option2: "옵션 구성2",
      option3: "옵션 구성3",
      amount: "999999",
    },
    {
      title: "구매 조건",
      option1: "옵션 구성1",
      option2: "옵션 구성2",
      option3: "옵션 구성3",
      amount: "999999",
    },
    {
      title: "구매 조건",
      option1: "옵션 구성1",
      option2: "옵션 구성2",
      option3: "옵션 구성3",
      amount: "999999",
    },
    {
      title: "구매 조건",
      option1: "옵션 구성1",
      option2: "옵션 구성2",
      option3: "옵션 구성3",
      amount: "999999",
    },
  ];

  //캐러셀
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [currIndex, setCurrIndex] = React.useState(1);
  const TRANSITION_TIME = 500;
  React.useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(${
        -(currIndex - 1) * 384
      }px)`;
    }
  }, [currIndex]);

  const Card = ({ title, option1, option2, option3, amount }: CardProps) => {
    return (
      <Box
        sx={{
          minWidth: "384px",
          height: "272px",
          border: "1px solid #E5E7EB",
          bgcolor: "#F9FAFB",
          padding: "24px",
          transition: `all ${TRANSITION_TIME}ms`,
        }}
      >
        <Typography
          sx={{
            color: "#111928",
            fontSize: "18px",
            fontWeight: "600",
            marginBottom: "24px",
          }}
        >
          {title}
        </Typography>
        <Divider orientation="horizontal" sx={{ marginBottom: "24px" }} />
        <Stack gap="16px">
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Typography
              sx={{
                ...cardFontStyle,
                fontWeight: "600",
              }}
            >
              옵션구성1
            </Typography>
            <Typography
              sx={{
                ...cardFontStyle,
                fontWeight: "400",
              }}
            >
              {option1}
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Typography
              sx={{
                ...cardFontStyle,
                fontWeight: "600",
              }}
            >
              옵션 구성2
            </Typography>
            <Typography
              sx={{
                ...cardFontStyle,
                fontWeight: "400",
              }}
            >
              {option2}
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Typography
              sx={{
                ...cardFontStyle,
                fontWeight: "600",
              }}
            >
              옵션 구성3
            </Typography>
            <Typography
              sx={{
                ...cardFontStyle,
                fontWeight: "400",
              }}
            >
              {option3}
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Typography
              sx={{
                ...cardFontStyle,
                fontWeight: "600",
              }}
            >
              사용 금액
            </Typography>
            <Typography
              sx={{
                ...cardFontStyle,
                fontWeight: "400",
              }}
            >
              {amount}원
            </Typography>
          </Box>
        </Stack>
      </Box>
    );
  };

  return (
    <Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          height: "80px",
          padding: "24px 32px 24px 32px",
          boxSizing: "border-box",
        }}
      >
        <Typography
          sx={{
            color: "#111928",
            fontWeight: "700",
            fontSize: "24px",
            lineHeight: "32px",
          }}
        >
          세부 결제 내역
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="end"
          sx={{
            color: "#6B7280",
          }}
        >
          <Breadcrumbs
            separator={<NavigateNext fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </Stack>
      <Stack direction="column" padding="32px" gap="16px">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" alignItems="center">
            <Typography
              sx={{
                color: "#111928",
                fontSize: "24px",
                fontWeight: 700,
                lineHeight: "32px",
              }}
            >
              결제
            </Typography>
            <Typography
              pl="16px"
              sx={{
                color: "#6B7280",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px ",
              }}
            >
              결제 완료일: {paymentInfo.paymentAt}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            borderRadius="6px"
            width="104px"
            height="30px"
            bgcolor="#F3FAF7"
            padding="0px 4px"
            boxSizing="border-box"
            gap="6px"
          >
            <Receipt
              sx={{
                color: "#057A55",
                width: "24px",
                height: "24px",
              }}
            />
            <Typography
              sx={{
                color: "#0E9F6E",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "16px",
              }}
            >
              {paymentInfo.paymentStatus}
            </Typography>
          </Stack>
        </Stack>
        <Divider orientation="horizontal" />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing="16px"
            sx={{
              color: "var(--gray-700, #374151)",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "26px /* 162.5% */",
            }}
          >
            <Typography>결제수단</Typography>
            <Divider orientation="vertical" flexItem />
            <Typography>
              {paymentInfo.card.company} {paymentInfo.card.number}
            </Typography>
          </Stack>
          <Box
            width="206px"
            height="44px"
            component="button"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
            p="10px 18px"
            gap="4px"
            borderRadius="6px"
            border="1px solid #76A9FA"
            bgcolor="#FFFFFF"
            color="#1C64F2"
            whiteSpace="nowrap"
            onClick={() =>
              downloadFile(
                "https://i.ibb.co/vcw0D9r/Kakao-Talk-20240130-165723238.jpg",
                "신용카드 매출전표"
              )
            }
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "26px",
              }}
            >
              신용카드 매출전표 인쇄
            </Typography>
            <Print
              sx={{
                width: "20px",
                height: "20px",
              }}
            />
          </Box>
        </Stack>
      </Stack>
      <Stack sx={{ padding: "0px 32px 80px 32px" }} gap="32px">
        {/*결제정보 */}
        <Stack gap="32px">
          <Box display="flex" flexDirection="column" gap="24px">
            <Box display="flex" flexDirection="row" gap="24px">
              <Typography
                sx={{
                  width: "302px",
                  fontWeight: "600",
                  ...paymentFontStyle,
                }}
              >
                결제번호
              </Typography>
              <Typography
                sx={{
                  ...paymentFontStyle,
                  fontWeight: "400",
                }}
              >
                {"123451234"}
              </Typography>
            </Box>
            <Box display="flex" flexDirection="row" gap="24px">
              <Typography
                sx={{
                  width: "302px",
                  fontWeight: "600",
                  ...paymentFontStyle,
                }}
              >
                청구기간
              </Typography>
              <Typography
                sx={{
                  ...paymentFontStyle,
                  fontWeight: "400",
                }}
              >
                {"2024.02.01 ~ 2024.03.01"}
              </Typography>
            </Box>
          </Box>
          <Stack
            sx={{
              height: "352px",
              borderRadius: "10px",
              border: "1px solid #E5E7EB",
              padding: "32px",
              boxSizing: "border-box",
              gap: "24px",
            }}
          >
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Typography
                sx={{
                  ...paymentFontStyle,
                  fontWeight: "600",
                }}
              >
                {"사용기간"}
              </Typography>
              <Typography
                sx={{
                  ...paymentFontStyle,
                  fontWeight: "500",
                }}
              >
                {"2024.02.01 ~ 2024.03.01"}
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Typography
                sx={{
                  ...paymentFontStyle,
                  fontWeight: "600",
                }}
              >
                {"총 결제 금액"}
              </Typography>
              <Box
                display="flex"
                flexDirection="row"
                gap="8px"
                alignItems="center"
              >
                <Typography
                  sx={{
                    ...paymentFontStyle,
                    fontWeight: "500",
                  }}
                >
                  {"89999999원"}
                </Typography>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  sx={{
                    height: "18px",
                  }}
                />
                <Box display="flex" flexDirection="row">
                  <Typography
                    sx={{
                      ...paymentFontStyle,
                      fontWeight: "500",
                    }}
                  >
                    {"전월 대비"}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#E02424",
                      fontWeight: "500",
                      fontSize: " 18px",
                      lineHeight: "24px",
                    }}
                  >
                    {"-99.00%"}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Divider />
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Typography
                sx={{
                  ...paymentFontStyle,
                  fontWeight: "600",
                }}
              >
                {"기본료"}
              </Typography>
              <Typography
                sx={{
                  ...paymentFontStyle,
                  fontWeight: "500",
                }}
              >
                {"345123"}원
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Typography
                sx={{
                  ...paymentFontStyle,
                  fontWeight: "600",
                }}
              >
                {"총 사용 금액"}
              </Typography>
              <Typography
                sx={{
                  ...paymentFontStyle,
                  fontWeight: "500",
                }}
              >
                {"333322"}원
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Typography
                sx={{
                  ...paymentFontStyle,
                  fontWeight: "600",
                }}
              >
                {"할인 금액"}
              </Typography>
              <Typography
                sx={{
                  ...paymentFontStyle,
                  fontWeight: "500",
                }}
              >
                {"99999"}원
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Typography
                sx={{
                  ...paymentFontStyle,
                  fontWeight: "600",
                }}
              >
                {"세금"}
              </Typography>
              <Typography
                sx={{
                  ...paymentFontStyle,
                  fontWeight: "500",
                }}
              >
                {"234342"}원
              </Typography>
            </Box>
          </Stack>
        </Stack>
        {/*구독상세정보 */}
        <Stack
          sx={{
            border: "1px solid #E5E7EB",
            borderRadius: "10px",
            flex: 1,
            overflow: "hidden",
          }}
        >
          <Stack
            sx={{
              flex: 1,
              flexDirection: "row",
              height: "68px",
              padding: "16px 32px 16px 32px",
              borderBottom: "1px solid #E5E7EB",
              boxSizing: "border-box",
              bgcolor: "#E5E7EB",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap="24px"
            >
              <Typography
                sx={{
                  color: "#111928",
                  fontSize: "20px",
                  fontWeight: "600",
                  lineHeight: "26px",
                }}
              >
                구독 상세정보
              </Typography>
              <Button
                startIcon={
                  <SignalCellularAltIcon
                    sx={{ width: "16px", height: "16px", color: "#FFFFFF" }}
                  />
                }
                endIcon={
                  <NavigateNext
                    sx={{ width: "16px", height: "16px", color: "#FFFFFF" }}
                  />
                }
                sx={{
                  width: "101px",
                  height: "36px",
                  borderRadius: "4px",
                  backgroundColor: "#3F83F8",
                  color: "#FFFFFF",
                }}
              >
                미터링
              </Button>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              gap="8px"
              alignItems="center"
            >
              <ArrowCircleLeftRoundedIcon
                sx={{
                  width: "36px",
                  height: "36px",
                  color: "#FFFFFF",
                }}
                onClick={() => {
                  setCurrIndex((prev) => prev - 1);
                }}
              />
              <ArrowCircleRightRoundedIcon
                sx={{
                  width: "36px",
                  height: "36px",
                  color: "#111928",
                }}
                onClick={() => {
                  setCurrIndex((prev) => prev + 1);
                }}
              />
            </Box>
          </Stack>
          <Stack
            ref={carouselRef}
            padding="32px"
            flexDirection="row"
            gap="32px"
            sx={{
              flex: 1,
              transition: `all ${TRANSITION_TIME}ms`,
              overflow: "hidden",
            }}
          >
            {cardData.map((data, idx) => (
              <Card
                key={idx}
                title={data.title}
                option1={data.option1}
                option2={data.option2}
                option3={data.option3}
                amount={data.amount}
              />
            ))}
          </Stack>
        </Stack>
        {/*상품정보 */}

        <Stack sx={{ border: "1px solid #E5E7EB", borderRadius: "10px" }}>
          <Stack
            sx={{
              height: "68px",
              padding: "16px 32px 16px 32px",
              borderBottom: "1px solid #E5E7EB",
              boxSizing: "border-box",
              bgcolor: "#E5E7EB",
            }}
          >
            <Typography
              sx={{
                color: "#111928",
                fontSize: "20px",
                fontWeight: "600",
                lineHeight: "26px",
              }}
            >
              상품 정보
            </Typography>
          </Stack>
          <Stack padding="32px" gap="24px">
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Typography
                sx={{
                  ...paymentFontStyle,
                  fontWeight: "600",
                }}
              >
                {"상품"}
              </Typography>
              <Typography
                sx={{
                  ...paymentFontStyle,
                  fontWeight: "500",
                }}
              >
                {"Tibero 7, TAC"}
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Typography
                sx={{
                  ...paymentFontStyle,
                  fontWeight: "600",
                }}
              >
                {"상품 설명"}
              </Typography>
              <Typography
                sx={{
                  ...paymentFontStyle,
                  fontWeight: "500",
                }}
              >
                {
                  "{상품설명 상품설명 상품설명 상품설명 상품설명 상품설명 상품설명 상품설명}"
                }
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Typography
                sx={{
                  ...paymentFontStyle,
                  fontWeight: "600",
                }}
              >
                {"옵션"}
              </Typography>
              <Typography
                sx={{
                  ...paymentFontStyle,
                  fontWeight: "500",
                }}
              >
                {"T3 / 4vCPU / 32GB"}
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Typography
                sx={{
                  ...paymentFontStyle,
                  fontWeight: "600",
                }}
              >
                {"요금제"}
              </Typography>
              <Typography
                sx={{
                  ...paymentFontStyle,
                  fontWeight: "500",
                }}
              >
                {"Standard"}
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Typography
                sx={{
                  ...paymentFontStyle,
                  fontWeight: "600",
                }}
              >
                {"기타 옵션"}
              </Typography>
              <Typography
                sx={{
                  ...paymentFontStyle,
                  fontWeight: "500",
                }}
              >
                {"기타 옵션명"}
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
});

export default PayDetail; // 조건 1-3
