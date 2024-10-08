import * as React from "react";
import {
  Box,
  Stack,
  TextField,
  Typography,
  Select,
  MenuItem,
  Checkbox,
  InputAdornment,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const PromotionRegister2: React.FC<any> = React.forwardRef<any, any>(
  ({ className, moveToList, moveToBefore, moveToCreate, children }, ref) => {
    const pageType = "E-mail";
    const isOnSitePage = pageType === ("Onsite" as string) ? true : false;
    const template: string | null = null; //템플릿 종류

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

    const [visit, setVisit] = React.useState<TSector>(
      template && TEMPLATE[template] && TEMPLATE[template].VISIT
        ? TEMPLATE[template].VISIT
        : {
            data: "",
            isRange: false,
            isUp: "이상",
          }
    ); //방문횟수
    const [purchaseAmount, setPurchaseAmount] = React.useState<TSector>(
      template && TEMPLATE[template] && TEMPLATE[template].PURCHASEAMOUNT
        ? TEMPLATE[template].PURCHASEAMOUNT
        : {
            data: "",
            isRange: false,
            isUp: "이상",
          }
    ); //구매금액
    const [point, setPoint] = React.useState<TSector>({
      data: "",
      isRange: false,
      isUp: "이상",
    }); //포인트 잔여량
    const [headCount, setHeadCount] = React.useState<TSector>({
      data: "",
      isRange: false,
      isUp: "이상",
    }); //직원수
    const [sector, setSector] = React.useState(""); //업종
    const [rank, setRank] = React.useState(""); //직급
    const [isReserve, setIsReserve] = React.useState(""); //예약전송
    const [url, setUrl] = React.useState(""); //노출위치

    const sectorList = ["공공", "교육", "언론/미디어", "연구", "기타"];
    const rankList = [
      "사원",
      "주임",
      "대리",
      "과장",
      "차장",
      "부장",
      "임원",
      "CEO",
    ];

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      setIsReserve(evt.target.value);
    };

    return (
      <div className={className} ref={ref}>
        <Stack>
          <Stack
            direction="row"
            sx={{
              padding: "20px 32px",
              justifyContent: "space-between",
              borderBottom: "1px solid #E5E7EB",
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
                onClick={moveToBefore}
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
                이전 단계
              </Button>
              <Button
                sx={{
                  background: "#1C64F2",
                  borderRadius: "6px",
                  gap: "4px",
                  padding: "10px 18px",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "26px",
                }}
                onClick={moveToCreate}
              >
                프로모션 전송
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
            {/*타깃 및 상세 설정*/}
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
                  타깃 및 상세 설정
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
                    gap: "20px",
                  }}
                >
                  <Stack width="86px" flexDirection="row" gap="4px">
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, 0.85)",
                        fontSize: "14px",
                        fontWeight: "600",
                        lineHeight: "20px",
                      }}
                    >
                      타깃 설정
                    </Typography>
                    <HelpOutlineIcon
                      sx={{ width: "16px", height: "16px", color: "#374151" }}
                    />
                  </Stack>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      padding: "24px var(--spacing-40, 40px)",
                      gap: "12px",
                      borderRadius: "12px",
                      backgroundColor: "#F9FAFB",
                    }}
                  >
                    <Stack
                      sx={{
                        flexDirection: "row",
                        marginLeft: "44px",
                        gap: "20px",
                      }}
                    >
                      <Typography
                        sx={{
                          width: "200px",
                          color: "#6B7280",
                          fontSize: "14px",
                          fontWeight: "600",
                          lineHeight: "20px",
                        }}
                      >
                        타깃 설정 조건
                      </Typography>
                      <Typography
                        sx={{
                          width: "200px",
                          color: "#6B7280",
                          fontSize: "14px",
                          fontWeight: "600",
                          lineHeight: "20px",
                        }}
                      >
                        타깃 설정 조건 범위
                      </Typography>
                    </Stack>
                    <Stack sx={{ gap: "24px" }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: "20px",
                        }}
                      >
                        <Checkbox sx={{ width: "24px", height: "24px" }} />
                        <Typography
                          sx={{
                            backgroundColor: "#F3F4F6",
                            width: "200px",
                            padding: "10px var(--spacing-12, 12px)",
                            color: "#111928",
                            border: "1px solid #E5E7EB",
                            boxSizing: "border-box",
                          }}
                        >
                          방문횟수
                        </Typography>
                        <Select
                          value={visit.isRange ? "특정 범위" : "~이상/이하"}
                          onChange={(e) => {
                            const value = e.target.value as string;
                            if (value === "특정 범위")
                              setVisit(() => ({
                                data: { lowestValue: "0", highestValue: "0" },
                                isRange: true,
                              }));
                            else
                              setVisit(() => ({
                                data: "0",
                                isRange: false,
                                isUp: "이상",
                              }));
                          }}
                          sx={{
                            width: "200px",
                            color: "#111928",
                            fontSize: "16px",
                            fontWeight: "400",
                            lineHeight: "26px",
                            padding: "10px 12px",
                            height: "40px",
                          }}
                        >
                          <MenuItem value="~이상/이하">~이상/이하</MenuItem>
                          <MenuItem value="특정 범위">특정 범위</MenuItem>
                        </Select>
                        {!visit.isRange ? (
                          <Stack
                            flexDirection="row"
                            gap="20px"
                            alignItems="center"
                          >
                            <TextField
                              placeholder=""
                              value={visit.data}
                              onChange={(e) => {
                                const newData = e.target.value as string;
                                setVisit((prev) => ({
                                  ...prev,
                                  data: newData,
                                }));
                              }}
                              InputProps={{
                                sx: {
                                  width: "200px",
                                  height: "40px",
                                  "& fieldset": {
                                    padding: "0px 10px 0px 12px",
                                    border:
                                      "1px solid var(--gray-200, #E5E7EB)",
                                    borderRadius: "4px",
                                  },
                                },
                                endAdornment: (
                                  <InputAdornment
                                    position="end"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: "400px",
                                      color: "#111928",
                                      lineHeight: "26px",
                                    }}
                                  >
                                    회
                                  </InputAdornment>
                                ),
                              }}
                            />
                            <Select
                              value={visit.isUp}
                              onChange={(e) => {
                                const value = e.target.value as string;
                                setVisit((prev) => ({ ...prev, isUp: value }));
                              }}
                              sx={{
                                width: "200px",
                                color: "#111928",
                                fontSize: "16px",
                                fontWeight: "400",
                                lineHeight: "26px",
                                padding: "10px 12px",
                                height: "40px",
                              }}
                            >
                              <MenuItem value="이상">이상</MenuItem>
                              <MenuItem value="이하">이하</MenuItem>
                            </Select>
                          </Stack>
                        ) : (
                          <Stack
                            flexDirection="row"
                            alignItems="center"
                            gap="4px"
                          >
                            <TextField
                              placeholder=""
                              value={(visit.data as TTargetRange).lowestValue}
                              onChange={(e) => {
                                const newData = e.target.value as string;
                                setVisit((prev) => ({
                                  ...prev,
                                  data: {
                                    lowestValue: newData,
                                    highestValue: (prev.data as TTargetRange)
                                      .highestValue,
                                  },
                                }));
                              }}
                              InputProps={{
                                sx: {
                                  width: "200px",
                                  height: "40px",
                                  "& fieldset": {
                                    padding: "0px 10px 0px 12px",
                                    border:
                                      "1px solid var(--gray-200, #E5E7EB)",
                                    borderRadius: "4px",
                                  },
                                },
                                endAdornment: (
                                  <InputAdornment
                                    position="end"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: "400px",
                                      color: "#111928",
                                      lineHeight: "26px",
                                    }}
                                  >
                                    회
                                  </InputAdornment>
                                ),
                              }}
                            />
                            <Typography
                              sx={{
                                color: "#111928",
                                fontSize: "16px",
                                fontWeight: "400",
                                lineHeight: "26px",
                              }}
                            >
                              ~
                            </Typography>
                            <TextField
                              placeholder=""
                              value={(visit.data as TTargetRange).highestValue}
                              onChange={(e) => {
                                const newData = e.target.value as string;
                                setVisit((prev) => ({
                                  ...prev,
                                  data: {
                                    highestValue: newData,
                                    lowestValue: (prev.data as TTargetRange)
                                      .lowestValue,
                                  },
                                }));
                              }}
                              InputProps={{
                                sx: {
                                  width: "200px",
                                  height: "40px",
                                  "& fieldset": {
                                    padding: "0px 10px 0px 12px",
                                    border:
                                      "1px solid var(--gray-200, #E5E7EB)",
                                    borderRadius: "4px",
                                  },
                                },
                                endAdornment: (
                                  <InputAdornment
                                    position="end"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: "400px",
                                      color: "#111928",
                                      lineHeight: "26px",
                                    }}
                                  >
                                    회
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </Stack>
                        )}
                      </Box>
                      {/**구매금액 */}
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: "20px",
                        }}
                      >
                        <Checkbox sx={{ width: "24px", height: "24px" }} />
                        <Typography
                          sx={{
                            backgroundColor: "#F3F4F6",
                            width: "200px",
                            padding: "10px var(--spacing-12, 12px)",
                            color: "#111928",
                            border: "1px solid #E5E7EB",
                            boxSizing: "border-box",
                          }}
                        >
                          구매금액
                        </Typography>
                        <Select
                          value={
                            purchaseAmount.isRange ? "특정 범위" : "~이상/이하"
                          }
                          onChange={(e) => {
                            const value = e.target.value as string;
                            if (value === "특정 범위")
                              setPurchaseAmount(() => ({
                                data: { lowestValue: "0", highestValue: "0" },
                                isRange: true,
                              }));
                            else
                              setPurchaseAmount(() => ({
                                data: "0",
                                isRange: false,
                                isUp: "이상",
                              }));
                          }}
                          sx={{
                            width: "200px",
                            color: "#111928",
                            fontSize: "16px",
                            fontWeight: "400",
                            lineHeight: "26px",
                            padding: "10px 12px",
                            height: "40px",
                          }}
                        >
                          <MenuItem value="~이상/이하">~이상/이하</MenuItem>
                          <MenuItem value="특정 범위">특정 범위</MenuItem>
                        </Select>
                        {!purchaseAmount.isRange ? (
                          <Stack
                            flexDirection="row"
                            gap="20px"
                            alignItems="center"
                          >
                            <TextField
                              placeholder=""
                              value={purchaseAmount.data}
                              onChange={(e) => {
                                const newData = e.target.value as string;
                                setPurchaseAmount((prev) => ({
                                  ...prev,
                                  data: newData,
                                }));
                              }}
                              InputProps={{
                                sx: {
                                  width: "200px",
                                  height: "40px",
                                  "& fieldset": {
                                    padding: "0px 10px 0px 12px",
                                    border:
                                      "1px solid var(--gray-200, #E5E7EB)",
                                    borderRadius: "4px",
                                  },
                                },
                                endAdornment: (
                                  <InputAdornment
                                    position="end"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: "400px",
                                      color: "#111928",
                                      lineHeight: "26px",
                                    }}
                                  >
                                    원
                                  </InputAdornment>
                                ),
                              }}
                            />
                            <Select
                              value={purchaseAmount.isUp}
                              onChange={(e) => {
                                const value = e.target.value as string;
                                setPurchaseAmount((prev) => ({
                                  ...prev,
                                  isUp: value,
                                }));
                              }}
                              sx={{
                                width: "200px",
                                color: "#111928",
                                fontSize: "16px",
                                fontWeight: "400",
                                lineHeight: "26px",
                                padding: "10px 12px",
                                height: "40px",
                              }}
                            >
                              <MenuItem value="이상">이상</MenuItem>
                              <MenuItem value="이하">이하</MenuItem>
                            </Select>
                          </Stack>
                        ) : (
                          <Stack
                            flexDirection="row"
                            alignItems="center"
                            gap="4px"
                          >
                            <TextField
                              placeholder=""
                              value={
                                (purchaseAmount.data as TTargetRange)
                                  .lowestValue
                              }
                              onChange={(e) => {
                                const newData = e.target.value as string;
                                setPurchaseAmount((prev) => ({
                                  ...prev,
                                  data: {
                                    lowestValue: newData,
                                    highestValue: (prev.data as TTargetRange)
                                      .highestValue,
                                  },
                                }));
                              }}
                              InputProps={{
                                sx: {
                                  width: "200px",
                                  height: "40px",
                                  "& fieldset": {
                                    padding: "0px 10px 0px 12px",
                                    border:
                                      "1px solid var(--gray-200, #E5E7EB)",
                                    borderRadius: "4px",
                                  },
                                },
                                endAdornment: (
                                  <InputAdornment
                                    position="end"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: "400px",
                                      color: "#111928",
                                      lineHeight: "26px",
                                    }}
                                  >
                                    원
                                  </InputAdornment>
                                ),
                              }}
                            />
                            <Typography
                              sx={{
                                color: "#111928",
                                fontSize: "16px",
                                fontWeight: "400",
                                lineHeight: "26px",
                              }}
                            >
                              ~
                            </Typography>
                            <TextField
                              placeholder=""
                              value={
                                (purchaseAmount.data as TTargetRange)
                                  .highestValue
                              }
                              onChange={(e) => {
                                const newData = e.target.value as string;
                                setPurchaseAmount((prev) => ({
                                  ...prev,
                                  data: {
                                    highestValue: newData,
                                    lowestValue: (prev.data as TTargetRange)
                                      .lowestValue,
                                  },
                                }));
                              }}
                              InputProps={{
                                sx: {
                                  width: "200px",
                                  height: "40px",
                                  "& fieldset": {
                                    padding: "0px 10px 0px 12px",
                                    border:
                                      "1px solid var(--gray-200, #E5E7EB)",
                                    borderRadius: "4px",
                                  },
                                },
                                endAdornment: (
                                  <InputAdornment
                                    position="end"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: "400px",
                                      color: "#111928",
                                      lineHeight: "26px",
                                    }}
                                  >
                                    원
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </Stack>
                        )}
                      </Box>
                      {/**포인트 */}
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: "20px",
                        }}
                      >
                        <Checkbox sx={{ width: "24px", height: "24px" }} />
                        <Typography
                          sx={{
                            backgroundColor: "#F3F4F6",
                            width: "200px",
                            padding: "10px var(--spacing-12, 12px)",
                            color: "#111928",
                            border: "1px solid #E5E7EB",
                            boxSizing: "border-box",
                          }}
                        >
                          포인트 잔여량
                        </Typography>
                        <Select
                          value={point.isRange ? "특정 범위" : "~이상/이하"}
                          onChange={(e) => {
                            const value = e.target.value as string;
                            if (value === "특정 범위")
                              setPoint(() => ({
                                data: { lowestValue: "0", highestValue: "0" },
                                isRange: true,
                              }));
                            else
                              setPoint(() => ({
                                data: "0",
                                isRange: false,
                                isUp: "이상",
                              }));
                          }}
                          sx={{
                            width: "200px",
                            color: "#111928",
                            fontSize: "16px",
                            fontWeight: "400",
                            lineHeight: "26px",
                            padding: "10px 12px",
                            height: "40px",
                          }}
                        >
                          <MenuItem value="~이상/이하">~이상/이하</MenuItem>
                          <MenuItem value="특정 범위">특정 범위</MenuItem>
                        </Select>
                        {!point.isRange ? (
                          <Stack
                            flexDirection="row"
                            gap="20px"
                            alignItems="center"
                          >
                            <TextField
                              placeholder=""
                              value={point.data}
                              onChange={(e) => {
                                const newData = e.target.value as string;
                                setPoint((prev) => ({
                                  ...prev,
                                  data: newData,
                                }));
                              }}
                              InputProps={{
                                sx: {
                                  width: "200px",
                                  height: "40px",
                                  "& fieldset": {
                                    padding: "0px 10px 0px 12px",
                                    border:
                                      "1px solid var(--gray-200, #E5E7EB)",
                                    borderRadius: "4px",
                                  },
                                },
                                endAdornment: (
                                  <InputAdornment
                                    position="end"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: "400px",
                                      color: "#111928",
                                      lineHeight: "26px",
                                    }}
                                  >
                                    포인트
                                  </InputAdornment>
                                ),
                              }}
                            />
                            <Select
                              value={point.isUp}
                              onChange={(e) => {
                                const value = e.target.value as string;
                                setPoint((prev) => ({
                                  ...prev,
                                  isUp: value,
                                }));
                              }}
                              sx={{
                                width: "200px",
                                color: "#111928",
                                fontSize: "16px",
                                fontWeight: "400",
                                lineHeight: "26px",
                                padding: "10px 12px",
                                height: "40px",
                              }}
                            >
                              <MenuItem value="이상">이상</MenuItem>
                              <MenuItem value="이하">이하</MenuItem>
                            </Select>
                          </Stack>
                        ) : (
                          <Stack
                            flexDirection="row"
                            alignItems="center"
                            gap="4px"
                          >
                            <TextField
                              placeholder=""
                              value={(point.data as TTargetRange).lowestValue}
                              onChange={(e) => {
                                const newData = e.target.value as string;
                                setPoint((prev) => ({
                                  ...prev,
                                  data: {
                                    lowestValue: newData,
                                    highestValue: (prev.data as TTargetRange)
                                      .highestValue,
                                  },
                                }));
                              }}
                              InputProps={{
                                sx: {
                                  width: "200px",
                                  height: "40px",
                                  "& fieldset": {
                                    padding: "0px 10px 0px 12px",
                                    border:
                                      "1px solid var(--gray-200, #E5E7EB)",
                                    borderRadius: "4px",
                                  },
                                },
                                endAdornment: (
                                  <InputAdornment
                                    position="end"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: "400px",
                                      color: "#111928",
                                      lineHeight: "26px",
                                    }}
                                  >
                                    포인트
                                  </InputAdornment>
                                ),
                              }}
                            />
                            <Typography
                              sx={{
                                color: "#111928",
                                fontSize: "16px",
                                fontWeight: "400",
                                lineHeight: "26px",
                              }}
                            >
                              ~
                            </Typography>
                            <TextField
                              placeholder=""
                              value={(point.data as TTargetRange).highestValue}
                              onChange={(e) => {
                                const newData = e.target.value as string;
                                setPoint((prev) => ({
                                  ...prev,
                                  data: {
                                    highestValue: newData,
                                    lowestValue: (prev.data as TTargetRange)
                                      .lowestValue,
                                  },
                                }));
                              }}
                              InputProps={{
                                sx: {
                                  width: "200px",
                                  height: "40px",
                                  "& fieldset": {
                                    padding: "0px 10px 0px 12px",
                                    border:
                                      "1px solid var(--gray-200, #E5E7EB)",
                                    borderRadius: "4px",
                                  },
                                },
                                endAdornment: (
                                  <InputAdornment
                                    position="end"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: "400px",
                                      color: "#111928",
                                      lineHeight: "26px",
                                    }}
                                  >
                                    포인트
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </Stack>
                        )}
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: "20px",
                        }}
                      >
                        <Checkbox sx={{ width: "24px", height: "24px" }} />
                        <Typography
                          sx={{
                            backgroundColor: "#F3F4F6",
                            width: "200px",
                            padding: "10px var(--spacing-12, 12px)",
                            color: "#111928",
                            border: "1px solid #E5E7EB",
                            boxSizing: "border-box",
                          }}
                        >
                          직원수
                        </Typography>
                        <Select
                          value={headCount.isRange ? "특정 범위" : "~이상/이하"}
                          onChange={(e) => {
                            const value = e.target.value as string;
                            if (value === "특정 범위")
                              setHeadCount(() => ({
                                data: { lowestValue: "0", highestValue: "0" },
                                isRange: true,
                              }));
                            else
                              setHeadCount(() => ({
                                data: "0",
                                isRange: false,
                                isUp: "이상",
                              }));
                          }}
                          sx={{
                            width: "200px",
                            color: "#111928",
                            fontSize: "16px",
                            fontWeight: "400",
                            lineHeight: "26px",
                            padding: "10px 12px",
                            height: "40px",
                          }}
                        >
                          <MenuItem value="~이상/이하">~이상/이하</MenuItem>
                          <MenuItem value="특정 범위">특정 범위</MenuItem>
                        </Select>
                        {!headCount.isRange ? (
                          <Stack
                            flexDirection="row"
                            gap="20px"
                            alignItems="center"
                          >
                            <TextField
                              placeholder=""
                              value={headCount.data}
                              onChange={(e) => {
                                const newData = e.target.value as string;
                                setPoint((prev) => ({
                                  ...prev,
                                  data: newData,
                                }));
                              }}
                              InputProps={{
                                sx: {
                                  width: "200px",
                                  height: "40px",
                                  "& fieldset": {
                                    padding: "0px 10px 0px 12px",
                                    border:
                                      "1px solid var(--gray-200, #E5E7EB)",
                                    borderRadius: "4px",
                                  },
                                },
                                endAdornment: (
                                  <InputAdornment
                                    position="end"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: "400px",
                                      color: "#111928",
                                      lineHeight: "26px",
                                    }}
                                  >
                                    명
                                  </InputAdornment>
                                ),
                              }}
                            />
                            <Select
                              value={headCount.isUp}
                              onChange={(e) => {
                                const value = e.target.value as string;
                                setHeadCount((prev) => ({
                                  ...prev,
                                  isUp: value,
                                }));
                              }}
                              sx={{
                                width: "200px",
                                color: "#111928",
                                fontSize: "16px",
                                fontWeight: "400",
                                lineHeight: "26px",
                                padding: "10px 12px",
                                height: "40px",
                              }}
                            >
                              <MenuItem value="이상">이상</MenuItem>
                              <MenuItem value="이하">이하</MenuItem>
                            </Select>
                          </Stack>
                        ) : (
                          <Stack
                            flexDirection="row"
                            alignItems="center"
                            gap="4px"
                          >
                            <TextField
                              placeholder=""
                              value={
                                (headCount.data as TTargetRange).lowestValue
                              }
                              onChange={(e) => {
                                const newData = e.target.value as string;
                                setHeadCount((prev) => ({
                                  ...prev,
                                  data: {
                                    lowestValue: newData,
                                    highestValue: (prev.data as TTargetRange)
                                      .highestValue,
                                  },
                                }));
                              }}
                              InputProps={{
                                sx: {
                                  width: "200px",
                                  height: "40px",
                                  "& fieldset": {
                                    padding: "0px 10px 0px 12px",
                                    border:
                                      "1px solid var(--gray-200, #E5E7EB)",
                                    borderRadius: "4px",
                                  },
                                },
                                endAdornment: (
                                  <InputAdornment
                                    position="end"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: "400px",
                                      color: "#111928",
                                      lineHeight: "26px",
                                    }}
                                  >
                                    명
                                  </InputAdornment>
                                ),
                              }}
                            />
                            <Typography
                              sx={{
                                color: "#111928",
                                fontSize: "16px",
                                fontWeight: "400",
                                lineHeight: "26px",
                              }}
                            >
                              ~
                            </Typography>
                            <TextField
                              placeholder=""
                              value={
                                (headCount.data as TTargetRange).highestValue
                              }
                              onChange={(e) => {
                                const newData = e.target.value as string;
                                setHeadCount((prev) => ({
                                  ...prev,
                                  data: {
                                    highestValue: newData,
                                    lowestValue: (prev.data as TTargetRange)
                                      .lowestValue,
                                  },
                                }));
                              }}
                              InputProps={{
                                sx: {
                                  width: "200px",
                                  height: "40px",
                                  "& fieldset": {
                                    padding: "0px 10px 0px 12px",
                                    border:
                                      "1px solid var(--gray-200, #E5E7EB)",
                                    borderRadius: "4px",
                                  },
                                },
                                endAdornment: (
                                  <InputAdornment
                                    position="end"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: "400px",
                                      color: "#111928",
                                      lineHeight: "26px",
                                    }}
                                  >
                                    명
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </Stack>
                        )}
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: "20px",
                        }}
                      >
                        <Checkbox sx={{ width: "24px", height: "24px" }} />
                        <Typography
                          sx={{
                            backgroundColor: "#F3F4F6",
                            width: "200px",
                            padding: "10px var(--spacing-12, 12px)",
                            color: "#111928",
                            border: "1px solid #E5E7EB",
                            boxSizing: "border-box",
                          }}
                        >
                          업종
                        </Typography>
                        <Select
                          value={sector}
                          onChange={(e) => {
                            const value = e.target.value as string;
                            setSector(value);
                          }}
                          sx={{
                            width: "200px",
                            color: "#111928",
                            fontSize: "16px",
                            fontWeight: "400",
                            lineHeight: "26px",
                            padding: "10px 12px",
                            height: "40px",
                          }}
                        >
                          {sectorList.map((item, idx) => (
                            <MenuItem key={idx} value={item}>
                              {item}
                            </MenuItem>
                          ))}
                        </Select>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: "20px",
                        }}
                      >
                        <Checkbox sx={{ width: "24px", height: "24px" }} />
                        <Typography
                          sx={{
                            backgroundColor: "#F3F4F6",
                            width: "200px",
                            padding: "10px var(--spacing-12, 12px)",
                            color: "#111928",
                            border: "1px solid #E5E7EB",
                            boxSizing: "border-box",
                          }}
                        >
                          직급
                        </Typography>
                        <Select
                          value={rank}
                          onChange={(e) => {
                            const value = e.target.value as string;
                            setRank(value);
                          }}
                          sx={{
                            width: "200px",
                            color: "#111928",
                            fontSize: "16px",
                            fontWeight: "400",
                            lineHeight: "26px",
                            padding: "10px 12px",
                            height: "40px",
                          }}
                        >
                          {rankList.map((item, idx) => (
                            <MenuItem key={idx} value={item}>
                              {item}
                            </MenuItem>
                          ))}
                        </Select>
                      </Box>
                    </Stack>
                  </Box>
                </Box>
                {/** */}
                {isOnSitePage ? (
                  <Stack sx={{ gap: "32px" }}>
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
                        노출 위치
                      </Typography>
                      <Select
                        value={url}
                        onChange={(e) => {
                          const value = e.target.value as string;
                          setUrl(value);
                        }}
                        sx={{
                          width: "200px",
                          color: "#111928",
                          fontSize: "16px",
                          fontWeight: "400",
                          lineHeight: "26px",
                          padding: "10px 12px",
                          height: "40px",
                        }}
                      >
                        <MenuItem value="DBAS">DBAS</MenuItem>
                      </Select>
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
                        노출 기간
                      </Typography>
                      {children}
                    </Box>
                  </Stack>
                ) : (
                  <Stack sx={{ gap: "24px" }}>
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
                        예약전송
                      </Typography>
                      <Stack gap="24px">
                        <RadioGroup
                          sx={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "row",
                            gap: "20px",
                          }}
                          onChange={(e) => {
                            handleChange(e);
                          }}
                          value={isReserve}
                          name="isReserve-type"
                        >
                          <FormControlLabel
                            sx={{}}
                            checked={isReserve === "사용"}
                            value={"사용"}
                            control={<Radio />}
                            label={
                              <Typography
                                fontSize="14px"
                                fontWeight="600"
                                color="rgba(0, 0, 0, 0.85)"
                              >
                                사용
                              </Typography>
                            }
                          ></FormControlLabel>
                          <FormControlLabel
                            sx={{}}
                            checked={isReserve === "미사용"}
                            value={"미사용"}
                            control={<Radio />}
                            label={
                              <Typography
                                fontSize="14px"
                                fontWeight="600"
                                color="rgba(0, 0, 0, 0.85)"
                              >
                                미사용
                              </Typography>
                            }
                          ></FormControlLabel>
                        </RadioGroup>
                        <Stack gap="12px">
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              gap: "44px",
                            }}
                          >
                            <Typography
                              sx={{
                                color: "#6B7280",
                                fontSize: "14px",
                                fontWeight: "600",
                                lineHeight: "20px",
                              }}
                            >
                              전송일
                            </Typography>
                            <Typography
                              sx={{
                                color: "#6B7280",
                                fontSize: "14px",
                                fontWeight: "600",
                                lineHeight: "20px",
                              }}
                            >
                              전송 시간
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              gap: "44px",
                            }}
                          >
                            {children}
                          </Box>
                        </Stack>
                      </Stack>
                    </Box>
                  </Stack>
                )}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </div>
    );
  }
);

export default PromotionRegister2;
