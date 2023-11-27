import Footer from "./Footer";
import SampleHome from "./essential";
import Option from "./option";
import SideNavBar from "./sideNavbar";
import Slideshow from "./slide";

function LoginnedHome()
{
    return(
        <div style={{marginLeft:'200px'}}>
            <SideNavBar/>
            <Slideshow/>
            <Option/>
            <SampleHome/>
            <Footer/>
        </div>
    )
}
export default LoginnedHome;