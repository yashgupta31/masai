import { Box, Button, Center, Divider, FormLabel, Heading, IconButton, Image, Input, Text, useMediaQuery } from '@chakra-ui/react'
import React, { useState } from 'react'
import { HiMiniMinus, HiMiniPlus } from 'react-icons/hi2'
import { RxCross2 } from 'react-icons/rx'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
    const [isMd]= useMediaQuery("(min-width: 660px)")
    let [isOrdered, setIsOrdered]= useState(false)
    let navigate= useNavigate()

    
    // const [isMd] = useMediaQuery("(max-width: 730px)")
    let bagArr= JSON.parse(localStorage.getItem('asos-bag'))|| [];

    let Total=0;
    if(bagArr.length>0){
        for(let i=0; i< bagArr.length; i++){
            Total+= Number(bagArr[i].price)* Number(bagArr[i].quantity) ;
        }
    }

    let handleOrder=(e)=>{
        e.preventDefault();
        setIsOrdered(true);

        setTimeout(() => {
            setIsOrdered(false)
            navigate('/')
        }, 2000);

        // setTimeout(() => {
        //     navigate('/')
        // }, 2050);

        localStorage.setItem('asos-bag', JSON.stringify([]));
    }
    return (

        <Box bg={'white'} pt={isMd?'2rem': '0.5rem'} display={'flex'} flexDirection={isMd? 'row': 'column'} alignItems={'center'}  justifyContent={'center'} h={'82vh'} mb={'5rem'}>

            {/* -----------------------------Left-------------------------------------- */}
            <Box bg={isMd? 'white': '#38A169'} display={'flex'} flexDirection={'column'} w={isMd? '25rem': '100%'} p={'1.5rem'} >
                <Heading as='h1' size={'md'} mb={'1rem'}>Total Items: {bagArr.length}</Heading>
                <Divider mb={'1rem'} />
{/* ------------scroll---------------- */}
{
    isMd&& <>
    <Box  overflowY={'scroll'} h={'22rem'}>
    {
        bagArr.map((elem, i)=>(
            <Box key={i}  display={'flex'} shadow={'md'} rounded={'md'} mb={'1rem'} position={'relative'} h={'10rem'} p={'1rem'} >
<Box w={'8rem'} h={'100%'} overflow={'hidden'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
<Image src={elem.img}/>
</Box>

<Box display={'flex'} flexDirection={'column'}  ml={'1rem'} justifyContent={'space-evenly'} w={'17rem'} >
<Heading as='h1' size={'md'}>${elem.price}</Heading>
<Text display='-webkit-box'
overflow='hidden'
whiteSpace='normal'
textOverflow='ellipsis'
WebkitBoxOrient='vertical'
WebkitLineClamp={2}>{elem.para}</Text>
<Text>SIZE:</Text>
<Text>QTY:</Text>   
</Box>
</Box>
        ))
    }        

</Box>
<Divider mb={'1rem'} />
</>

}
               

{/* ---------------------------------------- */}
        
        {
            isMd &&
            <Box display={'flex'} justifyContent={'space-between'} mb={'0.8rem'}>
            <Text>Subtotal</Text>
            <Text>${Total}</Text>
        </Box>
        }
        

        <Box display={'flex'} justifyContent={'space-between'}>
            <Heading as='h2' size={'md'}>TOTAL TO PAY</Heading>
            <Heading as='h2' size={'md'}>${Total}</Heading>
        </Box>




            </Box>
            {/* -------------------------Right----------------------------------- */}
            <Box bg={'white'} w={isMd? '33rem': '90%'} display={'flex'} justifyContent={'center'}>
            <form onSubmit={handleOrder} style={{backgroundColor:'white', width: '85%', height: '34rem', padding: '1rem', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
                
                     
                    
                    <Heading as='h1' size={'md'}>DELIVERY ADDRESS</Heading>
                <FormLabel>FIRST NAME:</FormLabel> 
                <Input placeholder='gmail' mb={'1rem'} />

                <FormLabel>LAST NAME:</FormLabel>
                <Input placeholder='name' mb={'1rem'} />

                <FormLabel>MOBILE:</FormLabel>
                <Input placeholder='last name' mb={'1rem'} />

                <FormLabel>ADDRESS:</FormLabel>
                <Input placeholder='password' mb={'1rem'} />

                <FormLabel>DATE OF BIRTH:</FormLabel>
                <Input placeholder='Select Date and Time' size='md' type='datetime-local' mb={'1rem'} />

                <Button colorScheme='green' w={'100%'} type='submit'>PLACE ORDER</Button>
                   
                

            </form>
            </Box>


            {/* --------------------------Order Placed Successful popup-------------------------------- */}
            <Box bg={'#38A169'} position={'fixed'} opacity={isOrdered? '100%':'0%'} top={'0rem'} h={isOrdered?'100vh': '0%'} zIndex={999} transition={'0.3s'} w={'100%'}  display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Heading >Order Placed Successful!</Heading>
            </Box>
            
        </Box>
    )
}

export default Payment