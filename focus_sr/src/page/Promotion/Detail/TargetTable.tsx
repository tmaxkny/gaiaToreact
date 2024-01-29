import { FiberManualRecord } from "@mui/icons-material";
import {
  Box,
  Chip,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const TargetTable: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children }, ref) => {
    const pageType = "ONSITE";

    const dummyData = [
      {
        id: 1,
        category: "리드",
        name: "김티맥",
        company: "티맥스커머스",
        email: "1232@gmail.com",
        position: "주임",
        status: "전송 완료",
      },
      {
        id: 2,
        category: "연락처",
        name: "김티맥",
        company: "티맥스커머스",
        email: "1232@gmail.com",
        position: "주임",
        status: "전송 완료",
      },
      {
        id: 3,
        category: "리드",
        name: "김티맥",
        company: "티맥스커머스",
        email: "1232@gmail.com",
        position: "주임",
        status: "전송 불가",
      },
      {
        id: 4,
        category: "연락처",
        name: "김티맥",
        company: "티맥스커머스",
        email: "1232@gmail.com",
        position: "주임",
        status: "전송 불가",
      },
      {
        id: 5,
        category: "리드",
        name: "김커머스",
        company: "티맥스커머스",
        email: "1232@gmail.com",
        position: "주임",
        status: "전송 완료",
      },
      {
        id: 6,
        category: "연락처",
        name: "김티맥",
        company: "티맥스커머스",
        email: "1232@gmail.com",
        position: "주임",
        status: "전송 완료",
      },
      {
        id: 7,
        category: "리드",
        name: "김커머스",
        company: "티맥스커머스",
        email: "1232@gmail.com",
        position: "주임",
        status: "전송 완료",
      },
      {
        id: 8,
        category: "리드",
        name: "김커머스",
        company: "티맥스커머스",
        email: "1232@gmail.com",
        position: "주임",
        status: "전송 완료",
      },
      {
        id: 9,
        category: "리드",
        name: "김티맥",
        company: "티맥스커머스",
        email: "1232@gmail.com",
        position: "주임",
        status: "전송 불가",
      },
      {
        id: 10,
        category: "연락처",
        name: "김티맥",
        company: "티맥스커머스",
        email: "1232@gmail.com",
        position: "주임",
        status: "전송 불가",
      },
      {
        id: 11,
        category: "리드",
        name: "김티맥",
        company: "티맥스커머스",
        email: "1232@gmail.com",
        position: "주임",
        status: "전송 완료",
      },
      {
        id: 12,
        category: "리드",
        name: "김커머스",
        company: "티맥스커머스",
        email: "1232@gmail.com",
        position: "주임",
        status: "전송 불가",
      },
    ];

    type TStatusColor = {
      [key: string]: {
        color: string;
        backgroundColor: string;
      };
    };

    const statusColor: TStatusColor = {
      "전송 완료": {
        color: "#057A55",
        backgroundColor: "#DEF7EC",
      },
      "전송 불가": {
        color: "#E02424",
        backgroundColor: "#FDF2F2",
      },
    };

    const headerCellStyle = {
      backgroundColor: "#F3F4F6",
      fontWeight: "600",
      color: "#111928",
      fontSize: "14px",
      lineHeight: "20px",
      padding: "16px",
      boxSizing: "border-box",
    };

    const bodyCellStyle = {
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "20px",
      color: "#111928",
      padding: "16px",
      boxSizing: "border-box",
    };

    return (
      <Stack sx={{ gap: "8px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "12px 0px",
          }}
        >
          <Typography
            sx={{
              height: "24px",
              fontSize: "18px",
              fontWeight: "600",
              lineHeight: "24px",
              color: "#4B5563",
            }}
          >
            타깃 목록
          </Typography>
          <Typography
            sx={{
              height: "24px",
              fontSize: "16px",
              fontWeight: "600",
              marginLeft: "20px",
              lineHeight: "26px",
              color: "#1C64F2 ",
            }}
          >
            {dummyData && pageType !== "BEFORE" ? dummyData.length : 0}
          </Typography>
          <Typography
            sx={{
              height: "24px",
              fontSize: "16px",
              fontWeight: "400",
              marginLeft: "4px",
              lineHeight: "26px",
              color: "#4B5563",
            }}
          >
            개
          </Typography>
        </Box>

        <Stack
          sx={{
            flex: 1,
            border: "1px solid #E5E7EB",
          }}
        >
          <TableContainer
            sx={{
              maxHeight: "336px",
              overflowY: "auto",
              "::-webkit-scrollbar": {
                width: "16px",
              },
              "::-webkit-scrollbar-thumb": {
                height: "68px",
                background: "#D1D5DB",
                borderRadius: "4px",
                borderLeft: "5px solid white",
                borderRight: "5px solid white",
                borderTop: "8px solid white",
                borderBottom: "8px solid white",
              },
            }}
          >
            <Table stickyHeader>
              <TableHead sx={{ height: "56px" }}>
                <TableRow
                  sx={{
                    "& .MuiTableCell-root": {
                      ...headerCellStyle,
                    },
                  }}
                >
                  <TableCell sx={{ width: "192px" }}>유형</TableCell>
                  <TableCell sx={{ width: "192px" }}>이름</TableCell>
                  <TableCell sx={{ width: "410px" }}>회사</TableCell>
                  <TableCell sx={{ width: "410px" }}>이메일</TableCell>
                  <TableCell sx={{ width: "192px" }}>직급</TableCell>
                  <TableCell sx={{ width: "192px" }}>상태</TableCell>
                </TableRow>
              </TableHead>
              {(pageType as string) !== "BEFORE" && (
                <TableBody>
                  {dummyData &&
                    dummyData.map((item, idx) => {
                      return (
                        <TableRow
                          key={idx}
                          sx={{
                            height: "56px",
                            "& .MuiTableCell-root": { ...bodyCellStyle },
                          }}
                        >
                          <TableCell sx={{ width: "192px" }}>
                            {item.category}
                          </TableCell>
                          <TableCell sx={{ width: "192px" }}>
                            {item.name}
                          </TableCell>
                          <TableCell sx={{ width: "410px" }}>
                            {item.company}
                          </TableCell>
                          <TableCell sx={{ width: "410px" }}>
                            {item.email}
                          </TableCell>
                          <TableCell sx={{ width: "192px" }}>
                            {item.position}
                          </TableCell>
                          <TableCell
                            sx={{
                              width: "192px",
                              "& .MuiChip-root": {
                                verticalAlign: "baseline",
                              },
                            }}
                          >
                            <Chip
                              icon={
                                <FiberManualRecord
                                  sx={{
                                    width: "8px",
                                    "&.MuiChip-icon": {
                                      color: statusColor[item.status]?.color,
                                    },
                                  }}
                                />
                              }
                              label={item.status}
                              sx={{
                                borderRadius: "4px",
                                height: "22px",
                                color: statusColor[item.status]?.color,
                                backgroundColor:
                                  statusColor[item.status]?.backgroundColor,
                                fontSize: "12px",
                              }}
                            />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              )}
            </Table>
          </TableContainer>
          {(pageType as string) === "BEFORE" && (
            <Box
              sx={{
                display: "flex",
                width: "100%",
                height: "280px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#111928",
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: "500",
                  lineHeight: "24px",
                }}
              >
                타겟이 존재하지 않습니다.
              </Typography>
            </Box>
          )}
        </Stack>
      </Stack>
    );
  }
);

export default TargetTable;
