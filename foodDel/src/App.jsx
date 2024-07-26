import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import PlaceOrder from './components/PlaceOrder/PlaceOrder.jsx'
import Cart from './components/Cart/Cart.jsx'
import Footer from './components/Footer/Footer.jsx'

const App = () => {
  return (
    <div>
    <div className='app'>
      <Navbar />
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
