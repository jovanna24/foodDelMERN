import { useState } from 'react'
import ExploreMenu from '../ExporeMenu/ExploreMenu'
import Header from '../Header/Header'
import './Home.css'
import FoodDisplay from '../FoodDisplay/FoodDisplay'

const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home