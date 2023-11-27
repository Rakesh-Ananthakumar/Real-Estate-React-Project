import * as React from 'react';
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
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SideNavBar from './sideNavbar';
import ThemeToggle, { ThemeApp } from './theme';


const defaultTheme = createTheme();

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

  };

  return (
    <div>
        <SideNavBar/>
        <ThemeApp>
          <ThemeToggle/>
        </ThemeApp>
        
        <div style={{display:'flex',paddingTop:'22px',marginLeft:'0px',height:'672px'}}>
          <div style={{marginLeft:"80px",marginTop:'50px'}}>
            <div style={{backgroundRepeat:'no-repeat',color:'black',backgroundColor:'#818FB4',height:'550px',borderRadius:'8px',width:'400px',marginLeft:'250px',paddingLeft:'50px'}}>
                <br/>
                <div style={{display:'flex' }}>
                    <h6><LocationOnIcon/></h6>
                    <h2>Location</h2>
                </div>
                <p>123 A,Gandhi road,Chennai, Tamil Nadu,India - 600001</p>
                <div style={{display:'flex'}}>
                    <h6><PhoneIcon/></h6>
                    <h2>Contact</h2>
                </div>
                <p>+91 9025132241</p>
                <div style={{display:'flex'}}>
                    <h6><EmailIcon/></h6>
                    <h2>Support</h2>
                </div>
                <p>dreamplots@gmail.com</p>
                <br/>
            </div>
          </div>
        <ThemeProvider theme={defaultTheme}>
          {/* <Container component="main" maxWidth="xs"> */}
          <div style={{backgroundColor:'white',textAlign:'center',borderRadius:'8px',height:'550px',width:'400px',marginTop:'50px'}}>
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'center',
              }}
            >
              
              <Typography component="h1" variant="h5">
                Send Us A Message
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item  xs={12}>
                    <TextField
                      
                      name="firstName"
                      required
                      // fullWidth
                      id="firstName"
                      label="Name"
                      
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <TextField
                      required
                      // fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      // fullWidth
                      id="number"
                      label="Phone Number"
                      name="number"
                      autoComplete="number"
                      placeholder='Ex:+91 7010068581'
                    />
                  </Grid>
                  
                  <Grid item xs={16}>
                    <TextField
                      id="outlined-textarea"
                      // fullWidth
                      label="Write us a Message"
                      required
                      rows={4}
                      multiline
                    />
                  </Grid>
                  
                  
                </Grid>
                <Button
                  type="submit"
                  // fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 ,alignItems:'center',marginLeft:'22px'}}
                >
                  Send Message
                </Button>
                
              </Box>
            </Box>
            
          {/* </Container> */}
          </div>
        </ThemeProvider>
        <br/>
        </div>
    </div>
  );
}