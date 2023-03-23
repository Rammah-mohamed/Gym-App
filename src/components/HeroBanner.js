import React from 'react'
import { Stack, Box, Typography, Button } from '@mui/material'

import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: {lg: '212px', xs: '70px'},
      ml: {sm: '50px'}
    }}
    position="relative"
    p='20px'
    >
      <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
        Fitness Club
      </Typography>
      <Typography fontWeight={700}
      sx={{fontSize: {lg: '44px', xs: '40px'}}}
      mb='23px'
      >
        Sweat, Smile <br/> and Repeat
      </Typography>
      <Typography fontSize='22px' lineHeight='35px'  mb={4}>
        Check Out The Most Effective Exersices
      </Typography>
      <Button variant='contained' color='error' href='#exersice'
      sx={{backgroundColor: '#FF2625', padding: '15px'}}>
        Explore Exersice
      </Button>
      <Typography 
      fontWeight={600}
      color='#FF2625'
      sx={{
        opacity: 0.1,
        display: {lg: 'block', sx: 'none'}
      }}
      fontSize="200px"
      >
        Exersice
      </Typography>
      <img src={HeroBannerImage} alt='benner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner