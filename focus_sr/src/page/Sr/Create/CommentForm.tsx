import * as React from "react";
import { Stack, Typography, TextField, Button, Box } from "@mui/material";
import { Add } from "@mui/icons-material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const CommentForm: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children }, ref) => {
    type TFile = {
      id: number;
      name: string;
      src: string;
    };
    const fileFontStyle = {
      fontWeight: "600",
      fontSize: "12px",
      color: "#1C64F2",
    };
    const [files, setFiles] = React.useState<TFile[]>(); //image url

    const deleteFile = (id: number) => {
      const newFiles = files?.filter((item) => item.id !== id);
      setFiles(newFiles);
    };

    const uploadFile = (evt: React.ChangeEvent<HTMLInputElement>) => {
      const newFiles = evt.target.files;
      const newFile = newFiles && newFiles[0];

      if (newFile) {
        const url = window.URL.createObjectURL(newFile);
        const id = (files?.length || 0) + 1;
        setFiles((prev) => [
          ...(prev || []),
          { id: id, name: newFile.name, src: url },
        ]);
        evt.target.value = "";
      }
    };

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
            {files &&
              files.map((item) => {
                return (
                  <Box
                    key={item.id}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "8px",
                      padding: "7px 10px",
                      background: "#FFFFFF",
                      border: "1px solid #A4CAFE",
                      borderRadius: "4px",
                      boxSizing: "border-box",
                      height: "32px",
                    }}
                  >
                    <Typography sx={{ ...fileFontStyle }}>
                      {item.name}
                    </Typography>
                    <FileDownloadOutlinedIcon
                      sx={{ width: "12px", height: "12px", color: "#1C64F2" }}
                    />
                    <ClearOutlinedIcon
                      sx={{ width: "12px", height: "12px", color: "#1C64F2" }}
                      onClick={() => {
                        deleteFile(item.id);
                      }}
                    />
                  </Box>
                );
              })}
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
                  onChange={(e) => {
                    uploadFile(e);
                  }}
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
