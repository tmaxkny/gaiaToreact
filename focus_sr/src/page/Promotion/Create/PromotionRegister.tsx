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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const PromotionRegister: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children, moveToList, moveToNext }, ref) => {
    const imageLimitList: { [key: string]: number } = {
      Onsite: 1,
      WAPL: 3,
      "E-mail": 5,
    };

    type TImage = {
      id: number;
      src: string;
    };

    type TTargetRange = {
      lowestValue: string;
      highestValue: string;
    };
    type TTarget = string;
    type TSector = {
      data: TTargetRange | TTarget;
      isRange: boolean;
      isUp?: string; //'이상' or '이하'
    };

    type templateType = {
      CONTENTTITLE: string;
      CONTENT: string;
      CTA: string;
      CTAFORM?: string;
      URL: string;
      VISIT: TSector;
      PURCHASEAMOUNT: TSector;
    };
    const TEMPLATE: { [key: string]: templateType } = {
      Onsite: {
        CONTENTTITLE: "오늘 구매하시면 할인 혜택이 있어요",
        CONTENT: "오늘까지 사용가능한 크레딧 100,000원을 받아가세요",
        CTA: "직접 기입",
        CTAFORM: "크레딧 받으러 가기",
        URL: "DBAS>HOME",
        VISIT: {
          data: "3",
          isRange: false,
          isUp: "이상",
        },
        PURCHASEAMOUNT: {
          data: "0",
          isRange: false,
          isUp: "이하",
        },
      },
      WAPL: {
        CONTENTTITLE: "Tibero가 드리는 작은 선물이 도착했어요~!",
        CONTENT:
          "꽝 없는 뽑기 기계가 나타났어요 $(고객명)이 뽑게 될 혜택은 크레딧 or 이용권?",
        CTA: "더 알아보기",
        URL: "DBAS>HOME",
        VISIT: {
          data: "1",
          isRange: false,
          isUp: "이상",
        },
        PURCHASEAMOUNT: {
          data: "",
          isRange: false,
          isUp: "이상",
        },
      },
      "E-mail": {
        CONTENTTITLE: "Tibero7 신상품 출시 기념",
        CONTENT: "콘텐츠 스튜디오에서 가져온 템플릿(TBD)",
        CTA: "더 알아보기",
        URL: "DBAS>HOME>상품/상세(Tibero)",
        VISIT: {
          data: "5",
          isRange: false,
          isUp: "이상",
        },
        PURCHASEAMOUNT: {
          data: "5000000",
          isRange: false,
          isUp: "이상",
        },
      },
    };
    const template: string | null = null; //템플릿 종류

    const [promotionName, setPromotionName] = React.useState(""); //프로모션 이름
    const [media, setMedia] = React.useState(template ? template : "Onsite"); //매체
    const [manager, setManager] = React.useState(""); //담당자
    const [contentTitle, setContentTitle] = React.useState(
      template ? TEMPLATE[template].CONTENTTITLE : ""
    ); //콘텐츠 제목
    const [content, setContent] = React.useState(
      template ? TEMPLATE[template].CONTENT : ""
    ); //콘텐츠
    const [cta, setCta] = React.useState(
      template ? TEMPLATE[template].CTA : ""
    ); //행동유도버튼
    const [isAbleCtaForm, setIsAbleCtaForm] = React.useState(
      template === "Onsite" ? true : false
    ); //행동유도버튼폼
    const [ctaForm, setCtaForm] = React.useState(
      template ? TEMPLATE[template].CTAFORM : ""
    ); //행동유도버튼폼 내용
    const [selectUrl, setSelectUrl] = React.useState("HOME"); //도착 URL
    const [images, setImages] = React.useState<TImage[]>(); //image url
    const [openImageDialog, setOpenImageDialog] = React.useState(false);
    const [isPreview, setIsPreview] = React.useState(false);
    const [previewType, setPreviewType] = React.useState(
      template ? template : "EMPTY"
    ); //EMPTY || WAPL || E-mail

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

    const imageLimit = imageLimitList[media];

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

    const findPreviewType = () => {
      if (
        (!images || images?.length === 0) &&
        promotionName === "" &&
        contentTitle === "" &&
        cta === ""
      ) {
        setPreviewType("EMPTY");
      } else {
        if (media === "Onsite" || media === "WAPL") setPreviewType("WAPL");
        else setPreviewType("E-mail");
      }
    };

    React.useEffect(() => {
      setImages(undefined);
    }, [media]);

    if (!isPreview) {
      return (
        <div className={className} ref={ref}>
          {children}
          <Stack
            direction="row"
            sx={{
              padding: "20px 32px",
              justifyContent: "space-between",
              borderBottom: "1px solid #E5E7EB",
              height: "80px",
              boxSizing: "border-box",
            }}
            alignItems="center"
          >
            <Stack direction="row" sx={{ gap: "12px", alignItems: "center" }}>
              <ArrowBackIcon
                sx={{ width: "24px", height: "24px" }}
                onClick={moveToList}
              />
              <Typography
                sx={{
                  color: "#111928",
                  fontSize: "24px",
                  fontWeight: "700",
                  lineHeight: "32px",
                }}
              >
                프로모션 등록
              </Typography>
            </Stack>
            <Stack direction="row" sx={{ gap: "16px", alignItems: "center" }}>
              <Button
                onClick={() => {
                  setIsPreview(true);
                  findPreviewType();
                }}
                sx={{
                  background: "#FFFFFF",
                  border: "1px solid #A4CAFE",
                  borderRadius: "6px",
                  gap: "4px",
                  padding: "10px 18px",
                  color: "#1C64F2",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "26px",
                }}
              >
                미리보기
              </Button>
              <Button
                sx={{
                  width: "92px",
                  background: "#1C64F2",
                  borderRadius: "6px",
                  gap: "4px",
                  padding: "10px 18px",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "26px",
                }}
                onClick={moveToNext}
              >
                다음
              </Button>
            </Stack>
          </Stack>
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
                    value={cta}
                    onChange={(e) => {
                      const value = e.target.value as string;
                      setCta(value);
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
                width: "360px",
                height: "172px",
                bgcolor: "#FFFFFF",
                borderRadius: "4px",
                boxShadow: "0px 0px 20px 3px #0000001A;",
              },
            }}
          >
            <DialogTitle
              display="flex"
              flexDirection="column"
              sx={{ padding: "0px" }}
            >
              <Stack height="64px" justifyContent="center" alignItems="center">
                <Typography
                  sx={{
                    color: "#202124",
                    fontSize: "18px",
                    fontWeight: "600",
                    lineHeight: "24px",
                  }}
                >
                  알림
                </Typography>
              </Stack>
              <Stack height="52px" alignItems="center">
                <Typography
                  sx={{
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
                height: "56px",
                padding: "0px 24px 24px 24px",
                boxSizing: "border-box",
              }}
            >
              <Button
                sx={{
                  width: 1,
                  height: "36px",
                  backgroundColor: "#1C64F2",
                  borderRadius: "4px",
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#FFFFFF",
                  lineHeight: "20px",
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
    } else {
      if (previewType === "EMPTY") {
        return (
          <>
            <Stack
              direction="row"
              sx={{
                padding: "20px 32px",
                justifyContent: "space-between",
                borderBottom: "1px solid #E5E7EB",
                height: "80px",
                boxSizing: "border-box",
              }}
              alignItems="center"
            >
              <Stack direction="row" sx={{ gap: "12px", alignItems: "center" }}>
                <ArrowBackIcon
                  sx={{ width: "24px", height: "24px" }}
                  onClick={() => {
                    setIsPreview(false);
                  }}
                />
                <Typography
                  sx={{
                    color: "#111928",
                    fontSize: "24px",
                    fontWeight: "700",
                    lineHeight: "32px",
                  }}
                >
                  {`${media} 미리보기`}
                </Typography>
              </Stack>
            </Stack>
            <Stack
              sx={{
                height: "calc(100vh - 80px)",
                backgroundColor: "#D1D5DB",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack gap={"37px"} alignItems={"center"}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={"4px"}
                  sx={{
                    padding: "12px 13px",
                    borderRadius: "9999px",
                    background: "var(--white, #fff)",
                  }}
                >
                  <Typography
                    fontSize={"20px"}
                    fontFamily={"Roboto"}
                    fontWeight={"600"}
                    lineHeight={"26px"}
                    sx={{ color: "var(--gray-900, #111928)" }}
                  >
                    기본설정에서 프로모션에 들어갈 내용을 채워주세요
                  </Typography>
                  <Typography
                    fontSize={"16px"}
                    fontWeight={"600"}
                    lineHeight={"26px"}
                    fontStyle={"normal"}
                    textAlign={"center"}
                    fontFamily={"Pretendard"}
                    sx={{
                      cursor: "pointer",
                      padding: "10px 18px",
                      display: "flex",
                      alignItems: "center",
                      color: "var(--focus-blue-600, #1C64F2)",
                    }}
                    onClick={() => {
                      setIsPreview(false);
                    }}
                  >
                    기본설정 입력란으로 이동
                    <ArrowForwardIcon
                      fontSize="large"
                      sx={{ padding: "4px" }}
                    />
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    width: "424px",
                    background: "var(--white, #FFF)",
                    padding: "48px 32px",
                  }}
                  alignItems={"center"}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "22px",
                      display: "flex",
                      borderRadius: "999px",
                      alignSelf: "stretch",
                      background: "var(--gray-500, #6B7280)",
                      marginBottom: "16px",
                    }}
                  />
                  <Box
                    sx={{
                      width: "100%",
                      height: "12px",
                      borderRadius: "999px",
                      background: "var(--gray-300, #D1D5DB);",
                      marginBottom: "32px",
                    }}
                  />
                  <Box
                    sx={{
                      width: "100%",
                      height: "250px",
                      borderRadius: "8px",
                      background: "var(--gray-300, #D1D5DB);",
                      marginBottom: "32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                    >
                      <path
                        d="M6.45 47.5242L6.4 47.5742C5.725 46.0992 5.3 44.4242 5.125 42.5742C5.3 44.3992 5.775 46.0492 6.45 47.5242Z"
                        fill="#9CA3AF"
                      />
                      <path
                        d="M22.4969 25.9508C25.783 25.9508 28.4469 23.2869 28.4469 20.0008C28.4469 16.7147 25.783 14.0508 22.4969 14.0508C19.2108 14.0508 16.5469 16.7147 16.5469 20.0008C16.5469 23.2869 19.2108 25.9508 22.4969 25.9508Z"
                        fill="#9CA3AF"
                      />
                      <path
                        d="M40.475 5H19.525C10.425 5 5 10.425 5 19.525V40.475C5 43.2 5.475 45.575 6.4 47.575C8.55 52.325 13.15 55 19.525 55H40.475C49.575 55 55 49.575 55 40.475V34.75V19.525C55 10.425 49.575 5 40.475 5ZM50.925 31.25C48.975 29.575 45.825 29.575 43.875 31.25L33.475 40.175C31.525 41.85 28.375 41.85 26.425 40.175L25.575 39.475C23.8 37.925 20.975 37.775 18.975 39.125L9.625 45.4C9.075 44 8.75 42.375 8.75 40.475V19.525C8.75 12.475 12.475 8.75 19.525 8.75H40.475C47.525 8.75 51.25 12.475 51.25 19.525V31.525L50.925 31.25Z"
                        fill="#9CA3AF"
                      />
                    </svg>
                  </Box>
                  <Stack
                    gap={"10px"}
                    sx={{ width: "100%", marginBottom: "32px" }}
                  >
                    {Array.from({ length: 3 }).map((_, i) => (
                      <Box
                        key={i}
                        sx={{
                          width: "100%",
                          height: "12px",
                          borderRadius: "999px",
                          background: "var(--gray-300, #D1D5DB);",
                          marginBottom: "10px",
                        }}
                      />
                    ))}
                  </Stack>
                  <Box
                    sx={{
                      width: "100%",
                      height: "12px",
                      borderRadius: "6px",
                      background: "var(--gray-500, #6B7280);",
                      padding: "15px 18px",
                      color: "var(--white, #FFF)",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: "600",
                      lineHeight: "20px",
                      fontFamily: "Inter",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Button
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </>
        );
      }
      if (previewType === "WAPL") {
        return (
          <>
            <Stack
              direction="row"
              sx={{
                padding: "20px 32px",
                justifyContent: "space-between",
                borderBottom: "1px solid #E5E7EB",
                height: "80px",
                boxSizing: "border-box",
              }}
              alignItems="center"
            >
              <Stack direction="row" sx={{ gap: "12px", alignItems: "center" }}>
                <ArrowBackIcon
                  sx={{ width: "24px", height: "24px" }}
                  onClick={() => {
                    setIsPreview(false);
                  }}
                />
                <Typography
                  sx={{
                    color: "#111928",
                    fontSize: "24px",
                    fontWeight: "700",
                    lineHeight: "32px",
                  }}
                >
                  {`${media} 미리보기`}
                </Typography>
              </Stack>
            </Stack>
            <Stack
              sx={{ height: "calc(100vh - 80px)", backgroundColor: "#D1D5DB" }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Stack
                direction="column"
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={"23px"}
                sx={{
                  backgroundColor: "#fff",
                  boxSizing: "border-box",
                  width: "340px",
                  height: "auto",
                  borderRadius: "8px",
                  padding: "16px",
                }}
              >
                {images ? (
                  images.map((item, index) => {
                    return (
                      <Box
                        component={"img"}
                        src={item.src}
                        key={index}
                        sx={{
                          width: "308px",
                          height: "auto",
                          borderRadius: "10px",
                          objectFit: "contain",
                        }}
                      />
                    );
                  })
                ) : (
                  <Box
                    sx={{
                      width: "308px",
                      height: "232px",
                      borderRadius: "10px",
                      backgroundColor: "#F8E8D2",
                    }}
                  />
                )}
                <Typography fontSize={"16px"} fontWeight={"700"}>
                  {contentTitle}
                </Typography>
                <Stack
                  direction={"column"}
                  gap={"16px"}
                  sx={{ width: "100%", marginTop: "11px", height: "auto" }}
                >
                  <Typography
                    fontSize={"8px"}
                    fontWeight={"500"}
                    fontStyle={"normal"}
                    lineHeight={"12px"}
                    fontFamily={"Roboto"}
                    sx={{ color: "var(--gray-900, #111928)" }}
                  >
                    {content}
                  </Typography>
                  <Button
                    sx={{
                      padding: "9px 24px",
                      borderRadius: "6px",
                      backgroundColor: "#EA5083",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#fff",
                      margin: "0px sauto",
                    }}
                  >
                    {cta === "직접 기입" ? ctaForm : cta}
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </>
        );
      }
      if (previewType === "E-mail") {
        return (
          <>
            <Stack
              direction="row"
              sx={{
                padding: "20px 32px",
                justifyContent: "space-between",
                borderBottom: "1px solid #E5E7EB",
                height: "80px",
                boxSizing: "border-box",
              }}
              alignItems="center"
            >
              <Stack direction="row" sx={{ gap: "12px", alignItems: "center" }}>
                <ArrowBackIcon
                  sx={{ width: "24px", height: "24px" }}
                  onClick={() => {
                    setIsPreview(false);
                  }}
                />
                <Typography
                  sx={{
                    color: "#111928",
                    fontSize: "24px",
                    fontWeight: "700",
                    lineHeight: "32px",
                  }}
                >
                  {`${media} 미리보기`}
                </Typography>
              </Stack>
            </Stack>
            <Stack
              sx={{
                minHeight: "calc(100vh - 80px)",
                backgroundColor: "#D1D5DB",
              }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Stack
                direction={"column"}
                sx={{
                  width: "364px",
                  height: "auto",
                  padding: "32px 32px 48px 32px",
                  background: "var(--white, #FFF)",
                }}
                gap={"32px"}
              >
                <Typography
                  fontSize={"24px"}
                  fontWeight={"700"}
                  lineHeight={"32px"}
                  textAlign={"center"}
                  sx={{ color: "#111928" }}
                >
                  {contentTitle !== "" ? contentTitle : "Email 타이틀"}
                </Typography>
                <Stack
                  direction={"column"}
                  sx={{ width: "100%", height: "auto" }}
                  gap={"16px"}
                >
                  {images ? (
                    images.map((item, index) => {
                      return (
                        <Box
                          component={"img"}
                          src={item.src}
                          key={index}
                          sx={{
                            width: "308px",
                            height: "auto",
                            borderRadius: "10px",
                            objectFit: "contain",
                          }}
                        />
                      );
                    })
                  ) : (
                    <Box
                      sx={{
                        width: "308px",
                        height: "232px",
                        borderRadius: "10px",
                        backgroundColor: "#F8E8D2",
                      }}
                    />
                  )}
                  <Stack
                    direction={"column"}
                    gap={"16px"}
                    sx={{ width: "100%", marginTop: "11px", height: "auto" }}
                  >
                    <Typography
                      fontSize={"8px"}
                      fontWeight={"500"}
                      fontStyle={"normal"}
                      lineHeight={"12px"}
                      fontFamily={"Roboto"}
                      sx={{ color: "var(--gray-900, #111928)" }}
                    >
                      {content}
                    </Typography>
                    <Button
                      sx={{
                        padding: "9px 24px",
                        borderRadius: "6px",
                        backgroundColor: "#EA5083",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#fff",
                        margin: "0px sauto",
                      }}
                    >
                      {cta === "직접 기입" ? ctaForm : cta}
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </>
        );
      }
    }
  }
);

export default PromotionRegister;
