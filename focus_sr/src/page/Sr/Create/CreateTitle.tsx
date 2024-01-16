import * as React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckIcon from "@mui/icons-material/Check";

const CreateTitle: React.FC<any> = React.forwardRef<any, any>(
  ({ className, onMoveDetail, children }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const [isDisable, setIsDisable] = React.useState(false);
    const [createDialogOpen, setCreateDialogOpen] = React.useState(false);
    const [cancelDialogOpen, setCancelDialogOpen] = React.useState(false);

    return (
      <div className={className} ref={ref}>
        {children}
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
              onClick={onMoveDetail}
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
          {isVisible && (
            <Stack
              direction="row"
              display="hidden"
              sx={{
                height: "48px",
                width: "fit-content",
                gap: "12px",
                border: "1px solid #E5E7EB",
                background: "#F3FAF7",
                borderRadius: "5px",
                alignItems: "center",
                boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.12)",
                padding: "1px 24px 1px 1px",
              }}
              alignItems="center"
            >
              <Box
                sx={{
                  width: "6px",
                  height: "46px",
                  borderRadius: "4px 0px 0px 4px",
                  background: "#31C48D",
                }}
              />
              <CheckCircleIcon
                sx={{ height: "24px", width: "24px", color: "#31C48D" }}
              />
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  color: "#31C48D",
                }}
              >
                이슈로 등록되었습니다.
              </Typography>
            </Stack>
          )}
          <Stack direction="row" sx={{ gap: "16px" }}>
            <Button
              sx={{
                background: "#F9FAFB",
                border: "1px solid #D1D5DB",
                borderRadius: "6px",
                padding: "10px 18px",
                color: "#374151",
              }}
              disabled={isDisable}
              onClick={() => {
                setCancelDialogOpen(true);
              }}
            >
              취소하기
            </Button>
            <Button
              sx={{
                background: "#1C64F2",
                borderRadius: "6px",
                padding: "10px 18px",
                color: "#FFF",
              }}
              onClick={() => {
                setCreateDialogOpen(true);
              }}
            >
              답변 등록
            </Button>
          </Stack>
        </Stack>
        <Dialog
          open={createDialogOpen}
          sx={{
            "& .MuiDialog-paper": {
              width: "500px",
              height: "186px",
              bgcolor: "#FFFFFF",
            },
          }}
        >
          <DialogTitle
            display="flex"
            gap="10px"
            height="32px"
            sx={{ padding: "24px" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#EBF5FF",
                borderRadius: "50%",
                padding: "6px",
              }}
            >
              <CheckIcon
                sx={{ width: "20px", height: "20px", color: "#3F83F8" }}
              />
            </Box>

            <Stack gap="10px">
              <Stack height="32px" justifyContent="center">
                <Typography
                  fontWeight={600}
                  fontSize="18px"
                  color=" var(--character-title-85, rgba(0, 0, 0, 0.85)"
                >
                  답변 등록
                </Typography>
              </Stack>
              <Stack height="32px" justifyContent="center">
                <Typography fontWeight="400" fontSize="16px" color="#6B7280">
                  해당 답변을 등록하겠습니까?
                </Typography>
              </Stack>
            </Stack>
          </DialogTitle>

          <DialogActions sx={{ flex: 1, p: "0px 24px" }}>
            <Button
              onClick={() => {
                setCreateDialogOpen(false);
              }}
              sx={{
                width: "80px",
                height: "38px",
                bgcolor: "#F9FAFB",
                borderRadius: "6px",
                boxShadow: "0 0 0 1px #D1D5DB inset",
                fontWeight: 600,
                fontSize: "14px",
                color: "#374151",
              }}
            >
              취소
            </Button>
            <Button
              onClick={() => {
                setCreateDialogOpen(false);
              }}
              sx={{
                width: "80px",
                height: "38px",
                bgcolor: "#1C64F2",
                borderRadius: "6px",
                fontWeight: 600,
                fontSize: "14px",
                color: "#FFFFFF",
              }}
            >
              등록
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={cancelDialogOpen}
          sx={{
            "& .MuiDialog-paper": {
              width: "500px",
              height: "186px",
              bgcolor: "#FFFFFF",
            },
          }}
        >
          <DialogTitle
            display="flex"
            gap="10px"
            height="32px"
            sx={{ padding: "24px" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#FDF2F2",
                borderRadius: "50%",
                padding: "6px",
              }}
            >
              <WarningAmberIcon
                sx={{ width: "20px", height: "20px", color: "#F05252" }}
              />
            </Box>

            <Stack gap="10px">
              <Stack height="32px" justifyContent="center">
                <Typography
                  fontWeight={600}
                  fontSize="18px"
                  color=" var(--character-title-85, rgba(0, 0, 0, 0.85)"
                >
                  답변 등록 취소
                </Typography>
              </Stack>
              <Stack height="32px" justifyContent="center">
                <Typography fontWeight="400" fontSize="16px" color="#6B7280">
                  {`현재 페이지를 나갈 경우, 변경사항이 저장되지 않습니다.`}
                </Typography>
              </Stack>
            </Stack>
          </DialogTitle>

          <DialogActions sx={{ flex: 1, p: "0px 24px" }}>
            <Button
              sx={{
                width: "80px",
                height: "38px",
                bgcolor: "#F9FAFB",
                borderRadius: "6px",
                boxShadow: "0 0 0 1px #D1D5DB inset",
                fontWeight: 600,
                fontSize: "14px",
                color: "#374151",
              }}
              onClick={() => {
                setCancelDialogOpen(false);
              }}
            >
              취소
            </Button>
            <Button
              sx={{
                width: "80px",
                height: "38px",
                bgcolor: "#F05252",
                borderRadius: "6px",
                fontWeight: 600,
                fontSize: "14px",
                color: "#FFFFFF",
              }}
              onClick={() => {
                setCancelDialogOpen(false);
              }}
            >
              나가기
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
);

export default CreateTitle;
