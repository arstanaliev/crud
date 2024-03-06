import  TextField  from '@mui/material/TextField'
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useProductContext } from '../context/ProductContext';
import { useParams } from 'react-router-dom';



const Edit = () => {
    const {getOneProduct,oneProduct ,editProduct} = useProductContext()
    const [values,setValues] = useState({
        image:'',
        name:'',
        price:''
    })

    const {id} = useParams()

    function handleSaveChange () {
        editProduct(values,id)
    }
    useEffect(() =>  {
        getOneProduct(id)
    },[])

    useEffect(() => {
        if(oneProduct) {
           setValues({
            ...values,
            image:oneProduct.image,
            name:oneProduct.name,
            price:oneProduct.price
           }) 
        }
    },[oneProduct])

    console.log(oneProduct);
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
             value={values.image}
             onChange={(e) => setValues({...values,image:e.target.value})}
             />
             

            <TextField sx={{
                maxWidth:"370px",
                width:'100%'
            }} id="outlined-basic" 
            label="Product name"
             variant="outlined"
             name='name'
             value={values.name}
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
             value={values.price}
             onChange={(e) => setValues({...values,price:e.target.value})}
             />
             


            <Button onClick={() => handleSaveChange()}  variant="contained">Create</Button>
        </Box>
        
    )
}
export default Edit