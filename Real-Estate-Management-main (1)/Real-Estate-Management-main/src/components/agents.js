import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './Agent.css';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import SideNavBar from './sideNavbar';
export default function AgentsDetails(){
    return(
        <div>
            <SideNavBar/>
        <div className='Agent-container'>
            <Card sx={{ maxWidth: 315 , maxHeight: 550}} className='Agent-Box'>
            <CardMedia
                sx={{ height: 250 }}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUDQUNoQvyC306GfpUM0nF1Vjhv9iTztd4Cg&usqp=CAU"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div"><PersonIcon/>   Benjamin
                </Typography>
                <p className='Agent-Content'>Agent Benjamin is a seasoned operative with a reputation 
                    for getting the job done efficiently. His calm demeanor belies a wealth of experience 
                    in high-stakes situations.</p>
                <p className='Agent-contact'><EmailIcon/> benjamin@gmail.com</p>
                <p className='Agent-contact'><CallIcon/> 9256785655</p>
            </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345, maxHeight: 550 }} className='Agent-Box'>
            <CardMedia
                sx={{ height: 250 }}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7qNW0bXnQlc7j1rWPLppJTBszOIA9cwqssbW36_-0TjaP18C8vFR1AgFSQkfWuq-k_XQ&usqp=CAU"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div"><PersonIcon/>   Alexander
                </Typography>
                <p className='Agent-Content'>Agent Alexander is a charismatic and versatile operative, equally adept in both 
                            fieldwork and diplomatic missions. With a background in linguistics and cultural 
                            studies .</p>
                <p className='Agent-contact'><EmailIcon/> alexander@gmail.com</p>
                <p className='Agent-contact'><CallIcon/> 9025135478</p>
            </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345, maxHeight: 550 }} className='Agent-Box'>
            <CardMedia
                sx={{ height: 250 }}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLk-zOT6LhOK5DfCt-_-khEFvCeZ1voYF-Q&usqp=CAU"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div"><PersonIcon/>   Jackson Thompson
                </Typography>
                <p className='Agent-Content'>Operating under the alias Jackson Thompson, this agent is a master of disguise and 
                            infiltration.He is often deployed in 
                            missions that require blending seamlessly into diverse environments.   </p>
                <p className='Agent-contact'><EmailIcon/> jacksonthompson@gmail.com</p>
                <p className='Agent-contact'><CallIcon/> 8945679162</p>
            </CardContent>
            </Card>
        </div>
        </div>
    )
}