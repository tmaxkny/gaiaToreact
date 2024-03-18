import * as React from "react";
import {
  Stack,
  Typography,
  Box,
  Select,
  TextField,
  Button,
  Divider,
  MenuItem,
  TableContainer,
  Table,
  Pagination,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const PromotionDashTable: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children, moveToDetail }, ref) => {
    const [pageSize, setPageSize] = React.useState("10");
    const [page, setPage] = React.useState(0);
    const [query, setQuery] = React.useState("");

    const COLUMNS = [
      { columnName: "promotionName", label: "프로모션 이름" },
      { columnName: "media", label: "매체" },
      { columnName: "promotionNum", label: "전송된 프로모션 수" },
      { columnName: "clickRate", label: "클릭률" },
      { columnName: "conversionRate", label: "전환률" },
      { columnName: "conversionPrice", label: "전환 금액" },
    ];

    const dummyData = [
      {
        promotionId: 1,
        name: "1",
        media: "WAPL",
        sendCnt: 123,
        clickRate: 100,
        conversionRate: 60,
        conversionPrice: 1500000,
      },
      {
        promotionId: 2,
        name: "2",
        media: "WAPL",
        sendCnt: 123,
        clickRate: 100,
        conversionRate: 60,
        conversionPrice: 1500000,
      },
      {
        promotionId: 3,
        name: "3",
        media: "WAPL",
        sendCnt: 123,
        clickRate: 100,
        conversionRate: 60,
        conversionPrice: 1500000,
      },
    ];

    const headerCellStyle = {
      backgroundColor: "#F3F4F6",
      fontWeight: "600",
      boxSizing: "border-box",
      color: "#111928",
      fontSize: "14px",
      lineHeight: "20px",
    };

    const cellStyle = {
      fontWeight: "400",
      boxSizing: "border-box",
      color: "#111928",
      fontSize: "14px",
      lineHeight: "20px",
    };

    const handlePageChange = (
      _event: React.ChangeEvent<unknown>,
      currentPage: number
    ) => {
      setPage(currentPage);
    };

    return (
      <div className={className} ref={ref}>
        {children}

        <Stack sx={{ padding: "24px 32px", gap: "4px" }}>
          <Stack
            direction="row"
            sx={{
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Stack
              direction="row"
              sx={{ gap: "20px", height: "62px", alignItems: "center" }}
            >
              <Typography
                sx={{
                  verticalAlign: "middle",
                  color: "#4B5563",
                  fontSize: "18px",
                  fontWeight: 600,
                  lineHeight: "24px",
                }}
              >
                매체별 성과목록
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", gap: "4px" }}>
                <Typography
                  sx={{
                    color: "#1C64F2",
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "26px",
                  }}
                >
                  {0}
                </Typography>
                <Typography
                  sx={{
                    color: "#4B5563",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "26px",
                  }}
                >
                  개
                </Typography>
              </Box>
            </Stack>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TextField
                placeholder="프로모션 명으로 검색"
                value={query}
                onChange={(e) => {
                  const newQuery = e.target.value as string;
                  setQuery(newQuery);
                }}
                InputProps={{
                  endAdornment: <SearchIcon sx={{ color: "#9CA3AF" }} />,
                  sx: {
                    width: "268px",
                    height: "38px",
                    "& fieldset": {
                      padding: "0px 8px 0px 12px",
                      border: "1px solid var(--gray-200, #E5E7EB)",
                      borderRadius: "6px",
                    },
                  },
                }}
              />

              <Divider
                orientation="vertical"
                variant="middle"
                sx={{
                  height: "18px",
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
              />
              <Select
                value={pageSize}
                onChange={(e) => {
                  const value = e.target.value as string;
                  setPageSize(value);
                }}
                sx={{
                  height: "38px",
                  color: "#111928",
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "20px",
                }}
              >
                <MenuItem value="10">10개씩 보기</MenuItem>
                <MenuItem value="20">20개씩 보기</MenuItem>
              </Select>
            </Box>
          </Stack>
          <TableContainer>
            <Table stickyHeader>
              <TableHead sx={{ height: "56px" }}>
                <TableRow
                  sx={{
                    "& .MuiTableCell-root": {
                      ...headerCellStyle,
                    },
                  }}
                >
                  {COLUMNS.map((item) => {
                    return <TableCell>{item.label}</TableCell>;
                  })}
                </TableRow>
              </TableHead>
              <TableBody sx={{ "& .MuiTableCell-root": { ...cellStyle } }}>
                {dummyData &&
                  dummyData.map((item) => {
                    return (
                      <TableRow key={item.promotionId} onClick={moveToDetail}>
                        <TableCell>
                          <Typography sx={{ color: "#1C64F2" }}>
                            {item.name}
                          </Typography>
                        </TableCell>
                        <TableCell>{item.media}</TableCell>
                        <TableCell>{item.sendCnt}</TableCell>
                        <TableCell>{item.clickRate}</TableCell>
                        <TableCell>{item.conversionRate}</TableCell>
                        <TableCell>{item.conversionPrice}</TableCell>
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
        </Stack>
      </div>
    );
  }
);

export default PromotionDashTable;
