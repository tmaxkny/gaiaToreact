import * as React from "react";
import { Stack, Box, Typography, Button } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const DetailPageHeader2: React.FC<any> = React.forwardRef<any, any>(
  (
    {
      className,
      children,
      title,
      productName,
      issueTime,
      issue,
      consumerName,
      email,
      phoneNumber,
      name,
      file,
      fileName,
    },
    ref
  ) => {
    const downloadFile = (filePath: string, fileName: string) => {
      try {
        const xhr = new XMLHttpRequest();
        // TODO: 다운로드 파일에 따라 URL 정보만 변경될 수 있게 코드 작성하면 편할 듯 합니다.
        xhr.open("GET", filePath, true);
        xhr.responseType = "blob";
        xhr.onload = function () {
          const blob = xhr.response;
          // Blob 객체의 URL 생성
          const blobUrl = URL.createObjectURL(blob);
          // 다운로드 링크 생성
          const downloadElement = document.createElement("a");
          downloadElement.href = blobUrl;
          downloadElement.download = fileName;
          // 링크를 클릭하여 다운로드 트리거
          document.body.appendChild(downloadElement);
          downloadElement.click();
          // Blob 객체의 URL 해제
          URL.revokeObjectURL(blobUrl);
          // 리소스 해제
          document.body.removeChild(downloadElement);
        };
        xhr.send();
      } catch (error) {
        console.error("파일을 다운로드하는 중 오류 발생: ", error);
      }
    };
    return (
      <div className={className} ref={ref}>
        <Stack>
          <Stack sx={{ flex: "1,0,0", border: "1px solid #E5E7EB" }}>
            <Stack
              direction="row"
              sx={{ height: "56px", borderBottom: "1px solid #E5E7EB" }}
            >
              <Box
                sx={{
                  width: "302px",
                  padding: "16px",
                  background: "#F9FAFB",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRight: "1px solid #E5E7EB",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "26px",
                  }}
                >
                  문의 제목
                </Typography>
              </Box>
              <Box sx={{ padding: "16px" }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "26px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {`티베로 싱글 주문하고 결제했는데, TCP 결합된 상품으로 교환
                  가능할까요?`}
                </Typography>
              </Box>
            </Stack>
            <Stack
              direction="row"
              sx={{ height: "56px", borderBottom: "1px solid #E5E7EB" }}
            >
              <Box
                sx={{
                  width: "302px",
                  padding: "16px",
                  background: "#F9FAFB",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRight: "1px solid #E5E7EB",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "26px",
                  }}
                >
                  상품명
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: "16px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "26px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Tibero Single
                </Typography>
              </Box>
            </Stack>
            <Stack
              direction="row"
              sx={{ height: "56px", borderBottom: "1px solid #E5E7EB" }}
            >
              <Box
                sx={{
                  width: "302px",
                  padding: "16px",
                  background: "#F9FAFB",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRight: "1px solid #E5E7EB",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "26px",
                  }}
                >
                  발행 시각
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "486px",
                  padding: "16px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "26px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  23.10.15 11:01
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "302px",
                  padding: "16px",
                  background: "#F9FAFB",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRight: "1px solid #E5E7EB",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "26px",
                  }}
                >
                  증상
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "486px",
                  padding: "16px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "26px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  설치 어려움
                </Typography>
              </Box>
            </Stack>
            <Stack
              direction="row"
              sx={{ height: "56px", borderBottom: "1px solid #E5E7EB" }}
            >
              <Box
                sx={{
                  width: "302px",
                  padding: "16px",
                  background: "#F9FAFB",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRight: "1px solid #E5E7EB",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "26px",
                  }}
                >
                  고객명
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "486px",
                  padding: "16px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "26px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  김보미
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "302px",
                  padding: "16px",
                  background: "#F9FAFB",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRight: "1px solid #E5E7EB",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "26px",
                  }}
                >
                  이메일 주소
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "486px",
                  padding: "16px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "26px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  reizelle2@astral.co.kr
                </Typography>
              </Box>
            </Stack>
            <Stack
              direction="row"
              sx={{ height: "56px", borderBottom: "1px solid #E5E7EB" }}
            >
              <Box
                sx={{
                  width: "302px",
                  padding: "16px",
                  background: "#F9FAFB",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRight: "1px solid #E5E7EB",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "26px",
                  }}
                >
                  전화번호
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "486px",
                  padding: "16px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "26px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  010-22222-2222
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "302px",
                  padding: "16px",
                  background: "#F9FAFB",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRight: "1px solid #E5E7EB",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "26px",
                  }}
                >
                  처리 담당자
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "486px",
                  padding: "16px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "26px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  김티맥
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" sx={{ height: "56px" }}>
              <Box
                sx={{
                  width: "302px",
                  padding: "16px",
                  background: "#F9FAFB",
                  borderRight: "1px solid #E5E7EB",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "26px",
                  }}
                >
                  첨부 파일
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", padding: "16px", alignItems: "center" }}
              >
                <Button
                  onClick={() => downloadFile(file, fileName)}
                  startIcon={<AttachFileIcon />}
                  sx={{
                    height: "36px",
                    padding: "8px 12px",
                    border: "1.5px solid #A4CAFE",
                    borderRadius: "4px",
                    color: "#1C64F2",
                    fontSize: "14px",
                    fontWeight: "600",
                    lineHeight: "20px",
                  }}
                >
                  기술 지원 신청서
                </Button>
              </Box>
            </Stack>
          </Stack>
          <Box
            sx={{
              padding: "16px",
              borderLeft: "1px solid #E5E7EB",
              borderRight: "1px solid #E5E7EB",
              borderBottom: "1px solid #E5E7EB",
            }}
          >
            <Typography
              sx={{
                color: "#111928",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "26px",
              }}
            >
              {`안녕하세요. 티베로 싱글 구입한 XX회사의 김녹스라고 합니다. 다름아니라 기술지원 요청을
                            드리려고 여기에 문의를 하게 되었습니다. 저희 XX사는 그동안 XXXDB를 써오다가 이번에
                            티베로사의 제품을 구매하게 되었습니다. 가격과 성능 모두 만족하는데, 한 가지 문제는 저희
                            XX회사가 아직 제품에 익숙하지 않아 시행착오를 종종 겪는다는 것입니다. 그래서 혹시 가능하다면
                            XX회사에 직접 방문하셔서 티베로 사용법에 대한 속성강의를 진행해 주실 수 있는지요? 위의
                            사항이 가능하다면 더욱 편리하게 DB를 이용할 수 있을 것 같습니다. 수고하세요.`}
            </Typography>
          </Box>
        </Stack>
      </div>
    );
  }
);

export default DetailPageHeader2;
