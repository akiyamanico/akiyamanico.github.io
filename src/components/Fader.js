import React, {useState, useEffect} from "react"
import { Route, Redirect } from 'react-router'
import PropTypes from 'prop-types'
import '../css/fader.css'
import '../css/flia.css'
import 'animate.css'
import "../index.css";
import Navbar from '../Navigation/Navbar.js'
import Hero from "./hero"
import Footer from "./footer"



const Fader = ({ text }) => {
    const[fadeProp, setFadeProp] = useState({
        fade: 'fade-in',
        fade2: 'fade-out',

    });
    useEffect(()=> {
        return () => {
            const timeout = setInterval(()=>{
                if(fadeProp.fade === 'fade-in'){
                setFadeProp({
                    fade:'fade-out',
                    fade2:'fade-in',
                })  
                } 
                else {
                    setFadeProp({
                    fade:'fade-in',
                    fade2:'fade-out'
                })
                }
                
            },3000);
            return () => clearInterval(timeout)
            {
                
            }
        }
        },[])

    return(
        <>
        <body>
        <div class="top-0 container" className={fadeProp.fade2}>
        <Navbar />
        <Hero/>
        <Footer/>
        
        </div>
        <div class="welcometext bigtext1">
        <p className={fadeProp.fade} >Welcome to my Website!</p>   
        
        </div>
        </body>
        
        </>
    )
}

Fader.defaultProps = {
text: 'Welcome to Flia world!'
}
Fader.propTypes = {
    text: PropTypes.string,
}

export default Fader