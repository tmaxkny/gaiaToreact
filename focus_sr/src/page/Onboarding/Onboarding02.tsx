import * as React from "react";
import { Stack, Checkbox, Typography, Button } from "@mui/material";
import * as MUI_ICON from "@mui/icons-material";

const Category: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children, moveToNext }, ref) => {
    const [checkedList, setCheckedList] = React.useState<number[]>([]);

    const ITEM_ARRAY = [
      { id: 1, title: "실물 배송 상품", subTitle: "(예: 옷, 생활용품)" },
      { id: 2, title: "무형 서비스", subTitle: "(예: 청소, 헤어샵)" },
      { id: 3, title: "디지털 콘텐츠", subTitle: "(예: 온라인 강의, 게임)" },
      {
        id: 4,
        title: "SaaS소프트웨어",
        subTitle: "(예: 클라우드 서비스, DBMS)",
      },
    ];

    const handleCheckedList = (id: number) => {
      if (checkedList.includes(id)) {
        setCheckedList(checkedList.filter((el) => el !== id));
      } else {
        setCheckedList([...checkedList, id]);
      }
    };
    return (
      <Stack
        className={className}
        ref={ref}
        sx={{
          alignItems: "center",
          width: "fit-content",
          "*": { boxSizing: "border-box", margin: 0, padding: 0 },
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
          판매하려는 상품의 카테고리를 선택해주세요.
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
          더 적합한 서비스 추천을 위해 판매하려는 상품의 정보가 필요해요.
          (다중선택 가능)
        </Typography>
        <Stack>
          <Stack direction="row" sx={{ gap: "20px", marginBottom: "20px" }}>
            {ITEM_ARRAY.slice(0, 2).map((el) => (
              <Stack
                key={el.id}
                onClick={() => {
                  handleCheckedList(el.id);
                }}
                direction="row"
                sx={{
                  width: "305px",
                  height: "92px",
                  backgroundColor: `${
                    checkedList.includes(el.id) ? "#EBF5FF" : "#F9FAFB"
                  }`,
                  border: "1px solid",
                  borderColor: `${
                    checkedList.includes(el.id) ? "#3F83F8" : "#D1D5DB"
                  }`,
                  padding: "20px",
                  cursor: "pointer",
                  borderRadius: "6px",
                  "div > p": {
                    color: `${
                      checkedList.includes(el.id) ? "#3F83F8" : "#111928"
                    }`,
                    fontWeight: "600",
                  },
                }}
              >
                <Checkbox
                  onChange={() => {
                    handleCheckedList(el.id);
                  }}
                  checked={checkedList.includes(el.id)}
                  disableRipple
                  icon={<MUI_ICON.RadioButtonUnchecked />}
                  checkedIcon={<MUI_ICON.RadioButtonChecked />}
                  sx={{ padding: 0, marginRight: "16px" }}
                />
                <Stack justifyContent="center">
                  <Typography sx={{ width: "100%" }}>{el.title}</Typography>
                  <Typography sx={{ width: "100%" }}>{el.subTitle}</Typography>
                </Stack>
              </Stack>
            ))}
          </Stack>
          <Stack direction="row" sx={{ gap: "20px" }}>
            {ITEM_ARRAY.slice(2, 4).map((el) => (
              <Stack
                key={el.id}
                onClick={() => {
                  handleCheckedList(el.id);
                }}
                direction="row"
                sx={{
                  width: "305px",
                  height: "92px",
                  backgroundColor: `${
                    checkedList.includes(el.id) ? "#EBF5FF" : "#F9FAFB"
                  }`,
                  border: "1px solid",
                  borderColor: `${
                    checkedList.includes(el.id) ? "#3F83F8" : "#D1D5DB"
                  }`,
                  padding: "20px",
                  cursor: "pointer",
                  borderRadius: "6px",
                  "div > p": {
                    color: `${
                      checkedList.includes(el.id) ? "#3F83F8" : "#111928"
                    }`,
                    fontWeight: "600",
                  },
                }}
              >
                <Checkbox
                  onChange={() => {
                    handleCheckedList(el.id);
                  }}
                  checked={checkedList.includes(el.id)}
                  disableRipple
                  icon={<MUI_ICON.RadioButtonUnchecked />}
                  checkedIcon={<MUI_ICON.RadioButtonChecked />}
                  sx={{ padding: 0, marginRight: "16px" }}
                />
                <Stack justifyContent="center">
                  <Typography sx={{ width: "100%" }}>{el.title}</Typography>
                  <Typography sx={{ width: "100%" }}>{el.subTitle}</Typography>
                </Stack>
              </Stack>
            ))}
          </Stack>
          <Stack
            direction="row"
            justifyContent="end"
            sx={{
              width: "100%",
              height: "94px",
              gap: "16px",
              marginTop: "194px",
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
              disabled={checkedList.length === 0}
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
      </Stack>
    );
  }
);

export default Category;
