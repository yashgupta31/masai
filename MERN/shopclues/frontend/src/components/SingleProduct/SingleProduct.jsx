import { Box, Button, Icon, Image, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ImgBox from './ImgBox'
import { colors } from '../../colors/colors'
import { IoMdStar } from 'react-icons/io'
import { CiLocationOn } from 'react-icons/ci'
import { IoReturnUpBack } from "react-icons/io5";
import { MdOutlinePayment } from 'react-icons/md';
import { FaRegHeart } from "react-icons/fa";
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SingleProduct = () => {
    const {id}= useParams()
    const [product, setProduct]= useState({})
    console.log(product)

    useEffect(()=>{
        const fetchProduct= async()=>{
            try {
                const response= await axios.get(`http://localhost:3000/product/getsingle/${id}`)
                setProduct(response.data)
            } catch (error) {
                console.log("error while fetching products", error )
            }
        }

        fetchProduct()
    },[id])

    return (
        <Box bg={'white'} pt={'12rem'} h={'100vh'} display={'flex'} justifyContent={'center'}>
            <ImgBox product={product} />

            <Box bg={'white'} w={'30rem'} ml={'4rem'} h={'60%'} position={'relative'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} >
                <Icon as={FaRegHeart} position={'absolute'} fontSize={'1.3rem'} left={'-3rem'} top={'0.5rem'} cursor={'pointer'} transition={'0.4s'} _hover={{fontSize: '1.4rem'}}/>
                <Text fontSize={'1.1rem'}>{product.name}</Text>
                <Box display={'flex'} alignItems={'center'} mt={'-0.6rem'}>{product.rating}
                    <Icon as={IoMdStar} />
                    <Icon as={IoMdStar} />
                    <Icon as={IoMdStar} />
                    <Icon as={IoMdStar} />
                    <Icon as={IoMdStar} />
                </Box>
                <Box display={'flex'} alignItems={'center'}>
                    <Text fontSize={'1.7rem'} fontWeight={600} mr={'0.3rem'}>₹{product.price}</Text>
                    <Text fontSize={'1.2rem'} mr={'0.3rem'} textDecoration={'line-through'} color={'grey'}>₹{product.oldPrice}</Text>
                    <Text fontSize={'1.3rem'} color={colors.primary} fontWeight={600} mr={'0.3rem'}>{product.discount}% off </Text>
                </Box>
                <Text fontSize={'sm'} mt={'-1rem'}>Inclusive of all taxes</Text>
                

                <Box w={'80%'} display={'flex'} justifyContent={'space-between'}>
                    <Button w={'11rem'} p={'1.1rem 0rem'} border={`1px solid ${colors.secondary}`} borderRadius={'4px'} color={colors.secondary} >ADD TO CART</Button>
                    <Button w={'11rem'} p={'1.1rem 0rem'} color={'white'} borderRadius={'4px'} bg={colors.secondary}>BUY NOW</Button>
                </Box>

                <Box display={'flex'} w={'66%'} justifyContent={'space-between'} alignItems={'center'} mt={'1rem'}>
                    <InputGroup mr={'1rem'} w={'70%'} size={'sm'}>
                        <InputLeftElement pointerEvents='none'>
                            <Icon as={CiLocationOn} color='gray' fontSize={'1.2rem'} />
                        </InputLeftElement>
                        <Input placeholder='Enter pin for delivery' />
                    </InputGroup>

                    <Button size={'sm'} border={`1px solid ${colors.primary}`} w={'5rem'} color={colors.primary}>Check</Button>
                </Box>

                <Text bg={'white'} color={'gray'} fontSize={'sm'} display={'flex'} alignItems={'center'} mb={'-0.4rem'}>
                    <Icon as={IoReturnUpBack} fontSize={'1.2rem'} mr={'0.3rem'} />
                    Easy Returns & Replacement
                    </Text>

                <Text bg={'white'} color={'gray'} fontSize={'sm'} display={'flex'} alignItems={'center'}>
                    <Icon as={MdOutlinePayment} fontSize={'1.2rem'} mr={'0.3rem'} />
                    Payment Options: (Credit Card , Debit Card , Net Banking , Wallets , COD)
                    </Text>
            </Box>
        </Box>
    )
}

export default SingleProduct