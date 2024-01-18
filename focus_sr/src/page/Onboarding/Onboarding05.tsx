import * as React from 'react';
import { Stack, Checkbox, Typography, Button } from '@mui/material';
import * as MUI_ICON from '@mui/icons-material';

const Error: React.FC<any> = React.forwardRef<any, any>(({ ...props }, ref) => {
    return (
        <Stack alignItems="center">
            <MUI_ICON.Error sx={{ fontSize: '60px', color: '#F05252', marginBottom: '24px' }} />
            <Typography
                sx={{ color: '#111928', fontSize: '28px', lineHeight: '28px', fontWeight: '700', marginBottom: '20px' }}
            >
                죄송합니다. 현재 이 페이지에 접근할 권한이 없습니다.
            </Typography>
            <Typography sx={{ color: '#374151', fontSize: '20px', lineHeight: '24px', fontWeight: '500' }}>
                페이지에 접근하려면 초대가 필요합니다.
            </Typography>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ width: '100%', height: '94px', gap: '16px', marginTop: '24px' }}
            >
                <Button
                    sx={{
                        padding: '10px 18px',
                        backgroundColor: '#1C64F2',
                        color: '#FFFFFF',
                        borderRadius: '6px',
                        fontWeight: 600,
                        lineHeight: '26px',
                        fontSize: '16px',
                        border: '1px solid #1C64F2',
                        '&.Mui-disabled': {
                            backgroundColor: '#E5E7EB',
                            color: '#9CA3AF',
                            borderColor: '#E5E7EB',
                        },
                        '&:hover': {
                            backgroundColor: '#004BEB',
                        },
                    }}
                >
                    이전 페이지로 이동
                </Button>
            </Stack>
        </Stack>
    );
});

export default Error;
