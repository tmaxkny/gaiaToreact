import * as React from "react";
import {
  Stack,
  Typography,
  Button,
  Box,
  TextField,
  IconButton,
  Dialog,
  DialogTitle,
  DialogActions,
  Popover,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";

export const Manage: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children, onMoveDetail }, ref) => {
    const [fakeGroupList, setFakeGroupList] = React.useState([
      {
        id: 0,
        title: "영업담당자",
        memberNum: "12",
        detailTitle: "고객 관리, 영업 관리, 프로모션 관리, SR 관리",
        isManager: false,
      },
      {
        id: 1,
        title: "마케터",
        memberNum: "15",
        detailTitle: "제품 관리, 상품 관리, 판매/주문 관리, 매출 관리",
        isManager: true,
      },
      {
        id: 2,
        title: "회계담당자",
        memberNum: "12",
        detailTitle: "매출 관리, 정산 관리",
        isManager: false,
      },
    ]);

    const popOverStyle = {
      width: "162px",
      height: "36px",
      padding: "5px 12px",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "26px",
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.04)",
      },
    };

    const [groupName, setGroupName] = React.useState("");
    const [editGroupName, setEditGroupName] = React.useState("");
    const [select, setSelect] = React.useState<string>("");
    const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
    const [anchorElement, setAnchorElement] =
      React.useState<HTMLElement | null>(null);
    const isOpened = Boolean(anchorElement);
    const [formAble, setFormAble] = React.useState(false); //새 직무그룹 추가를 누르면 생기는 폼
    const [updateGroup, setUpdateGroup] = React.useState<number>();

    const handleSelected = (idx: string) => {
      setSelect(idx);
    };

    return (
      <div className={className} ref={ref}>
        {children}
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            padding: "32px, 240px",
            gap: "16px",
          }}
        >
          {!fakeGroupList ? (
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "26px",
                color: "#111928",
              }}
            >{`새로운 직무 그룹을 생성해 포커스를 관리해보세요.`}</Typography>
          ) : (
            <Stack sx={{ gap: "24px" }}>
              {formAble && (
                <Stack
                  sx={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "600px",
                    height: "96px",
                    padding: "24px",
                    border: "1px solid #D1D5DB",
                    borderRadius: "6px",
                    boxSizing: "border-box",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirecton: "row",
                      gap: "16px",
                      alignItems: "center",
                    }}
                  >
                    <PeopleOutlinedIcon
                      sx={{ width: "32px", height: "32px" }}
                    />
                    <TextField
                      placeholder="직무 그룹 이름을 입력해주세요(ex. 마케팅 팀)"
                      value={groupName}
                      onChange={(e) => {
                        const newGroupName = e.target.value as string;
                        setGroupName(newGroupName);
                      }}
                      /* onKeyDown={e => {
                            if (e.key === 'Enter') {
                                handleTableSubmit();
                            }
                        }} */

                      InputProps={{
                        sx: {
                          width: "350px",
                          height: "var(--spacing-40, 40px)",
                          fontSize: "16px",
                          fontWeight: "400px",
                          lineHeight: "26px",
                        },
                      }}
                    />
                  </Box>
                  <Box
                    sx={{ display: "flex", flexDirection: "row", gap: "8px" }}
                  >
                    <Button
                      sx={{
                        width: "41px",
                        height: "32px",
                        border: "1px solid #A4CAFE",
                        borderRadius: "4px",
                        padding: "7px 10px",
                        color: "#1C64F2",
                        fontSize: "12px",
                        fontWeight: "500",
                        lineHeight: "18px",
                      }}
                      onClick={() => {
                        setFormAble(false);
                      }}
                    >
                      취소
                    </Button>
                    <Button
                      sx={{
                        width: "41px",
                        height: "32px",
                        background: "#1C64F2",
                        borderRadius: "4px",
                        padding: "7px 10px",
                        color: "#FFFFFF",
                        fontSize: "12px",
                        fontWeight: "500",
                        lineHeight: "18px",
                      }}
                      onClick={() => {
                        const newGroup = {
                          id: fakeGroupList.length,
                          title: groupName,
                          memberNum: "0",
                          detailTitle: "지정된 접근 가능 메뉴 없음",
                          isManager: false,
                        };
                        setFakeGroupList([...fakeGroupList, newGroup]);
                        setFormAble(false);
                        setGroupName("");
                      }}
                    >
                      저장
                    </Button>
                  </Box>
                </Stack>
              )}
              {fakeGroupList &&
                fakeGroupList.map((item, idx) => {
                  const background =
                    idx.toString() === select ? "#EBF5FF" : "#FFF";
                  const color =
                    idx.toString() === select ? "#1C64F2" : "#D1D5DB";
                  const fontColor =
                    idx.toString() === select ? "#1C64F2" : "#111928";
                  const detailFontColor =
                    idx.toString() === select ? "#1C64F2" : "#6B7280";
                  if (idx === updateGroup) {
                    return (
                      <Stack
                        key={idx}
                        sx={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "600px",
                          height: "96px",
                          padding: "24px",
                          border: "1px solid #D1D5DB",
                          borderRadius: "6px",
                          boxSizing: "border-box",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirecton: "row",
                            gap: "16px",
                            alignItems: "center",
                          }}
                        >
                          <PeopleOutlinedIcon
                            sx={{ width: "32px", height: "32px" }}
                          />
                          <TextField
                            value={groupName}
                            onChange={(e) => {
                              const newGroupName = e.target.value as string;
                              setGroupName(newGroupName);
                            }}
                            InputProps={{
                              sx: {
                                width: "350px",
                                height: "var(--spacing-40, 40px)",
                                fontSize: "16px",
                                fontWeight: "400px",
                                lineHeight: "26px",
                              },
                            }}
                          />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "8px",
                          }}
                        >
                          <Button
                            sx={{
                              width: "41px",
                              height: "32px",
                              border: "1px solid #A4CAFE",
                              borderRadius: "4px",
                              padding: "7px 10px",
                              color: "#1C64F2",
                              fontSize: "12px",
                              fontWeight: "500",
                              lineHeight: "18px",
                            }}
                            onClick={() => {
                              setFormAble(false);
                              setUpdateGroup(-1);
                            }}
                          >
                            취소
                          </Button>
                          <Button
                            sx={{
                              width: "41px",
                              height: "32px",
                              background: "#1C64F2",
                              borderRadius: "4px",
                              padding: "7px 10px",
                              color: "#FFFFFF",
                              fontSize: "12px",
                              fontWeight: "500",
                              lineHeight: "18px",
                            }}
                            onClick={() => {
                              const newGroup = fakeGroupList.map((item) =>
                                item.id === idx
                                  ? { ...item, title: groupName }
                                  : item
                              );
                              setFakeGroupList(newGroup);
                              setUpdateGroup(-1);
                              setGroupName("");
                            }}
                          >
                            저장
                          </Button>
                        </Box>
                      </Stack>
                    );
                  } else {
                    return (
                      <Stack
                        key={idx}
                        sx={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "600px",
                          height: "96px",
                          padding: "24px",
                          border: `1px solid ${color}`,
                          borderRadius: "6px",
                          boxSizing: "border-box",
                          "&:hover": {
                            backgroundColor: "rgba(0, 0, 0, 0.04)",
                          },
                          background: background,
                        }}
                        onClick={() => {
                          handleSelected(idx.toString());
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirecton: "row",
                            gap: "16px",
                            alignItems: "center",
                          }}
                        >
                          <PeopleOutlinedIcon
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
                                  color: "#111928",
                                  fontSize: "16px",
                                  fontWeight: "600",
                                  lineHeight: "26px",
                                  padding: "2px 8px",
                                }}
                              >
                                {item.memberNum}
                              </Typography>
                            </Box>
                            <Typography
                              sx={{
                                color: detailFontColor,
                                fontSize: "14px",
                                fontWeight: "400",
                                lineHeight: "20px",
                              }}
                            >
                              {item.detailTitle}
                            </Typography>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "16px",
                            alignItems: "center",
                          }}
                        >
                          {item.isManager && (
                            <Typography
                              sx={{
                                height: "22px",
                                width: "fit-content",
                                padding: "2px 8px",
                                borderRadius: "4px",
                                background:
                                  "linear-gradient(0deg, rgba(63, 131, 248, 0.10) 0%, rgba(63, 131, 248, 0.10) 100%)",
                                color: "#1C64F2",
                                fontSize: "12px",
                                fontWeight: "600",
                                lineHeight: "18px",
                                textAlign: "center",
                              }}
                            >
                              운영진
                            </Typography>
                          )}
                          <IconButton
                            sx={{
                              color: "#111928",
                              "&:hover": {
                                backgroundColor: "rgba(0, 0, 0, 0.04)",
                              },
                            }}
                            onClick={(event) => {
                              setAnchorElement(event.currentTarget);
                            }}
                          >
                            <MoreHorizOutlinedIcon />
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
                              <Typography
                                sx={{
                                  ...popOverStyle,
                                }}
                                onClick={() => {
                                  setAnchorElement(null);
                                  setUpdateGroup(idx);
                                }}
                              >
                                {`이름 바꾸기`}
                              </Typography>
                              <Typography
                                sx={{
                                  ...popOverStyle,
                                }}
                                onClick={() => {
                                  setAnchorElement(null);
                                  setOpenDeleteDialog(true);
                                }}
                              >
                                {`그룹 삭제하기`}
                              </Typography>
                              <Typography
                                sx={{
                                  ...popOverStyle,
                                }}
                                onClick={onMoveDetail}
                              >
                                {`구성원 초대하기`}
                              </Typography>
                            </Stack>
                          </Popover>
                        </Box>
                      </Stack>
                    );
                  }
                })}
            </Stack>
          )}
          <Button
            startIcon={
              <Add sx={{ width: "20px", height: "20px", color: "#FFFFFF" }} />
            }
            sx={{
              background: "#1C64F2",
              padding: "10px 18px",
              gap: "4px",
              color: "#FFFFFF",
              borderRadius: "6px",
            }}
            onClick={() => {
              setFormAble(true);
            }}
          >{`새 직무그룹 추가`}</Button>
        </Stack>
        <Dialog
          open={openDeleteDialog}
          sx={{
            "& .MuiDialog-paper": {
              width: "500px",
              height: "212px",
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
              <ReportProblemOutlinedIcon sx={{ color: "#F05252" }} />
            </Box>

            <Stack gap="10px">
              <Stack height="32px" justifyContent="center">
                <Typography
                  fontWeight={600}
                  fontSize="18px"
                  color=" var(--character-title-85, rgba(0, 0, 0, 0.85)"
                >
                  {`‘영업 담당자’ 직무 그룹을 삭제`}
                </Typography>
              </Stack>
              <Stack justifyContent="center">
                <Typography fontWeight="400" fontSize="16px" color="#6B7280">
                  {`직무 그룹을 삭제하시면, 직무 그룹 목록에서 사라지며 해당 그룹에 속한 사원의 직무 그룹은 ‘미지정’ 상태가 됩니다.`}
                </Typography>
              </Stack>
            </Stack>
          </DialogTitle>

          <DialogActions sx={{ flex: 1, p: "16px 24px" }}>
            <Button
              sx={{
                width: "80px",
                height: "38px",
                bgcolor: "#F9FAFB",
                borderRadius: "6px",
                border: "1px solid #D1D5DB",
                padding: "9px 16px",
                fontWeight: 600,
                fontSize: "14px",
                color: "#374151",
                lineHeight: "20px",
              }}
              onClick={() => {
                setOpenDeleteDialog(false);
              }}
            >
              취소
            </Button>
            <Button
              sx={{
                height: "38px",
                bgcolor: "#F05252",
                borderRadius: "6px",
                padding: "9px 16px",
                fontWeight: 600,
                fontSize: "14px",
                color: "#FFFFFF",
                lineHeight: "20px",
              }}
              onClick={() => {
                setOpenDeleteDialog(false);
              }}
            >
              삭제하기
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
);

export default Manage;
