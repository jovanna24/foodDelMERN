import './LoginPopup.css'
import { assets } from '../../assets/images/assets'

import { useState } from 'react'

const loginPopup = () => {

    const [currentState, setCurrentState] = useState('Sign Up')

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="cross" />
        </div>
      </form>
    </div>
  )
}

export default loginPopup
