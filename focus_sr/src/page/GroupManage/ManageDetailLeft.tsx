import * as React from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

export const ManageDetailLeft: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children }, ref) => {
    const fakeManagerList = [
      {
        id: 0,
        name: "김나연",
        email: "20240117@tmax.co.kr",
        position: "운영진",
      },
      {
        id: 1,
        name: "김건우",
        email: "20240117@tmax.co.kr",
        position: "운영진",
      },
      { id: 2, name: "윤동근", email: "20240117@tmax.co.kr", position: "사원" },
      { id: 3, name: "김유나", email: "20240117@tmax.co.kr", position: "사원" },
      { id: 4, name: "김하늬", email: "20240117@tmax.co.kr", position: "사원" },
    ];
    const [query, setQuery] = React.useState("");
    const [buttonDisabled, setButtonDisabled] = React.useState(true);
    const [selectManager, setSelectManager] = React.useState([""]);

    React.useEffect(() => {
      if (selectManager.length === 0) setButtonDisabled(true);
      else setButtonDisabled(false);
    }, [selectManager]);

    return (
      <div className={className} ref={ref}>
        {children}
        <Stack
          sx={{
            width: "416px",
            border: "1px solid #D1D5DB",
            borderRadius: "10px",
          }}
        >
          <Stack
            direction="row"
            sx={{
              width: "416px",
              height: "74px",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#F9FAFB",
              borderRadius:
                "var(--spacing-12, 12px) var(--spacing-12, 12px) var(--spacing-0, 0px) var(--spacing-0, 0px)",
              padding: "24px",
              boxSizing: "border-box",
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                lineHeight: "26px",
              }}
            >
              영업 담당자 목록
            </Typography>
            <AddIcon sx={{ width: "20px", height: "20px" }} />
          </Stack>
          <Stack
            sx={{
              width: "416px",
              padding: "24px",
              gap: "24px",
              boxSizing: "border-box",
            }}
          >
            <TextField
              placeholder="이름 또는 이메일을 입력해주세요."
              value={query}
              onChange={(e) => {
                const newQuery = e.target.value as string;
                setQuery(newQuery);
              }}
              /* onKeyDown={e => {
                            if (e.key === 'Enter') {
                                handleTableSubmit();
                            }
                        }} */

              InputProps={{
                endAdornment: <SearchIcon sx={{ color: "#9CA3AF" }} />,
                sx: {
                  width: "368px",
                  height: "40px",
                  "& fieldset": {
                    padding: "0px 8px 0px 12px",
                    border: "1px solid var(--gray-200, #E5E7EB)",
                    borderRadius: "6px",
                  },
                },
              }}
            />
            <Stack sx={{ gap: "16px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <PeopleAltOutlinedIcon
                    sx={{ width: "24px", height: "24px" }}
                  />
                  <Typography
                    sx={{
                      color: "#6B7280",
                      fontSize: "14px",
                      fontWeight: "500",
                      lineHeight: "20px",
                    }}
                  >{`5`}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "8px",
                    alignItems: "center",
                  }}
                >
                  <Button
                    sx={{
                      width: "48px",
                      padding: "7px 10px",
                      borderRadius: "4px",
                      border: "1px solid #A4CAFE",
                    }}
                  >
                    이동
                  </Button>
                  <Button
                    sx={{
                      width: "48px",
                      padding: "7px 10px",
                      borderRadius: "4px",
                      background: "#1C64F2",
                      color: "#FFFFFF",
                    }}
                  >
                    이동
                  </Button>
                </Box>
              </Box>
              {fakeManagerList &&
                fakeManagerList.map((item) => {
                  return (
                    <Stack
                      key={item.id}
                      direction="row"
                      sx={{
                        height: "44px",
                        padding: "var(--spacing-12, 12px)",
                        gap: "10px",
                        alignItems: "center",
                        border: "1px solid #D1D5DB",
                        borderRadius: "6px",
                        boxSizing: "border-box",
                      }}
                    >
                      <Checkbox
                        /* checked={managerList.some(
                                  (item) => item === idx
                                )} */
                        /* onClick={() => handleManager(idx)} */
                        sx={{ color: "#9CA3AF" }}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",

                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#111928",
                            fontSize: "14px",
                            fontWeight: "400",
                            lineHeight: "20px",
                          }}
                        >
                          {item.name} {item.email}
                        </Typography>
                        <Divider
                          orientation="vertical"
                          variant="middle"
                          sx={{
                            height: "18px",
                            marginLeft: "6px",
                            marginRight: "6px",
                          }}
                        />
                        <Typography
                          sx={{
                            color: "#111928",
                            fontSize: "14px",
                            fontWeight: "400",
                            lineHeight: "20px",
                          }}
                        >
                          {item.position}
                        </Typography>
                      </Box>
                    </Stack>
                  );
                })}
            </Stack>
          </Stack>
        </Stack>
      </div>
    );
  }
);

export default ManageDetailLeft;
