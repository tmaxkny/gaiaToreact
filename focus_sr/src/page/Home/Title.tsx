import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

/*
  Datapicker는 GAIA에서 제공하는 컴포넌트로 만든 후 children으로 넣어주었습니다
*/

const Title: React.FC<any> = React.forwardRef<any, any>(
  ({ className, title, children }, ref) => {
    const [selectedButton, setSelectedButton] = React.useState("");
    const BUTTONS = ["오늘", "일주일", "1개월", "3개월", "6개월", "1년"];

    return (
      <Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: "62px", marginBottom: "24px" }}
        >
          <Typography
            sx={{
              color: "#4B5563",
              fontSize: "18px",
              fontWeight: "600",
              lineHeight: "24px",
            }}
          >
            {title}
          </Typography>
          <Stack direction="row">
            {children}
            <Stack direction="row" sx={{ gap: "16px", marginLeft: "24px" }}>
              {BUTTONS.map((button) => (
                <Button
                  key={button}
                  onClick={() => {
                    setSelectedButton(button);
                  }}
                  sx={{
                    width: "74px",
                    fontSize: "16px",
                    fontWeight: "600",
                    color: selectedButton === button ? "#1C64F2" : "#9CA3AF",
                    borderStyle: "solid",
                    borderWidth: "1px",
                    borderColor:
                      selectedButton === button ? "#A4CAFE" : "#D1D5DB",
                  }}
                >
                  {button}
                </Button>
              ))}
              <Button
                sx={{
                  width: "92px",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#FFFFFF",
                  backgroundColor: "#1C64F2",
                }}
              >
                조회하기
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    );
  }
);

export default Title;
