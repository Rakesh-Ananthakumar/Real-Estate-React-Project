import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function SampleHome(){
    return(
        <div className='Card-Container' style={{ display: 'flex' ,backgroundColor:'lightgray',padding:'10px'}}>
            <Card sx={{ minWidth: 275, backgroundColor:'#5C5470', color:'whitesmoke', width:'20%', padding:'10px', marginLeft:'140px'}}>
                <CardContent>
                    <Typography variant="h5" component="div">Post Your Property Ads for free!!</Typography>
                        <button size="small" className='Card-Button' style={{borderRadius:'10px',backgroundColor:'grey',color:'white', marginTop:'25px',border:'0'}}>List Your Property<ArrowRightAltIcon/></button>
                        <img src='https://static.realestateindia.com/rei/images/pw-img1.png' style={{marginLeft:'20px',marginTop:'15px'}}></img>
                </CardContent>
            </Card>
            <Card sx={{ minWidth: 275, backgroundColor:'#394867', color:'whitesmoke', width:'20%', padding:'10px' , marginLeft:'10px'}}>
                <CardContent>
                    <Typography variant="h5" component="div">Top Real Estate Agents & Property Dealers</Typography>
                    <button size="small" className='Card-Button' style={{borderRadius:'10px',backgroundColor:'grey',color:'white', marginTop:'25px',border:'0'}}>Explore Now<ArrowRightAltIcon/></button>
                    <img src='https://static.realestateindia.com/rei/images/pw-img2.png' style={{marginLeft:'30px',marginTop:'20px'}}></img>
                </CardContent>
            </Card>
            <Card sx={{ minWidth: 275, backgroundColor:'#61677A', color:'whitesmoke', width:'20%', padding:'10px' , marginLeft:'10px'}}>
                <CardContent>
                    <Typography variant="h5" component="div">Explore India's Top Residential Cities List</Typography>
                    <button size="small" className='Card-Button' style={{borderRadius:'10px',backgroundColor:'grey',color:'white', marginTop:'25px',border:'0'}}>Explore Now<ArrowRightAltIcon/></button>
                    <img src='https://static.realestateindia.com/rei/images/pw-img3.png' style={{marginLeft:'30px',marginTop:'15px'}}></img>
                </CardContent>
            </Card>
            <Card sx={{ minWidth: 275, backgroundColor:'#526D82', color:'whitesmoke', width:'20%', padding:'10px' , marginLeft:'10px'}}>
                <CardContent>
                    <Typography variant="h5" component="div">Helping you to find Your dream property</Typography>
                    <button size="small" className='Card-Button' style={{borderRadius:'10px',backgroundColor:'grey',color:'white', marginTop:'25px',border:'0'}}>Post Yours<ArrowRightAltIcon/></button>
                    <img src='https://static.realestateindia.com/rei/images/pw-img4.png' style={{marginLeft:'30px',marginTop:'20px'}}></img>
                </CardContent>
            </Card>
        </div>
    )
}
export default SampleHome;