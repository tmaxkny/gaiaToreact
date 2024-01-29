import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const PurchaseProduct: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children }, ref) => {
    const productData = [
      {
        productName: "Tibero7",
        percent: 50,
        conversionCnt: 5,
      },
      {
        productName: "OpenSQL",
        percent: 40,
        conversionCnt: 4,
      },
      {
        productName: "ZetData",
        percent: 10,
        conversionCnt: 1,
      },
    ];

    const boxMainStyle = {
      display: "flex",
      flexDirection: "row",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: "16px",
    };

    const boxContentStyle = {
      display: "flex",
      flexDirection: "row",
      flex: "1",
      justifyContent: "space-between",
    };

    const fontContentStyle = {
      color: "#111928",
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: "26px",
    };

    const PRODUCT_COLOR: { [key: string]: string } = {
      Tibero7: "#76A9FA",
      OpenSQL: "#31C48D",
      ZetData: "#9CA3AF",
    };

    return (
      <Stack
        justifyContent="space-between"
        sx={{
          width: "400px",
          height: "300px",
          padding: "48px 32px",
          borderRadius: "var(--8, 8px)",
          backgroundColor: "#F9FAFB",
        }}
      >
        {productData &&
          productData.map((item, index) => {
            return (
              <Box key={index} sx={{ ...boxMainStyle }}>
                <Box
                  sx={{
                    width: "24px",
                    height: "24px",
                    backgroundColor: PRODUCT_COLOR[item.productName],
                  }}
                ></Box>
                <Box sx={{ ...boxContentStyle }}>
                  <Typography sx={{ ...fontContentStyle }}>
                    {item.productName}
                  </Typography>
                  <Box display="flex" flexDirection="row">
                    <Typography sx={{ ...fontContentStyle }}>
                      {item.percent}%
                    </Typography>
                    <Typography
                      sx={{ ...fontContentStyle }}
                    >{`(${item.conversionCnt.toLocaleString()}건)`}</Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
      </Stack>
    );
  }
);

export default PurchaseProduct;
