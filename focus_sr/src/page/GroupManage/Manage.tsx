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
import CancelIcon from "@mui/icons-material/Cancel";

export const Manage: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children, moveToDetail }, ref) => {
    const isMaster: number = 0; // 마스터: 0, 부마스터:1 운연진: 2 사원: 3
    const [groupList, setGroupList] = React.useState([
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

    const [groupName, setGroupName] = React.useState(""); //새 직무그룹추가
    const [editGroupName, setEditGroupName] = React.useState(""); //수정할 그 직무그릅
    const [select, setSelect] = React.useState<number>();
    const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
    const [anchorElement, setAnchorElement] =
      React.useState<HTMLElement | null>(null);
    const isOpened = Boolean(anchorElement);
    const [formAble, setFormAble] = React.useState(false); //새 직무그룹 추가를 누르면 생기는 폼
    const [formFocus, setFormFocus] = React.useState(false); //추가, 수정 폼에서 clear아이콘
    const [updateGroup, setUpdateGroup] = React.useState<number>();

    const handleSelected = (idx: number) => {
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
          {!groupList ? (
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
                      onFocus={() => setFormFocus(true)}
                      onBlur={() => setFormFocus(false)}
                      InputProps={{
                        sx: {
                          width: "350px",
                          height: "var(--spacing-40, 40px)",
                          fontSize: "16px",
                          fontWeight: "400px",
                          lineHeight: "26px",
                        },
                        endAdornment: formFocus ? (
                          <IconButton
                            onMouseDown={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setGroupName("");
                            }}
                          >
                            <CancelIcon
                              sx={{
                                width: "20px",
                                height: "20px",
                                color: "#9CA3AF",
                                cursor: "default",
                              }}
                            />
                          </IconButton>
                        ) : (
                          <></>
                        ),
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
                          id: groupList.length,
                          title: groupName,
                          memberNum: "0",
                          detailTitle: "지정된 접근 가능 메뉴 없음",
                          isManager: false,
                        };
                        setGroupList([...groupList, newGroup]);
                        setFormAble(false);
                        setGroupName("");
                      }}
                    >
                      저장
                    </Button>
                  </Box>
                </Stack>
              )}
              {groupList &&
                groupList.map((item) => {
                  const background = item.id === select ? "#EBF5FF" : "#FFF";
                  const color = item.id === select ? "#1C64F2" : "#D1D5DB";
                  const fontColor = item.id === select ? "#1C64F2" : "#111928";
                  const detailFontColor =
                    item.id === select ? "#1C64F2" : "#6B7280";
                  if (item.id === updateGroup) {
                    return (
                      <Stack
                        key={item.id}
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
                            value={editGroupName}
                            onChange={(e) => {
                              const newGroupName = e.target.value as string;
                              setEditGroupName(newGroupName);
                            }}
                            onFocus={() => setFormFocus(true)}
                            onBlur={() => setFormFocus(false)}
                            InputProps={{
                              sx: {
                                width: "350px",
                                height: "var(--spacing-40, 40px)",
                                fontSize: "16px",
                                fontWeight: "400px",
                                lineHeight: "26px",
                              },
                              endAdornment: formFocus ? (
                                <IconButton
                                  onMouseDown={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setEditGroupName("");
                                  }}
                                >
                                  <CancelIcon
                                    sx={{
                                      width: "20px",
                                      height: "20px",
                                      color: "#9CA3AF",
                                      cursor: "default",
                                    }}
                                  />
                                </IconButton>
                              ) : (
                                <></>
                              ),
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
                              const newGroup = groupList.map((item) =>
                                item.id === updateGroup
                                  ? { ...item, title: editGroupName }
                                  : item
                              );
                              setGroupList(newGroup);
                              setUpdateGroup(-1);
                              setEditGroupName("");
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
                        key={item.id}
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
                          handleSelected(item.id);
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
                            open={isMaster !== 3 && isOpened}
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
                              {(isMaster === 0 || isMaster === 1) && (
                                <Typography
                                  sx={{
                                    ...popOverStyle,
                                  }}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setAnchorElement(null);
                                    setUpdateGroup(select);
                                  }}
                                >
                                  {`이름 바꾸기`}
                                </Typography>
                              )}
                              {(isMaster === 0 || isMaster === 1) && (
                                <Typography
                                  sx={{
                                    ...popOverStyle,
                                  }}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setAnchorElement(null);
                                    setOpenDeleteDialog(true);
                                  }}
                                >
                                  {`그룹 삭제하기`}
                                </Typography>
                              )}
                              <Typography
                                sx={{
                                  ...popOverStyle,
                                }}
                                onClick={moveToDetail}
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
              width: "360px",
              height: "212px",
              bgcolor: "#FFFFFF",
            },
          }}
        >
          <DialogTitle display="flex">
            <Stack gap="10px">
              <Typography
                textAlign="center"
                fontWeight={600}
                fontSize="18px"
                color=" var(--character-title-85, rgba(0, 0, 0, 0.85)"
              >
                {`‘영업 담당자’ 직무 그룹을 삭제`}
              </Typography>

              <Typography
                textAlign="center"
                fontWeight="400"
                fontSize="16px"
                color="#6B7280"
              >
                {`직무 그룹을 삭제하시면, 직무 그룹 목록에서 사라지며 해당 그룹에 속한 사원의 직무 그룹은 ‘미지정’ 상태가 됩니다.`}
              </Typography>
            </Stack>
          </DialogTitle>

          <DialogActions
            sx={{
              flex: 1,
              padding: "0px 20px 20px 20px",
              height: "56px",
            }}
          >
            <Button
              sx={{
                width: "154px",
                height: "36px",
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
                width: "154px",
                height: "36px",
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
