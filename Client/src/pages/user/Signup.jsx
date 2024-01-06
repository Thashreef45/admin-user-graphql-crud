import {useState , useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';
import axiosGraphQl from '../../services/axios';
const api = import.meta.env.VITE_GraphQl_Server


const Login = () => {

    const [email, setEmail] = useState("");
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")


    const handleSubmit = async() => {
        try {
            let data = JSON.stringify({
                query: `
                mutation {
                    signUp(input: {
                      id: "${email}",
                      name:"${name}",
                      password: "${password}",
                    }) {
                      success
                      message
                    }
                  }
                `,
              })
              console.log(api);
            //   const response = await axiosGraphQl.post('',data,{headers:{'Content-Type':'application/json'}})
            const response = await axios.post(String(api),data,{headers:{'Content-Type':'application/json'}}).data.data
            console.log(response.signUp);
          } catch (error) {
            console.error('Error in handleSubmit:', error);
          }
    };

    return (
        <Container component="main" sx={{mt:25}} maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <AccountCircleIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    User Sign Up
                </Typography>
                <Box >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}

                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
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
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={()=>handleSubmit()}
                    >
                        Submit
                    </Button>
                    <Grid container sx={{display:'flex',justifyContent:'center'}}>
                        <Grid item>
                            <Link href="/user/login" variant="body2">
                                {"Already have an account? Login"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default Login