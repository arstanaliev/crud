import  TextField  from '@mui/material/TextField'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useProductContext } from '../context/ProductContext';



const Admin = () => {
    const {addProduct} = useProductContext()
    const [values,setValues] = useState({
        image:'',
        name:'',
        price:''
    })
    function handleClick () {
        addProduct(values)
    }
    return(
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            minHeight:"80vh",
            justifyContent:"center",
            gap:"20px"

        }}>
            <TextField  sx={{
                maxWidth:"370px",
                width:'100%'
            }} id="outlined-basic"
             label="image URL" 
             variant="outlined"
             name='image' 
             onChange={(e) => setValues({...values,image:e.target.value})}
             />
             

            <TextField sx={{
                maxWidth:"370px",
                width:'100%'
            }} id="outlined-basic" 
            label="Product name"
             variant="outlined"
             name='name'
             onChange={(e) => setValues({...values,name:e.target.value})}
             />
             

            <TextField  sx={{
                maxWidth:"370px",
                width:'100%'
            }} id="outlined-basic" 
            label="Price"
             variant="outlined"
             name='price' 
             type='number'
             onChange={(e) => setValues({...values,price:e.target.value})}
             />
             


            <Button onClick={handleClick}  variant="contained">Create</Button>
        </Box>
        
    )
}
export default Admin