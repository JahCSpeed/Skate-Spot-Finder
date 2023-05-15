import React from 'react'
import "./landing.css"
import NavBar from '../NavBar/navbar';
import About from '../Pages/about';
import SignIn from '../Pages/signIn';
import SignUp from '../Pages/signUp';
import Home from '../Pages/home';
import{Route, Routes} from "react-router-dom";
function Landing() {
    return (
        <>
            <NavBar />
            <div className='container'>
                <Routes>
                    <Route path = "/" element = {<Home />} />
                    <Route path = "/about" element = {<About />} />   
                    <Route path = "/sign-up" element = {<SignUp />} />   
                    <Route path = "/sign-in" element = {<SignIn />} />   
  
                </Routes>
            </div>
        </>
    );
}
export default Landing