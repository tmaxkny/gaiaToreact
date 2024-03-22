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
} from "@mui/material";
import Home from "@mui/icons-material/Home";
import Receipt from "@mui/icons-material/Receipt";

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

    const data = [
      {
        productInfo: {
          productName: "상품1",
          usedDate: "2024.03.15 ~ 2024.05.15",
        },
        paymentInfo: {
          paymentId: 1,
          totalCost: 10000,
          paymentAt: "2023-12-31",
          refund: true,
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
          refund: true,
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
          refund: true,
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
            height="102px"
            padding="32px"
            direction="row"
            justifyContent="space-between"
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
                          {body.paymentInfo.refund && (
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
            {/* <Pagination
                        sx={{
                            '& .css-10w330c-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected': {
                                backgroundColor: '#EBF5FF',
                                color: '#1C64F2',
                            },
                        }}
                        count={data.length}
                        shape="rounded"
                        page={pageRequest.page}
                        onChange={handlePagination}
                    /> */}
          </Stack>

          <Dialog
            open={openDialog}
            sx={{
              "& .MuiDialog-paper": {
                width: "512px",
                height: "484px",
                bgcolor: "#FFFFFF",
              },
            }}
          >
            <DialogTitle display="flex" sx={{ padding: "0px" }}>
              <Stack height="88px" sx={{ padding: "32px 24px 32px 24px" }}>
                <Typography
                  fontWeight={600}
                  fontSize="18px"
                  color="#202124"
                  marginTop="30px"
                >
                  처리 완료
                </Typography>
              </Stack>
            </DialogTitle>

            <DialogActions
              sx={{
                flex: 1,
                padding: "0px 20px 20px 20px",
                height: "56px",
                boxSizing: "border-box",
              }}
            >
              <Button
                sx={{
                  width: "154px",
                  height: "36px",
                  bgcolor: "#F9FAFB",
                  borderRadius: "6px",
                  boxShadow: "0 0 0 1px #D1D5DB inset",
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#374151",
                }}
                onClick={() => {
                  setOpenDialog(false);
                }}
              >
                취소
              </Button>
              <Button
                sx={{
                  width: "154px",
                  height: "36px",
                  bgcolor: "#1C64F2",
                  borderRadius: "6px",
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#FFFFFF",
                }}
                onClick={() => {
                  setOpenDialog(false);
                }}
              >
                확인
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
                  처리 완료
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
