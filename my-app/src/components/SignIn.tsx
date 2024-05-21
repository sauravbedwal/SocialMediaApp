import React from 'react'
import "./style.css"
import Button from './Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import {Link} from "react-router-dom";

const SignIn = () => {
  return (
    <div className="container">
        <Link to="/">
        <div className="Button-back">
        <div className="arrow-icon">
          <ArrowBackIcon />
        </div>
        </div>
        </Link>
        <div className='signInHeading'>
            <h1>Hello Again!</h1>
            <p className='signInline'>Sign in to your account</p>
        </div>
        <div>
           <form className='signInForm'>
             <input className='signInInput1' type='email' name='email' placeholder='Email address' value="info@yourmail.com" />
          
            <input className='signInInput2' type='password' name='password' placeholder='Enter your password'/>
            <h5>Forgot your password?</h5>
           </form>
           <Link to="/menu">
           <Button title={"Sign in"} />
           </Link>
           <p className="p-signIn">---------------------- <p className='para-signIn'> Or with </p> ----------------------</p>
         
         <div className='secondary-btn'>
          <button className='white-btn'><GoogleIcon style={{marginRight: "4px"}} />Sign in with Google</button>
          </div>
         <div className='secondary-btn'>
          <button className='white-btn'><TwitterIcon style={{marginRight: "4px"}} />Sign in with Twitter</button>
         </div>
           <p className='p-signUp'>Don't have account? Let's <a>Sign up</a></p>
        </div>
    </div>
  )
}

export default SignIn;

//file:///C:/Users/saurav%20sharma/Downloads/Task%20frontend%20developer.pdf
// https://www.figma.com/design/wHXneI09mGwFGwAfC3NAeC/Social-Media-App?node-id=1-22&t=UhsgamRWsEkYeND2-0