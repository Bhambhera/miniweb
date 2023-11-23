import { AppBar, Autocomplete, Badge, Box, Button, Divider,  Stack, TextField, Toolbar, Typography } from '@mui/material'
import Amazon from '../Images/icon1.png'
import React, { memo, useEffect, useState } from 'react'
import { Clear, ShoppingCartCheckoutSharp } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Navbar({onCategoryChange}) {
    const navigate = useNavigate()
    const [cartCount, setCartCount] = useState(0)
    const products = useSelector(state => state.product)
    const [categoryOptions, setCategoryOptions] = useState([])
   

    useEffect(() => {
        let count = 0
        const uniqueCategories = new Set()
        products.forEach(item => {
                if(item.cart === true ) {
                    count++
                }
                uniqueCategories.add(item.category)
            }
        )
        setCartCount(count)
        setCategoryOptions(Array.from(uniqueCategories))
    },[products])


  return (
    
    <Box sx={{marginBottom : '64px'}}>
       
        <AppBar position='fixed' sx={{backgroundColor : '#000000'}}>
            <Toolbar>
                <Typography sx={{ cursor: 'pointer' }}>
                    <img
                        onClick={() => navigate('/')} 
                        src={Amazon}
                        width='100px'
                        alt='icon'
                    />
                </Typography>
                <Divider sx={{flexGrow : 1}}/>
                <Stack direction='row' spacing={2}>
                    <Box sx={{ position: 'relative', top: '5px' }}>
                        <Autocomplete 
                            sx={{top : '6px'}}
                            options={categoryOptions} 
                            renderInput={(params) => 
                                <TextField 
                                    {...params}  
                                    inputProps={{ ...params.inputProps, sx : {color : '#FFFFFF'} }}
                                    InputLabelProps={{ sx: { color: '#FFFFFF' } }}
                                    sx={{ width: '6.5rem' }}  
                                    label='Search'
                                    
                                />
                            }
                            onChange={(e, newValue) => {
                                onCategoryChange(newValue);}
                            } 
                            freeSolo
                            clearIcon = {<Clear sx={{color : '#FFF'}}/>}
                        />
                    </Box>
                    <Badge badgeContent={cartCount} color='primary' sx={{  top: '5px' }}>
                        <Button 
                            color='primary' 
                            endIcon={<ShoppingCartCheckoutSharp />}
                            onClick={() => navigate('/cart')}
                        >
                            Cart
                        </Button>
                    </Badge>
                    
                </Stack>
            </Toolbar>
        </AppBar>
       
    </Box>
  )
}

export default memo(Navbar)