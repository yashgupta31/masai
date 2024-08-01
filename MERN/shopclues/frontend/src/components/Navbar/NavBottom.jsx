import { Box, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react'

import React from 'react'

const NavBottom = () => {
  return (
    <Box>
         <Box bg={'white'} h={'2.2rem'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
<Box h={'100%'} w={'75%'} display={'flex'} alignItems={'center'} justifyContent={'center'} >
<UnorderedList color={'grey'} w={'100%'} listStyleType="none" display={'flex'} justifyContent={'space-evenly'} fontSize={'sm'} >
  <ListItem>Refurbished Mobile</ListItem>
  <ListItem>Express Shipping</ListItem>
  <ListItem>Men's Clothing</ListItem>
  <ListItem>Women's Fashion</ListItem>
  <ListItem>Footwear</ListItem>
  <ListItem>Kitchen & Dinning</ListItem>
  <ListItem>Jaw Dropping Deals</ListItem>
  <ListItem>Audio & Headphones</ListItem>
  <ListItem>Bags & Luggage</ListItem>
  
</UnorderedList>
</Box>
    </Box>
    </Box>
  )
}

export default NavBottom