import * as React from "react";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

export const ManageDetailLeft: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children }, ref) => {
    type managerListType = {
      id: number;
      name: string;
      email: string;
      position: string;
    };
    const fakeManagerList: managerListType[] = [
      {
        id: 0,
        name: "김나연",
        email: "20240117@tmax.co.kr",
        position: "운영진",
      },
      {
        id: 1,
        name: "김건우",
        email: "20240117@tmax.co.kr",
        position: "운영진",
      },
      { id: 2, name: "윤동근", email: "20240117@tmax.co.kr", position: "사원" },
      { id: 3, name: "김유나", email: "20240117@tmax.co.kr", position: "사원" },
      { id: 4, name: "김하늬", email: "20240117@tmax.co.kr", position: "사원" },
    ];
    const fakeGroupList = [
      {
        id: 1,
        title: "영업담당자",
        memberNum: "12",
        detailTitle: "고객 관리, 영업 관리, 프로모션 관리, SR 관리",
        isManager: false,
      },
      {
        id: 2,
        title: "마케터",
        memberNum: "15",
        detailTitle: "제품 관리, 상품 관리, 판매/주문 관리, 매출 관리",
        isManager: true,
      },
      {
        id: 3,
        title: "회계담당자",
        memberNum: "12",
        detailTitle: "매출 관리, 정산 관리",
        isManager: false,
      },
    ];

    const [query, setQuery] = React.useState("");
    const [buttonDisabled, setButtonDisabled] = React.useState(true);
    const [managerList, setManagerList] = React.useState<number[]>([]);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [openDialog2, setOpenDialog2] = React.useState(false);
    const [openDialog3, setOpenDialog3] = React.useState(false);
    const [moveButtonDisabled, setMoveButtonDisabled] = React.useState(false);
    const [select, setSelect] = React.useState<string>("");

    React.useEffect(() => {
      if (managerList.length === 0) setButtonDisabled(true);
      else setButtonDisabled(false);
    }, [managerList]);

    const handleManager = (idx: number) => {
      if (managerList.some((item) => item === idx)) {
        const newManagerList = managerList.filter((item) => item !== idx);
        setManagerList(newManagerList);
        console.log(newManagerList);
      } else {
        const newManagerList = [...managerList, idx];
        setManagerList(newManagerList);
        console.log(newManagerList);
      }
    };

    const handleSelected = (idx: string) => {
      setSelect(idx);
    };

    return (
      <div className={className} ref={ref}>
        {children}
        <Stack
          sx={{
            width: "416px",
            border: "1px solid #D1D5DB",
            borderRadius: "10px",
          }}
        >
          <Stack
            direction="row"
            sx={{
              width: "416px",
              height: "74px",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#F9FAFB",
              borderRadius:
                "var(--spacing-12, 12px) var(--spacing-12, 12px) var(--spacing-0, 0px) var(--spacing-0, 0px)",
              padding: "24px",
              boxSizing: "border-box",
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                lineHeight: "26px",
              }}
            >
              영업 담당자 목록
            </Typography>
            <AddIcon sx={{ width: "20px", height: "20px" }} />
          </Stack>
          <Stack
            sx={{
              width: "416px",
              padding: "24px",
              gap: "24px",
              boxSizing: "border-box",
            }}
          >
            <TextField
              placeholder="이름 또는 이메일을 입력해주세요."
              value={query}
              onChange={(e) => {
                const newQuery = e.target.value as string;
                setQuery(newQuery);
              }}
              /* onKeyDown={e => {
                            if (e.key === 'Enter') {
                                handleTableSubmit();
                            }
                        }} */

              InputProps={{
                endAdornment: <SearchIcon sx={{ color: "#9CA3AF" }} />,
                sx: {
                  width: "368px",
                  height: "40px",
                  "& fieldset": {
                    padding: "0px 8px 0px 12px",
                    border: "1px solid var(--gray-200, #E5E7EB)",
                    borderRadius: "6px",
                  },
                },
              }}
            />
            <Stack sx={{ gap: "16px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <PeopleAltOutlinedIcon
                    sx={{ width: "24px", height: "24px" }}
                  />
                  <Typography
                    sx={{
                      color: "#6B7280",
                      fontSize: "14px",
                      fontWeight: "500",
                      lineHeight: "20px",
                    }}
                  >{`5`}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "8px",
                    alignItems: "center",
                  }}
                >
                  <Button
                    sx={{
                      width: "48px",
                      padding: "7px 10px",
                      borderRadius: "4px",
                      border: "1px solid #A4CAFE",
                    }}
                    disabled={buttonDisabled}
                    onClick={() => {
                      setOpenDialog2(true);
                    }}
                  >
                    이동
                  </Button>
                  <Button
                    sx={{
                      width: "48px",
                      padding: "7px 10px",
                      borderRadius: "4px",
                      background: "#1C64F2",
                      color: "#FFFFFF",
                    }}
                    disabled={buttonDisabled}
                    onClick={() => {
                      setOpenDialog(true);
                    }}
                  >
                    삭제
                  </Button>
                </Box>
              </Box>
              {fakeManagerList &&
                fakeManagerList.map((item, idx) => {
                  const checked = managerList.some((item) => item === idx);
                  const background = checked ? "#EBF5FF" : "#FFFFFF";
                  const border = checked ? "#1C64F2" : "#D1D5DB";
                  return (
                    <Stack
                      key={item.id}
                      direction="row"
                      sx={{
                        height: "44px",
                        padding: "var(--spacing-12, 12px)",
                        gap: "10px",
                        alignItems: "center",
                        border: `1px solid ${border}`,
                        borderRadius: "6px",
                        boxSizing: "border-box",
                        background: background,
                      }}
                    >
                      <Checkbox
                        checked={checked}
                        onClick={() => handleManager(idx)}
                        sx={{ color: "#9CA3AF" }}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#111928",
                            fontSize: "14px",
                            fontWeight: "400",
                            lineHeight: "20px",
                          }}
                        >
                          {item.name} {item.email}
                        </Typography>
                        <Divider
                          orientation="vertical"
                          variant="middle"
                          sx={{
                            height: "18px",
                            marginLeft: "6px",
                            marginRight: "6px",
                          }}
                        />
                        <Typography
                          sx={{
                            color: "#111928",
                            fontSize: "14px",
                            fontWeight: "400",
                            lineHeight: "20px",
                          }}
                        >
                          {item.position}
                        </Typography>
                      </Box>
                    </Stack>
                  );
                })}
            </Stack>
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
                background: "#FDF2F2",
                borderRadius: "50%",
                padding: "6px",
              }}
            >
              <WarningAmberIcon
                sx={{ width: "20px", height: "20px", color: "#F05252" }}
              />
            </Box>

            <Stack gap="14px">
              <Stack height="32px" justifyContent="center">
                <Typography
                  fontWeight={600}
                  fontSize="18px"
                  color=" var(--character-title-85, rgba(0, 0, 0, 0.85)"
                >
                  {`${
                    managerList.length > 0 &&
                    fakeManagerList[managerList[0]].name
                  } ${
                    managerList.length < 2 ? "를" : "외 n명을"
                  } '영업 담당자' 직무 그룹에서 삭제`}
                </Typography>
              </Stack>
              <Stack height="32px" justifyContent="center">
                <Typography fontWeight="400" fontSize="16px" color="#6B7280">
                  {`사원을 삭제하시면, 해당 직무 그룹 목록에서 사라지며 해당 사원의 직무 그룹은 ‘미지정’ 상태가 됩니다.`}
                </Typography>
              </Stack>
            </Stack>
          </DialogTitle>

          <DialogActions sx={{ flex: 1, padding: "16px 24px" }}>
            <Button
              sx={{
                width: "80px",
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
            <Button
              sx={{
                width: "80px",
                height: "38px",
                bgcolor: "#F05252",
                borderRadius: "6px",
                fontWeight: 600,
                fontSize: "14px",
                color: "#FFFFFF",
              }}
              onClick={() => {
                setOpenDialog(false);
              }}
            >
              나가기
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={openDialog2}
          sx={{
            "& .MuiDialog-paper": {
              width: "500px",
              height: "398px",
              bgcolor: "#FFFFFF",
            },
          }}
        >
          <DialogTitle
            display="flex"
            height="310px"
            sx={{
              padding: "0px",
              boxSizing: "border-box",
            }}
          >
            <Stack flex="1">
              <Stack
                height="72px"
                justifyContent="center"
                sx={{ padding: "24px", boxSizing: "border-box" }}
              >
                <Typography fontWeight={600} fontSize="18px" color=" #111928">
                  {`선택된 구성원 이동`}
                </Typography>
              </Stack>
              <Stack
                justifyContent="center"
                alignItems="center"
                sx={{ padding: "8px 24px", gap: "16px" }}
              >
                {fakeGroupList &&
                  fakeGroupList.map((item, idx) => {
                    const background =
                      idx.toString() === select ? "#EBF5FF" : "#FFF";
                    const color =
                      idx.toString() === select ? "#1C64F2" : "#D1D5DB";
                    const fontColor =
                      idx.toString() === select ? "#1C64F2" : "#111928";
                    return (
                      <Stack
                        key={idx}
                        sx={{
                          flexDirection: "row",
                          alignItems: "center",
                          width: "452px",
                          height: "64px",
                          padding: "16px",
                          border: `1px solid ${color}`,
                          borderRadius: "6px",
                          boxSizing: "border-box",
                          background: background,
                          gap: "10px",
                        }}
                        onClick={() => {
                          handleSelected(idx.toString());
                        }}
                      >
                        <PeopleAltOutlinedIcon
                          sx={{ width: "32px", height: "32px", color: color }}
                        />
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "2px",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              gap: "8px",
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              sx={{
                                color: fontColor,
                                fontSize: "16px",
                                fontWeight: "600",
                                lineHeight: "26px",
                              }}
                            >
                              {item.title}
                            </Typography>
                            <Typography
                              sx={{
                                background: "#F3F4F6",
                                borderRadius: "4px",
                                color: "#4B5563",
                                fontSize: "12px",
                                fontWeight: "600",
                                lineHeight: "18px",
                                padding: "2px 8px",
                              }}
                            >
                              {item.memberNum}
                            </Typography>
                          </Box>
                        </Box>
                      </Stack>
                    );
                  })}
              </Stack>
            </Stack>
          </DialogTitle>

          <DialogActions
            sx={{
              flex: 1,
              padding: "24px",
              boxSizing: "border-box",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                width: "220px",
                height: "38px",
                fontWeight: 600,
                fontSize: "14px",
                color: "#374151",
                lineHeight: "20px",
                background: "#F9FAFB",
                borderRadius: "6px",
                border: "1px solid #D1D5DB",
              }}
              onClick={() => {
                setOpenDialog2(false);
              }}
            >
              취소
            </Button>
            <Button
              sx={{
                width: "220px",
                height: "38px",
                fontWeight: 600,
                fontSize: "14px",
                color: "#374151",
                lineHeight: "20px",
                background: `${moveButtonDisabled ? "#E5E7EB" : "#1C64F2"}`,
              }}
              disabled={moveButtonDisabled}
              onClick={() => {
                setOpenDialog3(true);
              }}
            >
              확인
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={openDialog3}
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
                background: "#FDF2F2",
                borderRadius: "50%",
                padding: "6px",
              }}
            >
              <WarningAmberIcon
                sx={{ width: "20px", height: "20px", color: "#F05252" }}
              />
            </Box>

            <Stack gap="14px">
              <Stack height="32px" justifyContent="center">
                <Typography
                  fontWeight={600}
                  fontSize="18px"
                  color=" var(--character-title-85, rgba(0, 0, 0, 0.85)"
                >
                  {`${
                    managerList.length > 0 &&
                    fakeManagerList[managerList[0]].name
                  }${managerList.length < 2 ? "" : "외 n명"}의 직무 그룹을 ‘${
                    fakeGroupList[Number(select)].title
                  }’로 변경`}
                </Typography>
              </Stack>
              <Stack height="32px" justifyContent="center">
                <Typography fontWeight="400" fontSize="16px" color="#6B7280">
                  {`해당 직무 그룹 목록에서 사라지며, 변경된 직무 그룹의 권한 설정값으로 즉시 적용됩니다.`}
                </Typography>
              </Stack>
            </Stack>
          </DialogTitle>

          <DialogActions sx={{ flex: 1, padding: "16px 24px" }}>
            <Button
              sx={{
                width: "80px",
                height: "38px",
                bgcolor: "#F9FAFB",
                borderRadius: "6px",
                boxShadow: "0 0 0 1px #D1D5DB inset",
                fontWeight: 600,
                fontSize: "14px",
                color: "#374151",
              }}
              onClick={() => {
                setOpenDialog3(false);
              }}
            >
              취소
            </Button>
            <Button
              sx={{
                width: "80px",
                height: "38px",
                bgcolor: "#F05252",
                borderRadius: "6px",
                fontWeight: 600,
                fontSize: "14px",
                color: "#FFFFFF",
              }}
              onClick={() => {
                setOpenDialog3(false);
              }}
            >
              나가기
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
);

export default ManageDetailLeft;
