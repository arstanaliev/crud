import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'

const productContext = createContext();
export const useProductContext = () => useContext(productContext);



const ProductContext = ({children}) => {
    const API = "http://localhost:3000/products";
    const [product,setProduct] = useState([])
    const [oneProduct,setOneproduct] = useState({})
    const addProduct = async (newProduct) => {
        await axios.post(API,newProduct)
    }
    const getProduct = async () => {
        const response = await axios(API)
        const {data} =  response
        setProduct(data)
    }

    const removeProduct = async (id) => {
        await axios.delete(`${API}/${id}`)
        getProduct()
    }
    
    const getOneProduct = async (id) => {
        const {data} = await axios(`${API}/${id}`)
        setOneproduct(data)
    }

    const editProduct = async (editedProduct,id) => {
        await axios.patch(`${API}/${id}`,editedProduct)
    }



    const values = {
        addProduct,
        getProduct,
        product,
        removeProduct,
        getOneProduct,
        oneProduct,
        editProduct
    };
    return <productContext.Provider value={values}>{children}</productContext.Provider>
    
};
export default ProductContext