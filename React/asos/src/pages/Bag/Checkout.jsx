import React, { useState } from 'react'
import { Box, Button, Divider, Heading, IconButton, Image, Text, useMediaQuery } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';

const Checkout = () => {
    const [isBase] = useMediaQuery("(max-width: 420px)")
    
    let bagArr= JSON.parse(localStorage.getItem('asos-bag'))||[];

    let Total=0;
    if(bagArr.length>0){
        for(let i=0; i< bagArr.length; i++){
            Total+= Number(bagArr[i].price)* Number(bagArr[i].quantity) ;
        }
    }
   
    // console.log(Total)

   

    
  return (
    <Box bg={'white'} w={isBase? '90%':'21rem'} h={'22rem'} p={'1.5rem'} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'}>
            <Heading as='h1' size={'md'}>TOTAL</Heading>
            <Divider />

            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                <Heading as='h2' size={'sm'}>Sub-Total</Heading>
                <Text>${Total}</Text>
            </Box>

            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                <Heading as='h2' size={'sm'}>Delivery</Heading>
                <Text></Text>
            </Box>

            <Divider />
            <NavLink to={'/payment'}><Button colorScheme='green' w={'100%'}>CHECKOUT</Button></NavLink>

            <Heading as='h2' size={'sm'}>WE ACCEPT:</Heading>

        <Image src='https://assets.asosservices.com/asos-finance/images/marketing/single.png' w={'75%'} />
        <Text fontSize={'sm'}>Got a discount code? Add it in the next step.</Text>
        </Box>
  )
}

export default Checkout