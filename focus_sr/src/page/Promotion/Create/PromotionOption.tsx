import * as React from "react";
import {
  Box,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  FormLabel,
  Input,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CircleIcon from "@mui/icons-material/Circle";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";

const PromotionOption: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children }, ref) => {
    const pageType = "WAPL";
    const imageLimitList: { [key: string]: number } = {
      ONSITE: 1,
      WAPL: 3,
      EMAIL: 5,
    };
    const imageLimit = imageLimitList[pageType];
    type TImage = {
      id: number;
      src: string;
    };

    const [promotionName, setPromotionName] = React.useState(""); //프로모션 이름
    const [media, setMedia] = React.useState(""); //매체
    const [manager, setManager] = React.useState(""); //담당자
    const [contentTitle, setContentTitle] = React.useState(""); //콘텐츠 제목
    const [content, setContent] = React.useState(""); //콘텐츠
    const [selectCta, setSelectCta] = React.useState(""); //행동유도버튼
    const [isAbleCtaForm, setIsAbleCtaForm] = React.useState(false); //행동유도버튼폼
    const [ctaForm, setCtaForm] = React.useState(""); //행동유도버튼폼 내용
    const [selectUrl, setSelectUrl] = React.useState("HOME"); //도착 URL
    const [images, setImages] = React.useState<TImage[]>(); //image url
    const [openImageDialog, setOpenImageDialog] = React.useState(false);

    const mediaFormStyle = {
      margin: "0px",
      width: "388px",
      height: "88px",
      display: "flex",
      flexDirection: "row",
      gap: "15px",
      padding: "12px 24px",
      boxSizing: "border-box",
      borderRadius: "6px",
      ".Mui-checked": {
        color: "#1C64F2",
      },
      ".MuiTypography-root ": {
        color: "#000",
        lineHeight: "15px",
      },
      /*  ".MuiTypography-root": checked && {
        color: "#1C64F2",
      }, */
    };

    const mediaList = [
      {
        title: "Onsite",
        description:
          "웹사이트에 접속한 고객에게 자사의 새로운 이벤트나 소식을 전달할 수 있습니다.",
      },
      {
        title: "WAPL",
        description:
          "웹사이트에 접속한 고객에게 자사의 새로운 이벤트나 소식을 전달할 수 있습니다.",
      },
      {
        title: "E-mail",
        description:
          "웹사이트에 접속한 고객에게 자사의 새로운 이벤트나 소식을 전달할 수 있습니다.",
      },
    ];

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      setMedia(evt.target.value);
    };

    const deleteImage = (id: number) => {
      const newImages = images?.filter((item) => item.id !== id);
      setImages(newImages);
    };

    const uploadImage = (evt: React.ChangeEvent<HTMLInputElement>) => {
      const files = evt.target.files;
      const file = files && files[0];

      if ((images && imageLimit > images.length) || !images) {
        if (file) {
          const url = window.URL.createObjectURL(file);
          const id = (images?.length || 0) + 1;
          setImages((prev) => [...(prev || []), { id: id, src: url }]);
        }
      } else setOpenImageDialog(true);
    };

    return (
      <div className={className} ref={ref}>
        {children}
        <Stack
          sx={{
            padding: "32px 32px 56px 32px",
            backgroundColor: "#F3F4F6",
            gap: "32px",
          }}
        >
          {/*프로모션 설정*/}
          <Stack
            sx={{
              borderTopRightRadius: "12px",
              borderTopLeftRadius: "12px",
              border: "1px solid #E5E7EB",
              gap: "1px",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Stack
              sx={{
                borderRadius: "12px",
                flexDirection: "row",
                height: "70px",
                padding: "16px 32px",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #E5E7EB",
              }}
            >
              <Typography
                sx={{ color: "#111928", fontSize: "20px", fontWeight: "700" }}
              >
                프로모션 설정
              </Typography>
              <KeyboardArrowDownIcon
                sx={{ width: "20px", height: "20px", color: "#111928" }}
              />
            </Stack>
            <Stack sx={{ padding: "32px", gap: "20px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <Typography
                  sx={{
                    width: "86px",
                    color: "rgba(0, 0, 0, 0.85)",
                    fontSize: "14px",
                    fontWeight: "600",
                    lineHeight: "20px",
                  }}
                >
                  프로모션 이름
                </Typography>
                <TextField
                  placeholder=""
                  value={promotionName}
                  onChange={(e) => {
                    const newName = e.target.value as string;
                    setPromotionName(newName);
                  }}
                  InputProps={{
                    sx: {
                      width: "394px",
                      height: "40px",
                      "& fieldset": {
                        padding: "0px 8px 0px 12px",
                        border: "1px solid var(--gray-200, #E5E7EB)",
                        borderRadius: "6px",
                      },
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "20px",
                  padding:
                    "10px var(--spacing-0, 0px) var(--spacing-12, 12px) var(--spacing-0, 0px)",
                  boxSizing: "border-box",
                }}
              >
                <Stack
                  width="86px"
                  flexDirection="row"
                  gap="4px"
                  alignItems="center"
                >
                  <Typography
                    sx={{
                      color: "rgba(0, 0, 0, 0.85)",
                      fontSize: "14px",
                      fontWeight: "600",
                      lineHeight: "20px",
                    }}
                  >
                    티깃 설정
                  </Typography>
                  <CircleIcon
                    sx={{ width: "4px", height: "4px", color: "#F05252" }}
                  />
                </Stack>

                <RadioGroup
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "row",
                    gap: "24px",
                  }}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={media}
                  name="media-type"
                >
                  {mediaList.map((item, idx) => {
                    const border =
                      media === item.title
                        ? "1px solid #1C64F2"
                        : "1px solid #D1D5DB";
                    const backgroundColor =
                      media === item.title ? "#3F83F81A" : "#FFF";
                    return (
                      <FormControlLabel
                        sx={{
                          ...mediaFormStyle,
                          border: border,
                          backgroundColor: backgroundColor,
                        }}
                        checked={media === item.title}
                        key={idx}
                        value={item.title}
                        control={<Radio />}
                        label={
                          <>
                            <Typography
                              component={"span"}
                              fontSize={"20px"}
                              fontWeight={"600"}
                              color={"#1F2A37"}
                            >
                              {item.title}
                            </Typography>
                            <br />
                            <br />
                            <Typography
                              component={"span"}
                              fontSize={"12px"}
                              fontWeight={"400"}
                              color={"#1F2A37"}
                            >
                              {item.description}
                            </Typography>
                          </>
                        }
                      ></FormControlLabel>
                    );
                  })}
                </RadioGroup>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <Stack
                  width="86px"
                  flexDirection="row"
                  gap="4px"
                  alignItems="center"
                >
                  <Typography
                    sx={{
                      color: "rgba(0, 0, 0, 0.85)",
                      fontSize: "14px",
                      fontWeight: "600",
                      lineHeight: "20px",
                    }}
                  >
                    담당자
                  </Typography>
                  <CircleIcon
                    sx={{ width: "4px", height: "4px", color: "#F05252" }}
                  />
                </Stack>
                <TextField
                  placeholder=""
                  value={manager}
                  onChange={(e) => {
                    const newManger = e.target.value as string;
                    setManager(newManger);
                  }}
                  InputProps={{
                    sx: {
                      width: "394px",
                      height: "40px",
                      "& fieldset": {
                        padding: "0px 8px 0px 12px",
                        border: "1px solid var(--gray-200, #E5E7EB)",
                        borderRadius: "6px",
                      },
                    },
                  }}
                />
              </Box>
            </Stack>
          </Stack>
          {/*기본설정 */}
          <Stack
            sx={{
              borderTopRightRadius: "12px",
              borderTopLeftRadius: "12px",
              border: "1px solid #E5E7EB",
              gap: "1px",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Stack
              sx={{
                borderRadius: "12px",
                flexDirection: "row",
                height: "70px",
                padding: "16px 32px",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #E5E7EB",
              }}
            >
              <Typography
                sx={{ color: "#111928", fontSize: "20px", fontWeight: "700" }}
              >
                기본 설정
              </Typography>
              <KeyboardArrowDownIcon
                sx={{ width: "20px", height: "20px", color: "#111928" }}
              />
            </Stack>
            <Stack sx={{ padding: "32px", gap: "32px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <Stack
                  width="86px"
                  flexDirection="row"
                  gap="4px"
                  alignItems="center"
                >
                  <Typography
                    sx={{
                      color: "rgba(0, 0, 0, 0.85)",
                      fontSize: "14px",
                      fontWeight: "600",
                      lineHeight: "20px",
                    }}
                  >
                    콘텐츠 제목
                  </Typography>
                  <CircleIcon
                    sx={{ width: "4px", height: "4px", color: "#F05252" }}
                  />
                </Stack>
                <TextField
                  placeholder=""
                  value={contentTitle}
                  onChange={(e) => {
                    const newContentTitle = e.target.value as string;
                    setContentTitle(newContentTitle);
                  }}
                  InputProps={{
                    sx: {
                      width: "394px",
                      height: "40px",
                      "& fieldset": {
                        padding: "0px 8px 0px 12px",
                        border: "1px solid var(--gray-200, #E5E7EB)",
                        borderRadius: "6px",
                      },
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "20px",
                }}
              >
                <Typography
                  sx={{
                    width: "86px",
                    color: "rgba(0, 0, 0, 0.85)",
                    fontSize: "14px",
                    fontWeight: "600",
                    lineHeight: "20px",
                  }}
                >
                  콘텐츠 내용
                </Typography>

                <TextField
                  placeholder="(콘텐츠 입력 예시) 안녕하십니까 고객님! 이 포인트는 영국으로 부터 시작되어 고객님의 잔여 포인트를 마이페이지에서 확인하실 수 있습니다."
                  value={content}
                  onChange={(e) => {
                    const newContent = e.target.value as string;
                    setContent(newContent);
                  }}
                  InputProps={{
                    sx: {
                      width: "1250px",
                      height: "149px",
                      "& fieldset": {
                        padding: "0px 8px 0px 12px",
                        border: "1px solid var(--gray-200, #E5E7EB)",
                        borderRadius: "6px",
                      },
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <Typography
                    sx={{
                      width: "86px",
                      color: "rgba(0, 0, 0, 0.85)",
                      fontSize: "14px",
                      fontWeight: "600",
                      lineHeight: "20px",
                    }}
                  >
                    이미지
                  </Typography>
                  <Typography
                    sx={{
                      width: "86px",
                      color: "#6B7280",
                      fontColor: "14px",
                      fontWeight: "400",
                      lineHeight: "20px",
                    }}
                  >
                    {`(${images?.length ? images?.length : 0}/${imageLimit})`}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <Stack
                    direction={"row"}
                    gap={"12px"}
                    alignItems={"center"}
                    justifyContent={"flex-start"}
                    sx={{ flex: 1, height: "100%" }}
                  >
                    <FormLabel
                      htmlFor={"image-file"}
                      sx={{
                        display: "flex",
                        width: "220px",
                        height: "220px",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#F9FAFB",
                        boxSizing: "border-box",
                        border: "1px dotted #D1D5DB",
                        cursor: "pointer",
                      }}
                    >
                      <Input
                        type="file"
                        value=""
                        id="image-file"
                        sx={{ display: "none" }}
                        onChange={uploadImage}
                      />
                      <Typography
                        component={"span"}
                        color={"#3F83F8"}
                        fontSize={"16px"}
                        fontWeight={"400"}
                        sx={{
                          verticalAlign: "center",
                        }}
                      >
                        <AddPhotoAlternateIcon
                          sx={{ width: "32px", height: "32px" }}
                        />
                        이미지 추가
                      </Typography>
                    </FormLabel>
                    {images &&
                      images.map((item, idx) => (
                        <Box key={idx} sx={{ position: "relative" }}>
                          <Box
                            component={"img"}
                            sx={{
                              display: "block",
                              width: "220px",
                              height: "220px",
                              objectFit: "contain",
                              boxSizing: "border-box",
                              border: "1px solid #D1D5DB",
                            }}
                            src={item.src}
                          />
                          <Button
                            onClick={() => {
                              deleteImage(item.id);
                            }}
                            sx={{
                              position: "absolute",
                              top: "8px",
                              right: "8px",
                              zIndex: 2,
                              padding: "6px",
                              borderRadius: "6px",
                              minWidth: "auto",
                              backgroundColor: "#F9FAFB",
                              "& .MuiButton-startIcon": {
                                margin: "0px",
                              },
                            }}
                            disableRipple
                            startIcon={
                              <CloseIcon
                                sx={{
                                  lineHeight: "none",
                                  marginRight: "0px",
                                  fontSize: "12.5px",
                                  color: "#111928",
                                }}
                              />
                            }
                          />
                        </Box>
                      ))}
                  </Stack>
                  <Typography
                    sx={{
                      color: "",
                      fontSize: "12px",
                      fontWeight: "400",
                      lineHeight: "18px",
                    }}
                  >
                    권장 크기 : 1000 x 1000 (윈도대상 750 x 1000)
                    <br />
                    대표이미지 기준 1000x1000 이상 이미지를 등록하시면, 이미지
                    확대 기능이 제공됩니다.
                    <br />
                    쇼핑검색에 노출되지 않는 경우 가이드를 확인해주세요.
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "20px",
                }}
              >
                <Typography
                  sx={{
                    width: "86px",
                    color: "rgba(0, 0, 0, 0.85)",
                    fontSize: "14px",
                    fontWeight: "600",
                    lineHeight: "20px",
                  }}
                >
                  행동유도버튼
                  <br />
                  (CTA)
                </Typography>
                <Select
                  value={selectCta}
                  onChange={(e) => {
                    const value = e.target.value as string;
                    setSelectCta(value);
                    if (value === "직접 기입") setIsAbleCtaForm(true);
                    else setIsAbleCtaForm(false);
                  }}
                  sx={{
                    width: "395px",
                    color: "#111928",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "26px",
                    padding: "10px 12px",
                    height: "46px",
                  }}
                >
                  <MenuItem value="더 알아보기">{`더 알아보기`}</MenuItem>
                  <MenuItem value="지금 신청하기">{`지금 신청하기`}</MenuItem>
                  <MenuItem value="구독하기">{`구독하기`}</MenuItem>
                  <MenuItem value="지금 예약하기">{`지금 예약하기`}</MenuItem>
                  <MenuItem value="직접 기입">{`직접 기입`}</MenuItem>
                </Select>
                {isAbleCtaForm && (
                  <TextField
                    placeholder="버튼에 들어갈 내용을 입력하세요"
                    value={ctaForm}
                    onChange={(e) => {
                      const newCta = e.target.value as string;
                      setCtaForm(newCta);
                    }}
                    InputProps={{
                      sx: {
                        width: "395px",
                        height: "40px",
                        "& fieldset": {
                          padding: "0px 8px 0px 12px",
                          border: "1px solid var(--gray-200, #E5E7EB)",
                          borderRadius: "6px",
                        },
                      },
                    }}
                  />
                )}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "20px",
                }}
              >
                <Typography
                  sx={{
                    width: "86px",
                    color: "rgba(0, 0, 0, 0.85)",
                    fontSize: "14px",
                    fontWeight: "600",
                    lineHeight: "20px",
                  }}
                >
                  도착 URL
                </Typography>
                <Select
                  value={selectUrl}
                  onChange={(e) => {
                    const value = e.target.value as string;
                    setSelectUrl(value);
                  }}
                  sx={{
                    width: "395px",
                    color: "#111928",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "26px",
                    padding: "10px 12px",
                    height: "46px",
                  }}
                >
                  <MenuItem value="HOME">{`HOME`}</MenuItem>
                </Select>
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Dialog
          open={openImageDialog}
          sx={{
            "& .MuiDialog-paper": {
              width: "343px",
              height: "190px",
              bgcolor: "#FFFFFF",
              borderRadius: "4px",
              border: "1px solid #000",
              boxShadow:
                "0px 10px 10px -5px rgba(15, 23, 42, 0.04), 0px 20px 25px -5px rgba(15, 23, 42, 0.10), 0px 0px 1px 0px rgba(15, 23, 42, 0.06)",
            },
          }}
        >
          <DialogTitle
            display="flex"
            sx={{
              padding: "24px",
              boxSizing: "border-box",
            }}
          >
            <Stack gap="16px" justifyContent="center">
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#0F172A",
                  fontSize: "16px",
                  fontWeight: "700",
                  lineHeight: "24px",
                }}
              >
                알림
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#0F172A",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "24px",
                }}
              >
                첨부 가능한 이미지 개수를 초과하였습니다.
              </Typography>
            </Stack>
          </DialogTitle>

          <DialogActions
            sx={{
              padding: "18px 24px 24px 24px",
              boxSizing: "border-box",
            }}
          >
            <Button
              sx={{
                width: 1,
                height: "36px",
                backgroundColor: "#0F172A",
                borderRadius: "2px",
                fontWeight: 600,
                fontSize: "14px",
                color: "#FFFFFF",
              }}
              onClick={() => {
                setOpenImageDialog(false);
              }}
            >
              확인
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
);

export default PromotionOption;
