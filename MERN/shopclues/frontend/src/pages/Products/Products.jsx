import { Box, Icon, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { colors } from '../../colors/colors'
import { MdOutlineLocalShipping } from 'react-icons/md'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios'

const Products = () => {
    const {type}= useParams()
    const [products, setProducts]= useState([])

    useEffect(()=>{
        const fetchProduct= async()=>{
            try {
                const response= await axios.get(`http://localhost:3000/product/getall/${type}`)
                setProducts(response.data)
            } catch (error) {
                console.log("error while fetching products", error )
            }
        }

        fetchProduct()
    },[type])

    return (
        <>
        <Box pt={'10.5rem'}  pl={'1.5rem'} pr={'1.5rem'} bg={colors.background} display={'flex'} flexDirection={'column'} >
        <Text color={'gray'} mb={'1rem'}>{`home > ${type}`}</Text>
        
        <Box display={'flex'} justifyContent={'space-between'}>
            <Box bg={'white'} w={'14%'}>filter</Box>
            {/* --------------right box---------- */}
            <Box bg={'white'} w={'84%'}>
                <Box p={'1rem'} mb={'0.5rem'}>
                <Text fontSize={'1.2rem'} fontWeight={600}>{type.toUpperCase()}</Text>
                <Text fontSize={'sm'} mt={'2rem'}>{products.length} Products Found</Text>
                </Box>

                <Box borderTop={'1px solid lightgray'} pt={'1rem'} w={'100%'} display={'flex'} justifyContent={'space-between'}  flexWrap={'wrap'}>
                    {/* -----------each Item----------- */}
                    {
                        products.map((elem, index)=>(
                            <NavLink to={`/products/${elem._id}`} key={index}>
                            <Box  w={'18.7rem'} h={'32rem'} p={'1rem'} mb={'1rem'} transition={'0.2s'} _hover={{border: `1px solid ${colors.primary}`, boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'}}>
                        <Box bg={'white'} w={'100%'} h={'71%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <Image h={'85%'} src={elem.image} />
                        </Box>
                        <Text whiteSpace="nowrap" overflow="hidden"
                            textOverflow="ellipsis">{elem.name}</Text>
                        <Box display={'flex'} alignItems={'center'}>
                            <Text fontSize={'1.5rem'} fontWeight={600} mr={'0.3rem'}>₹{elem.price}</Text>
                            <Text mr={'0.3rem'} textDecoration={'line-through'} color={'grey'}>₹{elem.oldPrice}</Text>
                            <Text color={colors.primary} fontSize={'md'} fontWeight={600} mr={'0.3rem'}>{elem.discount}% off </Text>
                        </Box>
                        <Text display={'flex'} alignItems={'center'} fontSize={'sm'}>
                            <Icon as={MdOutlineLocalShipping} mr={'0.3rem'} fontSize={'md'}/>
                            Free Shiping</Text>
                    </Box>
                    </NavLink>
                        ))
                    }
                    
                    {/* ---------- */}

                </Box>


            </Box>






        </Box>
        </Box>
        </>
    )
}

export default Products