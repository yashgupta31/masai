import { Box, Button, Divider, Heading, IconButton, Image, Text, useMediaQuery } from '@chakra-ui/react'
import React, { useState } from 'react'
import { HiMiniPlus, HiMiniMinus } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import Checkout from './Checkout';
import Payment from './Payment';

const Bag = () => {
    const [isLg] = useMediaQuery("(min-width: 1277px)")
  const [isMd] = useMediaQuery("(min-width: 800px) and (max-width: 1276px)")
  const [isSm] = useMediaQuery("(max-width: 720px)")

    let [bagArr, setBagArr]= useState(JSON.parse(localStorage.getItem('asos-bag'))||[])
    // let [updated, setUpdated]= useState()
    let handleDelete=(id)=>{
        let newArr= bagArr.filter((elem)=>{
            return elem.id !== id;
        })
        setBagArr(newArr)
        localStorage.setItem('asos-bag', JSON.stringify(newArr))
    }


  return (
    <Box w={'100%'} pt={'2rem'} bg={'white'} display={'flex'} flexDirection={isLg || isMd? 'row': 'column'} pl={'3rem'} >
        <Box w={isSm? '90%': isMd?'24rem':'40rem'} mr={'1rem'} >
        {
            bagArr.length>0?
            (bagArr.map((elem, i)=>(
                <Box  boxShadow='md' rounded='md' display={'flex'} key={i} mb={'1rem'} position={'relative'} h={isSm? '14rem':'10rem'} p={'1rem'}>
            <Box  w={'8rem'} h={'100%'} overflow={'hidden'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Image src={elem.img}/>
            </Box>

            <Box display={'flex'} flexDirection={'column'} ml={'1rem'} justifyContent={'space-evenly'} >
                <Heading as='h1' size={'md'}>${elem.price}</Heading>
                <Text>{elem.para}</Text>
                <Text>SIZE:</Text>
                <Box display={'flex'} alignItems={'center'} justifyContent={'space-evenly'}  w={'7rem'}>
                <IconButton size={'sm'} icon={<HiMiniMinus />} />
                <Text fontSize={'1.4rem'}>1</Text>
                <IconButton size={'sm'} icon={<HiMiniPlus />} />
                </Box>
                
            </Box>
                <RxCross2 style={{fontSize: '1.7rem', position: 'absolute', right: '1rem', top: '1rem', cursor: 'pointer'}} onClick={()=>handleDelete(elem.id)}/>

        </Box>
            ))): <Image w={'30rem'} src='https://golden4tic.com/front/assets/img/empty-cart.png' />
        }
        </Box>
        {/* ----------------Checkout------------------------ */}
        <Checkout />

    </Box>
  )
}

export default Bag