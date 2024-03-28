import React from "react";

import { Box, Divider, Link, Stack, Typography } from "@mui/material";
import Receipt from "@mui/icons-material/Receipt";
import Print from "@mui/icons-material/Print";

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

const ReceiptPage = React.forwardRef<any, Props>(({ className }, ref) => {
  const RECEIPT_DATA = {
    Price: "30000",
    PayPrice: "30000",
    UsedCredit: "0",
    CardNumber: "0000-0000-0***-***0",
    // CardNumber : '0000-0000-0000-0000',
    CardOwner: "티맥스",
    PayDate: "2023-12-31",
  };

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
    <div>
      <Stack sx={{ padding: "24px 32px", width: "100%" }} gap="16px">
        <Typography
          sx={{ fontSize: "28px", fontWeight: "700", color: "#111928" }}
        >
          영수증
        </Typography>
        <Divider />
        <Typography
          sx={{ fontSize: "16px", fontWeight: "4 00", color: "#374151" }}
        >
          결제일 : 2023-12-31
        </Typography>
      </Stack>
      <Stack sx={{ width: "95%", margin: "0 auto" }} gap="32px">
        <Stack
          gap="32px"
          sx={{ borderRadius: "10px", border: "1px solid #D1D5DB" }}
        >
          {/* Title */}
          <Stack
            direction="row"
            sx={{
              "& p": {
                fontSize: "24px",
                fontWeight: "700",
              },
              borderRadius: "10px",
              padding: "22px 32px",
              backgroundColor: "#F9FAFB",
            }}
            justifyContent="space-between"
          >
            <Stack direction="row" gap="8px" alignItems="center">
              <Receipt
                style={{ width: "30px", height: "30px", color: "#9CA3AF" }}
              />
              <Typography>청구 비용</Typography>
            </Stack>
            <Typography sx={{ color: "#1C64F2" }}>
              ₩{RECEIPT_DATA.Price}
            </Typography>
          </Stack>
          {/* 항목들 */}
          <Stack
            gap="48px"
            sx={{ width: "95%", margin: "0 auto", marginBottom: "32px" }}
          >
            <Stack gap="24px">
              {/* <ReceiptItem name={'결제 비용'} value={'30000'} />
                            <ReceiptItem name={'사용 크레딧'} value={'0'} /> */}
              <Stack direction="row" justifyContent="space-between">
                <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                  {"결제 비용"}
                </Typography>
                <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>
                  -₩{RECEIPT_DATA.PayPrice}
                </Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                  {"사용 크레딧"}
                </Typography>
                <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>
                  -{RECEIPT_DATA.UsedCredit}
                </Typography>
              </Stack>
            </Stack>
            <Stack gap="24px">
              <Divider />
              {/* <ReceiptItem name={'카드번호'} value={'0000-0000-0000-0000'} />
                            <ReceiptItem name={'카드 소유자'} value={'티맥스'} /> */}
              <Stack direction="row" justifyContent="space-between">
                <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                  {"카드번호"}
                </Typography>
                <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>
                  {RECEIPT_DATA.CardNumber}
                </Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                  {"카드 소유자"}
                </Typography>
                <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>
                  {RECEIPT_DATA.CardOwner}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Typography
          component="span"
          sx={{
            fontSize: "12px",
            color: "#374151",
            borderRadius: "10px",
            backgroundColor: "#F9FAFB",
            padding: "32px 24px",
          }}
        >
          {`※ 환불 정책이나 구매에 대한 FAQ는 `}
          <Link underline="hover" sx={{ color: "#1C64F2", fontWeight: "600" }}>
            홈페이지
          </Link>
          {`에서 확인하실 수 있습니다.`}
        </Typography>
        <Box
          alignSelf="end"
          width="148px"
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
            인쇄하기
          </Typography>
          <Print
            sx={{
              width: "20px",
              height: "20px",
            }}
          />
        </Box>
      </Stack>
    </div>
  );
});

export default ReceiptPage; // 조건 1-3
