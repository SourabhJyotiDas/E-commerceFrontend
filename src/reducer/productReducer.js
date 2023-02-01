const ProductReducer = (state, action) => {

    switch (action.type) {
        
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            }

        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            }

        case "MY_API_DATA":
            const featureData = action.payload.filter((element) => {
                 return element.featured === true
            })
            // console.log(action.payload);
            return {
                ...state,
                products: action.payload,
                featuresProducts: featureData,
                isLoading: false,
            }

        case "SET_SINGLE_LOADING":
            return {
                ...state,
                isLoading: true
            }

        case "MY_SINGLE_DATA":
            return {
                ...state,
                singleProduct: action.payload,
                isLoading: false,
            }

        case "SINGLE_API_ERROR":
            return {
                ...state,
                isSingleLoading: false,
                isError: true
            }

        default:
            return state;
    }
}

export default ProductReducer;