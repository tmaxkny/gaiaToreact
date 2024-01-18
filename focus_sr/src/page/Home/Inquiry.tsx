import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Inquiry: React.FC<any> = React.forwardRef<any, any>(({ className, children }, ref) => {
    const CONTENTS = [
        { title: '평균 응답 시간', type: 'FIRST', numbers: [1] },
        { title: '문의사항 해결율', type: 'SECOND', numbers: [78] },
        { title: '새로 들어온 문의', type: 'THIRD', numbers: [22, 13] },
        { title: '처리 중인 문의', type: 'THIRD', numbers: [22, 13] },
    ];
    return (
        <Stack direction="row" sx={{ gap: '16px' }}>
            {CONTENTS.map(content => (
                <Stack
                    key={content.title}
                    sx={{
                        flex: 1,
                        height: '144px',
                        padding: '24px',
                        backgroundColor: '#F9FAFB',
                        borderRadius: '12px',
                        gap: '8px',
                    }}
                >
                    <Typography sx={{ fontSize: '14px', fontWeight: '600', color: '#111928' }}>
                        {content.title}
                    </Typography>
                    {content.type === 'FIRST' && (
                        <Stack direction="row" alignItems="center">
                            <Typography
                                sx={{ color: '#1C64F2', fontWeight: '700', fontSize: '24px', marginRight: '4px' }}
                            >
                                {content.numbers[0]}
                            </Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: '500', color: '#4B5563' }}>시간</Typography>
                        </Stack>
                    )}
                    {content.type === 'SECOND' && (
                        <Typography sx={{ color: '#1C64F2', fontWeight: '700', fontSize: '24px', marginRight: '4px' }}>
                            {content.numbers[0]}%
                        </Typography>
                    )}
                    {content.type === 'THIRD' && (
                        <Stack>
                            <Stack direction="row" alignItems="center">
                                <Typography
                                    sx={{
                                        width: '90px',
                                        marginRight: '18px',
                                        fontSize: '14px',
                                        fontWeight: '500',
                                        color: '#4B5563',
                                    }}
                                >
                                    기술문의
                                </Typography>
                                <Typography
                                    sx={{
                                        color: '#1C64F2',
                                        fontWeight: '700',
                                        fontSize: '24px',
                                        marginRight: '4px',
                                    }}
                                >
                                    {content.numbers[0]}
                                </Typography>
                                <Typography sx={{ fontSize: '14px', fontWeight: '500', color: '#4B5563' }}>
                                    건
                                </Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center">
                                <Typography
                                    sx={{
                                        width: '90px',
                                        marginRight: '18px',
                                        fontSize: '14px',
                                        fontWeight: '500',
                                        color: '#4B5563',
                                    }}
                                >
                                    일반/영업문의
                                </Typography>
                                <Typography
                                    sx={{
                                        color: '#1C64F2',
                                        fontWeight: '700',
                                        fontSize: '24px',
                                        marginRight: '4px',
                                    }}
                                >
                                    {content.numbers[1]}
                                </Typography>
                                <Typography sx={{ fontSize: '14px', fontWeight: '500', color: '#4B5563' }}>
                                    건
                                </Typography>
                            </Stack>
                        </Stack>
                    )}
                </Stack>
            ))}
        </Stack>
    );
});

export default Inquiry;
