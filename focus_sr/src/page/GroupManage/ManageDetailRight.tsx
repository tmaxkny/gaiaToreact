import * as React from "react";
import { Box, Stack, Switch, Typography } from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

export const ManageDetailRight: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children }, ref) => {
    const fakeMenu = ["고객 관리", "영업 관리", "프로모션 관리", "SR 관리"];
    const authorityList = [
      {
        "제품 관리": [
          "제품등록",
          "제품 목록 조회",
          "제품 정보 수정",
          "제품 삭제",
          "제품 목록 다운로드",
        ],
      },
      {
        "상품 관리": [
          "상품등록",
          "상품 목록 조회",
          "상품 정보 수정",
          "제품 삭제",
          "상품 노출/비노출 설정",
          "상품 카테고리 관리 (추가,수정,삭제)",
          "상품 목록 다운로드",
        ],
      },
      {
        "판매/주문관리": [
          "주문목록/상세",
          "청구목록/상세",
          "미수금목록/상세",
          "청구서 전송",
          "미납 알림 전송",
        ],
      },
      {
        " 매출 관리": ["매출 목록/상세 조회"],
      },
      {
        "고객 관리": [
          "등록 : 리드등록, 계정등록, 연락처등록, 업무등록, 일정등록, 기회등록",
          "조회 : 리드조회, 계정목록조회, 연락처목록 조회, 활동이력목록조회, 기회목록조회, 프로모션목록조회",
          "수정 : 리드수정, 리드단계변경, 계정상세정보편집, 업무편집, 일정편집, 연락처상세정보편집",
          "삭제 : 리드삭제, 계정삭제, 업무삭제, 일정삭제, 연락처삭제, 기회삭제, 프로모션삭제",
          "전송 : 프로모션 검색 및 전송",
        ],
      },
      {
        "영업 관리": [
          "등록 : 기회등록, 업무등록, 일정등록",
          "조회 : 기회목록, 활동이력목록, 영업>상품목록, 히스토리목록, 일정캘린더, 관련항목상세, 영업>상품불러오기",
          "수정 : 기회상세정보수정, 기회단계수정, 기회단계>키필드 수정, 업무수정, 일정수정, 일정상세정보수정, 관련항목변경",
          "삭제 : 기회삭제, 업무삭제, 일정삭제, 영업>상품삭제, 활동이력목록삭제, 관련항목제거",
        ],
      },
      {
        "프로모션 관리": [
          "프로모션 전송",
          "배너 사용여부 설정",
          "배너 노출 순서 변경",
          "크레딧 기본 정보 설정",
          "크레딧 조건 삭제",
          "크레딧 조건 등록",
          "크레딧 조건 수정",
        ],
      },
      {
        "문의 관리": [
          "이슈 등록",
          "답변 등록",
          "문의 조회",
          "담당자 수정",
          "우선순위 지정",
          "심각도 지정",
          "담당자 지정",
        ],
      },
    ];

    const [query, setQuery] = React.useState("");
    const [buttonDisabled, setButtonDisabled] = React.useState(true);
    const [selectManager, setSelectManager] = React.useState([""]);
    const [switchChecked, setSwitchChecked] = React.useState(
      Array(9).fill(false)
    );
    const [selectAuthority, setSelectAuthority] = React.useState(9);

    React.useEffect(() => {
      if (selectManager.length === 0) setButtonDisabled(true);
      else setButtonDisabled(false);
    }, [selectManager]);

    return (
      <div className={className} ref={ref}>
        {children}
        <Stack gap="32px">
          <Stack gap="16px">
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                lineHeight: "26px",
              }}
            >
              접근 가능 메뉴
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "8px",
                alignItems: "center",
              }}
            >
              {fakeMenu &&
                fakeMenu.map((item, idx) => {
                  return (
                    <Box
                      key={idx}
                      sx={{
                        padding: "var(--spacing-4, 4px) 8px",
                        borderRadius: "var(--spacing-16, 16px)",
                        border: "#76A9FA",
                        background: "#EBF5FF",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#1C64F2",
                          fontSize: "14px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  );
                })}
            </Box>
          </Stack>
          <Stack gap="24px">
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                lineHeight: "26px",
              }}
            >
              상세 권한 설정
            </Typography>
            <Stack gap="20px">
              {authorityList &&
                authorityList.map((item, idx) => {
                  return (
                    <Stack
                      key={idx} // 또는 고유한 키를 사용해야 합니다.
                      sx={{
                        width: "1140px",
                        height: "46px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "var(--spacing-4, 4px) 24px",
                        borderRadius: "var(--spacing-12, 12px)",
                        border: "1px solid #E5E7EB",
                        background: "#F9FAFB",
                      }}
                      onClick={() => {
                        setSelectAuthority(idx);
                        console.log(idx);
                      }}
                    >
                      {Object.keys(item).map((key) => (
                        <Typography
                          key={key} // 또는 고유한 키를 사용해야 합니다.
                          sx={{
                            color: "#111928",
                            fontSize: "16px",
                            fontWeight: "600",
                            lineHeight: "26px",
                          }}
                        >
                          {key}
                        </Typography>
                      ))}
                      <Box
                        key={idx}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "24px",
                          alignItems: "center",
                        }}
                      >
                        <Switch
                          sx={{
                            "& .MuiSwitch-track": {
                              borderRadius: "999px",
                              width: "48px",
                              height: "22px",
                              display: "flex",
                              alignItems: "center",
                              "&:before, &:after": {
                                content: '""',
                                width: "16px",
                                height: "16px",
                              },
                              "&:after": {
                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='10' viewBox='0 0 16 10' fill='none'%3E%3Cpath d='M3.35634 9.51C1.39621 9.51 0.140991 8.11875 0.140991 6.04732C0.140991 3.95735 1.39621 2.57228 3.35634 2.57228C5.32264 2.57228 6.57786 3.95735 6.57168 6.04732C6.57786 8.11875 5.32264 9.51 3.35634 9.51ZM1.7363 6.03495C1.7363 7.26544 2.27425 8.2486 3.3687 8.2486C4.44461 8.2486 4.98256 7.26544 4.97637 6.03495C4.98256 4.80447 4.44461 3.81513 3.3687 3.82131C2.27425 3.81513 1.7363 4.80447 1.7363 6.03495Z' fill='%234B5563'/%3E%3Cpath d='M11.1968 2.65884V3.87078H9.81176V9.37397H8.22882V3.87078H7.22712V2.65884H8.22882V2.01577C8.22882 0.711086 9.03884 0 10.3312 0C10.696 0 11.0361 0.0371001 11.3329 0.0989337V1.34797C11.0732 1.31087 10.8815 1.30469 10.764 1.2985C10.1271 1.30469 9.80557 1.55202 9.81176 2.16417V2.65884H11.1968Z' fill='%234B5563'/%3E%3Cpath d='M15.723 2.65884V3.87078H14.338V9.37397H12.755V3.87078H11.7533V2.65884H12.755V2.01577C12.755 0.711086 13.5651 0 14.8574 0C15.2222 0 15.5623 0.0371001 15.8591 0.0989337V1.34797C15.5994 1.31087 15.4077 1.30469 15.2902 1.2985C14.6533 1.30469 14.3318 1.55202 14.338 2.16417V2.65884H15.723Z' fill='%234B5563'/%3E%3C/svg%3E")`,
                                backgroundRepeat: "no-repeat",
                                marginTop: "6px",
                                marginRight: "2px",
                              },
                              "&:before": {
                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='8' viewBox='0 0 14 8' fill='none'%3E%3Cpath d='M3.58174 7.33406C1.70321 7.33406 0.490479 6.00244 0.490479 4.00501C0.490479 1.99568 1.70321 0.664062 3.58174 0.664062C5.47217 0.664062 6.67301 1.99568 6.67301 4.00501C6.67301 6.00244 5.47217 7.33406 3.58174 7.33406ZM3.59363 6.12134C4.62802 6.12134 5.13927 5.18207 5.13927 3.99312C5.13927 2.81606 4.62802 1.8649 3.59363 1.8649C2.53547 1.8649 2.02422 2.81606 2.02422 3.99312C2.02422 5.18207 2.53547 6.12134 3.59363 6.12134Z' fill='white'/%3E%3Cpath d='M9.37192 3.42242V7.20328H7.85007V0.747289H9.30059V1.84112H9.38381C9.68105 1.11586 10.335 0.664062 11.298 0.664062C12.6415 0.664062 13.5214 1.54388 13.5095 3.08952V7.20328H11.9995V3.32731C11.9995 2.45937 11.5358 1.94813 10.7392 1.94813C9.93073 1.94813 9.37192 2.48315 9.37192 3.42242Z' fill='white'/%3E%3C/svg%3E")`,
                                backgroundRepeat: "no-repeat",
                                marginTop: "6px",
                                marginLeft: "2px",
                              },
                            },
                            "& .MuiSwitch-thumb": {
                              marginTop: "4px",
                              width: "18px",
                              height: "18px",
                            },
                          }}
                        />
                        <KeyboardArrowDownOutlinedIcon
                          sx={{ width: "20px", height: "20px" }}
                        />
                      </Box>
                    </Stack>
                  );
                })}
              <Stack
                sx={{
                  width: "1140px",
                  background: "#F9FAFB",
                  gap: "16px",
                  border: "1px solid #E5E7EB",
                  borderRadius: "12px",
                  padding: "0 24px 24px 24px",
                }}
              >
                <Stack
                  sx={{
                    height: "46px",
                    background: "#F9FAFB",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#111928",
                      fontSize: "16px",
                      fontWeight: "600",
                      lineHeight: "26px",
                    }}
                  >
                    {"문의 관리"}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "24px",
                      alignItems: "center",
                    }}
                  >
                    <Switch
                      sx={{
                        "& .MuiSwitch-track": {
                          borderRadius: "999px",
                          width: "48px",
                          height: "22px",
                          display: "flex",
                          alignItems: "center",
                          "&:before, &:after": {
                            content: '""',
                            width: "16px",
                            height: "16px",
                          },
                          "&:after": {
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='10' viewBox='0 0 16 10' fill='none'%3E%3Cpath d='M3.35634 9.51C1.39621 9.51 0.140991 8.11875 0.140991 6.04732C0.140991 3.95735 1.39621 2.57228 3.35634 2.57228C5.32264 2.57228 6.57786 3.95735 6.57168 6.04732C6.57786 8.11875 5.32264 9.51 3.35634 9.51ZM1.7363 6.03495C1.7363 7.26544 2.27425 8.2486 3.3687 8.2486C4.44461 8.2486 4.98256 7.26544 4.97637 6.03495C4.98256 4.80447 4.44461 3.81513 3.3687 3.82131C2.27425 3.81513 1.7363 4.80447 1.7363 6.03495Z' fill='%234B5563'/%3E%3Cpath d='M11.1968 2.65884V3.87078H9.81176V9.37397H8.22882V3.87078H7.22712V2.65884H8.22882V2.01577C8.22882 0.711086 9.03884 0 10.3312 0C10.696 0 11.0361 0.0371001 11.3329 0.0989337V1.34797C11.0732 1.31087 10.8815 1.30469 10.764 1.2985C10.1271 1.30469 9.80557 1.55202 9.81176 2.16417V2.65884H11.1968Z' fill='%234B5563'/%3E%3Cpath d='M15.723 2.65884V3.87078H14.338V9.37397H12.755V3.87078H11.7533V2.65884H12.755V2.01577C12.755 0.711086 13.5651 0 14.8574 0C15.2222 0 15.5623 0.0371001 15.8591 0.0989337V1.34797C15.5994 1.31087 15.4077 1.30469 15.2902 1.2985C14.6533 1.30469 14.3318 1.55202 14.338 2.16417V2.65884H15.723Z' fill='%234B5563'/%3E%3C/svg%3E")`,
                            backgroundRepeat: "no-repeat",
                            marginTop: "6px",
                            marginRight: "2px",
                          },
                          "&:before": {
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='8' viewBox='0 0 14 8' fill='none'%3E%3Cpath d='M3.58174 7.33406C1.70321 7.33406 0.490479 6.00244 0.490479 4.00501C0.490479 1.99568 1.70321 0.664062 3.58174 0.664062C5.47217 0.664062 6.67301 1.99568 6.67301 4.00501C6.67301 6.00244 5.47217 7.33406 3.58174 7.33406ZM3.59363 6.12134C4.62802 6.12134 5.13927 5.18207 5.13927 3.99312C5.13927 2.81606 4.62802 1.8649 3.59363 1.8649C2.53547 1.8649 2.02422 2.81606 2.02422 3.99312C2.02422 5.18207 2.53547 6.12134 3.59363 6.12134Z' fill='white'/%3E%3Cpath d='M9.37192 3.42242V7.20328H7.85007V0.747289H9.30059V1.84112H9.38381C9.68105 1.11586 10.335 0.664062 11.298 0.664062C12.6415 0.664062 13.5214 1.54388 13.5095 3.08952V7.20328H11.9995V3.32731C11.9995 2.45937 11.5358 1.94813 10.7392 1.94813C9.93073 1.94813 9.37192 2.48315 9.37192 3.42242Z' fill='white'/%3E%3C/svg%3E")`,
                            backgroundRepeat: "no-repeat",
                            marginTop: "6px",
                            marginLeft: "2px",
                          },
                        },
                        "& .MuiSwitch-thumb": {
                          marginTop: "4px",
                          width: "18px",
                          height: "18px",
                        },
                      }}
                    />
                    <KeyboardArrowUpOutlinedIcon
                      sx={{ width: "20px", height: "20px" }}
                    />
                  </Box>
                </Stack>
                <Stack
                  gap="20px"
                  sx={{ padding: "24px", background: "#ffffff" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#4B5563",
                        fontSize: "14px",
                        fontWeight: "500",
                        lineHeight: "20px",
                      }}
                    >
                      담당자 권한
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "80px",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#4B5563",
                          fontSize: "14px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        운영자 권한
                      </Typography>
                      <Typography
                        sx={{
                          color: "#4B5563",
                          fontSize: "14px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        사용자 권한
                      </Typography>
                    </Box>
                  </Box>
                  {authorityList &&
                    authorityList[7]["문의 관리"]?.map((item, idx) => {
                      return (
                        <Stack
                          key={idx}
                          direction="row"
                          sx={{
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              gap: "12px",
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              sx={{
                                width: "120px",
                                color: "#111928",
                                fontSize: "14px",
                                fontWeight: "600",
                                lineHeight: "20px",
                              }}
                            >
                              {item}
                            </Typography>
                            <Typography
                              sx={{
                                color: "#4B5563",
                                fontSize: "14px",
                                fontWeight: "400",
                                lineHeight: "20px",
                              }}
                            >
                              {`${item} 를/을 할 수 있는 권한입니다.`}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              gap: "80px",
                              alignItems: "center",
                            }}
                          >
                            <Switch
                              sx={{
                                "& .MuiSwitch-track": {
                                  borderRadius: "999px",
                                  width: "48px",
                                  height: "22px",
                                  display: "flex",
                                  alignItems: "center",
                                  "&:before, &:after": {
                                    content: '""',
                                    width: "16px",
                                    height: "16px",
                                  },
                                  "&:after": {
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='10' viewBox='0 0 16 10' fill='none'%3E%3Cpath d='M3.35634 9.51C1.39621 9.51 0.140991 8.11875 0.140991 6.04732C0.140991 3.95735 1.39621 2.57228 3.35634 2.57228C5.32264 2.57228 6.57786 3.95735 6.57168 6.04732C6.57786 8.11875 5.32264 9.51 3.35634 9.51ZM1.7363 6.03495C1.7363 7.26544 2.27425 8.2486 3.3687 8.2486C4.44461 8.2486 4.98256 7.26544 4.97637 6.03495C4.98256 4.80447 4.44461 3.81513 3.3687 3.82131C2.27425 3.81513 1.7363 4.80447 1.7363 6.03495Z' fill='%234B5563'/%3E%3Cpath d='M11.1968 2.65884V3.87078H9.81176V9.37397H8.22882V3.87078H7.22712V2.65884H8.22882V2.01577C8.22882 0.711086 9.03884 0 10.3312 0C10.696 0 11.0361 0.0371001 11.3329 0.0989337V1.34797C11.0732 1.31087 10.8815 1.30469 10.764 1.2985C10.1271 1.30469 9.80557 1.55202 9.81176 2.16417V2.65884H11.1968Z' fill='%234B5563'/%3E%3Cpath d='M15.723 2.65884V3.87078H14.338V9.37397H12.755V3.87078H11.7533V2.65884H12.755V2.01577C12.755 0.711086 13.5651 0 14.8574 0C15.2222 0 15.5623 0.0371001 15.8591 0.0989337V1.34797C15.5994 1.31087 15.4077 1.30469 15.2902 1.2985C14.6533 1.30469 14.3318 1.55202 14.338 2.16417V2.65884H15.723Z' fill='%234B5563'/%3E%3C/svg%3E")`,
                                    backgroundRepeat: "no-repeat",
                                    marginTop: "6px",
                                    marginRight: "2px",
                                  },
                                  "&:before": {
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='8' viewBox='0 0 14 8' fill='none'%3E%3Cpath d='M3.58174 7.33406C1.70321 7.33406 0.490479 6.00244 0.490479 4.00501C0.490479 1.99568 1.70321 0.664062 3.58174 0.664062C5.47217 0.664062 6.67301 1.99568 6.67301 4.00501C6.67301 6.00244 5.47217 7.33406 3.58174 7.33406ZM3.59363 6.12134C4.62802 6.12134 5.13927 5.18207 5.13927 3.99312C5.13927 2.81606 4.62802 1.8649 3.59363 1.8649C2.53547 1.8649 2.02422 2.81606 2.02422 3.99312C2.02422 5.18207 2.53547 6.12134 3.59363 6.12134Z' fill='white'/%3E%3Cpath d='M9.37192 3.42242V7.20328H7.85007V0.747289H9.30059V1.84112H9.38381C9.68105 1.11586 10.335 0.664062 11.298 0.664062C12.6415 0.664062 13.5214 1.54388 13.5095 3.08952V7.20328H11.9995V3.32731C11.9995 2.45937 11.5358 1.94813 10.7392 1.94813C9.93073 1.94813 9.37192 2.48315 9.37192 3.42242Z' fill='white'/%3E%3C/svg%3E")`,
                                    backgroundRepeat: "no-repeat",
                                    marginTop: "6px",
                                    marginLeft: "2px",
                                  },
                                },
                                "& .MuiSwitch-thumb": {
                                  marginTop: "4px",
                                  width: "18px",
                                  height: "18px",
                                },
                              }}
                            />
                            <Switch
                              sx={{
                                "& .MuiSwitch-track": {
                                  borderRadius: "999px",
                                  width: "48px",
                                  height: "22px",
                                  display: "flex",
                                  alignItems: "center",
                                  "&:before, &:after": {
                                    content: '""',
                                    width: "16px",
                                    height: "16px",
                                  },
                                  "&:after": {
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='10' viewBox='0 0 16 10' fill='none'%3E%3Cpath d='M3.35634 9.51C1.39621 9.51 0.140991 8.11875 0.140991 6.04732C0.140991 3.95735 1.39621 2.57228 3.35634 2.57228C5.32264 2.57228 6.57786 3.95735 6.57168 6.04732C6.57786 8.11875 5.32264 9.51 3.35634 9.51ZM1.7363 6.03495C1.7363 7.26544 2.27425 8.2486 3.3687 8.2486C4.44461 8.2486 4.98256 7.26544 4.97637 6.03495C4.98256 4.80447 4.44461 3.81513 3.3687 3.82131C2.27425 3.81513 1.7363 4.80447 1.7363 6.03495Z' fill='%234B5563'/%3E%3Cpath d='M11.1968 2.65884V3.87078H9.81176V9.37397H8.22882V3.87078H7.22712V2.65884H8.22882V2.01577C8.22882 0.711086 9.03884 0 10.3312 0C10.696 0 11.0361 0.0371001 11.3329 0.0989337V1.34797C11.0732 1.31087 10.8815 1.30469 10.764 1.2985C10.1271 1.30469 9.80557 1.55202 9.81176 2.16417V2.65884H11.1968Z' fill='%234B5563'/%3E%3Cpath d='M15.723 2.65884V3.87078H14.338V9.37397H12.755V3.87078H11.7533V2.65884H12.755V2.01577C12.755 0.711086 13.5651 0 14.8574 0C15.2222 0 15.5623 0.0371001 15.8591 0.0989337V1.34797C15.5994 1.31087 15.4077 1.30469 15.2902 1.2985C14.6533 1.30469 14.3318 1.55202 14.338 2.16417V2.65884H15.723Z' fill='%234B5563'/%3E%3C/svg%3E")`,
                                    backgroundRepeat: "no-repeat",
                                    marginTop: "6px",
                                    marginRight: "2px",
                                  },
                                  "&:before": {
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='8' viewBox='0 0 14 8' fill='none'%3E%3Cpath d='M3.58174 7.33406C1.70321 7.33406 0.490479 6.00244 0.490479 4.00501C0.490479 1.99568 1.70321 0.664062 3.58174 0.664062C5.47217 0.664062 6.67301 1.99568 6.67301 4.00501C6.67301 6.00244 5.47217 7.33406 3.58174 7.33406ZM3.59363 6.12134C4.62802 6.12134 5.13927 5.18207 5.13927 3.99312C5.13927 2.81606 4.62802 1.8649 3.59363 1.8649C2.53547 1.8649 2.02422 2.81606 2.02422 3.99312C2.02422 5.18207 2.53547 6.12134 3.59363 6.12134Z' fill='white'/%3E%3Cpath d='M9.37192 3.42242V7.20328H7.85007V0.747289H9.30059V1.84112H9.38381C9.68105 1.11586 10.335 0.664062 11.298 0.664062C12.6415 0.664062 13.5214 1.54388 13.5095 3.08952V7.20328H11.9995V3.32731C11.9995 2.45937 11.5358 1.94813 10.7392 1.94813C9.93073 1.94813 9.37192 2.48315 9.37192 3.42242Z' fill='white'/%3E%3C/svg%3E")`,
                                    backgroundRepeat: "no-repeat",
                                    marginTop: "6px",
                                    marginLeft: "2px",
                                  },
                                },
                                "& .MuiSwitch-thumb": {
                                  marginTop: "4px",
                                  width: "18px",
                                  height: "18px",
                                },
                              }}
                            />
                          </Box>
                        </Stack>
                      );
                    })}
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </div>
    );
  }
);

export default ManageDetailRight;
