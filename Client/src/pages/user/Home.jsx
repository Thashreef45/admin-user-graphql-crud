import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import axiosGraphQl from '../../services/axios';
import { useNavigate } from 'react-router-dom';




const Home = () => {

    const [userData, setUserData] = useState();

    const getProfile = async () => {
        const query = `
            query {
                GetProfile {
                    message
                    success
                    name
                }
            }
            `;

        const response = await axiosGraphQl.post('/', { query }, {
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem('userToken')
            }
        })
        if (!response.data.data.GetProfile.success) {
            navigate('/user/login')
        }
        setUserData(response.data.data.GetProfile)
    }

    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem('userToken')) {
            navigate('/user/login')
        }
        else {
            getProfile()
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('userToken')
        navigate('/user/login')
    }


    return (
        <>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                        sx={{ mt: 10 }}
                    >
                        {userData && `Welcome ${userData.name}`}
                    </Typography>
                    <Typography sx={{ mt: 15 }} variant="h5" align="center" color="text.secondary" paragraph>
                        Something short and leading about the collection below—its contents,
                        the creator, etc. Make it short and sweet, but not too short so folks
                        don&apos;t simply skip over it entirely.
                    </Typography>

                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        <Button variant="contained">Edit Profile</Button>
                        <Button sx={{ backgroundColor: 'red' }} variant="contained"
                            onClick={() => handleLogout()}
                        >Logout</Button>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}

export default Home