import * as React from "react";
import { Stack, Checkbox, Typography, Button } from "@mui/material";
import * as MUI_ICON from "@mui/icons-material";

const Type: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children, moveToNext }, ref) => {
    const [checkedTopList, setCheckedTopList] = React.useState<number[]>([]);
    const [checkedBottomList, setCheckedBottomList] = React.useState<number[]>(
      []
    );

    const ITEM_ARRAY_TOP = [
      { id: 1, title: "IT 개발, 데이터" },
      { id: 2, title: "기획, 전략" },
      { id: 3, title: "디자인" },
      { id: 4, title: "마케팅, 콘텐츠" },
      { id: 5, title: "영업" },
      { id: 6, title: "상품기획, MD" },
      { id: 7, title: "회계" },
      { id: 8, title: "인사" },
    ];

    const ITEM_ARRAY_BOTTOM = [
      { id: 1, title: "경제" },
      { id: 2, title: "사회" },
      { id: 3, title: "장치" },
      { id: 4, title: "방송, 연예" },
      { id: 5, title: "스포츠" },
      { id: 6, title: "IT, 과학" },
    ];

    const handleCheckedTopList = (id: number) => {
      if (checkedTopList.includes(id)) {
        setCheckedTopList(checkedTopList.filter((el) => el !== id));
      } else {
        setCheckedTopList([...checkedTopList, id]);
      }
    };

    const handleCheckedBottomList = (id: number) => {
      if (checkedBottomList.includes(id)) {
        setCheckedBottomList(checkedBottomList.filter((el) => el !== id));
      } else {
        setCheckedBottomList([...checkedBottomList, id]);
      }
    };

    return (
      <Stack
        className={className}
        ref={ref}
        sx={{
          alignItems: "center",
          width: "860px",
          minWidth: "860px",
          "*": { boxSizing: "border-box", margin: 0, padding: 0 },
        }}
      >
        <Stack
          sx={{
            alignItems: "center",
            width: "100%",
            height: "270px",
            marginBottom: "48px",
          }}
        >
          <Typography
            sx={{
              marginBottom: "16px",
              color: "#111928",
              fontSize: "28px",
              lineHeight: "38px",
              fontWeight: "700",
            }}
          >
            직종을 선택해주세요.
          </Typography>
          <Typography
            sx={{
              color: "#6B7280",
              fontSize: "18px",
              lineHeight: "24px",
              marginBottom: "40px",
              fontWeight: "500",
            }}
          >
            현재 업무와 관련있는 직종을 선택해주세요. (다중선택 가능){" "}
          </Typography>
          <Stack>
            <Stack direction="row" sx={{ gap: "20px", marginBottom: "20px" }}>
              {ITEM_ARRAY_TOP.slice(0, 4).map((el) => (
                <Stack
                  key={el.id}
                  onClick={() => {
                    handleCheckedTopList(el.id);
                  }}
                  direction="row"
                  sx={{
                    width: "200px",
                    height: "66px",
                    backgroundColor: `${
                      checkedTopList.includes(el.id) ? "#EBF5FF" : "#F9FAFB"
                    }`,
                    border: "1px solid",
                    borderColor: `${
                      checkedTopList.includes(el.id) ? "#3F83F8" : "#D1D5DB"
                    }`,
                    padding: "20px",
                    cursor: "pointer",
                    borderRadius: "6px",
                    "div > p": {
                      color: `${
                        checkedTopList.includes(el.id) ? "#3F83F8" : "#111928"
                      }`,
                      fontWeight: "600",
                    },
                  }}
                >
                  <Checkbox
                    onChange={() => {
                      handleCheckedTopList(el.id);
                    }}
                    checked={checkedTopList.includes(el.id)}
                    disableRipple
                    icon={<MUI_ICON.RadioButtonUnchecked />}
                    checkedIcon={<MUI_ICON.RadioButtonChecked />}
                    sx={{ padding: 0, marginRight: "16px" }}
                  />
                  <Stack justifyContent="center">
                    <Typography sx={{ width: "100%" }}>{el.title}</Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>
            <Stack direction="row" sx={{ gap: "20px" }}>
              {ITEM_ARRAY_TOP.slice(4, 8).map((el) => (
                <Stack
                  key={el.id}
                  onClick={() => {
                    handleCheckedTopList(el.id);
                  }}
                  direction="row"
                  sx={{
                    width: "200px",
                    height: "66px",
                    backgroundColor: `${
                      checkedTopList.includes(el.id) ? "#EBF5FF" : "#F9FAFB"
                    }`,
                    border: "1px solid",
                    borderColor: `${
                      checkedTopList.includes(el.id) ? "#3F83F8" : "#D1D5DB"
                    }`,
                    padding: "20px",
                    cursor: "pointer",
                    borderRadius: "6px",
                    "div > p": {
                      color: `${
                        checkedTopList.includes(el.id) ? "#3F83F8" : "#111928"
                      }`,
                      fontWeight: "600",
                    },
                  }}
                >
                  <Checkbox
                    onChange={() => {
                      handleCheckedTopList(el.id);
                    }}
                    checked={checkedTopList.includes(el.id)}
                    disableRipple
                    icon={<MUI_ICON.RadioButtonUnchecked />}
                    checkedIcon={<MUI_ICON.RadioButtonChecked />}
                    sx={{ padding: 0, marginRight: "16px" }}
                  />
                  <Stack justifyContent="center">
                    <Typography sx={{ width: "100%" }}>{el.title}</Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <Stack
            sx={{
              alignItems: "center",
              width: "100%",
              height: "270px",
            }}
          >
            <Typography
              sx={{
                marginBottom: "16px",
                color: "#111928",
                fontSize: "28px",
                lineHeight: "38px",
                fontWeight: "700",
              }}
            >
              관심사를 선택해주세요.
            </Typography>
            <Typography
              sx={{
                color: "#6B7280",
                fontSize: "18px",
                lineHeight: "24px",
                marginBottom: "40px",
                fontWeight: "500",
              }}
            >
              관심있는 분야를 선택해주세요. (다중선택 가능)
            </Typography>
            <Stack>
              <Stack direction="row" sx={{ gap: "20px", marginBottom: "20px" }}>
                {ITEM_ARRAY_BOTTOM.slice(0, 3).map((el) => (
                  <Stack
                    key={el.id}
                    onClick={() => {
                      handleCheckedBottomList(el.id);
                    }}
                    direction="row"
                    sx={{
                      width: "200px",
                      height: "66px",
                      backgroundColor: `${
                        checkedBottomList.includes(el.id)
                          ? "#EBF5FF"
                          : "#F9FAFB"
                      }`,
                      border: "1px solid",
                      borderColor: `${
                        checkedBottomList.includes(el.id)
                          ? "#3F83F8"
                          : "#D1D5DB"
                      }`,
                      padding: "20px",
                      cursor: "pointer",
                      borderRadius: "6px",
                      "div > p": {
                        color: `${
                          checkedBottomList.includes(el.id)
                            ? "#3F83F8"
                            : "#111928"
                        }`,
                        fontWeight: "600",
                      },
                    }}
                  >
                    <Checkbox
                      onChange={() => {
                        handleCheckedBottomList(el.id);
                      }}
                      checked={checkedBottomList.includes(el.id)}
                      disableRipple
                      icon={<MUI_ICON.RadioButtonUnchecked />}
                      checkedIcon={<MUI_ICON.RadioButtonChecked />}
                      sx={{ padding: 0, marginRight: "16px" }}
                    />
                    <Stack justifyContent="center">
                      <Typography sx={{ width: "100%" }}>{el.title}</Typography>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </Stack>
            <Stack direction="row" sx={{ gap: "20px" }}>
              {ITEM_ARRAY_BOTTOM.slice(3, 6).map((el) => (
                <Stack
                  key={el.id}
                  onClick={() => {
                    handleCheckedBottomList(el.id);
                  }}
                  direction="row"
                  sx={{
                    width: "200px",
                    height: "66px",
                    backgroundColor: `${
                      checkedBottomList.includes(el.id) ? "#EBF5FF" : "#F9FAFB"
                    }`,
                    border: "1px solid",
                    borderColor: `${
                      checkedBottomList.includes(el.id) ? "#3F83F8" : "#D1D5DB"
                    }`,
                    padding: "20px",
                    cursor: "pointer",
                    borderRadius: "6px",
                    "div > p": {
                      color: `${
                        checkedBottomList.includes(el.id)
                          ? "#3F83F8"
                          : "#111928"
                      }`,
                      fontWeight: "600",
                    },
                  }}
                >
                  <Checkbox
                    onChange={() => {
                      handleCheckedBottomList(el.id);
                    }}
                    checked={checkedBottomList.includes(el.id)}
                    disableRipple
                    icon={<MUI_ICON.RadioButtonUnchecked />}
                    checkedIcon={<MUI_ICON.RadioButtonChecked />}
                    sx={{ padding: 0, marginRight: "16px" }}
                  />
                  <Stack justifyContent="center">
                    <Typography sx={{ width: "100%" }}>{el.title}</Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>
            <Stack
              direction="row"
              justifyContent="end"
              alignItems="center"
              sx={{
                width: "100%",
                height: "94px",
                gap: "16px",
                marginTop: "48px",
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
                완료
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    );
  }
);

export default Type;
