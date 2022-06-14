import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Typography } from '@mui/material';

export default function EmptyBasket() {
  return (
    <div className='empty-basket'>
        <ShoppingCartOutlinedIcon sx={{ fontSize: '18rem', color: '#ff0000', marginBottom: '2rem'}} />
        <Typography variant='h4' component='p' sx={{color: '#1a1a1a', fontWeight: 'bold'}}>{`سبد خرید شما خالی است 😊`}</Typography>
    </div>
  )
}
