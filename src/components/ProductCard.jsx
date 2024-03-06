import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useProductContext } from '../context/ProductContext';
import { useNavigate } from 'react-router-dom';


const ProductCard = ({el}) => {
  const {removeProduct} = useProductContext()
  const navigate = useNavigate()
    return (
         <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image = {el.image}
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {el.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {el.price}$
      </Typography>
    </CardContent>
    <CardActions>
      <Button onClick={()=> removeProduct(el.id)}  size="small">Delete</Button>
      <Button onClick={() => navigate(`/edit/${el.id}`)} size="small">Edit</Button>
    </CardActions>
  </Card>
    )
}
export default ProductCard