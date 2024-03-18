import * as React from "react";
import { Stack, Typography, Box, Divider, SvgIcon } from "@mui/material";

const PromotionDashChart: React.FC<any> = React.forwardRef<any, any>(
  ({ className, children }, ref) => {
    const dummyData = {
      clickRate: [
        {
          id: 12,
          media: "WAPL",
          promotionName: "WAPL_크레딧 지급",
          value: 70,
        },
        {
          id: 12,
          media: "WAPL",
          promotionName: "WAPL_크레딧 지급",
          value: 70,
        },
        {
          id: 12,
          media: "WAPL",
          promotionName: "WAPL_크레딧 지급",
          value: 70,
        },
      ],
      conversionRate: [
        {
          id: 12,
          media: "WAPL",
          promotionName: "WAPL_크레딧 지급",
          value: 70,
        },
        {
          id: 12,
          media: "WAPL",
          promotionName: "WAPL_크레딧 지급",
          value: 70,
        },
        {
          id: 12,
          media: "WAPL",
          promotionName: "WAPL_크레딧 지급",
          value: 70,
        },
      ],
      conversionPrice: [
        {
          id: 12,
          media: "WAPL",
          promotionName: "WAPL_크레딧 지급",
          value: 70,
        },
        {
          id: 12,
          media: "WAPL",
          promotionName: "WAPL_크레딧 지급",
          value: 70,
        },

        {
          id: 12,
          media: "WAPL",
          promotionName: "WAPL_크레딧 지급",
          value: 70,
        },
      ],
    };

    const contentStyle = {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "spaceBetween",
      alignSelf: "stretch",
    };

    const iconStyle = {
      width: "24px",
      height: "24px",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "4px",
      backgroundColor: "#FDF2F2",
      marginLeft: "16px",
    };

    const headerTypoStyle = {
      color: "#111928",
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: "26px",
    };

    const contentTypoStyle = {
      color: "#111928",
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "20px",
    };

    const DashCardDetail = ({
      header,
      data1,
      data2,
      data3,
    }: {
      header: string;
      data1: string;
      data2: string;
      data3: string;
    }) => {
      return (
        <Stack
          sx={{
            flex: 1,
            gap: "16px",
            padding: "20px 32px",
            alignItems: "flexStart",
          }}
        >
          <Typography sx={{ ...headerTypoStyle }}>{header}</Typography>
          <Stack sx={{ ...contentStyle }}>
            <Stack flexDirection="row">
              <SvgIcon sx={{ fontSize: "20px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    d="M10.3359 2.375C8.72897 2.375 7.15808 2.85152 5.82193 3.74431C4.48578 4.6371 3.44438 5.90605 2.82942 7.3907C2.21446 8.87535 2.05356 10.509 2.36706 12.0851C2.68057 13.6612 3.4544 15.1089 4.5907 16.2452C5.727 17.3815 7.17474 18.1554 8.75083 18.4689C10.3269 18.7824 11.9606 18.6215 13.4452 18.0065C14.9299 17.3916 16.1988 16.3502 17.0916 15.014C17.9844 13.6779 18.4609 12.107 18.4609 10.5C18.4587 8.34581 17.6019 6.28051 16.0787 4.75727C14.5554 3.23403 12.4901 2.37727 10.3359 2.375ZM11.2734 14.25C11.2734 14.4158 11.2076 14.5747 11.0904 14.6919C10.9732 14.8092 10.8142 14.875 10.6484 14.875C10.4827 14.875 10.3237 14.8092 10.2065 14.6919C10.0893 14.5747 10.0234 14.4158 10.0234 14.25V7.92188L9.12032 8.52422C9.05199 8.56977 8.97536 8.60142 8.8948 8.61736C8.81424 8.63329 8.73133 8.63321 8.6508 8.6171C8.57028 8.601 8.49371 8.56919 8.42548 8.52349C8.35724 8.4778 8.29868 8.41911 8.25313 8.35078C8.20758 8.28245 8.17593 8.20582 8.15999 8.12526C8.14406 8.0447 8.14414 7.96179 8.16025 7.88127C8.17635 7.80074 8.20816 7.72418 8.25386 7.65594C8.29955 7.58771 8.35824 7.52915 8.42657 7.48359L10.3016 6.23359C10.3954 6.17096 10.5045 6.13491 10.6172 6.12927C10.7299 6.12364 10.8421 6.14862 10.9417 6.20157C11.0414 6.25452 11.1248 6.33346 11.1832 6.43002C11.2416 6.52658 11.2728 6.63715 11.2734 6.75V14.25Z"
                    fill="#111928"
                  />
                </svg>
              </SvgIcon>
              <Stack sx={{ ...iconStyle }}>
                <SvgIcon sx={{ fontSize: "10px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                  >
                    <path
                      d="M5.75232 0.66797C6.01233 0.896205 6.0466 1.27769 5.84078 1.54547L5.80196 1.5915L2.43589 5.23619C2.18801 5.50459 1.76391 5.52626 1.48862 5.28463C1.24062 5.06691 1.198 4.70977 1.37322 4.44484L0.971933 4.09259C0.696642 3.85093 0.674417 3.43746 0.922289 3.16907C1.15639 2.91559 1.54769 2.88218 1.82235 3.08283L1.86955 3.12067L2.26443 3.46731L3.0561 2.61011C3.04169 2.60118 3.02756 2.59166 3.01371 2.58155L2.96651 2.54371L2.65497 2.27023C2.37968 2.02857 2.35746 1.6151 2.60533 1.34671C2.83943 1.09323 3.23073 1.05982 3.50539 1.26047L3.55259 1.29831L3.86413 1.57178C3.89253 1.59671 3.91823 1.62347 3.94122 1.65171L4.80505 0.71637C5.05294 0.44798 5.47703 0.426311 5.75232 0.66797Z"
                      fill="black"
                      stroke="#FDF2F2"
                      strokeWidth="0.3"
                    />
                    <path
                      d="M9.12813 1.51953C9.38813 1.74777 9.42241 2.12926 9.21659 2.39704L9.17781 2.44306L8.86002 2.78715L10.114 3.88794C10.3893 4.1296 10.4115 4.54307 10.1636 4.81146C9.92951 5.06496 9.53824 5.09837 9.26358 4.89771L9.21635 4.85986L7.9624 3.75907L3.93992 8.11451L4.2593 8.39488C4.53459 8.63655 4.55682 9.05002 4.30894 9.31841C4.07484 9.5719 3.68354 9.60528 3.40888 9.40465L3.36168 9.3668L3.0423 9.08644L2.72613 9.42875C2.47826 9.69714 2.05416 9.71882 1.77887 9.47719C1.51887 9.24895 1.4846 8.86744 1.69041 8.59967L1.72922 8.55366L2.04538 8.21131L0.55787 6.9055C0.282581 6.66387 0.260354 6.25037 0.508225 5.98198C0.742328 5.72852 1.13362 5.6951 1.40829 5.89573L1.45549 5.93358L2.94301 7.23938L3.66577 6.45681L3.26824 6.10587C2.99364 5.86347 2.97258 5.44993 3.22121 5.18223C3.45603 4.92939 3.84742 4.89701 4.12151 5.09841L4.16863 5.13637L4.56338 5.48485L5.37527 4.60579L4.9556 4.24489C4.67778 4.00599 4.6512 3.59276 4.89625 3.32191C5.12766 3.0661 5.51858 3.02878 5.79537 3.22668L5.84296 3.26405L6.27294 3.6338L6.96549 2.88395L6.53385 2.50505C6.25856 2.26339 6.23633 1.84991 6.48421 1.58153C6.71831 1.32805 7.10959 1.29464 7.38425 1.49528L7.43148 1.53313L7.86308 1.91202L8.18086 1.56793C8.42874 1.29954 8.85284 1.27787 9.12813 1.51953Z"
                      fill="black"
                      stroke="#FDF2F2"
                      strokeWidth="0.3"
                    />
                    <path
                      d="M9.5886 6.50168C9.79443 6.23391 9.76023 5.85244 9.50026 5.62417C9.22501 5.38246 8.80088 5.40405 8.553 5.67245L8.54664 5.67926L8.14008 5.32108L8.09297 5.28316C7.81866 5.08203 7.42731 5.1148 7.19273 5.36786C6.94438 5.63579 6.96586 6.04933 7.24068 6.29147L7.64889 6.65107L6.86618 7.49836L6.45986 7.14042L6.41271 7.10249C6.13841 6.90136 5.74705 6.93409 5.51252 7.18716C5.26412 7.45513 5.2856 7.86867 5.56046 8.1108L5.9684 8.47017L5.10205 9.40802L5.06323 9.45403C4.85736 9.7218 4.8916 10.1033 5.15153 10.3315C5.42682 10.5733 5.85091 10.5516 6.09884 10.2833L6.96373 9.34703L7.3116 9.6535L7.35871 9.69143C7.63302 9.89256 8.02437 9.85979 8.25895 9.60672C8.50731 9.33876 8.48582 8.92525 8.21097 8.68312L7.86147 8.37523L8.64422 7.52793L8.99182 7.83417L9.03897 7.87209C9.31327 8.07322 9.70463 8.0405 9.93917 7.78743C10.1875 7.51946 10.1661 7.10592 9.89122 6.86379L9.54197 6.55612L9.54979 6.54769L9.5886 6.50168Z"
                      fill="black"
                      stroke="#FDF2F2"
                      strokeWidth="0.3"
                    />
                  </svg>
                </SvgIcon>
              </Stack>
              <Typography sx={{ ...contentTypoStyle, marginLeft: "8px" }}>
                WAPL : 이벤트
              </Typography>
            </Stack>
            <Typography sx={{ ...contentTypoStyle }}>{data1}</Typography>
          </Stack>
          {/**2번째  */}
          <Stack sx={{ ...contentStyle }}>
            <Stack flexDirection="row">
              <SvgIcon sx={{ fontSize: "20px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    d="M10.3359 2.375C8.72897 2.375 7.15808 2.85152 5.82193 3.74431C4.48578 4.6371 3.44438 5.90605 2.82942 7.3907C2.21446 8.87535 2.05356 10.509 2.36706 12.0851C2.68057 13.6612 3.4544 15.1089 4.5907 16.2452C5.727 17.3815 7.17474 18.1554 8.75083 18.4689C10.3269 18.7824 11.9606 18.6215 13.4452 18.0065C14.9299 17.3916 16.1988 16.3502 17.0916 15.014C17.9844 13.6779 18.4609 12.107 18.4609 10.5C18.4587 8.34581 17.6019 6.28051 16.0787 4.75727C14.5554 3.23403 12.4901 2.37727 10.3359 2.375ZM12.2109 13.625C12.3767 13.625 12.5357 13.6908 12.6529 13.8081C12.7701 13.9253 12.8359 14.0842 12.8359 14.25C12.8359 14.4158 12.7701 14.5747 12.6529 14.6919C12.5357 14.8092 12.3767 14.875 12.2109 14.875H8.46094C8.34487 14.875 8.23109 14.8427 8.13236 14.7817C8.03362 14.7206 7.95383 14.6333 7.90192 14.5295C7.85002 14.4257 7.82804 14.3095 7.83847 14.1939C7.84889 14.0783 7.8913 13.9679 7.96094 13.875L11.3336 9.37813C11.4416 9.23421 11.5172 9.06868 11.5554 8.89284C11.5935 8.717 11.5932 8.535 11.5546 8.35927C11.5159 8.18355 11.4398 8.01824 11.3313 7.87465C11.2229 7.73106 11.0848 7.61257 10.9264 7.52727C10.7679 7.44197 10.593 7.39188 10.4134 7.38042C10.2338 7.36896 10.0539 7.3964 9.88593 7.46086C9.71795 7.52533 9.56586 7.6253 9.44007 7.75394C9.31427 7.88258 9.21773 8.03687 9.15703 8.20625C9.10171 8.36258 8.98655 8.49054 8.83689 8.56196C8.68723 8.63339 8.51532 8.64243 8.35899 8.58711C8.20266 8.53179 8.0747 8.41663 8.00328 8.26696C7.93185 8.1173 7.92281 7.9454 7.97813 7.78906C8.0987 7.44964 8.29118 7.14029 8.54241 6.88217C8.79364 6.62405 9.09768 6.42327 9.43372 6.29357C9.76975 6.16387 10.1298 6.10832 10.4893 6.13071C10.8488 6.15311 11.1993 6.25292 11.5166 6.42332C11.8339 6.59372 12.1107 6.83068 12.328 7.11797C12.5452 7.40527 12.6978 7.73613 12.7753 8.08788C12.8529 8.43964 12.8534 8.80399 12.7771 9.156C12.7007 9.508 12.5491 9.83935 12.3328 10.1273L9.71094 13.625H12.2109Z"
                    fill="#111928"
                  />
                </svg>
              </SvgIcon>
              <Stack sx={{ ...iconStyle }}>
                <SvgIcon sx={{ fontSize: "10px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                  >
                    <path
                      d="M10.8359 2.75H1.83594C1.73648 2.75 1.6411 2.78951 1.57077 2.85984C1.50045 2.93016 1.46094 3.02554 1.46094 3.125V9.5C1.46094 9.69891 1.53996 9.88968 1.68061 10.0303C1.82126 10.171 2.01203 10.25 2.21094 10.25H10.4609C10.6599 10.25 10.8506 10.171 10.9913 10.0303C11.1319 9.88968 11.2109 9.69891 11.2109 9.5V3.125C11.2109 3.02554 11.1714 2.93016 11.1011 2.85984C11.0308 2.78951 10.9354 2.75 10.8359 2.75ZM6.33594 6.74141L2.80016 3.5H9.87172L6.33594 6.74141ZM4.96297 6.5L2.21094 9.02234V3.97766L4.96297 6.5ZM5.51797 7.00859L6.08047 7.52656C6.14965 7.59007 6.24015 7.62531 6.33406 7.62531C6.42798 7.62531 6.51847 7.59007 6.58766 7.52656L7.15016 7.00859L9.86891 9.5H2.80016L5.51797 7.00859ZM7.70891 6.5L10.4609 3.97719V9.02281L7.70891 6.5Z"
                      fill="#111928"
                    />
                  </svg>
                </SvgIcon>
              </Stack>
              <Typography sx={{ ...contentTypoStyle, marginLeft: "8px" }}>
                Email: 제품 홍보
              </Typography>
            </Stack>
            <Typography sx={{ ...contentTypoStyle }}>{data2}</Typography>
          </Stack>
          {/**3번째  */}
          <Stack sx={{ ...contentStyle }}>
            <Stack flexDirection="row">
              <SvgIcon sx={{ fontSize: "20px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    d="M10.3359 2.375C8.72897 2.375 7.15808 2.85152 5.82193 3.74431C4.48578 4.6371 3.44438 5.90605 2.82942 7.3907C2.21446 8.87535 2.05356 10.509 2.36706 12.0851C2.68057 13.6612 3.4544 15.1089 4.5907 16.2452C5.727 17.3815 7.17474 18.1554 8.75083 18.4689C10.3269 18.7824 11.9606 18.6215 13.4452 18.0065C14.9299 17.3916 16.1988 16.3502 17.0916 15.014C17.9844 13.6779 18.4609 12.107 18.4609 10.5C18.4587 8.34581 17.6019 6.28051 16.0787 4.75727C14.5554 3.23403 12.4901 2.37727 10.3359 2.375ZM10.0234 15.1875C9.64911 15.1887 9.27836 15.1145 8.93329 14.9694C8.58821 14.8243 8.27586 14.6113 8.01485 14.343C7.95378 14.2852 7.90499 14.2157 7.8714 14.1386C7.83782 14.0616 7.82013 13.9785 7.81939 13.8944C7.81865 13.8104 7.83488 13.727 7.86711 13.6494C7.89934 13.5717 7.9469 13.5014 8.00694 13.4425C8.06699 13.3837 8.13829 13.3376 8.21658 13.3069C8.29487 13.2763 8.37853 13.2618 8.46257 13.2642C8.5466 13.2667 8.62928 13.286 8.70565 13.3212C8.78202 13.3563 8.85051 13.4065 8.90703 13.4688C9.08735 13.6527 9.31035 13.7892 9.55618 13.8662C9.80201 13.9431 10.0631 13.9581 10.3161 13.9097C10.5691 13.8614 10.8062 13.7513 11.0064 13.5891C11.2066 13.427 11.3635 13.2179 11.4633 12.9804C11.5631 12.7429 11.6027 12.4845 11.5785 12.228C11.5542 11.9716 11.467 11.7251 11.3245 11.5105C11.1819 11.2959 10.9886 11.1199 10.7616 10.9982C10.5346 10.8764 10.281 10.8126 10.0234 10.8125C9.90911 10.8125 9.79697 10.7811 9.69924 10.7217C9.60151 10.6624 9.52193 10.5774 9.46916 10.476C9.4164 10.3745 9.39246 10.2606 9.39996 10.1465C9.40747 10.0324 9.44612 9.92255 9.51172 9.82891L11.0102 7.6875H8.46094C8.29518 7.6875 8.13621 7.62165 8.019 7.50444C7.90179 7.38723 7.83594 7.22826 7.83594 7.0625C7.83594 6.89674 7.90179 6.73777 8.019 6.62056C8.13621 6.50335 8.29518 6.4375 8.46094 6.4375H12.2109C12.3253 6.43753 12.4374 6.46893 12.5351 6.52827C12.6329 6.5876 12.7125 6.67261 12.7652 6.77404C12.818 6.87547 12.8419 6.98943 12.8344 7.10352C12.8269 7.21761 12.7883 7.32745 12.7227 7.42109L11.082 9.76484C11.6893 10.0085 12.1926 10.4563 12.5052 11.0311C12.8179 11.6059 12.9204 12.2717 12.795 12.9139C12.6696 13.5561 12.3243 14.1345 11.8184 14.5495C11.3125 14.9645 10.6778 15.1901 10.0234 15.1875Z"
                    fill="#111928"
                  />
                </svg>
              </SvgIcon>
              <Stack sx={{ ...iconStyle }}>
                <SvgIcon sx={{ fontSize: "10px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                  >
                    <path
                      d="M5.75232 0.66797C6.01233 0.896205 6.0466 1.27769 5.84078 1.54547L5.80196 1.5915L2.43589 5.23619C2.18801 5.50459 1.76391 5.52626 1.48862 5.28463C1.24062 5.06691 1.198 4.70977 1.37322 4.44484L0.971933 4.09259C0.696642 3.85093 0.674417 3.43746 0.922289 3.16907C1.15639 2.91559 1.54769 2.88218 1.82235 3.08283L1.86955 3.12067L2.26443 3.46731L3.0561 2.61011C3.04169 2.60118 3.02756 2.59166 3.01371 2.58155L2.96651 2.54371L2.65497 2.27023C2.37968 2.02857 2.35746 1.6151 2.60533 1.34671C2.83943 1.09323 3.23073 1.05982 3.50539 1.26047L3.55259 1.29831L3.86413 1.57178C3.89253 1.59671 3.91823 1.62347 3.94122 1.65171L4.80505 0.71637C5.05294 0.44798 5.47703 0.426311 5.75232 0.66797Z"
                      fill="black"
                      stroke="#FDF2F2"
                      strokeWidth="0.3"
                    />
                    <path
                      d="M9.12813 1.51953C9.38813 1.74777 9.42241 2.12926 9.21659 2.39704L9.17781 2.44306L8.86002 2.78715L10.114 3.88794C10.3893 4.1296 10.4115 4.54307 10.1636 4.81146C9.92951 5.06496 9.53824 5.09837 9.26358 4.89771L9.21635 4.85986L7.9624 3.75907L3.93992 8.11451L4.2593 8.39488C4.53459 8.63655 4.55682 9.05002 4.30894 9.31841C4.07484 9.5719 3.68354 9.60528 3.40888 9.40465L3.36168 9.3668L3.0423 9.08644L2.72613 9.42875C2.47826 9.69714 2.05416 9.71882 1.77887 9.47719C1.51887 9.24895 1.4846 8.86744 1.69041 8.59967L1.72922 8.55366L2.04538 8.21131L0.55787 6.9055C0.282581 6.66387 0.260354 6.25037 0.508225 5.98198C0.742328 5.72852 1.13362 5.6951 1.40829 5.89573L1.45549 5.93358L2.94301 7.23938L3.66577 6.45681L3.26824 6.10587C2.99364 5.86347 2.97258 5.44993 3.22121 5.18223C3.45603 4.92939 3.84742 4.89701 4.12151 5.09841L4.16863 5.13637L4.56338 5.48485L5.37527 4.60579L4.9556 4.24489C4.67778 4.00599 4.6512 3.59276 4.89625 3.32191C5.12766 3.0661 5.51858 3.02878 5.79537 3.22668L5.84296 3.26405L6.27294 3.6338L6.96549 2.88395L6.53385 2.50505C6.25856 2.26339 6.23633 1.84991 6.48421 1.58153C6.71831 1.32805 7.10959 1.29464 7.38425 1.49528L7.43148 1.53313L7.86308 1.91202L8.18086 1.56793C8.42874 1.29954 8.85284 1.27787 9.12813 1.51953Z"
                      fill="black"
                      stroke="#FDF2F2"
                      strokeWidth="0.3"
                    />
                    <path
                      d="M9.5886 6.50168C9.79443 6.23391 9.76023 5.85244 9.50026 5.62417C9.22501 5.38246 8.80088 5.40405 8.553 5.67245L8.54664 5.67926L8.14008 5.32108L8.09297 5.28316C7.81866 5.08203 7.42731 5.1148 7.19273 5.36786C6.94438 5.63579 6.96586 6.04933 7.24068 6.29147L7.64889 6.65107L6.86618 7.49836L6.45986 7.14042L6.41271 7.10249C6.13841 6.90136 5.74705 6.93409 5.51252 7.18716C5.26412 7.45513 5.2856 7.86867 5.56046 8.1108L5.9684 8.47017L5.10205 9.40802L5.06323 9.45403C4.85736 9.7218 4.8916 10.1033 5.15153 10.3315C5.42682 10.5733 5.85091 10.5516 6.09884 10.2833L6.96373 9.34703L7.3116 9.6535L7.35871 9.69143C7.63302 9.89256 8.02437 9.85979 8.25895 9.60672C8.50731 9.33876 8.48582 8.92525 8.21097 8.68312L7.86147 8.37523L8.64422 7.52793L8.99182 7.83417L9.03897 7.87209C9.31327 8.07322 9.70463 8.0405 9.93917 7.78743C10.1875 7.51946 10.1661 7.10592 9.89122 6.86379L9.54197 6.55612L9.54979 6.54769L9.5886 6.50168Z"
                      fill="black"
                      stroke="#FDF2F2"
                      strokeWidth="0.3"
                    />
                  </svg>
                </SvgIcon>
              </Stack>
              <Typography sx={{ ...contentTypoStyle, marginLeft: "8px" }}>
                WAPL : 이벤트
              </Typography>
            </Stack>
            <Typography sx={{ ...contentTypoStyle }}>{data3}</Typography>
          </Stack>
        </Stack>
      );
    };

    return (
      <div className={className} ref={ref}>
        {children}
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <DashCardDetail
            header="클릭률 TOP 3"
            data1={
              dummyData.clickRate[0]?.value.toString() &&
              `${dummyData.clickRate[0]?.value}%`
            }
            data2={
              dummyData.clickRate[1]?.value.toString() &&
              `${dummyData.clickRate[1]?.value}%`
            }
            data3={
              dummyData.clickRate[2]?.value.toString() &&
              `${dummyData.clickRate[2]?.value}%`
            }
          ></DashCardDetail>
          <Divider sx={{ height: "159px", borderLeft: "1px solid #E5E7EB" }} />
          <DashCardDetail
            header="전환률 TOP 3"
            data1={
              dummyData.conversionRate[0]?.value.toString() &&
              `${dummyData.conversionRate[0]?.value}%`
            }
            data2={
              dummyData.conversionRate[1]?.value.toString() &&
              `${dummyData.conversionRate[1]?.value}%`
            }
            data3={
              dummyData.conversionRate[2]?.value.toString() &&
              `${dummyData.conversionRate[2]?.value}%`
            }
          ></DashCardDetail>
          <Divider sx={{ height: "159px", borderLeft: "1px solid #E5E7EB" }} />
          <DashCardDetail
            header="전환 금액 TOP 3"
            data1={
              dummyData.conversionPrice[0]?.value.toString() &&
              `${dummyData.conversionPrice[0]?.value.toLocaleString()} 원`
            }
            data2={
              dummyData.conversionPrice[1]?.value.toString() &&
              `${dummyData.conversionPrice[1]?.value.toLocaleString()} 원`
            }
            data3={
              dummyData.conversionPrice[2]?.value.toString() &&
              `${dummyData.conversionPrice[2]?.value.toLocaleString()} 원`
            }
          ></DashCardDetail>
          <Divider sx={{ height: "159px", borderLeft: "1px solid #E5E7EB" }} />
        </Stack>
      </div>
    );
  }
);

export default PromotionDashChart;
