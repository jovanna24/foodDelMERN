import './FoodItem.css'
import { assets } from '../../assets/images/assets'
import { StoreContext } from '../../context/StoreContext'
import { useContext } from 'react'

const FoodItem = ({id, name, price, description, image}) => {

  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)

  return (
    <div className='food-item'>
      <div className="food-item-image-container">
        <img className='food-item-image' src={image} alt={name} />
        {!cartItems[id]
          ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="add" />
          :<div className='food-item-counter'>
            <img onClick = {() =>removeFromCart(id)} src={assets.remove_icon_red} alt="remove"/>
            <p>{cartItems[id]}</p>
            <img onClick = {() =>addToCart(id)} src={assets.add_icon_green} alt="add" />
          </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem