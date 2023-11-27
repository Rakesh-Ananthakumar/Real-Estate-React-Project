import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';


export default function Properties() {
    const containerStyle = {
        position: 'relative',
        maxWidth: '240px',
      };
    
       const textStyle = {
          // position: 'absolute',
          // bottom: '0px', // Adjust the distance from the bottom as needed
          // left: '10px', // Adjust the distance from the left as needed
          color: 'white', // Text color
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background color with transparency
          padding: '5px', // Padding around the text
          justifyContent: 'center',
          size: '70px',
          textAlign:'center'
       };
      // const textStyle = {
      //   position: 'absolute',
      //   top: '50%',
      //   left: '50%',
      //   transform: 'translate(-50%, -50%)',
      //   color: 'white', // Text color
      //   backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background color with transparency
      //   padding: '5px', // Padding around the text
      //   fontSize: '70px', // Corrected property name from 'size' to 'fontSize'
      //   width: '100%',
      //   height: '100%',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center'
      // };
    

  return (
    <div>
        <h1 style={{textAlign:'center'}}>Premium Hot Projects : </h1>
        <div style={{display:"flex",justifyContent:'space-around'}}>
          <Card sx={{ width:'15.5%',height:'15%' }}>
              <div style={containerStyle}>
              <CardMedia
                component="img"
                height="200"
                image="https://static.realestateindia.com/rei/images/pfs-img1.jpg"
                alt="Your Image"
                style={{ width: '100%', height: '80%',transition: 'transform 0.3s ease' ,cursor:'pointer'}}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.04)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
              <div style={textStyle}>
                <Typography variant="h6">Budget about 5 crores</Typography>
              </div>
            </div>
          </Card>
          <Card sx={{ width:'15.5%',height:'15%' }}>
              <div style={containerStyle}>
              <CardMedia
                component="img"
                height="200"
                image="https://static.realestateindia.com/rei/mobile-images/sub-category/builder-floor.jpg"
                alt="Your Image"
                style={{ width: '100%', height: '80%',transition: 'transform 0.3s ease' ,cursor:'pointer'}}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.04)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
              <div style={textStyle}>
                <Typography variant="h6">Builder Floors</Typography>
              </div>
            </div>
          </Card>
          <Card sx={{ width:'15.5%',height:'15%' }}>
              <div style={containerStyle}>
              <CardMedia
                component="img"
                height="200"
                image="https://static.realestateindia.com/rei/images/3bhk.jpg"
                alt="Your Image"
                style={{ width: '100%', height: '80%',transition: 'transform 0.3s ease' ,cursor:'pointer'}}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.04)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
              <div style={textStyle}>
                <Typography variant="h6">3 BHK Apartments</Typography>
              </div>
            </div>
          </Card>
          <Card sx={{ width:'15.5%',height:'15%' }}>
              <div style={containerStyle}>
              <CardMedia
                component="img"
                height="200"
                image="https://static.realestateindia.com/rei/mobile-images/sub-category/flats-apartments.jpg"
                alt="Your Image"
                style={{ width: '100%', height: '80%',transition: 'transform 0.3s ease' ,cursor:'pointer'}}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.04)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
              <div style={textStyle}>
                <Typography variant="h6">Flats</Typography>
              </div>
            </div>
          </Card>
          <Card sx={{ width:'15.5%',height:'15%' }}>
              <div style={containerStyle}>
              <CardMedia
                component="img"
                height="200"
                image="https://static.realestateindia.com/rei/images/pfs-img6.jpg"
                alt="Your Image"
                style={{ width: '100%', height: '80%',transition: 'transform 0.3s ease' ,cursor:'pointer'}}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.04)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
              <div style={textStyle}>
                <Typography variant="h6">Budget within 40 Lakhs</Typography>
              </div>
            </div>
          </Card>
        </div>
    </div>
  );
}