import React from "react";

import {
  Divider,
  Link,
  Box,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Breadcrumbs,
} from "@mui/material";
import Home from "@mui/icons-material/Home";
import Receipt from "@mui/icons-material/Receipt";
import Print from "@mui/icons-material/Print";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { EventObject } from "extractor/types";

import NavigateNext from "@mui/icons-material/NavigateNext";
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

  const usedData = {
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

  return (
    <Stack
      sx={{
        display: "flex",
        overflow: "auto",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          height: "102px",
          padding: "32px",
        }}
      >
        <Typography
          sx={{ color: "#111928", fontWeight: "700", fontSize: "28px" }}
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
      <Stack direction="column">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          px="28px"
          py="16px"
        >
          <Stack direction="row" alignItems="center">
            <Typography
              sx={{
                color: "var(--gray-900, var(--light-icon-strong, #111928))",
                fontSize: "24px",
                fontWeight: 700,
                lineHeight: "32px /* 133.333% */",
              }}
            >
              결제
            </Typography>
            <Typography
              pl="16px"
              sx={{
                color: "var(--gray-500, #6B7280)",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px /* 150% */",
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
            bgcolor="var(--success-050, #F3FAF7)"
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
                color: "var(--success-500, #0E9F6E)",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "26px /* 162.5% */",
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
          px="28px"
          py="16px"
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
            <Divider orientation="vertical" flexItem />
            <Typography>결제방식</Typography>
          </Stack>
          <Box
            component="button"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
            p="8px 16px"
            gap="4px"
            borderRadius="4px"
            border="1px solid var(--focus-blue-300, #A4CAFE)"
            bgcolor="var(--Focus-White, #FFF)"
            color="var(--focus-blue-600, #1C64F2)"
            onClick={() =>
              downloadFile(
                "https://i.ibb.co/vcw0D9r/Kakao-Talk-20240130-165723238.jpg",
                "신용카드 매출전표"
              )
            }
          >
            <Print
              sx={{
                width: "16px",
                height: "16px",
              }}
            />
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                lineHeight: "20px /* 142.857% */",
              }}
            >
              신용카드 매출전표 인쇄
            </Typography>
          </Box>
        </Stack>
      </Stack>
      <Accordion>
        <AccordionSummary
          sx={{
            height: "76px",
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "32px /* 133.333% */",
            background: "var(--gray-050, #F9FAFB)",
            borderRadius: "10px",
            "&:has(.Mui-expanded)": {
              backgroundColor: "var(--gray-050, #EBF5FF)",
              borderRadius: "10px 10px 0px 0px",
            },
            "& .Mui-expanded": {
              color: "#1C64F2",
              borderRadius: "10px",
            },
            padding: "16px 32px",
            "& .MuiAccordionSummary-content": {
              transition: "color 0.2s ease-in-out",
              margin: 0,
            },
          }}
          expandIcon={
            <ExpandMore
              sx={{
                width: "24px",
                height: "24px",
                color: "var(--focus-blue-600, #1C64F2)",
              }}
            />
          }
        >
          {paymentInfo.ID}
        </AccordionSummary>
        {/* <AccordionSummary>{paymentInfo.ID}</AccordionSummary> */}
        <AccordionDetails>
          <Stack direction="column" alignItems="stretch" gap="80px">
            <Stack direction="column" p="32px" gap="40px">
              <Stack
                gap="24px"
                sx={{
                  fontFamily: "Pretendard",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "26px",
                }}
              >
                <Stack direction="row" justifyContent="space-between">
                  <Typography>사용기간</Typography>
                  <Typography>
                    {usedData.startDate} - {usedData.endDate}
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography>사용시간</Typography>
                  <Stack direction="row" gap="16px">
                    <Typography>
                      {usedData.hour}시간 {usedData.minute}분
                    </Typography>
                    <Divider orientation="vertical" flexItem />
                    {usedData.increased === 1 ? (
                      <Typography>
                        전월 대비{" "}
                        <span color="#1C64F2">{usedData.timeRatio}</span>% /{" "}
                        <span color="#1C64F2">{usedData.increasedHour}</span>
                        시간{" "}
                        <span color="#1C64F2">{usedData.increasedMinute}</span>
                        분
                      </Typography>
                    ) : (
                      <Typography>
                        전월 대비{" "}
                        <span color="#E02424">{usedData.timeRatio}</span>% /{" "}
                        <span color="#E02424">{usedData.increasedHour}</span>
                        시간{" "}
                        <span color="#E02424">{usedData.increasedMinute}</span>
                        분
                      </Typography>
                    )}
                  </Stack>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography>결제금액</Typography>
                  <Stack direction="row" gap="16px">
                    <Typography>{usedData.price}원</Typography>
                    <Divider orientation="vertical" flexItem />
                    <Typography>
                      전월 대비{" "}
                      <span color="#E02424">{usedData.priceRatio}</span>% /{" "}
                      <span color="#1C64F2">{usedData.increasedPrice}</span>원
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack
                gap="24px"
                sx={{
                  fontFamily: "Pretendard",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "26px",
                }}
              >
                <Stack direction="row" justifyContent="space-between">
                  <Typography>기본요금</Typography>
                  <Typography>{planData.basicPlan} 원</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography>사용요금</Typography>
                  <Typography>{planData.usedPrice} 원</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography>세금</Typography>
                  <Typography>{planData.tax} 원</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography>크레딧 차감</Typography>
                  <Typography>{planData.usedCredit} 원</Typography>
                </Stack>
              </Stack>
              <Divider />
              <Stack>
                <Typography
                  sx={{
                    width: "100%",
                    fontFamily: "Pretendard",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "32px",
                    marginBottom: "48px",
                  }}
                >
                  상품 정보
                </Typography>
                <Stack
                  gap="24px"
                  sx={{
                    fontFamily: "Pretendard",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "26px",
                  }}
                >
                  <Stack direction="row" justifyContent="space-between">
                    <Typography>상품</Typography>
                    <Typography>{itemData.name} 원</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography>상품 설명</Typography>
                    <Typography>{itemData.description} 원</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography>옵션</Typography>
                    <Typography>{itemData.option} 원</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography>요금제</Typography>
                    <Typography>{itemData.plan}</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
});

export default PayDetail; // 조건 1-3
