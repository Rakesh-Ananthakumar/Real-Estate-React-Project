import * as React from 'react';
import { useState , useEffect} from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './style.css';
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from './navbar';
const defaultTheme = createTheme();
let username = "Naveen";
let userLastName = "Kumar";
export default function Login() {
  
  const navigate = useNavigate();
  const [user,setUser] = useState({
    "email" : "",
    "password" : ""
  });
  const [success,setSuccess] = useState(true);
  const [apiData,setApiData] = useState([]);
  const [name,setName] = useState("");
  const getUsernameByEmail = (emailToFind) => {
    const foundUser = apiData.find(user => user.email === emailToFind);
    return foundUser ? foundUser.firstName : 'User not found';
  };
  const lastNameByEmail = (emailToFind) => {
    const UserEmail = apiData.find(user => user.email === emailToFind);
    return UserEmail ? UserEmail.lastName : 'User not found';
  };

  const addUser=(event)=>{
    setSuccess(true);
    setUser({...user,[event.target.name]:event.target.value})
  }
  useEffect(()=>{
    const apiURL = 'http://localhost:3001/users';
    axios.get(apiURL)
            .then(response =>{
                setApiData(response.data);               
                      
            })
            .catch(error => {
                console.error(error);
            });
  })
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    const emailToSearch = user.email;
    username = getUsernameByEmail(emailToSearch);
    userLastName = lastNameByEmail(emailToSearch);
    
    localStorage.setItem('loggedInUserName', username);
    localStorage.setItem('loggedInEmail', emailToSearch);
    localStorage.setItem('loggedInLastName', userLastName);

    const valid = apiData.some(item => item.email === user.email && item.password === user.password);   
    console.log(valid);
    if(valid)
    {
      setSuccess(true);
      console.log("success");
      navigate('/loginnedhome');
    }   
    else
    {
      console.log("failed");
      setSuccess(false);
    }
    
  };

  return (
    <div className='total'>
    <Navbar/>
    <ThemeProvider theme={defaultTheme} >
      <Container component="main" maxWidth="xs" className='userContainer'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'black' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={addUser}
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
              style={{backgroundColor:'white'}}
              onChange={addUser}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {!success && <p style={{textAlign:'center',color:'red'}}>Invalid Username/Password</p>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Typography>
                  Don't have an account?{' '}
                <Link href="/register" variant="body2">
                  SignUp
                </Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  );
  
}

export {username};