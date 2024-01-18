import * as React from "react";
import { Box, Button, Snackbar, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import CreateIcon from "@mui/icons-material/Create";
import ClearIcon from "@mui/icons-material/Clear";

const DetailTitle: React.FC<any> = React.forwardRef<any, any>(
  ({ className, onMoveList, onMoveCreate, children }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const [isDisable, setIsDisable] = React.useState(false);

    const handleVisible = () => {
      setIsDisable(true);
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    };

    return (
      <div className={className} ref={ref}>
        <Stack
          direction="row"
          sx={{
            padding: "20px 32px",
            justifyContent: "space-between",
            borderBottom: "1px solid #E5E7EB",
          }}
          alignItems="center"
        >
          <Stack direction="row" sx={{ gap: "12px" }}>
            <ArrowBackIcon
              sx={{ width: "24px", height: "24px" }}
              onClick={onMoveList}
            />
            <Typography
              sx={{
                color: "#111928",
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "32px",
              }}
            >
              기술문의 상세
            </Typography>
          </Stack>
          <Stack direction="row" sx={{ gap: "16px" }}>
            <Button
              startIcon={
                <PlaylistAddIcon
                  sx={{ width: "20px", height: "20px", color: "#374151" }}
                />
              }
              sx={{
                background: "#F9FAFB",
                border: "1px solid #D1D5DB",
                borderRadius: "6px",
                gap: "4px",
                padding: "10px 18px",
                color: "#374151",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "26px",
              }}
              disabled={isDisable}
              onClick={() => {
                handleVisible();
              }}
            >
              IMS 이슈로 등록
            </Button>
            <Button
              startIcon={
                <CreateIcon
                  sx={{ width: "20px", height: "20px", color: "white" }}
                />
              }
              sx={{
                background: "#1C64F2",
                borderRadius: "6px",
                gap: "4px",
                padding: "10px 18px",
                color: "white",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "26px",
              }}
              onClick={onMoveCreate}
            >
              답변 작성
            </Button>
          </Stack>
        </Stack>
        <Snackbar
          ContentProps={{
            sx: {
              background: "rgba(0, 197, 114, 0.70)",
            },
          }}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={isVisible}
          onClose={() => {
            setIsVisible(false);
          }}
          message={
            <Box sx={{ display: "flex", flexDirection: "row", gap: "8px" }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "18px",
                  color: "#FFFFFF",
                  minWidth: "260px",
                }}
              >
                등록완료 되었습니다.
              </Typography>
              <ClearIcon
                sx={{ width: "20px", height: "20px", color: "#FFFFFF" }}
              />
            </Box>
          }
        />
      </div>
    );
  }
);

export default DetailTitle;
