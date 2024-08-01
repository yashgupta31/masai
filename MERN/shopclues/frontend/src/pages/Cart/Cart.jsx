import { Box, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { colors } from '../../colors/colors'
import EachItem from './EachItem'

const Cart = () => {
  return (
    <Box bg={colors.background} minH={'100vh'} pt={'11rem'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Box bg={'white'} w={'88%'} p={'1rem'} >
            <Text fontSize={'1.6rem'} fontWeight={600} p={'1rem'} borderBottom={'1px solid gray'}>My Cart ( 2 Items )</Text>
            <Text m={'1.3rem 0rem'}>Congrats! You are eligible for an Extra 10 % Off on Prepaid orders with a minimum order value of Rs 149 and a Maximum discount of Rs 1000. Use coupon code MYSHOPCLUES. Limit one coupon at a time.</Text>

            <EachItem />
            <EachItem />
            <EachItem />

            <Box bg={'lightblue'}>
                
            </Box>
        </Box>

    </Box>
  )
}

export default Cart