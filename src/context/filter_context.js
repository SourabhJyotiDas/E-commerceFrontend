import { createContext, useEffect, useReducer, useContext } from "react";
import reducer from "../reducer/filter_reducer"
import { AppContext } from './productcontext';

const FilterContext = createContext();



const FilterProvider = ({ children }) => {

    const { products } = useContext(AppContext)

    const initialState = {
        isLoading: false,
        filter_products: [],
        all_products: [],
        grid_view: false,
        sortingValue: "lowest",
        filters: {
            text: "",
            category: "All",
            company: "All",
            color: "All",
            price: 0,
            maxPrice: 0,
            minPrice: 0
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    //  All products page -->
    const getFiteredProduct = () => {
        return dispatch({
            type: "LOAD_FILTER_PRODUCTS",
            payload: products
        })
    }

    const loading = () => {
        dispatch({
            type: "SET_ALLPRODUCTS_LOADING"
        })
    }

    // To set the grid OR list view
    const setGridView = () => {
        return dispatch({
            type: "SET_GRIDVIEW"
        })
    }
    const setListView = () => {
        return dispatch({
            type: "SET_LISTVIEW"
        })
    }

    //  Select basis of price or name
    const sorting = (e) => {
        let userValue = e.target.value
        dispatch({
            type: "GET_SORT_VALUE",
            payload: userValue
        })
    }

    // use useEffect basis of price or name 
    const sortingUpdate = ()=>{
        dispatch({
            type: "SORTING_PRODUCTS",
        })
    }

    // update the filter values
    const updateFilterValue = (e) => {
        let name = e.target.name;
        let myValue = e.target.value;
        // console.log(name);
         dispatch({
            type: "UPDATE_FILTER_VALUE",
            payload: { name, myValue }
        })
    }
    
    const clearFilter = () => {
        dispatch({
            type: "CLEAR_FILTERS"
        })
    }

    useEffect(() => {
        sortingUpdate()
    }, [products, state.sortingValue])


    useEffect(() => {
        dispatch({
            type: "FILTER_PRODUCTS"
        })
    }, [products, state.filters])

    useEffect(() => {
        getFiteredProduct()
        loading()
    }, [products])



  



    return <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue, clearFilter }}>
        {children}
    </FilterContext.Provider>

};

export { FilterProvider, FilterContext };
