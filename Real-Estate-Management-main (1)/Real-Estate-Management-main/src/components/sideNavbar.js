import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import CottageIcon from '@mui/icons-material/Cottage';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StoreIcon from '@mui/icons-material/Store';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HomeIcon from '@mui/icons-material/Home';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link, useNavigate } from 'react-router-dom';
const drawerWidth = 200;

export default function SideNavBar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const profileHandle = () => {
    setAnchorEl(null);
    navigate('/profile');
  };
  const logOutHandle = () => {
    setAnchorEl(null);
    localStorage.clear();
    navigate('/');
  };
  const handleClose = () =>{
    setAnchorEl(null);
  }
  return (
    
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 ,backgroundColor:'#ACB1D6', color: 'black'}}>
        <Toolbar>
         <h6><CottageIcon href='/loginnedhome' sx={{color:'black'}}/></h6>
          {/* <Typography variant="h5" noWrap component="div" margin sx={{color:'black', fontFamily:'cursive'}}>
            Dream Plots
          </Typography> */}
          <a href='/loginnedhome' style={{textDecoration:'none',color:'black',fontFamily:'cursive'}}><h4>Dream Plots</h4></a>
          <div style={{display:'flex',marginRight:50,justifyContent:'flex-end',position:'absolute',right:0,color:'black'}}>
            

                <div>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={profileHandle}>Profile</MenuItem>
                      <MenuItem onClick={logOutHandle}>Log Out</MenuItem>
                      
                    </Menu>
                  </div>



          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box',backgroundColor:'#ACB1D6', color:'white' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItemButton href='/loginnedhome' sx={{margin:'10px', fontFamily:'cursive',color:'black'}}><HomeIcon/>Home</ListItemButton>
            <ListItemButton href="/profile" sx={{margin:'10px', fontFamily:'cursive',color:'black'}}><AccountCircleIcon/>PROFILE</ListItemButton>
            <ListItemButton href="/houseDetails" sx={{margin:'10px', fontFamily:'cursive',color:'black'}}><StoreIcon/>BUY</ListItemButton>
            <ListItemButton href='/rent' sx={{margin:'10px', fontFamily:'cursive',color:'black'}}><StoreIcon/>RENT</ListItemButton>
            <ListItemButton href='/plot' sx={{margin:'10px', fontFamily:'cursive',color:'black'}}><StoreIcon/>PLOTS</ListItemButton>
            <ListItemButton href='/contact' sx={{margin:'10px', fontFamily:'cursive',color:'black'}}><PhoneIcon/>Contact Us</ListItemButton>
            <ListItemButton href='/agents' sx={{margin:'10px', fontFamily:'cursive',color:'black'}}><SupportAgentIcon/>AGENTS</ListItemButton>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}