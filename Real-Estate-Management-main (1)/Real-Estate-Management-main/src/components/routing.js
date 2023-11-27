import { createBrowserRouter } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import SignUp from "./register";
import About from "./about";
import SideNavBar from "./sideNavbar";
import Profile from "./Profile";
import LoginnedHome from "./LoginnedHome";
import Contact from "./contactUs";
import Component from "./houseDetails";
import ViewDetails from "./detailsView";
import AgentsDetails from "./agents";


const router = createBrowserRouter([
    { path:'/',element:<Home/>},
    { path:'/login',element:<Login/>},
    { path:'/register',element:<SignUp/>},
    { path:'/about',element:<About/>},
    { path: '/sideNavbar',element:<SideNavBar/>},
    { path: '/profile',element:<Profile/>},
    { path: '/loginnedhome' , element:<LoginnedHome/>},
    { path: '/contact' , element:<Contact/>},
    { path: 'houseDetails' , element:<Component/>},
    { path: '/rent' , element:<Component/>},
    { path: '/plot' , element:<Component/>},
    { path: '/viewDetails', element:<ViewDetails/>},
    { path: '/agents', element:<AgentsDetails/>}
]);

export default router;