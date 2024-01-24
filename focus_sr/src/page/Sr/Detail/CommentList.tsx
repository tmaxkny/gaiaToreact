import * as React from "react";
import { Stack, Typography, Divider, Box } from "@mui/material";
import { PersonOutline } from "@mui/icons-material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

const CommentList: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children }, ref) => {
    const fontStyle = {
      whiteSpace: "pre-line",
      fontSize: "16px",
      color: "#111928",
      fontWeight: "400",
      lineHeight: "26px",
    };

    const fileFontStyle = {
      fontSize: "12px",
      color: "#1C64F2",
      fontWeight: "600",
      lineHeight: "18px",
    };

    return (
      <div className={className} ref={ref}>
        {children}
        <Stack sx={{ width: "100%" }}>
          <Typography
            sx={{
              fontSize: "18px",
              color: "#111928",
              fontWeight: "600",
              padding: "16px 0 16px 0",
            }}
          >
            기술문의 답변 내역
          </Typography>
          <Divider sx={{ width: "100%" }} />
          <Stack
            direction="column"
            gap="32px"
            sx={{ mt: "32px", width: "100%" }}
          >
            {/* 내 답변 */}
            <Stack alignSelf="end" gap="10px">
              <Stack
                direction="column"
                sx={{
                  backgroundColor: "#F3F4F6",
                  padding: "12px 24px",
                  borderRadius: "12px 0 12px 12px",
                }}
                gap="12px"
              >
                <Typography
                  sx={{
                    ...fontStyle,
                  }}
                >{`안녕하세요 안구닌님, 티베로사의 김티맥 담당자라고 합니다.
                            우선 저희 티베로사의 DB를 구매해주셔서 감사합니다. 
                            
                            요청하신 교환건에 대해서는 바로 처리해드리도록 하겠습니다.
                            관련해서 아래에 교환 안내사항 자료를 첨부하오니 확인 부탁드립니다.
                            
                            감사합니다.`}</Typography>
              </Stack>
              <Stack
                alignSelf="end"
                direction="row"
                sx={{
                  "& p": {
                    fontSize: "12px",
                  },
                }}
                gap="8px"
              >
                <Typography sx={{ color: "#E02424" }}>삭제</Typography>
                <Typography sx={{ color: "#6B7280" }}>
                  2023.10.27 15:12
                </Typography>
              </Stack>
            </Stack>
            {/* 담당자 답변  */}
            <Stack alignSelf="start" direction="row" gap="16px">
              <Stack
                sx={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#E5E7EB",
                  borderRadius: "100%",
                }}
                justifyContent="center"
                alignItems="center"
              >
                <PersonOutline
                  sx={{
                    width: "24px",
                    color: "#FFFFFF",
                  }}
                />
              </Stack>
              <Stack direction="column" gap="10px">
                <Typography
                  sx={{ fontSize: "14px", fontWeight: "600", color: "#111928" }}
                >
                  김담당
                </Typography>
                <Stack
                  direction="column"
                  sx={{
                    backgroundColor: "#FFF9DF",
                    padding: "12px 24px",
                    borderRadius: "0 12px 12px 12px",
                  }}
                  gap="12px"
                >
                  <Typography
                    sx={{
                      ...fontStyle,
                    }}
                  >{`안녕하세요. 답변 감사합니다!
                        언제까지 작성해서 드리면 될까요 ?`}</Typography>
                </Stack>
                <Typography
                  sx={{ fontSize: "12px", color: "#6B7280" }}
                >{`2023.10.28 15:12`}</Typography>
              </Stack>
            </Stack>
          </Stack>
          {/* 담당자 답변 : 댓글 삭제한경우 */}
          <Stack alignSelf="end" gap="10px">
            <Stack
              direction="column"
              sx={{
                backgroundColor: "#F3F4F6",
                padding: "12px 24px",
                borderRadius: "12px 0 12px 12px",
              }}
              gap="12px"
            >
              <Typography
                sx={{
                  ...fontStyle,
                }}
              >{`댓글이 삭제되었습니다.`}</Typography>
            </Stack>
            <Stack
              alignSelf="end"
              direction="row"
              sx={{
                "& p": {
                  fontSize: "12px",
                },
              }}
              gap="8px"
            >
              <Typography sx={{ color: "#E02424" }}>삭제</Typography>
              <Typography sx={{ color: "#6B7280" }}>
                2023.10.27 15:12
              </Typography>
            </Stack>
          </Stack>
          {/* 담당자 답변 : 하이퍼링크인경우*/}
          <Stack alignSelf="end" gap="10px">
            <Stack
              direction="column"
              sx={{
                backgroundColor: "#F3F4F6",
                padding: "12px 24px",
                borderRadius: "12px 0 12px 12px",
              }}
              gap="12px"
            >
              <Typography
                sx={{
                  whiteSpace: "pre-line",
                  fontSize: "16px",
                  color: "#1C64F2",
                  fontWeight: "600",
                  lineHeight: "26px",
                }}
              >{`http://www.tmax.co.kr`}</Typography>
            </Stack>
            <Stack
              alignSelf="end"
              direction="row"
              sx={{
                "& p": {
                  fontSize: "12px",
                },
              }}
              gap="8px"
            >
              <Typography sx={{ color: "#E02424" }}>삭제</Typography>
              <Typography sx={{ color: "#6B7280" }}>
                2023.10.27 15:12
              </Typography>
            </Stack>
          </Stack>
          {/* 첨부파일이 있는 댓글 등록 후 5분 경과 후 (첨부파일 삭제 불가)*/}
          <Stack alignSelf="end" gap="10px">
            <Stack
              direction="column"
              sx={{
                backgroundColor: "#F3F4F6",
                padding: "12px 24px",
                borderRadius: "12px 0 12px 12px",
              }}
              gap="12px"
            >
              <Typography
                sx={{
                  ...fontStyle,
                }}
              >{`댓글내용 댓글내용 댓글내용 댓글내용댓글내용 댓글내용 댓글내용
              댓글내용 댓글내용 댓글내용 댓글내용댓글내용 댓글내용 
              댓글내용댓글내용 댓글내용 댓글내용 댓글내용댓글내용 댓글내용 댓글내용`}</Typography>
              <Stack direction="row" gap="8px">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                    padding: "7px 10px",
                    background: "#FFFFFF",
                    border: "1px solid #A4CAFE",
                    borderRadius: "4px",
                  }}
                >
                  <Typography
                    sx={{ ...fileFontStyle }}
                  >{`첨부파일명.형식`}</Typography>
                  <FileDownloadOutlinedIcon
                    sx={{ width: "12px", height: "12px", color: "#1C64F2" }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                    padding: "7px 10px",
                    background: "#FFFFFF",
                    border: "1px solid #A4CAFE",
                    borderRadius: "4px",
                  }}
                >
                  <Typography
                    sx={{ ...fileFontStyle }}
                  >{`첨부파일명.형식`}</Typography>
                  <FileDownloadOutlinedIcon
                    sx={{ width: "12px", height: "12px", color: "#1C64F2" }}
                  />
                </Box>
              </Stack>
            </Stack>
            <Stack
              alignSelf="end"
              direction="row"
              sx={{
                "& p": {
                  fontSize: "12px",
                },
              }}
              gap="8px"
            >
              <Typography sx={{ color: "#E02424" }}>삭제</Typography>
              <Typography sx={{ color: "#6B7280" }}>
                2023.10.27 15:12
              </Typography>
            </Stack>
          </Stack>
          {/* 첨부파일이 있는 댓글 등록 후 5분 경과 전 (첨부파일 삭제 가능)*/}
          <Stack alignSelf="end" gap="10px">
            <Stack
              direction="column"
              sx={{
                backgroundColor: "#F3F4F6",
                padding: "12px 24px",
                borderRadius: "12px 0 12px 12px",
              }}
              gap="12px"
            >
              <Typography
                sx={{
                  ...fontStyle,
                }}
              >{`댓글내용 댓글내용 댓글내용 댓글내용댓글내용 댓글내용 댓글내용
              댓글내용 댓글내용 댓글내용 댓글내용댓글내용 댓글내용 
              댓글내용댓글내용 댓글내용 댓글내용 댓글내용댓글내용 댓글내용 댓글내용`}</Typography>
              <Stack direction="row" gap="8px">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                    padding: "7px 10px",
                    background: "#FFFFFF",
                    border: "1px solid #A4CAFE",
                    borderRadius: "4px",
                  }}
                >
                  <Typography
                    sx={{ ...fileFontStyle }}
                  >{`첨부파일명.형식`}</Typography>
                  <FileDownloadOutlinedIcon
                    sx={{ width: "12px", height: "12px", color: "#1C64F2" }}
                  />
                  <ClearOutlinedIcon
                    sx={{ width: "12px", height: "12px", color: "#1C64F2" }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                    padding: "7px 10px",
                    background: "#FFFFFF",
                    border: "1px solid #A4CAFE",
                    borderRadius: "4px",
                  }}
                >
                  <Typography
                    sx={{ ...fileFontStyle }}
                  >{`첨부파일명.형식`}</Typography>
                  <FileDownloadOutlinedIcon
                    sx={{ width: "12px", height: "12px", color: "#1C64F2" }}
                  />
                  <ClearOutlinedIcon
                    sx={{ width: "12px", height: "12px", color: "#1C64F2" }}
                  />
                </Box>
              </Stack>
            </Stack>
            <Stack
              alignSelf="end"
              direction="row"
              sx={{
                "& p": {
                  fontSize: "12px",
                },
              }}
              gap="8px"
            >
              <Typography sx={{ color: "#E02424" }}>삭제</Typography>
              <Typography sx={{ color: "#6B7280" }}>
                2023.10.27 15:12
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </div>
    );
  }
);

export default CommentList;
