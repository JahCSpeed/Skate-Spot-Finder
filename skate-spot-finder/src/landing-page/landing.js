import React from 'react'
import "./landing.css"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
const title = <h1 className='title'>Skate Finder</h1>
function Landing() {
    return(
        <div>
            <h1 className='title'>Skate Finder</h1>
        </div>
    );
    
}
export default Landing