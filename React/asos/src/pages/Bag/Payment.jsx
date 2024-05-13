import { Box, Divider, FormLabel, Heading, IconButton, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { HiMiniMinus, HiMiniPlus } from 'react-icons/hi2'
import { RxCross2 } from 'react-icons/rx'

const Payment = () => {

    return (
        <Box bg={'pink'} pt={'2rem'} display={'flex'} justifyContent={'center'}>
            <Box bg={'yellow'} w={'33rem'} display={'flex'} justifyContent={'center'}>
            <form style={{backgroundColor: 'aqua', width: '85%'}}>
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

            </form>
            </Box>
{/* ----------------------right----------------------------------- */}
            <Box bg={'blue'} display={'flex'} flexDirection={'column'} w={'27rem'} p={'1.5rem'} >
                <Heading as='h1' size={'md'} mb={'1rem'}>2 ITEMS</Heading>
                <Divider mb={'1rem'} />
{/* ------------scroll---------------- */}
                <Box bg={'gray'} overflowY={'scroll'} h={'22rem'}>
                <Box bg={'red'} display={'flex'}  mb={'1rem'} position={'relative'} h={'10rem'} p={'1rem'} >
            <Box bg={'green'} w={'8rem'} h={'100%'} overflow={'hidden'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Image src='https://images.asos-media.com/products/tommy-jeans-international-games-unisex-tracksuit-jacket-in-white/205838401-1-ancientwhite?$l$'/>
            </Box>

            <Box display={'flex'} flexDirection={'column'} bg={'orange'} ml={'1rem'} justifyContent={'space-evenly'} w={'17rem'} >
                <Heading as='h1' size={'md'}>$33</Heading>
                <Text>kjasjkasjksajk sjk</Text>
                <Text>SIZE:</Text>
                <Text>QTY:</Text>   
            </Box>
        </Box>
        {/* ----- */}
        <Box bg={'red'} display={'flex'}  mb={'1rem'} position={'relative'} h={'10rem'} p={'1rem'} >
            <Box bg={'green'} w={'8rem'} h={'100%'} overflow={'hidden'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Image src='https://images.asos-media.com/products/tommy-jeans-international-games-unisex-tracksuit-jacket-in-white/205838401-1-ancientwhite?$l$'/>
            </Box>

            <Box display={'flex'} flexDirection={'column'} bg={'orange'} ml={'1rem'} justifyContent={'space-evenly'} w={'17rem'} >
                <Heading as='h1' size={'md'}>$33</Heading>
                <Text>kjasjkasjksajk sjk</Text>
                <Text>SIZE:</Text>
                <Text>QTY:</Text>   
            </Box>
        </Box>
        
        </Box>
{/* ---------------------------------------- */}
        <Divider mb={'1rem'} />

        <Box display={'flex'} justifyContent={'space-between'} mb={'0.8rem'}>
            <Text>Subtotal</Text>
            <Text>$29</Text>
        </Box>

        <Box display={'flex'} justifyContent={'space-between'}>
            <Heading as='h2' size={'md'}>TOTAL TO PAY</Heading>
            <Heading as='h2' size={'md'}>$66</Heading>
        </Box>




            </Box>
        </Box>
    )
}

export default Payment