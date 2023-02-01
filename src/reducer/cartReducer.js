const CartReducer = (state, action) => {

    switch (action.type) {
        case "ADD_TO_CART":
            let { id, color, amount, singleProduct } = action.payload

            // tackle the existing product 
            let existingProduct = state.cart.find((element) => {
                return element.id === id + color
            })
            // console.log(existingProduct);

            if (existingProduct) {
                let updatedProduct = state.cart.map((element) => {
                    if (element.id === id + color) {
                        let newAmonut = element.amount + amount

                        if (newAmonut >= element.max) {
                            // console.log(element.max);
                            newAmonut = element.max
                        }
                        return {
                            ...element,
                            amount: newAmonut
                        }
                    } else {
                        return element
                    }
                })
                return {
                    ...state,
                    cart: updatedProduct
                }
            } else {
                let cartPRoduct = {
                    id: id + color,
                    name: singleProduct.name,
                    color: color,
                    amount: amount,
                    image: singleProduct.image[0].url,
                    price: singleProduct.price,
                    max: singleProduct.stock
                }
                return {
                    ...state,
                    cart: [...state.cart, cartPRoduct]
                }
            }

        case "REMOVE_ITEM":
            let updatedCart = state.cart.filter((element) => {
                return element.id !== action.payload
            })

            return {
                ...state,
                cart: updatedCart
            }

        case "CLEAR_CART":
            return {
                ...state,
                cart: [],
            }

        //  CArt increment / Decrement
        case "SET_DECREASE":
            let updatedProduct = state.cart.map((element) => {
                if (element.id === action.payload) {
                    let decrAmount = element.amount - 1

                    if (decrAmount <= 1) {
                        decrAmount = "1"
                    }
                    return {
                        ...element,
                        amount: Number(decrAmount)
                    }
                } else {
                    return element
                }
            })
            return {
                ...state, cart: updatedProduct
            }

        case "SET_INCREASE":
            let updatedProduct2 = state.cart.map((element) => {
                if (element.id === action.payload) {
                    // console.log(element.amount);
                    let incrementProduct = element.amount + 1

                    if (incrementProduct >= element.max.toString()) {
                        incrementProduct = element.max.toString()
                        // console.log(incrementProduct);
                    }
                    return {
                        ...element,
                        amount: Number(incrementProduct)
                    }
                } else {
                    return element
                }
            })
            return {
                ...state, cart: updatedProduct2
            }
        case "CART_TOTAL_ITEM":
            let updatedItemValue = state.cart.reduce((initialvalue, element) => {
                let { amount } = element
                initialvalue = initialvalue + amount;
                return initialvalue
            }, 0)
            return {
                ...state,
                total_item: updatedItemValue
            }

        case "CART_TOTAL_PRICE":
            let totalPrice = state.cart.reduce((initialvalue, element) => {
                const { price, amount } = element;
                initialvalue = initialvalue+ price * amount
                return initialvalue
            }, 0)
            return {
                ...state,
                total_price: totalPrice
            }

        default:
            return state
    }
}

export default CartReducer