import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import './Profile.css'
import axios from "axios";
import SideNavBar from "./sideNavbar";
import { useNavigate } from "react-router-dom";
export default function Profile(){
    const navigate = useNavigate();
    const id = 8;
    const savedUserName = localStorage.getItem('loggedInUserName');
    const savedEmail = localStorage.getItem('loggedInEmail');
    const savedLastName = localStorage.getItem('loggedInLastName');
    const delAccount=()=>{
        const api="http://localhost:3001/users";
        axios.delete(`http://localhost:3001/users/${id}`)
        .then(response => {
            console.log(response.data);
            navigate('/');
        })
        .catch(error => {
            console.error('Error:',error);
        });
    }
    return(
        <div style={{backgroundColor:'lightgray',height:'734px'}}>
            <SideNavBar/>
            <div className="Profile-Container" >
                <div className="Profile-Info">
                <Card sx={{ maxWidth: 350 }}>
                    <CardMedia
                        component="img" alt="Profile Photo"
                        height="370"
                        image="https://www.realmenrealstyle.com/wp-content/uploads/2023/08/5-Simple-Tips-To-Raise-Your-Status-As-A-Man.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div"> {savedUserName} </Typography>
                        <Typography variant="body2" color="text.secondary">our professional profile should be no more than four brief sentences.
                        You may write your profile as a list in bullet form or as a short paragraph.</Typography>
                        <Typography>Member Since :  Nov 15 2018</Typography>
                    </CardContent>
                    </Card>
                </div>
                <div className="Profile-About">
                    <h4><PersonIcon/>General Information</h4>
                    <table>
                        <tr><td>First Name</td>
                        <td>{savedUserName}</td></tr>
                        <tr><td>Last Name</td>
                        <td>{savedLastName}</td></tr>
                        <tr><td>Gender</td>
                        <td>Male</td></tr>
                        <tr><td>Birthday</td>
                        <td>Feb 22, 1997</td></tr>
                    </table>
                    <h5><ContactMailIcon/> Contact Information</h5>
                    <table>
                        <tr><td>Contact</td>
                        <td>999025467895</td></tr>
                        <tr><td>Email</td>
                        <td>{savedEmail}</td></tr>
                    </table>
                    <h5><SettingsSuggestIcon/>Other Information</h5>
                    <table>
                        <tr><td>Current Address</td>
                        <td>Green Street,Gandhipuram</td></tr>
                        <tr><td>Permanent Address</td>
                        <td>Green Street,Gandhipuram</td></tr>
                        
                    </table>
                </div>
                <br/>
                <button onClick={delAccount}>Delete Account</button>
            </div>
        </div>
    )
}