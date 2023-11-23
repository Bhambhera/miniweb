import { Box, Divider, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'

function CartSummary() {
    const [open,setOpen] = useState(false)
    const handleClose = () => setOpen(true)
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
    // const handleOpen = () => setOpen(true)
  return (
    <>
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
            </Box>
        </Modal>
    </>
  )
}

export default CartSummary