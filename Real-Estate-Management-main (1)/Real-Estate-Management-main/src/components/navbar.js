import {BrowserRouter,Link,Routes,Route} from 'react-router-dom';
import Login from './login';
import router from './routing';
import Home from './home';
import About from './about';
import CottageIcon from '@mui/icons-material/Cottage';
import SignUp from './register';
import ViewDetails from './detailsView';
export default function Navbar()
{
    return(
        
            <div>
                <div >
                    <nav className='navbar navbar-expand-lg navbar-light' style={{backgroundColor:'lightgray',height:'10vh',color:'black'}}>
                        <h3 style={{marginLeft:'30px'}}><CottageIcon/> Dream Plots</h3>
                        <ul className='navbar nav' style={{display:'flex',marginRight:50,justifyContent:'flex-end',position:'absolute',right:0,color:'black'}}>
                            <li className='nav-item'style={{color:'black'}}>
                                <Link to='/' className='nav-link' sx={{color:'black'}}><h5 style={{color:'black',paddingTop:'11px'}}>Home</h5></Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/about' className='nav-link'><h5 style={{color:'black',paddingTop:'11px'}}>About Us</h5></Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/login' className='nav-link'><h5 style={{color:'black',paddingTop:'11px'}}>login</h5></Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/register' className='nav-link'><h5 style={{color:'black',paddingTop:'11px'}}>Register</h5></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* <Routes>
                    <Route exact path='/' element={<Home />}></Route>
                    <Route exact path='/about' element={<About />}></Route>
                    <Route exact path='/login' element={<Login />}></Route>
                    <Route exact path='/register' element={<SignUp />}></Route>
                    <Route exact path='/details' element={<ViewDetails />}></Route>
                </Routes> */}
            </div>
        
    )
}