import React from "react";

import {
  Divider,
  Link,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Breadcrumbs,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Pagination,
  Box,
} from "@mui/material";
import Home from "@mui/icons-material/Home";
import Receipt from "@mui/icons-material/Receipt";
import ClearIcon from "@mui/icons-material/Clear";

import NavigateNext from "@mui/icons-material/NavigateNext";
const EventInfos: EventObject[] = [
  {
    Name: "moveToReceipt",
    Type: "void",
  },
  {
    Name: "moveToDetail",
    Type: "void",
  },
];
interface Props {
  // 조건 2-1, 조건 2-2
  className: string | undefined; // 조건 2-3
  propertyName: string;
}

export const PaymentList = React.forwardRef<any, Props>(
  ({ className, moveToReceipt, moveToDetail }, ref) => {
    const TABLE_HEADER_DATA: string[] = [
      "결제번호",
      "상품명",
      "사용기간",
      "결제금액",
      "결제일",
    ];

    const [selectFilter, SetSelectFilter] = React.useState("");
    const [selectValue, SetSelectValue] = React.useState("");
    const [openDialog, setOpenDialog] = React.useState(false);
    const [openDialog2, setOpenDialog2] = React.useState(false);
    const [dialogId, setDialogId] = React.useState(0);
    const [page, setPage] = React.useState(0);

    type paymentType = {
      productInfo: {
        productName: string;
        usedDate: string;
      };
      paymentInfo: {
        paymentId: number;
        totalCost: number;
        paymentAt: string;
      };
      refundInfo: {
        productName: string;
        usedDate: string;
        planName: string;
        planType: string;
      } | null;
    };
    const data: paymentType[] = [
      {
        productInfo: {
          productName: "상품1",
          usedDate: "2024.03.15 ~ 2024.05.15",
        },
        paymentInfo: {
          paymentId: 1,
          totalCost: 10000,
          paymentAt: "2023-12-31",
        },
        refundInfo: null,
      },
      {
        productInfo: {
          productName: "상품1",
          usedDate: "2024.03.15 ~ 2024.05.15",
        },
        paymentInfo: {
          paymentId: 1,
          totalCost: 10000,
          paymentAt: "2023-12-31",
        },
        refundInfo: {
          productName: "상품1",
          usedDate: "2024.03.15 ~ 2024.05.15",
          planName: "Standard",
          planType: "prepayment",
        },
      },
      {
        productInfo: {
          productName: "상품1",
          usedDate: "2024.03.15 ~ 2024.05.15",
        },
        paymentInfo: {
          paymentId: 1,
          totalCost: 10000,
          paymentAt: "2023-12-31",
        },
        refundInfo: {
          productName: "상품1",
          usedDate: "2024.03.15 ~ 2024.05.15",
          planName: "Standard",
          planType: "postpayment",
        },
      },
      {
        productInfo: {
          productName: "상품1",
          usedDate: "2024.03.15 ~ 2024.05.15",
        },
        paymentInfo: {
          paymentId: 1,
          totalCost: 10000,
          paymentAt: "2023-12-31",
        },
        refundInfo: null,
      },
      {
        productInfo: {
          productName: "상품1",
          usedDate: "2024.03.15 ~ 2024.05.15",
        },
        paymentInfo: {
          paymentId: 1,
          totalCost: 10000,
          paymentAt: "2023-12-31",
        },
        refundInfo: {
          productName: "상품1",
          usedDate: "2024.03.15 ~ 2024.05.15",
          planName: "Standard",
          planType: "prepayment",
        },
      },
      {
        productInfo: {
          productName: "상품1",
          usedDate: "2024.03.15 ~ 2024.05.15",
        },
        paymentInfo: {
          paymentId: 1,
          totalCost: 10000,
          paymentAt: "2023-12-31",
        },
        refundInfo: {
          productName: "상품1",
          usedDate: "2024.03.15 ~ 2024.05.15",
          planName: "Standard",
          planType: "postpayment",
        },
      },
    ];

    const SELECT_DATA = {
      결제금액: [
        "~1백만원",
        "1백만원 ~ 5백만원",
        "5백만원 ~ 1천만원",
        "1천만원 ~ 5천만원",
        "5천만원 초과",
      ],
      결제일: ["최근 순", "오래된 순"],
    };

    const dialogFontStyle = {
      color: "#111928",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "26px",
    };

    const dialogBoxStyle = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      height: "26px",
    };

    const handlePageChange = (
      _event: React.ChangeEvent<unknown>,
      currentPage: number
    ) => {
      setPage(currentPage);
    };

    const handleDialogContent = (
      data: paymentType,
      planType: string | undefined
    ) => {
      if (planType === "prepayment")
        return `고객님의 ${data.productInfo.productName} 구독 취소 시 환불 받을 수 있는 금액은 ${data.paymentInfo.totalCost}원 입니다. 계속 진행 시, 환불 절차가 진행되며 더 이상 해당 상품 이용이 불가합니다. 내용에 동의하고 계속 진행하시겠습니까?`;
      if (planType === "postpayment")
        return `현재까지 ${data.productInfo.productName} 사용에 따른 사용금액은 ${data.paymentInfo.totalCost}원 입니다. 사용금액 정산 후 구독취소가 정상적으로 진행됩니다. 내용에 동의하고 계속 진행하시겠습니까?`;
    };

    const breadcrumbs = [
      <Link underline="hover" key="1" color="inherit" href="/">
        <Home />
      </Link>,
      <Link
        underline="hover"
        key="2"
        color="inherit"
        href="/material-ui/getting-started/installation/"
      >
        결제관리
      </Link>,
      <Typography key="3" color="text.primary">
        결제내역
      </Typography>,
    ];

    return (
      <div
        className={className}
        ref={ref}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Stack>
          <Stack
            height="80px"
            padding="24px 32px"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            borderBottom="1px solid #E5E7EB"
            boxSizing="border-box"
          >
            <Typography
              sx={{
                fontFamily: "Pretendard",
                fontSize: "28px",
                fontWeight: "700",
                lineGeight: "38px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              결제내역
            </Typography>
            <Breadcrumbs
              separator={<NavigateNext fontSize="small" />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
          <Stack
            direction="row"
            sx={{
              mt: "32px",
              ml: "auto",
              mb: "24px",
              minWidth: "302px",
              height: "44px",
              justifyContent: "space-between",
            }}
          >
            <Select
              value={selectFilter}
              sx={{ width: "116px" }}
              onChange={(e) => {
                SetSelectFilter(e.target.value);
              }}
            >
              {Object.keys(SELECT_DATA).map((option, idx) => (
                <MenuItem key={idx} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
            {selectFilter === "결제금액" && (
              <Select
                onChange={(e) => SetSelectValue(e.target.value)}
                value={selectValue}
                sx={{ minWidth: "162px" }}
              >
                {SELECT_DATA[selectFilter].map((option, idx) => (
                  <MenuItem key={idx} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            )}
            {selectFilter === "결제일" && (
              <Select
                onChange={(e) => SetSelectValue(e.target.value)}
                value={selectValue}
                sx={{ minWidth: "162px" }}
              >
                {SELECT_DATA[selectFilter].map((option, idx) => (
                  <MenuItem key={idx} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            )}
          </Stack>
          <TableContainer
            sx={{
              borderTop: "1px solid rgba(0, 0, 0, 0.06)",
            }}
          >
            <Table stickyHeader>
              <TableHead>
                <TableRow sx={{ height: "56px" }}>
                  {TABLE_HEADER_DATA.map((header, idx) => (
                    <TableCell
                      key={idx}
                      sx={{ fontWeight: "600", bgcolor: "#F9FAFB", p: 0 }}
                    >
                      <Stack direction={"row"} sx={{ alignItems: "center" }}>
                        {idx != 0 && (
                          <Divider
                            sx={{
                              height: "22px",
                              border: "1px solid rgba(0, 0, 0, 0.06)",
                            }}
                          />
                        )}
                        <Typography
                          sx={{
                            p: "16px",
                            fontSize: "14px",
                            fontWeight: "600",
                            width: "100%",
                          }}
                        >
                          {header}
                        </Typography>
                      </Stack>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data &&
                  data.map((body, idx) => (
                    <TableRow
                      onClick={moveToDetail}
                      key={idx}
                      sx={{
                        height: "56px",
                        "& .MuiTableCell-root": {
                          minWidth: "328px",
                          color: "#111928",
                          fontSize: "#111928",
                          fontWeight: "400",
                        },
                      }}
                    >
                      <TableCell>
                        <Typography
                          onClick={moveToDetail}
                          sx={{
                            "&:hover": {
                              cursor: "hover",
                              color: "#1C64F2",
                            },
                            textDecoration: "none",
                            color: "black",
                          }}
                        >
                          {body.paymentInfo.paymentId}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          sx={{
                            color: "#1C64F2",
                            fontWeight: "400",
                            fontSize: "14px",
                            lineHeight: "20px",
                          }}
                        >
                          {body.productInfo.productName}
                        </Typography>
                      </TableCell>
                      <TableCell>{body.paymentInfo.paymentAt}</TableCell>
                      <TableCell>
                        ₩{body.paymentInfo.totalCost.toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <Stack
                          direction={"row"}
                          sx={{
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          {body.paymentInfo.paymentAt}{" "}
                          <Button
                            onClick={moveToReceipt}
                            sx={{
                              height: "26px",
                              width: "64px",
                              padding: "4px, 6px, 4px, 6px",
                              alignItems: "center",
                              backgroundColor: "#F3F4F6",
                              borderRadius: "4px",
                              gap: "4px",
                            }}
                          >
                            <Receipt
                              sx={{
                                width: "13px",
                                height: "11px",
                                color: "#6B7280",
                              }}
                            />
                            <Typography
                              sx={{
                                fontWeight: "600",
                                fontSize: "12px",
                                textDecoration: "none",
                                color: "#374151",
                                whiteSpace: "nowrap",
                              }}
                            >
                              영수증
                            </Typography>
                          </Button>
                          {body.refundInfo && (
                            <Button
                              onClick={() => {
                                setOpenDialog(true);
                                setDialogId(idx);
                              }}
                              sx={{
                                height: "26px",
                                width: "64px",
                                alignItems: "center",
                                backgroundColor: "#FFFFFF",
                                borderRadius: "4px",
                                border: "1px solid #E5E7EB",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontSize: "12px",
                                  color: "#374151",
                                  fontWeight: "600",
                                  lineHeight: "18px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                취소/환불
                              </Typography>
                            </Button>
                          )}
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Stack
            sx={{
              width: "100%",
              height: "82px",
              mt: "auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pagination
              count={10}
              page={page}
              onChange={handlePageChange}
              sx={{
                width: "100%",
                height: "82px",
                display: "flex",
                justifyContent: "center",
                "& .MuiPaginationItem-icon": {
                  width: "20px",
                  height: "20px",
                },
                "& .MuiPaginationItem-root": {
                  m: "0px 6px",
                  color: "#4B5563",
                  "&.Mui-disabled": { color: "#111928" },
                },
                "& .MuiPaginationItem-page": {
                  borderRadius: "4px",
                  fontWeight: "400",
                  fontSize: "14px",
                  color: "var(--gray-900, #111928)",
                  "&.Mui-selected": {
                    bgcolor:
                      "var(--interaction-selected, rgba(63, 131, 248, 0.10))",
                    color: "#1C64F2",
                    ":hover": { bgcolor: "#EBF5FF" },
                  },
                },
              }}
            />
          </Stack>

          <Dialog
            open={openDialog}
            sx={{
              "& .MuiDialog-paper": {
                width: "512px",
                bgcolor: "#FFFFFF",
              },
            }}
          >
            <DialogTitle sx={{ padding: "0px" }}>
              <Stack
                flexDirection="row"
                height="88px"
                sx={{
                  flex: 1,
                  padding: "32px 24px 32px 24px",
                  boxSizing: "border-box",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: "18px",
                    color: "#202124",
                    height: "24px",
                  }}
                >
                  구독 취소 확인
                </Typography>
                <ClearIcon
                  onClick={() => {
                    setOpenDialog(false);
                  }}
                  sx={{ width: "24px", height: "24px" }}
                />
              </Stack>
            </DialogTitle>
            <DialogContent sx={{ padding: "0px" }}>
              <Stack
                sx={{
                  height: "294px",
                  padding: "0px 24px 0px 24px",
                  gap: "24px",
                  boxSizing: "border-box",
                }}
              >
                <Stack
                  sx={{
                    height: "192px",
                    backgroundColor: "#F9FAFB",
                    border: "1px solid #E5E7EB",
                    padding: "20px 16px 20px 16px",
                    boxSizing: "border-box",
                    gap: "16px",
                  }}
                >
                  <Box
                    sx={{
                      ...dialogBoxStyle,
                    }}
                  >
                    <Typography sx={{ ...dialogFontStyle }}>상품명</Typography>
                    <Typography sx={{ ...dialogFontStyle }}>
                      {data[dialogId].productInfo.productName}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      ...dialogBoxStyle,
                    }}
                  >
                    <Typography sx={{ ...dialogFontStyle }}>
                      사용기간
                    </Typography>
                    <Typography sx={{ ...dialogFontStyle }}>
                      {data[dialogId].refundInfo?.usedDate}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      ...dialogBoxStyle,
                    }}
                  >
                    <Typography sx={{ ...dialogFontStyle }}>
                      요금제명
                    </Typography>
                    <Typography sx={{ ...dialogFontStyle }}>
                      {data[dialogId].refundInfo?.planName}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      ...dialogBoxStyle,
                    }}
                  >
                    <Typography sx={{ ...dialogFontStyle }}>
                      요금제 유형
                    </Typography>
                    <Typography sx={{ ...dialogFontStyle }}>
                      {data[dialogId].refundInfo?.planName}
                    </Typography>
                  </Box>
                </Stack>
                <Typography
                  sx={{
                    color: "#1F2A37",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "26px",
                  }}
                >
                  {data[dialogId].refundInfo &&
                    handleDialogContent(
                      data[dialogId],
                      data[dialogId].refundInfo?.planType
                    )}
                </Typography>
              </Stack>
            </DialogContent>

            <DialogActions
              sx={{
                flex: 1,
                height: "102px",
                padding: "32px 24px 32px 24px",
                boxSizing: "border-box",
                justifyContent: "center",
              }}
            >
              <Button
                sx={{
                  width: "464px",
                  height: "38px",
                  bgcolor: "#3F83F8",
                  borderRadius: "6px",
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#FFFFFF",
                  padding: "10px 76px 10px 76px",
                  boxSizing: "border-box",
                }}
                onClick={() => {
                  setOpenDialog2(true);
                }}
              >
                계속 진행
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={openDialog2}
            sx={{
              "& .MuiDialog-paper": {
                width: "500px",
                height: "216px",
                bgcolor: "#FFFFFF",
              },
            }}
          >
            <DialogTitle sx={{ padding: "0px" }}>
              <Stack
                flex="1"
                height="88px"
                justifyContent="center"
                alignItems="center"
                sx={{
                  padding: "32px, 24px, 32px, 24px",
                  boxSizing: "border-box",
                }}
              >
                <Typography fontWeight={600} fontSize="18px" color="#111928">
                  {`${data[dialogId].productInfo.productName}을 이용해주셔서 감사합니다.`}
                </Typography>
              </Stack>
            </DialogTitle>
            <DialogContent sx={{ padding: "0px" }}>
              <Stack sx={{ alignItems: "center" }}>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "26px",
                  }}
                >
                  {data[dialogId].refundInfo &&
                  data[dialogId].refundInfo?.planType === "postpayment"
                    ? "후불 결제 처리가 완료되었습니다."
                    : "환불 처리가 완료되었습니다."}
                </Typography>
              </Stack>
            </DialogContent>

            <DialogActions
              sx={{
                flex: 1,
                padding: "32px 24px 32px 24px",
                boxSizing: "border-box",
                justifyContent: "center",
              }}
            >
              <Button
                sx={{
                  width: "452px",
                  height: "38px",
                  bgcolor: "#1C64F2",
                  borderRadius: "6px",
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#FFFFFF",
                }}
                onClick={() => {
                  setOpenDialog(false);
                  setOpenDialog2(false);
                }}
              >
                닫기
              </Button>
            </DialogActions>
          </Dialog>
        </Stack>
      </div>
    );
  }
);

export default PaymentList; // 조건 1-3
