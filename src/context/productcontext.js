import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import ProductReducer from "../reducer/productReducer"

const AppContext = createContext();

const AppProvider = ({ children }) => {

  const API = "https://api.pujakaitem.com/api/products";

  const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featuresProducts: [],
    isSingleLoading: false,
    singleProduct: {},
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState)

  const getFeatureProducts = async () => {
    try {
      dispatch({
        type: "SET_LOADING"
      })

      const { data } = await axios.get(API);
      console.log("Our data-->", data);

      dispatch({
        type: "MY_API_DATA",
        payload: data
      })

      dispatch({
        type: "API_ERROR"
      })

    } catch (error) {
      dispatch({
        type: "API_ERROR"
      })
    }
  }

  const getSingleProduct = async (id) => {
    const { data } = await axios.get(API + id);
    // console.log(data);
    dispatch({
      type: "SET_SINGLE_LOADING"
    })
    dispatch({
      type: "MY_SINGLE_DATA",
      payload: data
    })
    dispatch({
      type: "SINGLE_API_ERROR"
    })
  }

  useEffect(() => {
    getFeatureProducts()
  }, [])

  return <AppContext.Provider value={{ ...state, getSingleProduct }}>
    {children}
  </AppContext.Provider>
}

export { AppProvider, AppContext };