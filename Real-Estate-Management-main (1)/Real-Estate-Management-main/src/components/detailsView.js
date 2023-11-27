import React from "react";
import { Button, CardActionArea, CardActions, Container } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import HotelIcon from '@mui/icons-material/Hotel';
import ChairIcon from '@mui/icons-material/Chair';
import BathroomIcon from '@mui/icons-material/Bathroom';
import HomeIcon from '@mui/icons-material/Home';
import AttractionsIcon from '@mui/icons-material/Attractions';
import CallIcon from '@mui/icons-material/Call';
import DiscountIcon from '@mui/icons-material/Discount';
import './viewDetails.css'
import SideNavBar from "./sideNavbar";
export default function ViewDetails(){
    return(
        <div>
            <SideNavBar/>
        <div className="Details-Container" style={{backgroundColor:'lightgray'}}>
            <div className="Image-Container">
                <img src="https://5.imimg.com/data5/SELLER/Default/2021/6/LH/KM/CU/66743313/home-exterior-designing-service-500x500.jpg" width={'650px'} height={'560px'}></img>
                <button className="Views"><RemoveRedEyeIcon/> 100 Views</button>
                <button className="Compare"><FavoriteIcon/>  Compare</button>
                <ShareIcon className="share" />
            </div>
            {/* <div className="More-Image_Container">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtauLVyWxHUliP51FtlnJKR2drbGXq07bDyg&usqp=CAU" width={'250px'} height={'180px'}></img>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjF-E2uu7Osq2SgLJJqiBm4Cml9gwetpkhwQ&usqp=CAU" width={'250px'} height={'180px'}></img>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHCY40ISe1oD7nxcQPUaYL1tDnuZ3YsC_Nrg&usqp=CAU" width={'250px'} height={'180px'}></img>
            </div> */}
            <div className="Details">
                <h2>2 Bedroom 1020 Sq.Ft. Builder Floor in Tambaram East Chennai</h2>
                <p>Listing ID #8956846</p>
                <h3>< CurrencyRupeeIcon/>   73.8 L</h3>
                <p><HotelIcon/> 2 BedRooms</p>
                <p><ChairIcon/> Unfurnished</p>
                <p><BathroomIcon/> 2 BathRooms</p>
                <p><HomeIcon/> 1020 Sq.Ft(Built-up area)</p>
                <p><AttractionsIcon/> Parks Availble</p>
                <button><DiscountIcon/>Get Instant Discount</button>
                <button><CallIcon/> Request for a Call</button>
                
            </div>
        </div>
        </div>
    )
}