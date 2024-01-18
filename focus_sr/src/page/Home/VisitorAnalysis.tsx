import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const VisitorAnalysis: React.FC<any> = React.forwardRef<any, any>(({ className, children }, ref) => {
    const CONTENTS = [
        { title: '오늘의 방문자 수', type: 'FIRST', numbers: 14560 },
        { title: '오늘의 가입자 수', type: 'SECOND', numbers: 600 },
        { title: '가입 전환율', type: 'THIRD', numbers: 4 },
    ];
    return (
        <Stack direction="row" sx={{ gap: '16px' }}>
            {CONTENTS.map(content => (
                <Stack
                    key={content.title}
                    sx={{
                        flex: 1,
                        height: '108px',
                        backgroundColor: '#F9FAFB',
                        borderRadius: '12px',
                        gap: '8px',
                        justifyContent: 'center',
                        px: '24px',
                    }}
                >
                    <Typography sx={{ fontSize: '14px', fontWeight: '600', color: '#111928' }}>
                        {content.title}
                    </Typography>
                    {content.type === 'FIRST' && (
                        <Stack direction="row" alignItems="center">
                            <Typography
                                sx={{ color: '#F05252', fontWeight: '700', fontSize: '24px', marginRight: '4px' }}
                            >
                                {content.numbers.toLocaleString()}
                            </Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: '500', color: '#4B5563' }}>명</Typography>
                        </Stack>
                    )}
                    {content.type === 'SECOND' && (
                        <Stack direction="row" alignItems="center">
                            <Typography
                                sx={{ color: '#1C64F2', fontWeight: '700', fontSize: '24px', marginRight: '4px' }}
                            >
                                {content.numbers.toLocaleString()}
                            </Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: '500', color: '#4B5563' }}>명</Typography>
                        </Stack>
                    )}
                    {content.type === 'THIRD' && (
                        <Typography sx={{ color: '#0E9F6E', fontWeight: '700', fontSize: '24px', marginRight: '4px' }}>
                            {content.numbers}%
                        </Typography>
                    )}
                </Stack>
            ))}
        </Stack>
    );
});

export default VisitorAnalysis;
