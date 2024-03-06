import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProductList from '../components/ProductList'
import Order from '../components/Order'
import Admin from '../components/Admin'

const MainRoutes=()=> {
    const PUBLIC = [
        {path: '/' , element: <ProductList/> , key:1},
        {path: '/order' , element: <Order/> , key:2},
    ]
    const PRIVATE = [
        {path: '/admin' , element: <Admin/> , key:3}
    ]
    return(
        <Routes>
            {
                PUBLIC.map((el) => (  
                    <Route path={el.path} element={el.element} key={el.key} />
                ))
            }
            {
                PRIVATE.map((el) => (  
                    <Route path={el.path} element={el.element} key={el.key} />
                ))
            }
        </Routes>
    )
}
export default MainRoutes