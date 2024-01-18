import * as React from "react";
import {
  Stack,
  Checkbox,
  Typography,
  FormControlLabel,
  Button,
} from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import * as MUI_ICON from "@mui/icons-material";

const Agreement: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children, moveToNext }, ref) => {
    const [checkedList, setCheckedList] = React.useState<number[]>([]);

    const handleCheckedList = (id: null | number = null) => {
      if (!id) {
        if (checkedList.length === 0) {
          setCheckedList([1, 2]);
        } else {
          setCheckedList([]);
        }
      } else {
        if (checkedList.includes(id)) {
          setCheckedList(checkedList.filter((el) => el !== id));
        } else {
          setCheckedList([...checkedList, id]);
        }
      }
    };

    return (
      <div className={className} ref={ref}>
        <Stack
          sx={{
            width: "630px",
            minWidth: "630px",
            "*": { boxSizing: "border-box", margin: 0, padding: 0 },
          }}
        >
          <Typography
            sx={{
              marginBottom: "24px",
              fontSize: "28px",
              lineHeight: "38px",
              fontWeight: "700",
              color: "#111928",
            }}
          >
            서비스 이용 약관
          </Typography>
          <Stack
            sx={{ width: "100%", alignItems: "start", justifyContent: "start" }}
          >
            <FormControlLabel
              onChange={(event) => {
                event.stopPropagation();
                handleCheckedList();
              }}
              control={
                <Checkbox
                  checked={checkedList.length === 2}
                  disableRipple
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<RadioButtonCheckedIcon />}
                />
              }
              label={
                <Typography
                  sx={{
                    color: "#111928",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "26px",
                  }}
                >
                  전체 동의하기
                </Typography>
              }
            />
            <Typography
              onClick={() => {
                handleCheckedList();
              }}
              sx={{
                marginLeft: "31px",
                color: "#4B5563",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "26px",
              }}
            >
              서비스 이용, 마케팅 이용(선택) 동의를 포함합니다.
            </Typography>
          </Stack>
          <FormControlLabel
            sx={{ marginTop: "20px" }}
            onChange={(event) => {
              event.stopPropagation();
              handleCheckedList(1);
            }}
            control={
              <Checkbox
                checked={checkedList.includes(1)}
                disableRipple
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<RadioButtonCheckedIcon />}
              />
            }
            label={
              <Stack direction="row" alignItems="center">
                <Typography
                  sx={{
                    marginRight: "6px",
                    color: "#1C64F2",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "26px",
                  }}
                >
                  [필수]
                </Typography>
                <Typography
                  sx={{
                    color: "#4B5563",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "26px",
                  }}
                >
                  서비스 이용 동의
                </Typography>
                <MUI_ICON.ArrowForwardIos
                  sx={{ color: "#4B5563", fontSize: "16px", marginLeft: "8px" }}
                />
              </Stack>
            }
          />
          <Stack
            sx={{
              marginTop: "8px",
              marginLeft: "36px",
              padding: "20px",
              border: "1px solid #D1D5DB",
              borderRadius: "6px",
              height: "200px",
              maxHeight: "200px",
              overflowY: "scroll",
              lineHeight: "26px",
              li: {
                listStyleType: "none",
                position: "relative",
                marginLeft: "20px",
              },
              "li::before": {
                content: "'·'",
                position: "absolute",
                left: "-12px",
                fontWeight: "900",
              },
              "&::-webkit-scrollbar": {
                width: "14px",
              },
              "&::-webkit-scrollbar-track": {
                border: "solid 4px white",
              },
              "&::-webkit-scrollbar-thumb": {
                border: "solid 4px white",
                backgroundColor: "#E5E7EB",
                outline: "none",
                borderRadius: "20px",
              },
            }}
          >
            <Typography>제 1조</Typography>
            <li>회원가입</li>
            <Typography>제 2조</Typography>
            <li>로그인</li>
            <Typography>제 3조</Typography>
            <li>
              dummy text dummy text dummy text dummy text dummy text dummy text
              dummy text dummy text dummy text dummy text dummy text dummy text
              dummy text dummy text dummy text dummy text
            </li>
            <Typography>제 4조</Typography>
            <li>
              dummy text dummy text dummy text dummy text dummy text dummy text
              dummy text dummy text dummy text dummy text dummy text dummy text
              dummy text dummy text dummy text dummy text
            </li>
            <Typography>제 5조</Typography>
            <li>
              dummy text dummy text dummy text dummy text dummy text dummy text
              dummy text dummy text dummy text dummy text dummy text dummy text
              dummy text
            </li>
          </Stack>
          <FormControlLabel
            onChange={(event) => {
              event.stopPropagation();
              handleCheckedList(2);
            }}
            sx={{ marginTop: "20px" }}
            control={
              <Checkbox
                checked={checkedList.includes(2)}
                disableRipple
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<RadioButtonCheckedIcon />}
              />
            }
            label={
              <Stack direction="row" alignItems="center">
                <Typography
                  sx={{
                    color: "#4B5563",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "26px",
                  }}
                >
                  [선택] 마케팅 이용 동의
                </Typography>
                <MUI_ICON.ArrowForwardIos
                  sx={{ color: "#4B5563", fontSize: "16px", marginLeft: "8px" }}
                />
              </Stack>
            }
          />
          <Stack
            direction="row"
            justifyContent="center"
            sx={{
              width: "100%",
              height: "94px",
              gap: "16px",
              marginTop: "68px",
            }}
          >
            <Button
              sx={{
                width: "116px",
                height: "46px",
                backgroundColor: "#FFFFFF",
                color: "#1C64F2",
                borderRadius: "6px",
                fontWeight: 600,
                lineHeight: "26px",
                fontSize: "16px",
                border: "1px solid #A4CAFE",
              }}
            >
              <MUI_ICON.ArrowBack sx={{ marginRight: "4px" }} />
              이전단계
            </Button>
            <Button
              disabled={!checkedList.includes(1)}
              onClick={moveToNext}
              sx={{
                width: "116px",
                height: "46px",
                backgroundColor: "#1C64F2",
                color: "#FFFFFF",
                borderRadius: "6px",
                fontWeight: 600,
                lineHeight: "26px",
                fontSize: "16px",
                border: "1px solid #1C64F2",
                "&.Mui-disabled": {
                  backgroundColor: "#E5E7EB",
                  color: "#9CA3AF",
                  borderColor: "#E5E7EB",
                },
                ":hover": {
                  backgroundColor: "#004BEB",
                },
              }}
            >
              다음단계
              <MUI_ICON.ArrowForward sx={{ marginRight: "4px" }} />
            </Button>
          </Stack>
        </Stack>
      </div>
    );
  }
);

export default Agreement;
