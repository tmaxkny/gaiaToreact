import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

const DetailTitle: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children, moveToBack, moveToEdit }, ref) => {
    const pageType = "BEFORE";
    const editAble =
      pageType === ("ONSITE" as string) || pageType === ("BEFORE" as string)
        ? false
        : true;
        
    return (
      <Stack
        flexDirection="row"
        alignItems="center"
        sx={{ padding: "20px 32px" }}
        justifyContent="space-between"
        borderBottom="1px solid #E5E7EB"
      >
        <Box sx={{ display: "flex", flexDirection: "row", gap: "4px" }}>
          <ArrowBackIcon
            sx={{ width: "24px", height: "24px" }}
            onClick={() => moveToBack()}
          />
          <Typography
            sx={{
              fontSize: "24px",
              marginLeft: "12px",
              fontWeight: "700",
              lineHeight: "32px",
            }}
          >
            프로모션 상세
          </Typography>
        </Box>
        <Button
          disabled={editAble}
          onClick={() => moveToEdit()}
          startIcon={
            <CreateOutlinedIcon
              sx={{ width: "20px", height: "20px", color: "#374151" }}
            />
          }
          sx={{
            padding: "10px 18px",
            borderRadius: "6px",
            backgroundColor: "#F9FAFB",
            border: "1px solid #D1D5DB",
            color: "#374151",
            fontSize: "16px",
            fontWeight: "600",
            lineHeight: "26px",
          }}
        >
          수정
        </Button>
      </Stack>
    );
  }
);

export default DetailTitle;
