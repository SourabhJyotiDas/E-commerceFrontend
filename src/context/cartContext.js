import { createContext, useEffect, useReducer } from "react";
import CartReducer from "../reducer/cartReducer";
const cartContext = createContext()



const getLocalCartData = () => {
    let localCartData = localStorage.getItem("CartItem");
    // if (localCartData === []) {
    //     return []
    // } else {
    //     return JSON.parse(localCartData)
    // }
    const parsedData = JSON.parse(localCartData)
    if(!Array.isArray(parsedData)) {
        return [""]
    }
    return parsedData
}

const initialState = {
    cart: getLocalCartData(),
    total_item: "",
    total_price: "",
    shipping_fee: 10000,
}


const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState)

    const addTocart = (id, color, amount, singleProduct) => {
        dispatch({
            type: "ADD_TO_CART",
            payload: { id, color, amount, singleProduct }
        })
    }

    const removeItem = (id) => {
        // console.log(id);
        dispatch({
            type: "REMOVE_ITEM",
            payload: id
        })
    }



    // Add/remove the data in local storage 

    const clearCart = () => {
        dispatch({
            type: "CLEAR_CART"
        })
    }

    //   Cart increment/Decrement
    const handleIncrement = (id) => {
        dispatch({
            type: "SET_INCREASE",
            payload: id
        })
    }
    const handleDecrement = (id) => {
        // console.log(id);
        dispatch({
            type: "SET_DECREASE",
            payload: id
        })
    }

    const cartVAlueUpadte = () => {
        dispatch({
            type: "CART_TOTAL_ITEM",
        })
    }

    const totalPrice = ()=>{
        dispatch({
            type: "CART_TOTAL_PRICE",
        })
    }

    useEffect(() => {
        cartVAlueUpadte()
        totalPrice()
        localStorage.setItem("CartItem", JSON.stringify(state.cart))
    }, [state.cart])




    return <cartContext.Provider value={{ ...state, addTocart, removeItem, clearCart, handleIncrement, handleDecrement }}>
        {children}
    </cartContext.Provider>
}




export { cartContext, CartProvider }