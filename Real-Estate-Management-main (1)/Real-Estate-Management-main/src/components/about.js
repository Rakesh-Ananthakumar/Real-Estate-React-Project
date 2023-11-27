import { Container } from "@mui/material";
import Navbar from "./navbar";

export default function About()
{
    return(
        <div style={{backgroundColor:'#DFD7BF',height:'736px'}}>
            <Navbar/>
            <Container sx={{marginTop:'60px',fontFamily:'ariel',fontSize:'22px'}}>
                <h1>About Us</h1>
                <p>
                    Gone are the days when people used to deal property matters on the basis of "mouth to mouth publicity" or nearby dealers. Globalization and fast lifestyle has encouraged the real estate industry to step in E-World. Now active partakers of real estate world are eagerly seeking the right options to establish themselves in E-Real Estate World. RealestateIndia.Com is a solution to all what bothers to people who all are dealing in properties or people who all are searching property. As one of the leading property portals, RealestateIndia has tuned itself with pulse of real estate sector. Moving ahead with esteemed registered users and regularly visited by players of real estate industry, RealestateIndia.Com has become the pivot for real-estate sector
                </p>
            </Container>
        </div>
    )
}