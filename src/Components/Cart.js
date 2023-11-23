import React, { useState } from 'react'
import Navbar from './Navbar'
import { Box, Button, Divider, Grid, Modal, Typography} from '@mui/material'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import { useNavigate } from 'react-router-dom'
import { Payment, ShoppingBag, ShoppingCart } from '@mui/icons-material'

function Cart() {
    const navigate = useNavigate()
    const products = useSelector(state => state.product)
    const [category, setCategory] = useState(null)
    const [open,setOpen] = useState(null)
    const cartItems = products?.filter(item => item.cart)
    const categoryItems = cartItems?.filter(item => item.category === category)
    const handleChangeCategory = (selectCategory) => {
        setCategory(selectCategory)
    }
    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)
    const handleBuy = () => {
        handleOpen()
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        display : 'flex'
      }
    return (
      <Box >
        <Navbar onCategoryChange={handleChangeCategory}/>

        
        <Box p={5} flex='1'>
        {
            cartItems.length > 0 ? (
                        category === null ? (
                            <>
                            <Box>
                                <Button 
                                    variant='contained' 
                                    sx={{ 
                                        backgroundColor : 'yellow', 
                                        right : '0',
                                        '&:hover' : {
                                            backgroundColor : 'yellow'
                                        },
                                        position : 'fixed'
                                    }}
                                    endIcon = {<Payment/>}
                                    onClick={handleBuy}
                                >
                                    Proceed To Buy 
                                </Button>
                            </Box>
                            <Grid container spacing={3}>
                                {
                            cartItems.map(item => (
                                <Grid
                                    item
                                    key={item.id}
                                    xs={6}
                                    md={4}
                                    lg={3}
                                >
                                    <ProductCard 
                                        id={item.id} 
                                        title={item.title} 
                                        price={item.price} 
                                        imageUrl={item.imageUrl} 
                                        action={'remove'}
                                    />
                                </Grid>
                            ))
                            }
                            
                            </Grid>
                            </>
                        ) :
                        (
                            categoryItems.length > 0 ? (
                                <>
                                <Box>
                                <Button 
                                    variant='contained' 
                                    sx={{ 
                                        backgroundColor : 'yellow', 
                                        right : '0',
                                        '&:hover' : {
                                            backgroundColor : 'yellow'
                                        },
                                        position : 'fixed'
                                    }}
                                    endIcon = {<Payment/>}
                                    
                                >
                                    Proceed To Buy 
                                </Button>
                            </Box>
                                <Grid container spacing={3}>
                                    {
                                categoryItems.map(item => (
                                    <Grid
                                        item
                                        key={item.id}
                                        xs={6}
                                        md={4}
                                        lg={3}
                                    >
                                        <ProductCard 
                                            id={item.id} 
                                            title={item.title} 
                                            price={item.price} 
                                            imageUrl={item.imageUrl} 
                                            action={'remove'}
                                        />
                                    </Grid>
                                
                                ))
                                }
                            </Grid>
                            </>
                            
                                
                            ) : 
                            (
                                <Box>
                                    <Typography variant='h5'>
                                        No {category} In Cart
                                    </Typography>
                                    
                                    <Button
                                        color='primary'
                                        onClick={() => setCategory(null)}
                                        endIcon={<ShoppingCart/>}
                                        variant='contained'
                                    >
                                        Explore Cart
                                    </Button>
                                </Box>
                            )
                        )
            ) : (
                <Box>
                    <Typography variant='h5'>
                        No Items in Cart
                    </Typography>
                    
                    <Button
                        color='primary'
                        onClick={() => navigate('/')}
                        endIcon={<ShoppingBag/>}
                        variant='contained'
                    >
                        Let's Shop
                    </Button>
                </Box>
            )
        }
        </Box>
        <Modal
                open = {open}
                onClose={handleClose}
            >
                <Box sx={style} flexDirection = 'row'>
                    <Typography flex= '1'>
                        Are you sure you want to buy
                    </Typography>
                    <Divider/>
                    <Typography flex='2'>
                        Quantity
                    </Typography>
                    <Divider/>
                    <Typography flex='2'>
                        Quantity
                    </Typography><Divider/>
                    <Typography flex='2'>
                        Quantity
                    </Typography><Divider/>
                    <Typography flex='2'>
                        Quantity
                    </Typography>
                </Box>
            </Modal>
        
    </Box>
  )
}

export default Cart