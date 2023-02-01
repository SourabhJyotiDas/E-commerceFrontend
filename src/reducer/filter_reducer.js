const filterReducer = (state, action) => {
    switch (action.type) {
        case "SET_ALLPRODUCTS_LOADING":
            return {
                ...state,
                isLoading: true
            }
            
        case "LOAD_FILTER_PRODUCTS":

            let priceArray = action.payload.map((element) => {
                return element.price
            })

            let maxPrice = Math.max(...priceArray)
            // console.log(maxPrice)
            // console.log(Math.max.apply(null, priceArray));
            // console.log(Math.max(...priceArray));
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: {
                    ...state.filters,
                    price: maxPrice,
                    maxPrice: maxPrice,
                },
                isLoading:false
            }


        case "SET_GRIDVIEW":
            return {
                ...state,
                grid_view: true,

            }

        case "SET_LISTVIEW":
            return {
                ...state,
                grid_view: false,

            }

        case "GET_SORT_VALUE":
            return {
                ...state,
                sortingValue: action.payload,

            }

        case "SORTING_PRODUCTS":

            const { filter_products, sortingValue } = state
            let tempSortData = [...filter_products]
            console.log(tempSortData);

            const sortingProduct = (a, b) => {
                if (sortingValue === "lowest") {
                    return a.price - b.price
                }
                if (sortingValue === "highest") {
                    return b.price - a.price
                }
                if (sortingValue === "a-z") {
                    console.log("a-z");
                    return a.name.localeCompare(b.name);
                }
                if (sortingValue === "z-a") {
                    return b.name.localeCompare(a.name);
                }
            }
            let newSortData = tempSortData.sort(sortingProduct)
            return {
                ...state,
                filter_products: newSortData,
            }

        case "UPDATE_FILTER_VALUE":
            const { name, myValue } = action.payload
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: myValue
                },
            }

        case "FILTER_PRODUCTS":
            

            let { all_products } = state;
            let tempFilterProduct = [...all_products];

            const { text, category, company, color, price } = state.filters;

            if (text) {
                tempFilterProduct = tempFilterProduct.filter((element) => {
                    return element.name.toLowerCase().includes(text)
                })
            }

            if (category !== "All") {
                tempFilterProduct = tempFilterProduct.filter((element) => {
                    return element.category === category
                })
            }
            
            if (company !== "All") {
                tempFilterProduct = tempFilterProduct.filter((element) => {
                    return element.company === company
                })
            }

            if (color !== "All") {
                tempFilterProduct = tempFilterProduct.filter((element) => {
                    return element.colors.includes(color)
                })
            }
            if (price) {
                tempFilterProduct = tempFilterProduct.filter((element) => {
                    return element.price <= price
                })
            }

            return {
                ...state,
                filter_products: tempFilterProduct,
                isLoading:false
            }

        case "CLEAR_FILTERS":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: "",
                    category: "All",
                    company: "All",
                    color: "All",
                    maxPrice: state.filters.maxPrice,
                    price: state.filters.maxPrice,
                    minPrice: 0
                }
            }

        default:
            return state;
    }
}

export default filterReducer 