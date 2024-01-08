import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axiosGraphQl from '../../services/axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [err, setErr] = useState("");

    useEffect(()=>{
        if(localStorage.getItem('userToken'))navigate('/user/home')
    })


    const handleSubmit = async () => {
        let query = JSON.stringify({
            query: `
            mutation {
                UserLogin(input: {
                  id: "${email}",
                  password: "${password}",
                }) {
                  success
                  message
                  token
                }
              }
            `,
        })

        const response = await axiosGraphQl.post('/', query, { headers: { 'Content-Type': 'application/json' } })
        if (!response.data.data.UserLogin.success) {
            setErr(response.data.data.UserLogin.message)
            setTimeout(() => {
                setErr("")
            }, 2000)
        } else {
            localStorage.setItem('userToken',`Bearer ${response.data.data.UserLogin.token}`)
            navigate("/user/home")
        }
    };

    return (
        <Container component="main" sx={{ mt: 25 }} maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    User Sign in
                </Typography>
                <Box noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={() => handleSubmit()}
                    >
                        Sign In
                    </Button>
                    <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid item>
                            <Link href="/user/signup" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
                {err && <Typography sx={{ mt: 2, color: 'red' }}>{err}</Typography>}
            </Box>
        </Container>
    );
}

export default Login