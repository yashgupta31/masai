import { Box, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { colors } from '../../colors/colors'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const EachItem = () => {
  return (
    <Box w={'100%'} h={'9.5rem'} p={'1rem'} display={'flex'} alignItems={'start'} justifyContent={'space-between'} borderTop={'1px solid lightgrey'}>
            <Box bg={'white'} h={'6.5rem'} w={'6rem'} borderRadius={'2px'} display={'flex'} alignItems={'center'} justifyContent={'center'} border={'1px solid lightgrey'}>
                <Image src='https://images.shopclues.com/images1/thumbnails/116966/320/320/153319199-116966140-1678960917.jpg' h={'90%'} />
            </Box>
            {/* ------- */}
            <Box  w={'37%'} ml={'-4.5rem'}>
                <Text color={'gray'}>Baleshwar Mens Black Regular Fit Casual Shirt (Pack of 1)</Text>
                <Text>Size Men's Upper : S</Text>
            </Box>
            {/* -------- */}
        <Box  h={'3.3rem'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-between'}>
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-evenly'} w={'6rem'}>
                <Box bg={'lightgrey'} w={'1.4rem'} h={'1.4rem'} display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={'50%'}><Icon as={FaMinus} fontSize={'sm'} /></Box>
                <Text fontSize={'1.2rem'}>1</Text>
                <Box bg={'lightgrey'} w={'1.4rem'} h={'1.4rem'} display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={'50%'}><Icon as={FaPlus } fontSize={'sm'}/></Box>
            </Box>
            <Text color={colors.primary} fontSize={'sm'}>Remove</Text>
        </Box>
        {/* ----------------- */}
        <Box display={'flex'} flexDirection={'column'} alignItems={'end'}>
            <Text display={'flex'}>
                Price: <Text fontWeight={700} ml={'0.4rem'}>₹315</Text>
            </Text>
            <Text display={'flex'}>
            Shipping Fee : <Text fontWeight={700} ml={'0.4rem'}>FREE</Text>
            </Text>
        </Box>
        {/* --------------------- */}
        <Box w={'11rem'} display={'flex'} flexDirection={'column'} alignItems={'end'}>
            <Text fontSize={'1.1rem'} fontWeight={700}>₹315</Text>
            <Text fontSize={'xs'} textAlign={'end'} fontWeight={600}>Inclusive of all the applicable taxes</Text>
        </Box>

        </Box>
  )
}

export default EachItem