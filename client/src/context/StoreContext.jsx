import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "https://fooddelmern.onrender.com/";
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if(token){
      await axios.post(url+"/api/cart/add", {itemId}, {headers: {token}})
    }
  };
  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(token){
      await axios.post(url+"/api/cart/remove", {itemId}, {headers: {token}})
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(url+"/api/food/list");
    setFoodList(response.data.data)
  };

  /**
   * This function loads the cart data from the server and updates the cartItems state variable.
   * It takes a token as a parameter which is used to authenticate the request to the server.
   * The function makes a POST request to the server at the '/api/cart/get' endpoint with an empty
   * body and the token as the authorization header. The response from the server is expected to
   * contain a cartData property which contains the cart items. This function then updates the
   * cartItems state variable with the cartData from the response.
   *
   * @param {string} token - The authentication token for the request.
   * @return {Promise<void>} A promise that resolves once the cart data has been loaded and the state variable has been updated.
   */
  const loadCartData = async (token) => {
    // Make a POST request to the server to get the user's cart data
    const response = await axios.post(url+"/api/cart/get", {}, {
      // The headers property is an object that contains the authorization header
      headers: {
        // The authorization header is set to the token parameter
        token
      }
    });
    // The cartData property is extracted from the response and used to update the state variable
    setCartItems(response.data.cartData); 
  }

  useEffect(()=>{
    /**
     * This function is responsible for loading the initial data for the app.
     * It first calls the fetchFoodList function to get the list of available food items
     * from the server. Then, it checks if there is a token stored in the localStorage.
     * If there is a token, it sets the token in the state using the setToken function.
     * After that, it calls the loadCartData function to get the user's cart data from
     * the server and update the cartItems state variable.
     *
     * @return {Promise<void>} A promise that resolves once the initial data has been loaded.
     */
    async function loadData(){
      // Fetch the list of available food items from the server
      await fetchFoodList();
      
      // Check if there is a token stored in the localStorage
      if (localStorage.getItem("token")){
        // If there is a token, set it in the state using the setToken function
        setToken(localStorage.getItem("token"));
        
        // Call the loadCartData function to get the user's cart data from the server
        // and update the cartItems state variable
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, [])

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url, 
    token, 
    setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
