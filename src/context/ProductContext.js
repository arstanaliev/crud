import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'

const productContext = createContext();
export const useProductContext = () => useContext(productContext);



const ProductContext = ({children}) => {
    const API = "http://localhost:3000/products";

    const [products,setProduct] = useState([])

    async function addProduct(product) {
        await axios.post(API,product);
        getProduct()
    }

    async function getProduct(){
        let {data} = await axios(API)
        setProduct(data)
    }

    async function delProduct(id) {
        await axios.delete(`${API}/${id}`);
        getProduct()
    }

    const values = {
        addProduct,
        getProduct,
        products,
        delProduct
    };
    return <productContext.Provider value={values}>{children}</productContext.Provider>
    
};
export default ProductContext