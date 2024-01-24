import * as React from "react";
import {
  Box,
  Button,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  FormControlLabel,
  Radio,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const PromotionOption: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children }, ref) => {
    const [promotionName, setPromotionName] = React.useState("");
    const [media, setMedia] = React.useState("");

    const mediaFormStyle = {
      margin: "0px",
      width: "388px",
      height: "88px",
      display: "flex",
      flexDirection: "row",
      gap: "15px",
      padding: "12px 24px",
      boxSizing: "border-box",
      //border: checked ? "1px solid #1C64F2" : "1px solid #D1D5DB",
      borderRadius: "6px",
      //backgroundColor: checked ? "#3F83F81A" : "#FFF",
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

    return (
      <div className={className} ref={ref}>
        {children}
        <Stack
          sx={{ padding: "32px 32px 56px 32px", backgroundColor: "#F3F4F6" }}
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
                    fontColor: "14px",
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
                <Typography
                  sx={{
                    width: "86px",
                    color: "rgba(0, 0, 0, 0.85)",
                    fontColor: "14px",
                    fontWeight: "600",
                    lineHeight: "20px",
                  }}
                >
                  매체 선택
                </Typography>
                <RadioGroup
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "row",
                    gap: "24px",
                  }}
                  onChange={() => {}}
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
                <Typography
                  sx={{
                    width: "86px",
                    color: "rgba(0, 0, 0, 0.85)",
                    fontColor: "11.9px",
                    fontWeight: "600",
                    lineHeight: "20px",
                  }}
                >
                  담당자
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
            </Stack>
          </Stack>
          {/** */}
        </Stack>
      </div>
    );
  }
);

export default PromotionOption;
