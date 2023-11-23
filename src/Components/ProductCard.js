import { Alert, Box, Button, Card, CardContent, CardMedia, Snackbar, Typography } from '@mui/material'
import React, { forwardRef, memo, useState  } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../Redux/Index'

function ProductCard({id, title, price, imageUrl, action, cart}) {
    //  cart remove snackber,  bill in cart, categories sidebar 
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const SnackbarAlert = forwardRef(
        function SnackbarAlert(props, ref) {
            return <Alert elevation={6} ref={ref} {...props} />
        }
    )
    const handleClose = (e, reason) => {
        if(reason === 'clickAway') {
            return
        }
        setOpen(false)
    }

    const handleClick = () => {
        if(action === 'add') {
            dispatch(addToCart(id))
        }
        else if (action === 'remove') {
            dispatch(removeFromCart(id))
        }
        setOpen(true)
    }
    return (
    
        <Box sx={{height:"100%"}}>
            <Card sx={{height:"100%",display:"flex",justifyContent:"space-between",flexDirection:"column"}}>
                <CardMedia
                height="200px"
                sx={{objectFit:"contain"}}
                    component='img' 
                    image={imageUrl}
                    alt='image here' 
                />
                <CardContent>
                    <Typography variant='body2' component='div' gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant='h4'component='div' color='text.secondary' sx={{fontWeight : 'bold'}}>
                        {price}/-
                    </Typography>
                </CardContent>
                <Button 
                    variant='contained' 
                    fullWidth 
                    onClick={handleClick}
                    disabled = {cart} 
                    sx={{
                        '&:hover' : {
                            backgroundColor : action === 'add' ? 'green' : 'red'
                        }
                    }}>
                    {action === 'add' ? (cart ? 'Added!' : 'Add To Cart') : 'Remove From Cart'}
                </Button>
                <Snackbar 
                    open={open} 
                    autoHideDuration={4000} 
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical : 'bottom',
                        horizontal : 'right'
                    }}
                >
                    <SnackbarAlert onClose = {handleClose} severity = 'success'>
                        {action === 'add' ? 'Added To Cart' :  'Removed From Cart'}
                    </SnackbarAlert>
                </Snackbar>
            </Card>
        </Box>
    
  )
}

export default memo(ProductCard)