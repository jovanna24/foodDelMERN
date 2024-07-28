import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import PlaceOrder from './components/PlaceOrder/PlaceOrder.jsx'
import Cart from './components/Cart/Cart.jsx'
import Footer from './components/Footer/Footer.jsx'
import LoginPopup from './components/LoginPopup/LoginPopup.jsx'
import { useState } from 'react'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <div>
      {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<> </>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer />
    </div>
  )
}

export default App
