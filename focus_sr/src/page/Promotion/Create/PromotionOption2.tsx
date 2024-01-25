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
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const PromotionOption2: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children }, ref) => {
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

    const [visit, setVisit] = React.useState<TSector>({
      data: "",
      isRange: false,
      isUp: "이상",
    });
    const [purchaseAmount, setPurchaseAmount] = React.useState<TSector>({
      data: "",
      isRange: false,
      isUp: "이상",
    });
    const [point, setPoint] = React.useState<TSector>({
      data: "",
      isRange: false,
      isUp: "이상",
    });
    const [headCount, setHeadCount] = React.useState<TSector>({
      data: "",
      isRange: false,
      isUp: "이상",
    });
    const [sector, setSector] = React.useState("");
    const [rank, setRank] = React.useState("");

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
    const [url, setUrl] = React.useState("");

    React.useEffect(() => {
      console.log(visit, purchaseAmount, point, headCount, sector, rank);
    }, [visit, purchaseAmount, point, headCount, sector, rank]);

    return (
      <div className={className} ref={ref}>
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
                    티깃 설정
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
                            setVisit((prev) => ({
                              data: { lowestValue: "0", highestValue: "0" },
                              isRange: true,
                            }));
                          else
                            setVisit((prev) => ({
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
                              setVisit((prev) => ({ ...prev, data: newData }));
                            }}
                            InputProps={{
                              sx: {
                                width: "200px",
                                height: "40px",
                                "& fieldset": {
                                  padding: "0px 10px 0px 12px",
                                  border: "1px solid var(--gray-200, #E5E7EB)",
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
                                  border: "1px solid var(--gray-200, #E5E7EB)",
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
                                  border: "1px solid var(--gray-200, #E5E7EB)",
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
                            setPurchaseAmount((prev) => ({
                              data: { lowestValue: "0", highestValue: "0" },
                              isRange: true,
                            }));
                          else
                            setPurchaseAmount((prev) => ({
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
                                  border: "1px solid var(--gray-200, #E5E7EB)",
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
                              (purchaseAmount.data as TTargetRange).lowestValue
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
                                  border: "1px solid var(--gray-200, #E5E7EB)",
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
                              (purchaseAmount.data as TTargetRange).highestValue
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
                                  border: "1px solid var(--gray-200, #E5E7EB)",
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
                            setPoint((prev) => ({
                              data: { lowestValue: "0", highestValue: "0" },
                              isRange: true,
                            }));
                          else
                            setPoint((prev) => ({
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
                                  border: "1px solid var(--gray-200, #E5E7EB)",
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
                                  border: "1px solid var(--gray-200, #E5E7EB)",
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
                                  border: "1px solid var(--gray-200, #E5E7EB)",
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
                            setHeadCount((prev) => ({
                              data: { lowestValue: "0", highestValue: "0" },
                              isRange: true,
                            }));
                          else
                            setHeadCount((prev) => ({
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
                                  border: "1px solid var(--gray-200, #E5E7EB)",
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
                            value={(headCount.data as TTargetRange).lowestValue}
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
                                  border: "1px solid var(--gray-200, #E5E7EB)",
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
                                  border: "1px solid var(--gray-200, #E5E7EB)",
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
              {/**노출위치 */}
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
              {/**노출 기간 */}
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
          </Stack>
        </Stack>
      </div>
    );
  }
);

export default PromotionOption2;
