import {
  Box,
  Button,
  Checkbox,
  Chip,
  Divider,
  IconButton,
  MenuItem,
  Pagination,
  Popover,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FiberManualRecord } from "@mui/icons-material";

const PromotionTable: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children, moveToDetail }, ref) => {
    const [perPage, setPerPage] = React.useState("10");
    const [page, setPage] = React.useState(0);
    const [query, setQuery] = React.useState("");
    const [checkboxs, setCheckboxs] = React.useState<number[]>([]);
    const [checkboxAll, setCheckboxAll] = React.useState(false);
    const [deleteButtonAble, setDeleteButtonAble] = React.useState(true);

    const [anchorElement, setAnchorElement] =
      React.useState<HTMLElement | null>(null);
    const isOpened = Boolean(anchorElement);
    const [anchorElement2, setAnchorElement2] =
      React.useState<HTMLElement | null>(null);
    const isOpened2 = Boolean(anchorElement2);

    type TStatusColor = {
      [key: string]: {
        color: string;

        backgroundColor: string;
      };
    };

    const statusColor: TStatusColor = {
      예약됨: {
        color: "#DA7D2E",
        backgroundColor: "#FFF9DF",
      },
      전송됨: {
        color: "#1C64F2",
        backgroundColor: "#3F83F81A",
      },
      임시저장: {
        color: "#4B5563",
        backgroundColor: "#F3F4F6",
      },
    };

    const headerCellStyle = {
      backgroundColor: "#F3F4F6",
      fontWeight: "600",
      boxSizing: "border-box",
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

    const popOverStyle = {
      width: "180px",
      padding: "5px 12px",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "26px",
      verticalAlign: "middle",
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.04)",
      },
    };

    const dateButtonStyle = {
      minWidth: "74px",
      padding: "10px 18px",
      border: "1px solid #E5E7EB",
      color: "#9CA3AF",
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: "26px",
      borderRadius: "6px",
    };

    const dummyData = [
      {
        promotionName: "202310101805",
        media: "Email ",
        status: "예약됨",
        registerDate: "23.10.29",
        transmitDate: "23.10.29",
        target: "방문횟수 외 3개",
      },
      {
        promotionName: "202310101806",
        media: "Email ",
        status: "예약됨",
        registerDate: "23.10.29",
        transmitDate: "23.10.29",
        target: "방문횟수 외 3개",
      },
      {
        promotionName: "202310101807",
        media: "Email ",
        status: "전송됨",
        registerDate: "23.10.29",
        transmitDate: "23.10.29",
        target: "방문횟수 외 3개",
      },
      {
        promotionName: "202310101808",
        media: "Email ",
        status: "임시저장",
        registerDate: "23.10.29",
        transmitDate: "23.10.29",
        target: "방문횟수 외 3개",
      },
      {
        promotionName: "202310101807",
        media: "Email ",
        status: "전송됨",
        registerDate: "23.10.29",
        transmitDate: "23.10.29",
        target: "방문횟수 외 3개",
      },
    ];

    const tableLength = dummyData.length;

    const handlePageChange = (
      _event: React.ChangeEvent<unknown>,
      currentPage: number
    ) => {
      setPage(currentPage);
    };

    const handleCheckbox = (idx: number) => {
      if (checkboxs.some((item) => item === idx)) {
        const newCheckboxs = checkboxs.filter((item) => item !== idx);
        setCheckboxs(newCheckboxs);
      } else {
        const newCheckboxs = [...checkboxs, idx];
        setCheckboxs(newCheckboxs);
      }
    };

    const handleCheckboxAll = () => {
      if (checkboxAll) setCheckboxs([]);
      else setCheckboxs([...Array(tableLength).keys()]);
      setCheckboxAll(!checkboxAll);
    };

    React.useEffect(() => {
      if (checkboxs.length > 0) setDeleteButtonAble(false);
      else setDeleteButtonAble(true);
    }, [checkboxs]);

    return (
      <div className={className} ref={ref}>
        <Stack gap="20px">
          {/*전송기간 조회 */}
          <Stack sx={{ padding: "0px 32px", gap: "8px" }}>
            <Stack
              sx={{
                height: "62px",
                justifyContent: "center",
              }}
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
                전송 기간 조회
              </Typography>
            </Stack>
            <Stack direction="row" sx={{ gap: "24px" }}>
              {children}
              <Stack direction="row" sx={{ gap: "16px" }}>
                <Button
                  sx={{
                    ...dateButtonStyle,
                  }}
                >
                  {`오늘`}
                </Button>
                <Button
                  sx={{
                    ...dateButtonStyle,
                  }}
                >
                  {`일주일`}
                </Button>
                <Button
                  sx={{
                    ...dateButtonStyle,
                  }}
                >
                  {`1개월`}
                </Button>
                <Button
                  sx={{
                    ...dateButtonStyle,
                  }}
                >
                  {`3개월`}
                </Button>
                <Button
                  sx={{
                    ...dateButtonStyle,
                  }}
                >
                  {`6개월`}
                </Button>
                <Button
                  sx={{
                    ...dateButtonStyle,
                  }}
                >
                  {`1년`}
                </Button>
                <Button
                  sx={{
                    padding: "10px 18px",
                    alignItem: "center",
                    borderRadius: "6px",
                    background: "#1C64F2",
                    color: "white",
                  }}
                >
                  {`조회하기`}
                </Button>
              </Stack>
            </Stack>
          </Stack>
          {/*프로모션 목록 */}
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
                  프로모션 목록
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
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "12px",
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
                  <Button
                    disabled={deleteButtonAble}
                    startIcon={
                      <DeleteOutlinedIcon
                        sx={{ width: "16px", height: "16px", color: "#9CA3AF" }}
                      />
                    }
                    sx={{
                      color: "#9CA3AF",
                      padding: "9px 16px",
                      borderRadius: "6px",
                      border: "1px solid #E5E7EB",
                      background: "#F9FAFB",
                      fontWeight: "600",
                      fontSize: "14px",
                      lineHeight: "20px",
                    }}
                  >
                    삭제
                  </Button>
                </Box>
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
                  value={perPage}
                  onChange={(e) => {
                    const value = e.target.value as string;
                    setPerPage(value);
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
                    <TableCell sx={{ width: "32px" }}>
                      <Checkbox
                        checked={checkboxs.length === tableLength}
                        onClick={() => {
                          handleCheckboxAll();
                        }}
                      />
                    </TableCell>
                    <TableCell
                      sx={{ width: "201px" }}
                    >{`프로모션 이름`}</TableCell>
                    <TableCell sx={{ width: "201px" }}>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        {`매체`}
                        <IconButton
                          onClick={(event) => {
                            setAnchorElement(event.currentTarget);
                          }}
                          sx={{ width: "20px", color: "#9CA3AF" }}
                        >
                          <KeyboardArrowDownIcon />
                        </IconButton>
                        <Popover
                          open={isOpened}
                          anchorEl={anchorElement}
                          onClose={() => {
                            setAnchorElement(null);
                          }}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                          }}
                        >
                          <Stack
                            sx={{
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Checkbox />
                              <Typography
                                sx={{
                                  ...popOverStyle,
                                }}
                                onClick={() => {
                                  setAnchorElement(null);
                                }}
                              >
                                {`Email`}
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Checkbox />
                              <Typography
                                sx={{
                                  ...popOverStyle,
                                }}
                                onClick={() => {
                                  setAnchorElement(null);
                                }}
                              >
                                {`WAPL`}
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Checkbox />
                              <Typography
                                sx={{
                                  ...popOverStyle,
                                }}
                                onClick={() => {
                                  setAnchorElement(null);
                                }}
                              >
                                {`On-site`}
                              </Typography>
                            </Box>
                          </Stack>
                        </Popover>
                      </Stack>
                    </TableCell>
                    <TableCell sx={{ width: "201px" }}>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        {`전송 상태`}
                        <IconButton
                          onClick={(event) => {
                            setAnchorElement2(event.currentTarget);
                          }}
                          sx={{ width: "20px", color: "#9CA3AF" }}
                        >
                          <KeyboardArrowDownIcon />
                        </IconButton>
                        <Popover
                          open={isOpened2}
                          anchorEl={anchorElement2}
                          onClose={() => {
                            setAnchorElement2(null);
                          }}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                          }}
                        >
                          <Stack
                            sx={{
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Checkbox />
                              <Typography
                                sx={{
                                  ...popOverStyle,
                                }}
                                onClick={() => {
                                  setAnchorElement2(null);
                                }}
                              >
                                {`예약`}
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Checkbox />
                              <Typography
                                sx={{
                                  ...popOverStyle,
                                }}
                                onClick={() => {
                                  setAnchorElement2(null);
                                }}
                              >
                                {`전송`}
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Checkbox />
                              <Typography
                                sx={{
                                  ...popOverStyle,
                                }}
                                onClick={() => {
                                  setAnchorElement2(null);
                                }}
                              >
                                {`임시저장`}
                              </Typography>
                            </Box>
                          </Stack>
                        </Popover>
                      </Stack>
                    </TableCell>
                    <TableCell
                      sx={{ width: "201px" }}
                    >{`등록 일시 `}</TableCell>
                    <TableCell sx={{ width: "201px" }}>{`전송 일시`}</TableCell>
                    <TableCell sx={{ width: "551px" }}>{`타깃 조건`}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody sx={{ "& .MuiTableCell-root": { ...cellStyle } }}>
                  {dummyData &&
                    dummyData.map((item, idx) => {
                      return (
                        <TableRow key={idx}>
                          <TableCell>
                            <Checkbox
                              checked={checkboxs.some((item) => item === idx)}
                              onClick={() => {
                                handleCheckbox(idx);
                              }}
                            />
                          </TableCell>
                          <TableCell onClick={moveToDetail}>
                            <Typography
                              sx={{
                                color: "#1C64F2",
                                fontSize: "14px",
                                fontWeight: "600",
                                lineHeight: "20px",
                              }}
                            >
                              {item.promotionName}
                            </Typography>
                          </TableCell>
                          <TableCell onClick={moveToDetail}>
                            <Typography sx={{ ...fontStyle }}>
                              {item.media}
                            </Typography>
                          </TableCell>
                          <TableCell
                            onClick={moveToDetail}
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
                          <TableCell onClick={moveToDetail}>
                            <Typography>{item.registerDate}</Typography>
                          </TableCell>
                          <TableCell onClick={moveToDetail}>
                            <Typography>{item.transmitDate}</Typography>
                          </TableCell>
                          <TableCell onClick={moveToDetail}>
                            <Typography>{item.target}</Typography>
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
          </Stack>
        </Stack>
      </div>
    );
  }
);

export default PromotionTable;
