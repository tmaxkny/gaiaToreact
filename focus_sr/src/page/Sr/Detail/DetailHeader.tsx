import * as React from "react";
import { Stack, Box, Typography, Divider } from "@mui/material";
import Circle from "@mui/icons-material/Circle";

const DetailHeader: React.FC<any> = React.forwardRef<any, any>(
  (
    {
      className,
      children,
      priority,
      severity,
      receiptDate,
      status,
      issueStatus,
      issueType,
    },
    ref
  ) => {
    return (
      <div className={className} ref={ref}>
        <Stack
          direction="row"
          sx={{ height: "70px", gap: "10px", border: "1px solid #E5E7EB" }}
          alignItems="center"
        >
          <Box
            sx={{
              display: "flex",
              flex: "1 0 0",
              flexDirection: "row",
              padding: "24px",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "600",
                lineHeight: "20px",
                color: "#111928",
                flexGrow: "1",
              }}
            >
              우선순위
            </Typography>
            <Box
              sx={{
                display: "flex",
                padding: "2px 8px",
                background: "#F9F0FF",
                borderRadius: "4px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "600",
                  lineHeight: "18px",
                  color: "#9254DE",
                }}
              >
                Normal
              </Typography>
            </Box>
          </Box>
          <Divider
            orientation="vertical"
            variant="middle"
            sx={{ height: "18px" }}
          />
          <Box
            sx={{
              display: "flex",
              flex: "1 0 0",
              flexDirection: "row",
              padding: "24px",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "600",
                lineHeight: "20px",
                color: "#111928",
                flexGrow: "1",
              }}
            >
              심각도
            </Typography>
            <Box
              sx={{
                display: "flex",
                padding: "2px 8px",
                background: "#F9F0FF",
                borderRadius: "4px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "600",
                  lineHeight: "18px",
                  color: "#9254DE",
                }}
              >
                Major
              </Typography>
            </Box>
          </Box>
          <Divider
            orientation="vertical"
            variant="middle"
            sx={{ height: "18px" }}
          />
          <Box
            sx={{
              display: "flex",
              flex: "1 0 0",
              flexDirection: "row",
              padding: "24px",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "600",
                lineHeight: "20px",
                color: "#111928",
                flexGrow: "1",
              }}
            >
              접수일
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "20px",
                color: "#111928",
              }}
            >
              22.10.11
            </Typography>
          </Box>
          <Divider
            orientation="vertical"
            variant="middle"
            sx={{ height: "18px" }}
          />
          <Box
            sx={{
              display: "flex",
              flex: "1 0 0",
              flexDirection: "row",
              padding: "24px",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "600",
                lineHeight: "20px",
                color: "#111928",
                flexGrow: "1",
              }}
            >
              문의 진행상태
            </Typography>
            <Box
              sx={{
                display: "flex",
                padding: "2px 8px",
                background:
                  "linear-gradient(0deg, rgba(63, 131, 248, 0.10) 0%, rgba(63, 131, 248, 0.10) 100%)",
                borderRadius: "4px",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <Circle sx={{ width: "6px", height: "6px", color: "#3F83F8" }} />
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "600",
                  lineHeight: "18px",
                  color: "#1C64F2",
                }}
              >
                등록
              </Typography>
            </Box>
          </Box>
          <Divider
            orientation="vertical"
            variant="middle"
            sx={{ height: "18px" }}
          />
          <Box
            sx={{
              display: "flex",
              flex: "1 0 0",
              flexDirection: "row",
              padding: "24px",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "600",
                lineHeight: "20px",
                color: "#111928",
                flexGrow: "1",
              }}
            >
              이슈 진행 상태
            </Typography>
            <Box
              sx={{
                display: "flex",
                padding: "2px 8px",
                background:
                  "linear-gradient(0deg, rgba(63, 131, 248, 0.10) 0%, rgba(63, 131, 248, 0.10) 100%)",
                borderRadius: "4px",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <Circle sx={{ width: "6px", height: "6px", color: "#4B5563" }} />
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "600",
                  lineHeight: "18px",
                  color: "#4B5563",
                }}
              >
                미등록
              </Typography>
            </Box>
          </Box>
          <Divider
            orientation="vertical"
            variant="middle"
            sx={{ height: "18px" }}
          />
          <Box
            sx={{
              display: "flex",
              flex: "1 0 0",
              flexDirection: "row",
              padding: "24px",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "600",
                lineHeight: "20px",
                color: "#111928",
                flexGrow: "1",
              }}
            >
              세부 문의 유형
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "20px",
                color: "#111928",
              }}
            >
              기술지원요청
            </Typography>
          </Box>
        </Stack>
      </div>
    );
  }
);

export default DetailHeader;
