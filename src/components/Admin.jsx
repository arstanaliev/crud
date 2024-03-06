import  TextField  from '@mui/material/TextField'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useProductContext } from '../context/ProductContext';



const Admin = () => {

    const {addProduct} = useProductContext()

    const [inpValues, setInpValues] = useState({
        image:"",
        name:"",
        prise:""
    })
    console.log(inpValues);

    function handleInputValues(e){
        if(e.target.name === "price"){
            setInpValues({...inpValues, [e.target.name]: Number(e.target.value)})
        }else{
            setInpValues({...inpValues, [e.target.name]: e.target.value})
        }
    }

    function handleCreate() {
        addProduct(inpValues)
        setInpValues({
            image:"",
            name:"",
            prise:""
        })
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
            <TextField onChange={handleInputValues} sx={{
                maxWidth:"370px",
                width:'100%'
            }} id="outlined-basic"
             label="image URL" 
             variant="outlined"
             name='image' 
             value={inpValues.image}
             />
             

            <TextField onChange={handleInputValues} sx={{
                maxWidth:"370px",
                width:'100%'
            }} id="outlined-basic" 
            label="Product name"
             variant="outlined"
             name='name'
             value={inpValues.name} 
             />
             

            <TextField onChange={handleInputValues} sx={{
                maxWidth:"370px",
                width:'100%'
            }} id="outlined-basic" 
            label="Price"
             variant="outlined"
             name='price' 
             type='number'
             value={inpValues.price}
             />
             


            <Button onClick={handleCreate} variant="contained">Create</Button>
        </Box>
        
    )
}
export default Admin