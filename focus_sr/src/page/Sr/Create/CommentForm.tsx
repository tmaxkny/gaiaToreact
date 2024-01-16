import * as React from "react";
import { Stack, Typography, TextField, Button } from "@mui/material";
import { Add } from "@mui/icons-material";

const CommentForm: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children }, ref) => {
    return (
      <div className={className} ref={ref}>
        {children}
        <Stack sx={{ width: "100%" }}>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#4B5563",
              padding: "19px 0 19px 0",
            }}
          >
            답변 작성
          </Typography>
          <TextField
            sx={{
              "& .MuiInputBase-input": {
                fontSize: "16px",
                color: "#111928",
                width: "100%",
                height: "425px",
              },
            }}
            multiline
            rows={18}
          ></TextField>
          <Stack
            direction="row"
            gap="20px"
            sx={{ mt: "16px", p: "10px 0px 12px 0px;" }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "600",
                lineHeight: "20px",
                color: "#111928",
              }}
            >
              파일 업로드
            </Typography>
            <Stack direction="column" gap="12px">
              <Button
                component="label"
                startIcon={<Add sx={{ width: "12px" }} />}
                sx={{
                  fontSize: "12px",
                  width: "fit-content",
                  borderRadius: "4px",
                  color: "#374151",
                  border: "1px solid #D1D5DB",
                  backgroundColor: "#F9FAFB",
                }}
              >
                파일추가
                <input
                  id="file_upload"
                  type="file"
                  style={{ display: "none" }}
                />
              </Button>
              <Typography
                sx={{ fontSize: "12px", color: "#6B7280" }}
              >{`파일은 최대 1개까지 설정할 수 있습니다. pdf.png.jpg 형식의 파일만 등록됩니다.`}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </div>
    );
  }
);

export default CommentForm;
