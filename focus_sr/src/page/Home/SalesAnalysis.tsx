import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const SalesAnalysis: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children }, ref) => {
    const CONTENTS = [
      { title: "구매 전환율", type: "FIRST", numbers: 3.46 },
      { title: "재구매율", type: "FIRST", numbers: 78 },
      { title: "전환 금액", type: "SECOND", numbers: 140000000 },
    ];
    return (
      <Stack direction="row" sx={{ gap: "16px" }}>
        {CONTENTS.map((content) => (
          <Stack
            key={content.title}
            sx={{
              flex: 1,
              height: "108px",
              backgroundColor: "#F9FAFB",
              borderRadius: "12px",
              gap: "8px",
              justifyContent: "center",
              px: "24px",
            }}
          >
            <Typography
              sx={{ fontSize: "14px", fontWeight: "600", color: "#111928" }}
            >
              {content.title}
            </Typography>
            {content.type === "FIRST" && (
              <Typography
                sx={{
                  color: "#1C64F2",
                  fontWeight: "700",
                  fontSize: "24px",
                  marginRight: "4px",
                }}
              >
                {content.numbers}%
              </Typography>
            )}
            {content.type === "SECOND" && (
              <Stack direction="row" alignItems="center">
                <Typography
                  sx={{
                    color: "#1C64F2",
                    fontWeight: "700",
                    fontSize: "24px",
                    marginRight: "4px",
                  }}
                >
                  {content.numbers.toLocaleString()}
                </Typography>
                <Typography
                  sx={{ fontSize: "14px", fontWeight: "500", color: "#4B5563" }}
                >
                  원
                </Typography>
              </Stack>
            )}
          </Stack>
        ))}
      </Stack>
    );
  }
);

export default SalesAnalysis;
