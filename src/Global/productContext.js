import React, {createContext, useReducer} from "react"
import {ProductReducer} from "./productReducer"
import head1 from "../assets/1.png";
import head2 from "../assets/2.png";
import head3 from "../assets/3.png";
import head4 from "../assets/4.png";


export const productContext = createContext();


const ProductContextProvider = (props) => {

    const [products] = useReducer(ProductReducer, [
        {id: 1, name: 'Rayes Alpha', price: 40, image: head1, productStatus: 'hot'},
        {id: 2, name: 'Rayes Z30', price: 200, image: head2,productStatus: 'new'},
        {id: 3, name: 'Rayes X30', price: 300, image: head3,productStatus: 'new'},
        {id: 4, name: 'Rayes Beta', price: 150, image: head4,productStatus: 'new'},
        {id: 1, name: 'Rayes Alpha', price: 40, image: head1, productStatus: 'hot'},
        {id: 2, name: 'Rayes Z30', price: 200, image: head2,productStatus: 'new'},
        {id: 3, name: 'Rayes X30', price: 300, image: head3,productStatus: 'new'},
        {id: 4, name: 'Rayes Beta', price: 150, image: head4,productStatus: 'new'},
      ])
      
    return(
        <productContext.Provider value={{products}}>
           {props.children}
        </productContext.Provider>
    )

}

export default ProductContextProvider;