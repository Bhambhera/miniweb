import React, { memo, useState } from 'react'
import Navbar from './Navbar'
import { Box, Grid } from '@mui/material'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'
function Home() {
    const products = useSelector( state => state.product)
    const [category, setCategory] = useState('')
    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory)
    }
    const homeItems = products.filter(item  => item.category === category)
  return (
    <Box>
        <Navbar  onCategoryChange = {handleCategoryChange}/>
        <Box p={5} >
        <Grid 
            spacing={3}
            container 
        >
            {
                homeItems.length > 0 ? (
                    homeItems?.map ((item) => (
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
                                action={'add'}
                                cart = {item.cart}
                            />     
                        </Grid>
                    ))
                ) : 
                (
                    products?.map(item => (
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
                                action={'add'}
                                cart = {item.cart}
                            />     
                        </Grid>
                    ))
                )
                
            }
        </Grid>
        </Box>
    </Box>
  )
}

export default memo(Home)