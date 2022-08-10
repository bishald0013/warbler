import { useContext, useReducer } from "react";
import { createContext } from "react";
import TeaReducer from "./Reducer";
import productList from "../Components/Pages/ProductsList"



const Tea = createContext()

const Context = ({children}) => {


    const [state, dispatch] = useReducer(TeaReducer, {
        productList: productList,
        cart: []
})


    return (
        <Tea.Provider value = {{state, dispatch}}>
            {children}
        </Tea.Provider>
    )

}

export default Context

export const TeaState = () => {
    return useContext(Tea)
}