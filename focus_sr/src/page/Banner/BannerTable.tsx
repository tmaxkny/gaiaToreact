import {
  Box,
  Checkbox,
  Dialog,
  IconButton,
  Pagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const BannerTable: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children, moveToDetail }, ref) => {
    const [page, setPage] = React.useState(0);
    const [checkboxs, setCheckboxs] = React.useState<number[]>([]);
    const [checkboxAll, setCheckboxAll] = React.useState(false);
    const [selectedImageUrl, setSelectedImageUrl] = React.useState("");
    const [toggles, setToggles] = React.useState<number[]>([]);
    const [openImagePreview, setOpenImagePreview] = React.useState(false);

    type ToggleProps = {
      leftText?: string;
      rightText?: string;
      isToggleOn: boolean;
      disabled?: boolean;
      handleClick?: () => void;
    };

    const headerCellStyle = {
      backgroundColor: "#F3F4F6",
      fontWeight: "600",
      boxSizing: "border-box",
      color: "#111928",
      fontSize: "14px",
      lineHeight: "20px",
    };

    const cellStyle = {
      whiteSpace: "nowrap",
      fontWeight: "400",
      boxSizing: "border-box",
      color: "#111928",
      fontSize: "14px",
      lineHeight: "20px",
    };

    type TColumn = {
      location: string;
      bannerType: string;
      targetDevice: string;
      title: string;
      preview: string;
      isActive: boolean;
      displayDuration: string;
      modifiedAt: string;
    };

    type TTableColumn<T> = {
      columnName: keyof T;
      label: string;
    };

    const COLUMNS: TTableColumn<TColumn>[] = [
      { columnName: "location", label: "위치" },
      { columnName: "bannerType", label: "유형" },
      { columnName: "targetDevice", label: "대상 기기" },
      { columnName: "title", label: "배너 제목" },
      { columnName: "preview", label: "미리보기" },
      { columnName: "isActive", label: "사용" },
      { columnName: "displayDuration", label: "노출기간" },
      { columnName: "modifiedAt", label: "수정일시" },
    ];

    const dummyData = [
      {
        id: 1,
        title: "티베로 세일즈 오픈",
        targetDevice: "PC",
        location: "sales > Home",
        bannerType: "MAIN_TOP",
        filePath: "test",
        displayDuration: "2023.10.20 - 2023.10.22",
        isActive: "Y",
        modifiedAt: "Oct 30, 2023, 12:50:48 AM",
      },
      {
        id: 2,
        title: "티베로 세일즈 오픈",
        targetDevice: "PC",
        location: "sales > Home",
        bannerType: "MAIN_TOP",
        fileName: "테스트 배너 이미지",
        filePath:
          "https://images.freeimages.com/images/large-previews/2b6/free-banner-background-1639360.jpg",
        bannerLink: "www.example.com",
        displayDuration: "2023.10.20 - 2023.10.22",
        isActive: "Y",
        modifiedAt: "Oct 31, 2023, 12:54:46 AM",
      },
      {
        id: 3,
        title: "티베로 세일즈 오픈",
        targetDevice: "PC",
        location: "sales > Home",
        bannerType: "MAIN_TOP",
        filePath: "test",
        displayDuration: "2023.10.20 - 2023.10.22",
        isActive: "Y",
        modifiedAt: "Oct 30, 2023, 12:50:48 AM",
      },
      {
        id: 4,
        title: "티베로 세일즈 오픈",
        targetDevice: "PC",
        location: "sales > Home",
        bannerType: "MAIN_TOP",
        fileName: "테스트 배너 이미지",
        filePath:
          "https://images.freeimages.com/images/large-previews/2b6/free-banner-background-1639360.jpg",
        bannerLink: "www.example.com",
        displayDuration: "2023.10.20 - 2023.10.22",
        isActive: "Y",
        modifiedAt: "Oct 31, 2023, 12:54:46 AM",
      },
      {
        id: 5,
        title: "티베로 세일즈 오픈",
        targetDevice: "PC",
        location: "sales > Home",
        bannerType: "MAIN_TOP",
        filePath: "test",
        displayDuration: "2023.10.20 - 2023.10.22",
        isActive: "Y",
        modifiedAt: "Oct 30, 2023, 12:50:48 AM",
      },
      {
        id: 6,
        title: "티베로 세일즈 오픈",
        targetDevice: "PC",
        location: "sales > Home",
        bannerType: "MAIN_TOP",
        fileName: "테스트 배너 이미지",
        filePath:
          "https://images.freeimages.com/images/large-previews/2b6/free-banner-background-1639360.jpg",
        bannerLink: "www.example.com",
        displayDuration: "2023.10.20 - 2023.10.22",
        isActive: "Y",
        modifiedAt: "Oct 31, 2023, 12:54:46 AM",
      },
    ];

    const tableLength = dummyData.length;

    const handlePageChange = (
      _event: React.ChangeEvent<unknown>,
      currentPage: number
    ) => {
      setPage(currentPage);
    };

    const handleCheckbox = (idx: number) => {
      if (checkboxs.some((item) => item === idx)) {
        const newCheckboxs = checkboxs.filter((item) => item !== idx);
        setCheckboxs(newCheckboxs);
      } else {
        const newCheckboxs = [...checkboxs, idx];
        setCheckboxs(newCheckboxs);
      }
    };

    const handleCheckboxAll = () => {
      if (checkboxAll) setCheckboxs([]);
      else setCheckboxs([...Array(tableLength).keys()]);
      setCheckboxAll(!checkboxAll);
    };

    const closeImagePreview = () => setOpenImagePreview(!openImagePreview);

    const handleToggles = (idx: number) => {
      if (toggles.some((item) => item === idx)) {
        const newToggle = toggles.filter((item) => item !== idx);
        setToggles(newToggle);
      } else {
        const newToggle = [...toggles, idx];
        setToggles(newToggle);
      }
    };

    const Toggle = ({
      leftText = "on",
      rightText = "off",
      isToggleOn,
      disabled = false,
      handleClick,
    }: ToggleProps) => {
      return (
        <Stack
          onClick={() => {
            if (!disabled && handleClick) {
              handleClick();
            }
          }}
          sx={{
            position: "relative",
            justifyContent: "center",
            width: "48px",
            height: "22px",
            backgroundColor: isToggleOn ? "#3F83F8" : "#E5E7EB",
            borderRadius: "25px",
            cursor: !disabled ? "pointer" : "default",
            transition: "background-color 0.2s",

            "&:before, &:after": {
              position: "absolute",
              fontSize: "11px",
              fontWeight: "700",
            },
            "&:before": {
              content: `'${leftText}'`,
              color: "#FFFFFF",
              left: "9px",
              opacity: !isToggleOn ? 0 : 1,
            },
            "&:after": {
              content: `'${rightText}'`,
              color: "#4B5563",
              right: "9px",
              opacity: isToggleOn ? 0 : 1,
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              right: isToggleOn ? "2px" : "28px",
              top: "2px",
              width: "18px",
              height: "18px",
              backgroundColor: "#FFFFFF",
              borderRadius: "25px",
              zIndex: 999,
              transition: "right 0.2s",
            }}
          />
        </Stack>
      );
    };

    return (
      <div className={className} ref={ref}>
        <Stack>
          <TableContainer>
            <Table stickyHeader>
              <TableHead sx={{ height: "56px" }}>
                <TableRow
                  sx={{
                    "& .MuiTableCell-root": {
                      ...headerCellStyle,
                    },
                  }}
                >
                  <TableCell sx={{ width: "32px" }}>
                    <Checkbox
                      checked={checkboxs.length === tableLength}
                      onClick={() => {
                        handleCheckboxAll();
                      }}
                    />
                  </TableCell>
                  {COLUMNS.map((item) => {
                    return <TableCell>{item.label}</TableCell>;
                  })}
                </TableRow>
              </TableHead>
              <TableBody sx={{ "& .MuiTableCell-root": { ...cellStyle } }}>
                {dummyData &&
                  dummyData.map((item, idx) => {
                    return (
                      <TableRow key={item.id} onClick={moveToDetail}>
                        <TableCell>
                          <Checkbox
                            checked={checkboxs.some((check) => check === idx)}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCheckbox(idx);
                            }}
                          />
                        </TableCell>
                        <TableCell>{item.location}</TableCell>
                        <TableCell>{item.bannerType}</TableCell>
                        <TableCell>{item.targetDevice}</TableCell>
                        <TableCell>{item.title}</TableCell>
                        <TableCell>
                          <Typography
                            sx={{
                              maxWidth: "160px",
                              cursor: "pointer",
                              color: "#1C64F2",
                              fontWeight: "600",
                              overflow: "hidden",
                              fontSize: "14px",
                              whiteSpace: "nowrap",
                            }}
                            onClick={() => {
                              setOpenImagePreview(!openImagePreview);
                              setSelectedImageUrl(item.filePath);
                            }}
                          >
                            {item.fileName}
                          </Typography>
                        </TableCell>
                        <TableCell
                          onClick={(event) => {
                            event.stopPropagation();
                          }}
                        >
                          <Toggle
                            isToggleOn={toggles.some(
                              (toggle) => toggle === item.id
                            )}
                            handleClick={() => {
                              handleToggles(item.id);
                            }}
                          />
                        </TableCell>
                        <TableCell>{item.displayDuration}</TableCell>
                        <TableCell>{item.modifiedAt}</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <Pagination
            count={10}
            page={page}
            onChange={handlePageChange}
            sx={{
              width: "100%",
              height: "82px",
              display: "flex",
              justifyContent: "center",
              "& .MuiPaginationItem-icon": {
                width: "20px",
                height: "20px",
              },
              "& .MuiPaginationItem-root": {
                m: "0px 6px",
                color: "#4B5563",
                "&.Mui-disabled": { color: "#111928" },
              },
              "& .MuiPaginationItem-page": {
                borderRadius: "4px",
                fontWeight: "400",
                fontSize: "14px",
                color: "var(--gray-900, #111928)",
                "&.Mui-selected": {
                  bgcolor:
                    "var(--interaction-selected, rgba(63, 131, 248, 0.10))",
                  color: "#1C64F2",
                  ":hover": { bgcolor: "#EBF5FF" },
                },
              },
            }}
          />
          <Dialog
            open={openImagePreview}
            sx={{
              "& .MuiDialog-container": {
                "& .MuiPaper-root": {
                  width: "100%",
                  maxWidth: "1200px",
                  borderRadius: "24px",
                },
              },
            }}
          >
            <Stack sx={{ padding: "40px 60px", height: "662px" }}>
              <Stack
                sx={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Pretandard",
                    fontSize: "24px",
                    lineHeight: "32px",
                    fontWeight: "700",
                  }}
                >
                  배너 미리보기
                </Typography>
                <IconButton
                  onClick={closeImagePreview}
                  disableFocusRipple
                  disableRipple
                  sx={{ width: "32px", height: "32px" }}
                >
                  <CloseIcon />
                </IconButton>
              </Stack>
              <Box
                component="img"
                src={selectedImageUrl}
                sx={{
                  width: "100%",
                  height: "75px",
                  objectFit: "cover",
                  margin: "auto",
                }}
              />
            </Stack>
          </Dialog>
        </Stack>
      </div>
    );
  }
);

export default BannerTable;
