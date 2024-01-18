import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import * as MUI_ICON from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const SalesDetail: React.FC<any> = React.forwardRef<any, any>(({ className, children }, ref) => {
    const SALES_RECORDS = [
        {
            title: '오늘',
            date: '2023.11.02',
            revenue: 5500000,
            comparedTo: '전일',
            changedPercentage: 26.15,
            changedAmount: 1140000,
            new: 100,
            renew: 139,
            payment: 345,
        },
        {
            title: '이번 주',
            date: '2023.10.30-2023.11.05',
            revenue: 22000000,
            comparedTo: '전주',
            changedPercentage: 10.55,
            changedAmount: 2100000,
            new: 100,
            renew: 139,
            payment: 345,
        },
        {
            title: '이번 달',
            date: '2023.11',
            revenue: 12000000,
            comparedTo: '전월',
            changedPercentage: 50,
            changedAmount: 4000000,
            new: 100,
            renew: 139,
            payment: 345,
        },
    ];

    return (
        <Stack>
            <Stack direction="row" alignItems="center" sx={{ height: '62px', marginBottom: '24px' }}>
                <Typography
                    sx={{
                        color: '#4B5563',
                        fontSize: '18px',
                        fontWeight: '600',
                        lineHeight: '24px',
                    }}
                >
                    매출 상세
                </Typography>
                <IconButton disableRipple disableFocusRipple>
                    <MUI_ICON.Refresh
                        sx={{ color: '#6B7280', fontSize: '16px', fontWeight: '500', lineHeight: '18px' }}
                    />
                    <Typography sx={{ color: '#6B7280', fontSize: '12px', fontWeight: '500', lineHeight: '18px' }}>
                        새로고침
                    </Typography>
                </IconButton>
            </Stack>
            <Stack direction="row" sx={{ gap: '16px' }}>
                {SALES_RECORDS.map(sales => (
                    <Stack key={sales.title} sx={{ flex: 1, alignItems: 'center' }}>
                        <Stack
                            sx={{
                                alignItems: 'center',
                                backgroundColor: '#F9FAFB',
                                py: '24px',
                                borderRadius: '12px',
                                flex: 1,
                                width: '100%',
                            }}
                        >
                            <Typography
                                sx={{
                                    backgroundColor: '#E5E7EB',
                                    borderRadius: '16px',
                                    padding: '4px 8px',
                                    marginBottom: '10px',
                                    color: '#111928',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                }}
                            >
                                {sales.title}
                            </Typography>
                            <Typography
                                sx={{ color: '#6B7280', fontSize: '14px', lineHeight: '20px', marginBottom: '10px' }}
                            >
                                {sales.date}
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#111928',
                                    fontSize: '20px',
                                    lineHeight: '26px',
                                    fontWeight: '600',
                                    marginBottom: '8px',
                                }}
                            >
                                매출액 {sales.revenue.toLocaleString()}원
                            </Typography>
                            <Stack direction="row" alignItems="center" sx={{ gap: '4px' }}>
                                <Select
                                    value={sales.comparedTo}
                                    sx={{ height: '32px', color: '#111928', fontSize: '14px' }}
                                >
                                    <MenuItem value={sales.comparedTo}>{sales.comparedTo}</MenuItem>
                                </Select>
                                <Typography sx={{ color: '#111928', fontSize: '14px', lineHeight: '20px' }}>
                                    대비
                                </Typography>
                                <Stack
                                    direction="row"
                                    sx={{ color: '#E02424', fontWeight: '500', fontSize: '14px', lineHeight: '20px' }}
                                >
                                    {sales.changedPercentage}% ({sales.changedAmount.toLocaleString()}원)
                                    <MUI_ICON.ArrowDropUp />
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack direction="row" alignItems="center" sx={{ marginTop: '16px' }}>
                            <Typography sx={{ marginRight: '166px' }}>신규</Typography>
                            <Typography sx={{ color: '#1C64F2', fontWeight: '600' }}>{sales.new}</Typography>
                            <Typography sx={{ fontSize: '16px', lineHeight: '26px', fontWeight: '700' }}>건</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" sx={{ marginTop: '8px' }}>
                            <Typography sx={{ marginRight: '166px' }}>갱신</Typography>
                            <Typography sx={{ color: '#1C64F2', fontWeight: '600' }}>{sales.renew}</Typography>
                            <Typography sx={{ fontSize: '16px', lineHeight: '26px', fontWeight: '700' }}>건</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" sx={{ marginTop: '8px' }}>
                            <Typography sx={{ marginRight: '166px' }}>결제</Typography>
                            <Typography sx={{ color: '#1C64F2', fontWeight: '600' }}>{sales.payment}</Typography>
                            <Typography sx={{ fontSize: '16px', lineHeight: '26px', fontWeight: '700' }}>건</Typography>
                        </Stack>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
});

export default SalesDetail;
