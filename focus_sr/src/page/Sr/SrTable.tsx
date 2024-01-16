import * as React from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Typography,
  Pagination,
  Checkbox,
  Chip,
} from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";

export const SRTable: React.FC<any> = React.forwardRef<any, any>(
  ({ className, onMoveDetail }, ref) => {
    const [page, setPage] = React.useState(0);

    type TStatusColor = {
      [key: string]: {
        color: string;

        backgroundColor: string;
      };
    };

    const statusColor: TStatusColor = {
      High: {
        color: "#E02424",
        backgroundColor: "#FDF2F2",
      },
      Low: {
        color: "#4B5563",
        backgroundColor: "#F3F4F6",
      },
      Normal: {
        color: "#9254DE",
        backgroundColor: "#F9F0FF",
      },
      Critical: {
        color: "#E02424",
        backgroundColor: "#FDF2F2",
      },
      Major: {
        color: "#9254DE",
        backgroundColor: "#F9F0FF",
      },
      Minor: {
        color: "#4B5563",
        backgroundColor: "#F3F4F6",
      },
      등록: {
        color: "#1C64F2",
        backgroundColor: "#3F83F81A",
      },
      종료: {
        color: "#4B5563",
        backgroundColor: "#F3F4F6",
      },
      처리중: {
        color: "#FA541C",
        backgroundColor: "#FFF2E8",
      },

      "처리 완료": {
        color: "#057A55",
        backgroundColor: "#DEF7EC",
      },
      취소: {
        color: "#E02424",
        backgroundColor: "#FDF2F2",
      },
      "N/A": {
        color: "#4B5563",
        backgroundColor: "#F3F4F6 ",
      },
    };

    const headerCellStyle = {
      backgroundColor: "#F3F4F6",
      fontWeight: "600",
      borderBottom: "1px solid #E5E7EB",
      borderTop: "1px solid #E5E7EB",
      color: "#111928",
      fontSize: "14px",
      padding: "16px",
      lineHeight: "20px",
      whiteSpace: "nowrap",
    };

    const cellStyle = {
      whiteSpace: "nowrap",
    };

    const fontStyle = {
      color: "#111928",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "20px",
    };

    const dummyData = [
      {
        priority: "High",
        severity: "Critical",
        productName: "tibero",
        issueType: "기술협업문의",
        title: "안녕하세요 기술협업 관련 문의 드립니다.",
        receiptDate: "23.10.29",
        procedureDate: "24.1.1",
        endDate: "24.1.2",
        status: "종료",
        issueStatus: "처리 완료",
        consumerName: "김보미",
        email: "mimo123@wapl.co.kr",
        name: "김티맥",
      },
      {
        priority: "High",
        severity: "Critical",
        productName: "tibero",
        issueType: "기술협업문의",
        title: "안녕하세요 기술협업 관련 문의 드립니다.",
        receiptDate: "23.10.29",
        procedureDate: "24.1.1",
        endDate: "24.1.2",
        status: "종료",
        issueStatus: "처리 완료",
        consumerName: "김보미",
        email: "mimo123@wapl.co.kr",
        name: "김티맥",
      },
      {
        priority: "Low",
        severity: "Major",
        productName: "tibero",
        issueType: "기술협업문의",
        title: "안녕하세요 기술협업 관련 문의 드립니다.",
        receiptDate: "23.10.29",
        procedureDate: "24.1.1",
        endDate: "24.1.2",
        status: "등록",
        issueStatus: "처리 완료",
        consumerName: "김보미",
        email: "mimo123@wapl.co.kr",
        name: "",
      },
      {
        priority: "Normal",
        severity: "Minor",
        productName: "tibero",
        issueType: "기술협업문의",
        title:
          "안녕하세요 기술협업 관련 문의 드립니다. 안녕하세요 기술협업 관련 문의 드립니다. 안녕하세요 기술협업 관련 문의 드립니다. 안녕하세요 기술협업 관련 문의 드립니다.",
        receiptDate: "23.10.29",
        procedureDate: "24.1.1",
        endDate: "24.1.2",
        status: "등록",
        issueStatus: "처리중",
        consumerName: "김보미",
        email: "mimo123@wapl.co.kr",
        name: "김티맥",
      },
      {
        priority: "Normal",
        severity: "Critical",
        productName: "tibero",
        issueType: "기술협업문의",
        title: "안녕하세요 기술협업 관련 문의 드립니다.",
        receiptDate: "23.10.29",
        procedureDate: "24.1.1",
        endDate: "24.1.2",
        status: "취소",
        issueStatus: "처리중",
        consumerName: "김보미",
        email: "mimo123@wapl.co.kr",
        name: "",
      },
    ];

    const handlePageChange = (
      _event: React.ChangeEvent<unknown>,
      currentPage: number
    ) => {
      setPage(currentPage);
    };

    return (
      <div className={className} ref={ref}>
        <TableContainer
          sx={{
            maxHeight: "616px",
            maxWidth: "100%",
            overflowX: "auto",
            "::-webkit-scrollbar": {
              width: "480px",
            },
            "::-webkit-scrollbar-thumb": {
              height: "5px",
              background: "#D1D5DB",
              borderRadius: "4px",
              borderLeft: "8px solid white",
              borderRight: "8px solid white",
              borderTop: "5px solid white",
              borderBottom: "5px solid white",
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
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>{`우선순위`}</TableCell>
                <TableCell>{`심각도`}</TableCell>
                <TableCell>{`상품명`}</TableCell>
                <TableCell>{`세부문의유형`}</TableCell>
                <TableCell>{`문의제목`}</TableCell>
                <TableCell>{`접수일`}</TableCell>
                <TableCell>{`처리일`}</TableCell>
                <TableCell>{`종료일`}</TableCell>
                <TableCell>{`문의 진행상태`}</TableCell>
                <TableCell>{`이슈 진행상태`}</TableCell>
                <TableCell>{`고객이름`}</TableCell>
                <TableCell>{`고객Email ID`}</TableCell>
                <TableCell>{`담당자`}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ "& .MuiTableCell-root": { ...cellStyle } }}>
              {dummyData &&
                dummyData.map((item, index) => {
                  return (
                    <TableRow key={index} onClick={onMoveDetail}>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell
                        sx={{
                          width: "120px",
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
                                  color: statusColor[item.priority]?.color,
                                },
                              }}
                            />
                          }
                          label={item.priority}
                          sx={{
                            borderRadius: "4px",
                            height: "22px",
                            color: statusColor[item.priority]?.color,
                            backgroundColor:
                              statusColor[item.priority]?.backgroundColor,
                            fontSize: "12px",
                          }}
                        />
                      </TableCell>
                      <TableCell
                        sx={{
                          width: "120px",
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
                                  color: statusColor[item.severity]?.color,
                                },
                              }}
                            />
                          }
                          label={item.severity}
                          sx={{
                            borderRadius: "4px",
                            height: "22px",
                            color: statusColor[item.severity]?.color,
                            backgroundColor:
                              statusColor[item.severity]?.backgroundColor,
                            fontSize: "12px",
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ width: "210px", ...fontStyle }}>
                          {item.productName}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ width: "210px", ...fontStyle }}>
                          {item.issueType}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          sx={{
                            width: "210px",
                            overflowX: "hidden",
                            fontSize: "14px",
                            color: "#1C64F2",
                            fontWeight: "600",
                            lineHeight: "20px",
                          }}
                        >
                          {item.title}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ width: "180px", ...fontStyle }}>
                          {item.receiptDate}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ width: "180px", ...fontStyle }}>
                          {item.procedureDate}
                        </Typography>
                      </TableCell>

                      <TableCell>
                        <Typography sx={{ width: "180px", ...fontStyle }}>
                          {item.endDate}
                        </Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          width: "140px",
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
                      <TableCell
                        sx={{
                          width: "140px",
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
                                  color: statusColor[item.issueStatus]?.color,
                                },
                              }}
                            />
                          }
                          label={item.status}
                          sx={{
                            borderRadius: "4px",
                            height: "22px",
                            color: statusColor[item.issueStatus]?.color,
                            backgroundColor:
                              statusColor[item.issueStatus]?.backgroundColor,
                            fontSize: "12px",
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ width: "120px", ...fontStyle }}>
                          {item.consumerName}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ width: "210px", ...fontStyle }}>
                          {item.email}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ width: "180px", ...fontStyle }}>
                        {item.name ? item.name : "-"}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
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
      </div>
    );
  }
);
