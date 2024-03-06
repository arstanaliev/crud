import React, { useEffect } from 'react'
import { useProductContext } from '../context/ProductContext'
import Box from '@mui/material/Box';
import ProductCard from './ProductCard';


const ProductList = () => {
    const {getProduct,product} = useProductContext()

    useEffect(() => {
        getProduct()
    },[])
    
    return <Box>
        {
            product.length > 0 ? (product.map((el,idx) => <ProductCard el={el} key={idx}/>)) : (<h1>Loading...</h1>)
        }
               
    </Box>
}
export default ProductList