import * as React from "react";
import { Stack, MenuItem, Button, Select } from "@mui/material";

const PromotionDashFilter: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children }, ref) => {
    const DASH_MEDIA = [
      { field: "", label: "전체" },
      { field: "WAPL", label: "WAPL" },
      { field: "EMAIL", label: "Email" },
      { field: "ONSITE", label: "On-site" },
    ];
    const dateButtonStyle = {
      minWidth: "74px",
      padding: "10px 18px",
      border: "1px solid #E5E7EB",
      color: "#9CA3AF",
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: "26px",
      borderRadius: "6px",
    };
    const [mediaLocal, setMediaLocal] = React.useState(DASH_MEDIA[0]);
    const [dateFromLocal, setDateFromLocal] = React.useState("");
    const [dateToLocal, setDateToLocal] = React.useState("");

    return (
      <div className={className} ref={ref}>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Select
            sx={{
              borderRadius: "4px",
              border: "1px solid #E5E7EB",
              background: "var(--white, #FFF)",
              fontFamily: "Pretendard",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "20px",
              height: "38px",
              width: "124px",
              padding: "var(--8, 8px) 12px",
            }}
            value={mediaLocal ? mediaLocal.label : "전체"}
            onChange={(e) => {
              const value = e.target.value as string;
              const newMedia = DASH_MEDIA.find((item) => item.label === value);
              if (newMedia) {
                setMediaLocal(newMedia);
              }
            }}
          >
            {DASH_MEDIA.map((item) => {
              return (
                <MenuItem key={item.field} value={item.label}>
                  {item.label}
                </MenuItem>
              );
            })}
          </Select>
          {children}
          <Stack direction="row" alignItems="center" sx={{ gap: "24px" }}>
            {children}
            <Stack direction="row" alignItems="center" sx={{ gap: "16px" }}>
              <Button
                sx={{
                  ...dateButtonStyle,
                }}
              >
                {`오늘`}
              </Button>
              <Button
                sx={{
                  ...dateButtonStyle,
                }}
              >
                {`일주일`}
              </Button>
              <Button
                sx={{
                  ...dateButtonStyle,
                }}
              >
                {`1개월`}
              </Button>
              <Button
                sx={{
                  ...dateButtonStyle,
                }}
              >
                {`3개월`}
              </Button>
              <Button
                sx={{
                  ...dateButtonStyle,
                }}
              >
                {`6개월`}
              </Button>
              <Button
                sx={{
                  ...dateButtonStyle,
                }}
              >
                {`1년`}
              </Button>
              <Button
                variant="contained"
                sx={{
                  minWidth: "92px",
                  height: "46px",
                  padding: "10px 18px",
                  backgroundColor: "#1C64F2",
                  color: "#FFFFFF",
                  borderRadius: "6px",
                }}
              >
                {`조회하기`}
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </div>
    );
  }
);

export default PromotionDashFilter;
