import React, { useEffect } from 'react'
import { useProductContext } from '../context/ProductContext'
import Box from '@mui/material/Box';
import ProductCard from './ProductCard';


const ProductList = () => {

    const {products,getProduct} = useProductContext()

    useEffect(() =>{
        getProduct()
    },[])
    console.log(products)
    
    return <Box>
        {
            products.map((el,idx) => (
                <ProductCard el={el} key={idx}/>
            ))
        }
    </Box>
}
export default ProductList