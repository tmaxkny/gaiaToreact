import * as React from "react";
import {
  Stack,
  Checkbox,
  Typography,
  FormControlLabel,
  Button,
  Box,
} from "@mui/material";

const Template: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children }, ref) => {
    return (
      <div className={className} ref={ref}>
        {children}
        <Stack sx={{ padding: "0px 32px" }}>
          <Stack
            sx={{
              height: "62px",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                verticalAlign: "middle",
                color: "#4B5563",
                fontSize: "18px",
                fontWeight: 600,
                lineHeight: "24px",
              }}
            >
              추천 템플릿
            </Typography>
          </Stack>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              columnGap: "24px",
            }}
          >
            <Stack
              onClick={() => {}}
              px="32px"
              py="24px"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "stretch",
                borderRadius: "12px",
                backgroundColor: "#DBD6FF",
                gap: "24px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  height: "68px",
                  width: "68px",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "12px",
                  flexShrink: 0,
                  overflow: "hidden",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="68"
                  height="68"
                  fill="none"
                >
                  <rect width="68" height="68" fill="#F6F4FF" rx="12" />
                  <path
                    fill="#7C6EE3"
                    d="M47.75 23.688h-25a2.47 2.47 0 0 0-1.768.75 2.596 2.596 0 0 0-.732 1.812v19.219c0 .34-.132.666-.366.906-.235.24-.553.375-.884.375-.331 0-.65-.135-.884-.375a1.297 1.297 0 0 1-.366-.906V30.094c0-.34-.132-.666-.366-.906a1.235 1.235 0 0 0-.884-.375c-.331 0-.65.135-.884.375-.234.24-.366.566-.366.906v15.392a3.892 3.892 0 0 0 1.104 2.707A3.704 3.704 0 0 0 19 49.313h27.5c.995 0 1.948-.406 2.652-1.126a3.893 3.893 0 0 0 1.098-2.718V26.25c0-.68-.263-1.331-.732-1.812a2.47 2.47 0 0 0-1.768-.75ZM41.5 40.343H29c-.331 0-.65-.135-.884-.376a1.298 1.298 0 0 1-.366-.906c0-.34.132-.665.366-.905.235-.24.553-.376.884-.376h12.5c.331 0 .65.135.884.376.234.24.366.566.366.906 0 .34-.132.665-.366.905-.234.24-.553.376-.884.376Zm0-5.125H29c-.331 0-.65-.135-.884-.376a1.298 1.298 0 0 1-.366-.906c0-.34.132-.665.366-.905.235-.24.553-.376.884-.376h12.5c.331 0 .65.135.884.376.234.24.366.566.366.906 0 .34-.132.665-.366.905-.234.24-.553.376-.884.376ZM60.188 19.438a.925.925 0 0 1-.61.875l-3.027 1.113-1.113 3.024a.933.933 0 0 1-1.751 0l-1.116-3.02-3.025-1.114a.933.933 0 0 1 0-1.75l3.026-1.114 1.114-3.024a.932.932 0 0 1 1.75 0l1.114 3.027 3.024 1.113a.925.925 0 0 1 .614.87Zm-3.281-5.625h.937v.937a.47.47 0 0 0 .938 0v-.938h.937a.469.469 0 0 0 0-.937h-.937v-.938a.47.47 0 0 0-.938 0v.938h-.937a.469.469 0 0 0 0 .938Zm5.156 1.874h-.469v-.468a.469.469 0 1 0-.937 0v.469h-.47a.469.469 0 0 0 0 .937h.47v.469a.469.469 0 0 0 .937 0v-.469h.469a.469.469 0 1 0 0-.938Z"
                  />
                </svg>
              </Box>
              <Stack direction="column" flex={1}>
                <Typography
                  sx={{
                    color: "#111928",
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "26px /* 130% */",
                  }}
                >
                  {`뉴스레터 시작하기`}
                </Typography>
                <Typography
                  whiteSpace="pre-line"
                  sx={{
                    color: "#111928",
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "18px /* 150% */",
                    opacity: 0.8,
                    textWrap: "balance",
                    overflowWrap: "break-word",
                    wordBreak: "keep-all",
                  }}
                >
                  {`뉴스레터를 통한 지속적인 브랜딩으로 
                    잠재 고객을 확보하세요`}
                </Typography>
              </Stack>
            </Stack>

            <Stack
              onClick={() => {}}
              px="32px"
              py="24px"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "stretch",
                borderRadius: "12px",
                backgroundColor: "#B0C8FA",
                gap: "24px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  height: "68px",
                  width: "68px",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "12px",
                  flexShrink: 0,
                  overflow: "hidden",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="68"
                  height="68"
                  fill="none"
                >
                  <rect width="68" height="68" fill="#F2F6FF" rx="12" />
                  <path
                    fill="#4169F4"
                    d="M35 19.563A15.438 15.438 0 1 0 50.438 35 15.454 15.454 0 0 0 35 19.562Zm1.781 22.562h-.593v1.188a1.188 1.188 0 0 1-2.376 0v-1.188h-2.374a1.188 1.188 0 0 1 0-2.375h5.343a1.781 1.781 0 0 0 0-3.563H33.22a4.157 4.157 0 0 1 0-8.312h.593v-1.188a1.188 1.188 0 0 1 2.376 0v1.188h2.374a1.187 1.187 0 1 1 0 2.375H33.22a1.782 1.782 0 0 0 0 3.563h3.562a4.156 4.156 0 0 1 0 8.312ZM59.188 19.438a.925.925 0 0 1-.61.875l-3.027 1.113-1.113 3.024a.933.933 0 0 1-1.751 0l-1.116-3.02-3.025-1.114a.933.933 0 0 1 0-1.75l3.026-1.114 1.114-3.024a.932.932 0 0 1 1.75 0l1.114 3.027 3.024 1.113a.925.925 0 0 1 .614.87Zm-3.281-5.625h.937v.937a.47.47 0 0 0 .938 0v-.938h.937a.469.469 0 0 0 0-.937h-.937v-.938a.47.47 0 0 0-.938 0v.938h-.937a.469.469 0 0 0 0 .938Zm5.156 1.874h-.469v-.468a.469.469 0 1 0-.937 0v.469h-.47a.469.469 0 0 0 0 .937h.47v.469a.469.469 0 0 0 .937 0v-.469h.469a.469.469 0 1 0 0-.938Z"
                  />
                </svg>
              </Box>
              <Stack direction="column" flex={1}>
                <Typography
                  sx={{
                    color: "#111928",
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "26px /* 130% */",
                  }}
                >
                  {`포인트로 구매 유도하기`}
                </Typography>
                <Typography
                  whiteSpace="pre-line"
                  sx={{
                    color: "#111928",
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "18px /* 150% */",
                    opacity: 0.8,
                    textWrap: "balance",
                    overflowWrap: "break-word",
                    wordBreak: "keep-all",
                  }}
                >
                  {`구매 확률이 높은 고객에게 포인트를 지급해
                    첫 구매를 유도해보세요`}
                </Typography>
              </Stack>
            </Stack>
            <Stack
              onClick={() => {}}
              px="32px"
              py="24px"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "stretch",
                borderRadius: "12px",
                backgroundColor: "#B1EBC7",
                gap: "24px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  height: "68px",
                  width: "68px",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "12px",
                  flexShrink: 0,
                  overflow: "hidden",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="68"
                  height="68"
                  fill="none"
                >
                  <rect width="68" height="68" fill="#F6FBF6" rx="12" />
                  <path
                    fill="#44AE71"
                    d="M24 28.125h5.597c.41-.024 7.54-.526 14.331-6.221a2.25 2.25 0 0 1 3.697 1.721v22.5a2.251 2.251 0 0 1-3.697 1.723c-5.311-4.455-10.828-5.732-13.178-6.09v4.461a2.25 2.25 0 0 1-1.001 1.875l-1.547 1.03a2.251 2.251 0 0 1-3.429-1.311l-1.655-6.238A6.75 6.75 0 0 1 24 28.125Zm2.953 19.11v.015l1.547-1.03v-4.595h-3.038l1.491 5.61ZM24 39.375h4.5v-9H24a4.5 4.5 0 1 0 0 9ZM60.188 19.438a.925.925 0 0 1-.61.875l-3.027 1.113-1.113 3.024a.933.933 0 0 1-1.751 0l-1.116-3.02-3.025-1.114a.933.933 0 0 1 0-1.75l3.026-1.114 1.114-3.024a.932.932 0 0 1 1.75 0l1.114 3.027 3.024 1.113a.925.925 0 0 1 .614.87Zm-3.281-5.625h.937v.937a.47.47 0 0 0 .938 0v-.938h.937a.469.469 0 0 0 0-.937h-.937v-.938a.47.47 0 0 0-.938 0v.938h-.937a.469.469 0 0 0 0 .938Zm5.156 1.874h-.469v-.468a.469.469 0 1 0-.937 0v.469h-.47a.469.469 0 0 0 0 .937h.47v.469a.469.469 0 0 0 .937 0v-.469h.469a.469.469 0 1 0 0-.938Z"
                  />
                </svg>
              </Box>
              <Stack direction="column" flex={1}>
                <Typography
                  sx={{
                    color: "#111928",
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "26px /* 130% */",
                  }}
                >
                  {`새로운 소식알려 재방문율 높이기`}
                </Typography>
                <Typography
                  whiteSpace="pre-line"
                  sx={{
                    color: "#111928",
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "18px /* 150% */",
                    opacity: 0.8,
                    textWrap: "balance",
                    overflowWrap: "break-word",
                    wordBreak: "keep-all",
                  }}
                >
                  {`방문 이력이 있는 고객에게 신규 상품, 프로모션 등 
                    새로운 소식을 알려 재방문율을 높여보세요`}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </div>
    );
  }
);

export default Template;
