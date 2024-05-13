import { Box, Button, Divider, Heading, IconButton, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { HiMiniPlus, HiMiniMinus } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import Checkout from './Checkout';
import Payment from './Payment';

const Bag = () => {

    let bagArr= JSON.parse(localStorage.getItem('asos-bag'));
    console.log(bagArr)

    
  return (
    <Box pt={'2rem'} bg={'white'} display={'flex'} justifyContent={'center'} >
        <Box w={'40rem'} mr={'1rem'}>
        {
            bagArr.map((elem, i)=>(
                <Box  boxShadow='md' rounded='md' bg={'white'} display={'flex'} key={i} mb={'1rem'} position={'relative'} h={'10rem'} p={'1rem'}>
            <Box  w={'8rem'} h={'100%'} overflow={'hidden'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Image src={elem.img}/>
            </Box>

            <Box display={'flex'} flexDirection={'column'} ml={'1rem'} justifyContent={'space-evenly'}>
                <Heading as='h1' size={'md'}>${elem.price}</Heading>
                <Text>{elem.para}</Text>
                <Text>SIZE:</Text>
                <Box display={'flex'} alignItems={'center'} justifyContent={'space-evenly'}  w={'7rem'}>
                <IconButton size={'sm'} icon={<HiMiniMinus />} />
                <Text fontSize={'1.4rem'}>1</Text>
                <IconButton size={'sm'} icon={<HiMiniPlus />} />
                </Box>
                
            </Box>
                <RxCross2 style={{fontSize: '1.7rem', position: 'absolute', right: '2rem', top: '2rem', cursor: 'pointer'}} />

        </Box>
            ))
        }
        </Box>
        {/* ----------------Checkout------------------------ */}
        <Checkout />

    </Box>
  )
}

export default Bag