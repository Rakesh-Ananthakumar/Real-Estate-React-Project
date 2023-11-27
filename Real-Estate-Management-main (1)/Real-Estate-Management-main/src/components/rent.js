import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import HotelIcon from '@mui/icons-material/Hotel';
import CropFreeIcon from '@mui/icons-material/CropFree';
import ShowerIcon from '@mui/icons-material/Shower';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './footer.css';
import { useNavigate } from 'react-router-dom';
import SideNavBar from './sideNavbar';
export default function Component(){
    const navigate = useNavigate();
    function nextPage()
    {
        navigate('/viewDetails'); 
    }
    return(
        <div>
            <SideNavBar/>
        <div style={{width:'100%',backgroundColor:'lightgray'}}>
            <div className="Container" >
                <div className="Box">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVRAUBhVWTPXm0u7qbhIBFWMaQ3KzUA2DK5w&usqp=CAU'></img>
                    <p><FontAwesomeIcon icon={faMapMarker} />132, My Street, Bigtown BG23 4 YZ.</p>
                    <div className='Content'>
                        <li><HotelIcon/> 3 Bed Room</li>
                        <li><ShowerIcon/> 2 Bath</li>
                        <li><CropFreeIcon/>1,200sqft</li>
                        <li><Diversity1Icon/> Family</li>
                    </div>
                    <button onClick={nextPage}>View Details</button>
                    <span><CurrencyRupeeIcon/>649,999</span>
                </div>
                <div className="Box">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEXcYII1Z4wsGrf7AbGq4juVS6dzCg_FN1Jw&usqp=CAU'></img>
                    <p><FontAwesomeIcon icon={faMapMarker} />456 Oak Avenue, Suburbville, CA 56789</p>
                    <div className='Content'>
                        <li><HotelIcon/> 2 Bed Room</li>
                        <li><ShowerIcon/> 2 Bath</li>
                        <li><CropFreeIcon/>900 sqft</li>
                        <li><Diversity1Icon/> Family</li>
                    </div>
                    <button onClick={nextPage}>View Details</button>
                    <span><CurrencyRupeeIcon/>200,999</span>
                </div>
                
                <div className="Box">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhLqc3SXsyigrahdAUbjHZ6TmAgb0UvQd3g&usqp=CAU'></img>
                    <p><FontAwesomeIcon icon={faMapMarker} />01 Pine Street, Villageton, TX 43210</p>
                    <div className='Content'>
                        <li><HotelIcon/> 1 Bed Room</li>
                        <li><ShowerIcon/> 1 Bath</li>
                        <li><CropFreeIcon/>700 sqft</li>
                        <li><Diversity1Icon/> Couples</li>
                    </div>
                    <button onClick={nextPage}>View Details</button>
                    <span><CurrencyRupeeIcon/>200,000</span>
                </div>
                
                <div className="Box">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbGoeZg06hhqGsjJ-DrxjgEmU5o7Jua2vB9Q&usqp=CAU'></img>
                    <p><FontAwesomeIcon icon={faMapMarker} />789 Elm Lane, Cityville, NY 98765</p>
                    <div className='Content'>
                        <li><HotelIcon/> 4 Bed Room</li>
                        <li><ShowerIcon/> 4 Bath</li>
                        <li><CropFreeIcon/>2,200sqft</li>
                        <li><Diversity1Icon/> Family</li>
                    </div>
                    <button onClick={nextPage}>View Details</button>
                    <span><CurrencyRupeeIcon/>800,999</span>
                </div>
                <div className="Box">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNjmUGSxNel4KS1Yn9Jiff-JYEwd6ip0sYtw&usqp=CAU'></img>
                    <p><FontAwesomeIcon icon={faMapMarker} />567 Cedar Court, Countryside, AZ 21098</p>
                    <div className='Content'>
                        <li><HotelIcon/> 5 Bed Room</li>
                        <li><ShowerIcon/> 5 Bath</li>
                        <li><CropFreeIcon/>3,200sqft</li>
                        <li><Diversity1Icon/> Family</li>
                    </div>
                    <button onClick={nextPage}>View Details</button>
                    <span><CurrencyRupeeIcon/>1049,999</span>
                </div>
                <div className="Box">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQig1KeuqMjpLfDHZSGi-o1hr9XcBmZ8al7uQ&usqp=CAU'></img>
                    <p><FontAwesomeIcon icon={faMapMarker} />234 Maple Drive, Hamletsville, FL 87654</p>
                    <div className='Content'>
                        <li><HotelIcon/> 2 Bed Room</li>
                        <li><ShowerIcon/> 1 Bath</li>
                        <li><CropFreeIcon/>1,200sqft</li>
                        <li><Diversity1Icon/> Family</li>
                    </div>
                    <button onClick={nextPage}>View Details</button>
                    <span><CurrencyRupeeIcon/>500,999</span>
                </div>
                
                <div className="Box">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgG_HXDFbFaPcxOqvvwkDMO_kTXYtVdjfaXg&usqp=CAU'></img>
                    <p><FontAwesomeIcon icon={faMapMarker} />112, Gandhi Street, TownHall YZ.</p>
                    <div className='Content'>
                        <li><HotelIcon/> 4 Bed Room</li>
                        <li><ShowerIcon/> 4 Bath</li>
                        <li><CropFreeIcon/>2,200sqft</li>
                        <li><Diversity1Icon/> Family</li>
                    </div>
                    <button onClick={nextPage}>View Details</button>
                    <span><CurrencyRupeeIcon/>849,999</span>
                </div>
                <div className="Box">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXjxnMEJPwReIDuHh_2cruq10g6Y6y5NH93g&usqp=CAU'></img>
                    <p><FontAwesomeIcon icon={faMapMarker} />132, My Street, Bigtown BG23 4 YZ.</p>
                    <div className='Content'>
                        <li><HotelIcon/> 7 Bed Room</li>
                        <li><ShowerIcon/> 7 Bath</li>
                        <li><CropFreeIcon/>6,500sqft</li>
                        <li><Diversity1Icon/> Family</li>
                    </div>
                    <button onClick={nextPage}>View Details</button>
                    <span><CurrencyRupeeIcon/>1249,999</span>
                </div>
                
            </div>
        </div>
        </div>
    )
}