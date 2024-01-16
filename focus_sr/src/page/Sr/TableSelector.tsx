import * as React from "react";
import {
  Stack,
  Button,
  Typography,
  Select,
  MenuItem,
  TextField,
  Box,
  Divider,
  Dialog,
  DialogTitle,
  DialogActions,
  Drawer,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  Checkbox,
  TableRow,
  TableBody,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchIcon from "@mui/icons-material/Search";
import { ArrowBack } from "@mui/icons-material";
import CheckIcon from "@mui/icons-material/Check";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ClearIcon from "@mui/icons-material/Clear";

const TableSelector: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children }, ref) => {
    const [selectOption, setSelectOption] =
      React.useState("세부 문의유형 전체");
    const [selectOption2, setSelectOption2] = React.useState("등록 완료");
    const [searchQuery, setSearchQuery] = React.useState("");
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const handleClickOpenDrawer = () => setOpenDrawer(true);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [page, setPage] = React.useState("10");
    const [error, setError] = React.useState("");
    const [managerList, setManagerList] = React.useState<number[]>([]);
    const [drawerButtonDiabled, setDrawerButtonDiabled] = React.useState(true);
    const [isVisible, setIsVisible] = React.useState(false);

    const headerCellStyle = {
      backgroundColor: "#F3F4F6",
      fontWeight: "600",
    };
    const cellStyle = {
      color: "#111928",
      fontSize: "14px",
      padding: "0px",
    };

    const dummyData = [
      {
        name: "서지혜",
        email: "gggmk@tmax.co.kr",
        role: "운영진",
        position: "엔지니어",
      },
      {
        name: "서지혜",
        email: "gggmk@tmax.co.kr",
        role: "운영진",
        position: "엔지니어",
      },
      {
        name: "서지혜",
        email: "gggmk@tmax.co.kr",
        role: "운영진",
        position: "엔지니어",
      },
      {
        name: "서지혜",
        email: "gggmk@tmax.co.kr",
        role: "운영진",
        position: "엔지니어",
      },
      {
        name: "서지혜",
        email: "gggmk@tmax.co.kr",
        role: "운영진",
        position: "엔지니어",
      },
      {
        name: "서지혜",
        email: "gggmk@tmax.co.kr",
        role: "운영진",
        position: "엔지니어",
      },
      {
        name: "서지혜",
        email: "gggmk@tmax.co.kr",
        role: "운영진",
        position: "엔지니어",
      },
      {
        name: "정지은",
        email: "gggmk@tmax.co.kr",
        role: "사원",
        position: "엔지니어",
      },
      {
        name: "정지은",
        email: "gggmk@tmax.co.kr",
        role: "사원",
        position: "엔지니어",
      },
      {
        name: "정지은",
        email: "gggmk@tmax.co.kr",
        role: "사원",
        position: "엔지니어",
      },
      {
        name: "정지은",
        email: "gggmk@tmax.co.kr",
        role: "사원",
        position: "엔지니어",
      },
      {
        name: "정지은",
        email: "gggmk@tmax.co.kr",
        role: "사원",
        position: "엔지니어",
      },
    ];

    const handleManager = (idx: number) => {
      if (managerList.some((item) => item === idx)) {
        const newManagerList = managerList.filter((item) => item !== idx);
        setManagerList(newManagerList);
      } else {
        const newManagerList = [...managerList, idx];
        setManagerList(newManagerList);
      }
    };

    const handleVisible = () => {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    };

    React.useEffect(() => {
      if (managerList.length > 0) setDrawerButtonDiabled(false);
      else setDrawerButtonDiabled(true);
    }, [managerList]);

    return (
      <div className={className} ref={ref}>
        <Stack gap="20px">
          <Stack
            sx={{
              gap: "8px",
              background: "#F9FAFB",
              borderRadius: "6px",
              padding: "24px 24px 24px 32px",
            }}
          >
            <Stack sx={{ gap: "20px" }}>
              <Stack direction="row" gap="16px" alignItems="center">
                <Typography
                  sx={{
                    width: "160px",
                    color: "#4B5563",
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "26px",
                  }}
                >
                  접수일 조회 기간
                </Typography>
                <Stack direction="row" sx={{ gap: "24px" }}>
                  {children}
                  <Stack direction="row" sx={{ gap: "16px" }}>
                    <Button
                      sx={{
                        width: "74px",
                        padding: "10px 18px",
                        border: "1px solid #E5E7EB",
                        color: "#9CA3AF",
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "26px",
                      }}
                    >
                      오늘
                    </Button>
                    <Button
                      sx={{
                        width: "74px",
                        padding: "10px 18px",
                        border: "1px solid #E5E7EB",
                        color: "#9CA3AF",
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "26px",
                      }}
                    >
                      3일
                    </Button>
                    <Button
                      sx={{
                        padding: "10px 18px",
                        border: "1px solid #E5E7EB",
                        color: "#9CA3AF",
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "26px",
                      }}
                    >
                      일주일
                    </Button>
                    <Button
                      sx={{
                        padding: "10px 18px",
                        border: "1px solid #E5E7EB",
                        color: "#9CA3AF",
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "26px",
                      }}
                    >
                      1개월
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="row" gap="16px" alignItems="center">
              <Typography
                sx={{
                  width: "160px",
                  color: "#4B5563",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "26px",
                }}
              >
                기술문의 검색
              </Typography>
              <Stack direction="row" sx={{ gap: "16px" }}>
                <Select
                  value={selectOption}
                  onChange={(e) => {
                    const value = e.target.value as string;
                    setSelectOption(value);
                  }}
                  sx={{
                    width: "168px",
                    color: "#111928",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "26px",
                    padding: "10px 12px",
                    height: "46px",
                  }}
                >
                  <MenuItem value="세부 문의유형 전체">
                    {`세부 문의유형 전체`}
                  </MenuItem>
                  <MenuItem value="기술지원요청">기술지원요청</MenuItem>
                  <MenuItem value="기술지원요청">장애발생문의</MenuItem>
                  <MenuItem value="기타">기타</MenuItem>
                </Select>
                <Select
                  value={selectOption2}
                  onChange={(e) => {
                    const value = e.target.value as string;
                    setSelectOption2(value);
                  }}
                  sx={{
                    width: "168px",
                    color: "#111928",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "26px",
                    padding: "10px 12px",
                    height: "46px",
                  }}
                >
                  <MenuItem value="문의 진행상태 전체">
                    {`문의 진행상태 전체`}
                  </MenuItem>
                  <MenuItem value="등록 완료">{`등록 완료`}</MenuItem>
                  <MenuItem value="처리중">처리중</MenuItem>
                  <MenuItem value="종료">종료</MenuItem>
                  <MenuItem value="취소">취소</MenuItem>
                </Select>
                <TextField
                  placeholder="고객 Email ID 또는 담당자 명으로 검색"
                  value={searchQuery}
                  error={Boolean(error)}
                  helperText={error}
                  onChange={(e) => {
                    const query = e.target.value as string;
                    const isValidInput = /^[A-Za-z가-힣\s]*$/.test(query);

                    if (isValidInput) {
                      setSearchQuery(query);
                      setError("");
                    } else {
                      setError(
                        "한글, 영문, 숫자 및 일부 기호만 입력할 수 있습니다."
                      );
                    }
                  }}
                  /* onKeyDown={e => {
                            if (e.key === 'Enter') {
                                handleTableSubmit();
                            }
                        }} */

                  InputProps={{
                    endAdornment: <SearchIcon sx={{ color: "#9CA3AF" }} />,
                    sx: {
                      width: "460px",
                      height: "46px",
                      "& fieldset": {
                        padding: "0px 8px 0px 12px",
                        border: "1px solid var(--gray-200, #E5E7EB)",
                        borderRadius: "6px",
                      },
                    },
                  }}
                />
              </Stack>
            </Stack>
            <Stack
              direction="row"
              sx={{ justifyContent: "flex-end", gap: "16px" }}
            >
              <Button
                startIcon={
                  <RefreshIcon
                    sx={{ width: "20px", height: "20px", color: "#1C64F2" }}
                  />
                }
                sx={{
                  background: "#F9FAFB",
                  gap: "4px",
                  padding: "9px 16px",
                  color: "#1C64F2",
                }}
              >
                초기화
              </Button>
              <Button
                sx={{
                  width: "92px",
                  padding: "10px 18px",
                  alignItem: "center",
                  borderRadius: "6px",
                  background: "#1C64F2",
                  color: "white",
                }}
              >
                조회
              </Button>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            sx={{
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Stack direction="row" sx={{ gap: "20px" }}>
              <Typography
                sx={{
                  color: "#4B5563",
                  fontSize: "18px",
                  fontWeight: "600",
                  lineHeight: "24px",
                }}
              >
                기술문의 목록
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
                  {dummyData.length}
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
            <Stack
              direction="row"
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <Stack direction="row" sx={{ gap: "12px" }}>
                <Button
                  startIcon={
                    <CheckIcon
                      sx={{ width: "16px", height: "16px", color: "#9CA3AF" }}
                    />
                  }
                  sx={{
                    height: "38px",
                    background: "#F9FAFB",
                    border: "#E5E7EB",
                    borderRadius: "6px",
                    gap: "4px",
                    padding: "9px 16px",
                    color: "#9CA3AF",
                  }}
                  onClick={() => {
                    setOpenDialog(true);
                  }}
                >
                  처리 완료
                </Button>
                <Button
                  startIcon={
                    <PersonAddAlt1Icon
                      sx={{ width: "16px", height: "16px", color: "#9CA3AF" }}
                    />
                  }
                  sx={{
                    height: "38px",
                    background: "#F9FAFB",
                    border: "#E5E7EB",
                    borderRadius: "6px",
                    gap: "4px",
                    padding: "9px 16px",
                    color: "#9CA3AF",
                  }}
                  onClick={handleClickOpenDrawer}
                >
                  담당자 지정
                </Button>
              </Stack>
              <Divider
                orientation="vertical"
                variant="middle"
                sx={{ height: "18px", marginLeft: "20px", marginRight: "20px" }}
              />
              <Select
                value={page}
                onChange={(e) => {
                  const value = e.target.value as string;
                  setPage(value);
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
            </Stack>
          </Stack>

          <Dialog
            open={openDialog}
            sx={{
              "& .MuiDialog-paper": {
                width: "500px",
                height: "186px",
                bgcolor: "#FFFFFF",
              },
            }}
          >
            <DialogTitle
              display="flex"
              gap="10px"
              height="32px"
              sx={{ padding: "24px" }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#EBF5FF",
                  borderRadius: "50%",
                  padding: "6px",
                }}
              >
                <CheckIcon
                  sx={{ width: "20px", height: "20px", color: "#3F83F8" }}
                />
              </Box>

              <Stack gap="10px">
                <Stack height="32px" justifyContent="center">
                  <Typography
                    fontWeight={600}
                    fontSize="18px"
                    color=" var(--character-title-85, rgba(0, 0, 0, 0.85)"
                  >
                    답변 등록
                  </Typography>
                </Stack>
                <Stack height="32px" justifyContent="center">
                  <Typography fontWeight="400" fontSize="16px" color="#6B7280">
                    해당 답변을 등록하겠습니까?
                  </Typography>
                </Stack>
              </Stack>
            </DialogTitle>

            <DialogActions sx={{ flex: 1, p: "0px 24px" }}>
              <Button
                sx={{
                  width: "81px",
                  height: "38px",
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
                등록하기
              </Button>
              <Button
                sx={{
                  width: "57px",
                  height: "38px",
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
            </DialogActions>
          </Dialog>
          <Drawer
            sx={{
              width: "512px",
              height: "70px",
              "& .MuiDrawer-paper": {
                width: "512px",
              },
              position: "relative",
            }}
            anchor="right"
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
          >
            <Stack
              direction="row"
              sx={{ padding: "16px 32px", borderBottom: "1px solid #E5E7EB" }}
              gap="12px"
            >
              <ArrowBack sx={{ width: "20px", color: "#111928" }} />
              <Typography
                sx={{ color: "#111928", fontWeight: "600", fontSize: "20px" }}
              >
                담당자 지정
              </Typography>
            </Stack>
            <Stack sx={{ padding: "32px" }} gap="24px">
              <Stack gap="16px">
                <Typography
                  sx={{
                    padding: "8px 0",
                    color: "#4B5563",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >{`사용자 리스트`}</Typography>
                <TableContainer
                  sx={{
                    maxHeight: "500px",
                    borderRadius: "6px",
                    border: "1px solid #E5E7EB",
                  }}
                >
                  <Table
                    stickyHeader
                    sx={{
                      "& .MuiTableRow-root": {
                        height: "32px",
                      },
                    }}
                  >
                    <TableHead sx={{ height: "32px" }}>
                      <TableRow
                        sx={{
                          "& .MuiTableCell-root": {
                            ...cellStyle,
                            ...headerCellStyle,
                          },
                        }}
                      >
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell>이름</TableCell>
                        <TableCell>이메일</TableCell>
                        <TableCell>등급</TableCell>
                        <TableCell>직무</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {dummyData.map((data, idx) => {
                        return (
                          <TableRow
                            key={idx}
                            sx={{ "& .MuiTableCell-root": { ...cellStyle } }}
                          >
                            <TableCell>
                              <Checkbox
                                checked={managerList.some(
                                  (item) => item === idx
                                )}
                                onClick={() => handleManager(idx)}
                              />
                            </TableCell>
                            <TableCell>{data.name}</TableCell>
                            <TableCell>{data.email}</TableCell>
                            <TableCell>{data.role}</TableCell>
                            <TableCell>{data.position}</TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Stack>
              <Stack gap="16px">
                <Typography
                  sx={{
                    padding: "8px 0",
                    color: "#4B5563",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >{`담당자 목록 (1/1)`}</Typography>
                <Stack
                  justifyContent="center"
                  sx={{
                    height: "78px",
                    paddingLeft: "16px",
                    borderRadius: "6px",
                    border: "1px solid #E5E7EB",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#111928",
                    }}
                  >{`서지혜/ gggmk@tmax.co.kr/ 운영진`}</Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack
              sx={{
                padding: "24px 32px",
                borderTop: "1px solid #E5E7EB",
                position: "absolute",
                bottom: "0",
                width: "100%",
              }}
              direction="row"
              alignItems="start"
            >
              <Button
                sx={{
                  height: "48px",
                  backgroundColor: "#1C64F2",
                  color: "#FFFFFF",
                  fontSize: "16px",
                  padding: "10px 18px",
                  fontWeight: "600",
                }}
                disabled={drawerButtonDiabled}
                onClick={() => {
                  handleVisible();
                }}
              >
                등록하기
              </Button>
              {isVisible && (
                <Stack
                  direction="row"
                  sx={{
                    height: "54px",
                    width: "fit-content",
                    gap: "8px",
                    background: "rgba(0, 197, 114, 0.70)",
                    borderRadius: "4px",
                    alignItems: "center",
                    padding: "18px 20px",
                    boxSizing: "border-box",
                  }}
                  alignItems="center"
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "18px",
                      color: "#FFFFFF",
                      minWidth: "260px",
                    }}
                  >
                    {`담당자 지정이 완료되었습니다.`}
                  </Typography>
                  <ClearIcon
                    sx={{ width: "20px", height: "20px", color: "#FFFFFF" }}
                  />
                </Stack>
              )}
            </Stack>
          </Drawer>
        </Stack>
      </div>
    );
  }
);

export default TableSelector;
