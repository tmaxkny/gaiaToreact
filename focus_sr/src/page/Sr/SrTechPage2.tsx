import * as React from "react";
import {
  Box,
  Button,
  Checkbox,
  Chip,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
  Drawer,
  MenuItem,
  Pagination,
  Select,
  Snackbar,
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
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchIcon from "@mui/icons-material/Search";
import { ArrowBack } from "@mui/icons-material";
import CheckIcon from "@mui/icons-material/Check";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ClearIcon from "@mui/icons-material/Clear";
import { FiberManualRecord } from "@mui/icons-material";

const SrTechPage2: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children, moveToDetail }, ref) => {
    const [selectOption, setSelectOption] =
      React.useState("세부 문의유형 전체");
    const [selectOption2, setSelectOption2] = React.useState("등록 완료");
    const [searchQuery, setSearchQuery] = React.useState("");
    const [openDrawer, setOpenDrawer] = React.useState(false); //담당자지정 버튼 클릭시 drawer
    const handleClickOpenDrawer = () => setOpenDrawer(true);
    const [openDialog, setOpenDialog] = React.useState(false); //처리완료 버튼 클릭시 다이얼로그
    const [perPage, setperPage] = React.useState(10); //n개씩 보기
    const [error, setError] = React.useState("");
    const [manager, setManager] = React.useState<number>(-1); //drawer 체크한 매니저
    const [managerListAll, setManagerListAll] = React.useState(false); //매니저 체크박스 all
    const [finishButtonDiabled, setFinishButtonDiabled] = React.useState(true); //완료 버튼
    const [managerDeginateDisabled, setManagerDeginateDisabled] =
      React.useState(true); //담당자 지정 버튼
    const [drawerButtonDiabled, setDrawerButtonDiabled] = React.useState(true); //drawer의 등록하기 버튼
    const [managerSnackVisible, setManagerSnackVisible] = React.useState(false); //담당자지정완료 스낵바
    const [finishSnackVisible, setFinishSnackVisible] = React.useState(false); //처리완료 담당자 스낵바

    const [checkboxs, setCheckboxs] = React.useState<number[]>([]); //테이블 체크박스
    const [checkboxAll, setCheckboxAll] = React.useState(false);
    const [page, setPage] = React.useState(1); //테이블 페이지네이션

    type TStatusColor = {
      [key: string]: {
        color: string;

        backgroundColor: string;
        width?: string;
        height?: string;
      };
    };

    //테이블 chip 색깔
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

    const snackBarColor: TStatusColor = {
      성공: {
        color: "#FFFFFF",
        backgroundColor: "#00C572B2",
      },
      실패: {
        color: "#FFFFFF",
        backgroundColor: "#F01000B2",
      },
    };

    const ManagerRegisterStatus = "담당자 지정이 완료되었습니다. ";
    const FinishStatus = "처리 완료되었습니다.";

    const tableData = [
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

    const tableLength = tableData.length;

    //drawer내부 테이블 데이터
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

    const managerLength = dummyData.length;

    //테이블 관련 css
    const TheaderCellStyle = {
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

    const TcellStyle = {
      whiteSpace: "nowrap",
    };

    const TfontStyle = {
      color: "#111928",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "20px",
    };

    //drawer 내부 테이블 css
    const headerCellStyle = {
      backgroundColor: "#F3F4F6",
      fontWeight: "600",
    };
    const cellStyle = {
      color: "#111928",
      fontSize: "14px",
      padding: "0px",
    };

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

    //drawer 체크박스
    /*     const handleManager = (idx: number) => {
      if (managerList.some((item) => item === idx)) {
        const newManagerList = managerList.filter((item) => item !== idx);
        setManagerList(newManagerList);
      } else {
        const newManagerList = [...managerList, idx];
        setManagerList(newManagerList);
      }
    }; */

    /*     const handleManagerAll = () => {
      if (managerListAll) setManagerList([]);
      else setManagerList([...Array(managerLength).keys()]);
      setManagerListAll(!managerListAll);
    }; */

    //담당자 지정 스낵바
    const handleVisible = () => {
      setManagerSnackVisible(true);
      setTimeout(() => {
        setManagerSnackVisible(false);
      }, 2000);
    };

    //처리완료 스낵바
    const handleVisible2 = () => {
      setFinishSnackVisible(true);
      setTimeout(() => {
        setFinishSnackVisible(false);
      }, 2000);
    };

    React.useEffect(() => {
      if (manager !== -1) setDrawerButtonDiabled(false);
      else setDrawerButtonDiabled(true);
    }, [manager]);

    React.useEffect(() => {
      if (checkboxs.length > 0) {
        setFinishButtonDiabled(false);
        setManagerDeginateDisabled(false);
      } else {
        setFinishButtonDiabled(true);
        setManagerDeginateDisabled(true);
      }
    }, [checkboxs]);

    return (
      <div className={className} ref={ref}>
        {children}
        <Stack gap="20px">
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
                    disabled={finishButtonDiabled}
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
                    disabled={managerDeginateDisabled}
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
                    setperPage(Number(value));
                  }}
                  sx={{
                    height: "38px",
                    color: "#111928",
                    fontSize: "14px",
                    fontWeight: "600",
                    lineHeight: "20px",
                  }}
                >
                  <MenuItem value={10}>10개씩 보기</MenuItem>
                  <MenuItem value={20}>20개씩 보기</MenuItem>
                </Select>
              </Stack>
            </Stack>

            <Dialog
              open={openDialog}
              sx={{
                "& .MuiDialog-paper": {
                  width: "360px",
                  height: "172px",
                  bgcolor: "#FFFFFF",
                },
              }}
            >
              <DialogTitle display="flex" sx={{ padding: "0px" }}>
                <Stack flex="1">
                  <Stack height="64px" alignItems="center">
                    <Typography
                      fontWeight={600}
                      fontSize="18px"
                      color="#202124"
                      marginTop="30px"
                    >
                      처리 완료
                    </Typography>
                  </Stack>
                  <Stack height="52px" alignItems="center">
                    <Typography
                      fontWeight="400"
                      fontSize="14px"
                      color="#374151"
                      lineHeight="20px"
                    >
                      해당 답변을 등록하겠습니까?
                    </Typography>
                  </Stack>
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
                    handleVisible2();
                    setOpenDialog(false);
                  }}
                >
                  확인
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
              onClose={() => {
                setOpenDrawer(false);
                setManager(-1);
              }}
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
                          <TableCell></TableCell>
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
                                  checked={idx === manager}
                                  onClick={() => setManager(idx)}
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
                    {manager !== -1 && (
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#111928",
                        }}
                      >{`${dummyData[manager].name}/ ${dummyData[manager].email}/ 운영진`}</Typography>
                    )}
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
              </Stack>
            </Drawer>
            <Snackbar
              ContentProps={{
                sx: {
                  background: snackBarColor["성공"].backgroundColor,
                },
              }}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              open={managerSnackVisible}
              onClose={() => {
                setManagerSnackVisible(false);
              }}
              message={
                <Box sx={{ display: "flex", flexDirection: "row", gap: "8px" }}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "18px",
                      color: "#FFFFFF",
                      minWidth: "260px",
                    }}
                  >
                    {ManagerRegisterStatus}
                  </Typography>
                  <ClearIcon
                    sx={{ width: "20px", height: "20px", color: "#FFFFFF" }}
                  />
                </Box>
              }
            />
            <Snackbar
              ContentProps={{
                sx: {
                  background: snackBarColor["성공"].backgroundColor,
                },
              }}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              open={finishSnackVisible}
              onClose={() => {
                setFinishSnackVisible(false);
              }}
              message={
                <Box sx={{ display: "flex", flexDirection: "row", gap: "8px" }}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "18px",
                      color: "#FFFFFF",
                      minWidth: "260px",
                    }}
                  >
                    {FinishStatus}
                  </Typography>
                  <ClearIcon
                    sx={{ width: "20px", height: "20px", color: "#FFFFFF" }}
                  />
                </Box>
              }
            />
          </Stack>
          {/**테이블  */}
          <TableContainer
            sx={{
              maxHeight: "616px",
              maxWidth: "100%",
              overflowX: "auto",
              "::-webkit-scrollbar": {
                height: "16px",
              },
              "::-webkit-scrollbar-thumb": {
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
                      ...TheaderCellStyle,
                    },
                  }}
                >
                  <TableCell>
                    <Checkbox
                      checked={checkboxs.length === tableLength}
                      onClick={() => {
                        handleCheckboxAll();
                      }}
                    />
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
              <TableBody sx={{ "& .MuiTableCell-root": { ...TcellStyle } }}>
                {tableData &&
                  tableData.map((item, idx) => {
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
                        <TableCell
                          sx={{
                            width: "120px",
                            "& .MuiChip-root": {
                              verticalAlign: "baseline",
                            },
                          }}
                          onClick={moveToDetail}
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
                          onClick={moveToDetail}
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
                        <TableCell
                          sx={{ width: "210px", ...TfontStyle }}
                          onClick={moveToDetail}
                        >
                          {item.productName}
                        </TableCell>
                        <TableCell
                          sx={{ width: "210px", ...TfontStyle }}
                          onClick={moveToDetail}
                        >
                          {item.issueType}
                        </TableCell>
                        <TableCell onClick={moveToDetail}>
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
                        <TableCell
                          sx={{ width: "180px", ...TfontStyle }}
                          onClick={moveToDetail}
                        >
                          {item.receiptDate}
                        </TableCell>
                        <TableCell
                          sx={{ width: "180px", ...TfontStyle }}
                          onClick={moveToDetail}
                        >
                          {item.procedureDate}
                        </TableCell>

                        <TableCell
                          sx={{ width: "180px", ...TfontStyle }}
                          onClick={moveToDetail}
                        >
                          {item.endDate}
                        </TableCell>
                        <TableCell
                          onClick={moveToDetail}
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
                          onClick={moveToDetail}
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
                        <TableCell
                          sx={{ width: "120px", ...TfontStyle }}
                          onClick={moveToDetail}
                        >
                          {item.consumerName}
                        </TableCell>
                        <TableCell
                          sx={{ width: "210px", ...TfontStyle }}
                          onClick={moveToDetail}
                        >
                          {item.email}
                        </TableCell>
                        <TableCell
                          onClick={moveToDetail}
                          sx={{ width: "180px", ...TfontStyle }}
                        >
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
        </Stack>
      </div>
    );
  }
);

export default SrTechPage2;
