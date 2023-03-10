import { Typography, Box, Paper } from '@mui/material'

const BoxIcons = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: '5.5rem',
                    height:'5.5rem'
                },
            }}>

            <Paper
                square={true}
                sx={{
                    background: '#202027',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    padding: '2%'
                }}>
                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.9335 25.6703C32.5665 27.5648 17.0662 39.9758 13.4775 42.8513L7.40922 36.783L24.6622 15.399L34.9335 25.6703ZM46.8787 3.46952C42.255 -1.15423 34.7557 -1.15423 30.132 3.46952C27.0832 6.52052 26.8245 9.86402 26.676 11.0498L39.2985 23.6723C40.3875 23.5508 43.803 23.292 46.8787 20.2163C51.5047 15.5925 51.5047 8.09327 46.8787 3.46952ZM24.7522 43.8345C19.5952 43.8345 17.2395 47.0453 13.9162 49.1333C11.5627 50.6093 9.33522 49.86 8.26422 48.5348C7.87497 48.06 6.76347 46.35 8.65572 44.3903L8.37447 44.109L5.84097 41.6543C2.75397 44.8403 3.30072 48.6473 5.21322 51.0075C7.40697 53.7165 11.8192 55.0845 16.002 52.4588C19.5682 50.22 21.1477 47.7608 24.7522 47.7608C27.0832 47.7608 29.2072 48.8048 32.5935 54L35.8807 51.858C32.7465 47.043 29.6527 43.8345 24.7522 43.8345Z" fill="#EAEAEA" />
                </svg>

                <Typography
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '1.094rem',
                        fontWeight:'300',
                        margin: '10% 0',
                    }} >Charts</Typography>
            </Paper>

            <Paper
                square={true}
                sx={{
                    background: '#202027',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    padding: '2%'
                }}>
                <svg width="57" height="54" viewBox="0 0 57 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50.8205 23.9805L56 27L28.9955 42.75L2 27L7.17725 23.9805L28.9955 36.711L50.8205 23.9805ZM28.9955 47.9588L7.17725 35.2282L2 38.25L28.9955 54L56 38.25L50.8205 35.2305L28.9955 47.9588ZM56 15.75L28.9955 0L2 15.75L28.9955 31.5L56 15.75Z" fill="#EAEAEA" />
                </svg>

                <Typography
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '1.094rem',
                        fontWeight:'300',
                        margin: '10% 0',
                    }} >Albums</Typography>
            </Paper>

            <Paper
                square={true}
                sx={{
                    background: '#202027',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    padding: '2%'
                }}>
                <svg width="56" height="54" viewBox="0 0 56 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.0072 4.5C40.5922 4.5 50.8309 14.5935 50.8309 27C50.8309 39.4065 40.5922 49.5 28.0072 49.5C15.4222 49.5 5.18346 39.4065 5.18346 27C5.18346 14.5935 15.4222 4.5 28.0072 4.5ZM28.0072 0C12.8819 0 0.618713 12.0893 0.618713 27C0.618713 41.9108 12.8819 54 28.0072 54C43.1325 54 55.3957 41.9108 55.3957 27C55.3957 12.0893 43.1325 0 28.0072 0ZM32.572 27L22.3013 37.125L25.7865 40.5L39.4191 27L25.7865 13.5L22.3013 16.875L32.572 27Z" fill="#EAEAEA" />
                </svg>

                <Typography
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '1.094rem',
                        fontWeight:'300',
                        margin: '10% 0',
                    }} >More</Typography>
            </Paper>

        </Box>
    )
}

export default BoxIcons
