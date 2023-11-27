import houseImage from '../assests/house3.jpg';
import Footer from './Footer';
import SampleHome from './essential';
import './home.css';
import Component from './houseDetails';
import Navbar from './navbar';
import Option from './option';
import Properties from './properties';
import Slideshow from './slide';
function Home()
{
    return(
        <div>
           <Navbar/>
            <Slideshow/>
            <Option/>
            <SampleHome/>
            
            {/* <Properties/> */}
            {/* <Component/> */}
            <Footer />
        </div>
    )
}
export default Home;