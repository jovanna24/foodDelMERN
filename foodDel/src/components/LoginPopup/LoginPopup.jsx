import './LoginPopup.css'
import { assets } from '../../assets/images/assets'

import { useState } from 'react'

const LoginPopup = ({setShowLogin}) => {

    const [currentState, setCurrentState] = useState('Login')

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="cross" />
        </div>
        <div className="login-popup-inputs">
            {currentState==='Login'?<></>:<input type="text" placeholder='Your Name' required />}
            <input type="email" placeholder='Email' required />
            <input type="password" placeholder='Password' required />
        </div>
        <button>{currentState==='Sign Up'?'Create account':'Login'}</button>
        <div className="login-popup-condition">
          <input type='checkbox' required />
          <p>I agree to the <span>Terms & Conditions</span> and <span>Privacy Policy</span></p>
        </div>
        {currentState==='Login'
        ?<p>Create a new account? <span onClick={()=>setCurrentState('Sign Up')}>Click Here!</span></p>
        :<p>Already have an account? <span onClick={()=>setCurrentState('Login')}>Login In</span></p>}
      </form>
    </div>
  )
}

export default LoginPopup
