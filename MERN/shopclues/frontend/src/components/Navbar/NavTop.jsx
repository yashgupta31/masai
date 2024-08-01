import { Box, Button, Image, Input, InputGroup, InputLeftElement, Modal, ModalCloseButton, ModalContent, ModalOverlay, omitThemingProps, Text, useDisclosure } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import logo from '../../assets/logo.svg'
import { SearchIcon } from '@chakra-ui/icons'
import { Icon } from '@chakra-ui/react'
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiHeart, CiLocationOn } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import {colors} from '../../colors/colors'
import Auth from '../../pages/Auth/Auth'
import { NavLink } from 'react-router-dom'
import {jwtDecode} from 'jwt-decode';
import AuthContext from '../../context/AuthContext'


const buttonCss={
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    borderRadius: '0%',
    padding: '1.1rem 0rem',
    paddingLeft: '1.5rem',
    size: 'sm'
    
  }


const NavTop = () => {

    const [isOpen, setIsOpen] = useState(false)
    // const [userName, setUserName]= useState('')
    const {logout, userDetail}= useContext(AuthContext)

    // const getUserFromToken=()=>{
    //     const token= localStorage.getItem('shopcluestoken');
        
    //     if(!token){
    //         setUserName(null)
    //         console.log('token not found')
    //     }

    //     try {
    //         const decodeToken= jwtDecode(token)
    //         setUserName(decodeToken.name)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // useEffect(()=>{
    //     getUserFromToken()
    // }, [])

    

    return (
        <Box bg={'white'} h={'5rem'} display={'flex'} alignItems={'center'} justifyContent={'space-evenly'} >
           <NavLink to={'/'}><Image src={logo} w={'8rem'} /></NavLink>

            <InputGroup w={'55%'}>
                <InputLeftElement pointerEvents='none'>
                    <SearchIcon color='gray' />
                </InputLeftElement>
                <Input borderRadius={'8px 0px 0px 8px'} bg={'#E9F6F7'} placeholder='Search Here...' />
                <Button bg={'#FF685E'} borderRadius={'0px 5px 5px 0px'} colorScheme='teal' size='md' w={'9rem'}>
                    Search
                </Button>
            </InputGroup>

            <Box color={'#24A3B5'} w={'16rem'} fontSize={'1.8rem'} display={'flex'} alignItems={'center'} justifyContent={'space-evenly'} >

                <Box display={'flex'} alignItems={'center'}>
                    <Text fontSize={'xs'} display={'flex'} flexDirection={'column'} fontWeight={'500'}><span style={{ color: 'black' }}>share</span>location</Text>
                    <Icon as={CiLocationOn} />
                </Box>
                <Icon as={IoIosNotificationsOutline} />
                <Icon as={CiHeart} />
                <NavLink to={'/cart'}><Icon as={BsCart3} /></NavLink>
                
            </Box>

            {/* <Box onClick={() => setIsOpen(true)} display={'flex'} alignItems={'center'} fontWeight={'600'} position={'relative'} _hover={{cursor: 'pointer'}}>

                <Text  className='user-profile-btn'  bg={'yellow'}>Sign In</Text>
                <Icon color={'#24A3B5'} as={MdOutlineArrowDropDown} />
                <Box className='user-profile'>
                    <Button sx={buttonCss} >My Orders</Button>
                    <Button sx={buttonCss} >My Returns</Button>
                    <Button sx={buttonCss} >Wishlist</Button>
                    <Button sx={buttonCss} >My Profile</Button>
                    <Button sx={buttonCss} >My Chat</Button>
                    <Button sx={buttonCss} >My CluesBucks</Button>
                    <Button sx={buttonCss} >My Feedback</Button>
                    <Button sx={buttonCss} >Help & Support</Button>
                    <Button sx={buttonCss} >My Favorite Stores</Button>
                </Box>
            </Box> */}
            <Box className='user-profile-btn' onClick={() => setIsOpen(true)} fontWeight={'600'}>{userDetail.name? userDetail.name: 'Sign In'} <Icon color={'#24A3B5'} as={MdOutlineArrowDropDown} /></Box>
            <Box className='user-profile'>
                <Box bg={colors.primary} display={'flex'} alignItems={'center'} h={'3.5rem'}>
                    <Box bg={'white'} w={'2.3rem'} h={'2.3rem'} ml={'1rem'} borderRadius={'50%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Icon as={FaRegUser} color={colors.primary} />
                    </Box>
                    <Text  ml={'1rem'}>{userDetail.name}</Text>
                </Box>
                <Box display={'flex'} flexDirection={'column'}>
                    <Button sx={buttonCss} >My Orders</Button>
                    <Button sx={buttonCss} >My Returns</Button>
                    <Button sx={buttonCss} >Wishlist</Button>
                    <Button sx={buttonCss} >My Profile</Button>
                    <Button sx={buttonCss} >My Chat</Button>
                    <Button sx={buttonCss} >My CluesBucks</Button>
                    <Button sx={buttonCss} >My Feedback</Button>
                    <Button sx={buttonCss} >Help & Support</Button>
                    <Button sx={buttonCss} >My Favorite Stores</Button>
                    {
                        userDetail &&  <Button sx={buttonCss} onClick={logout}>Log Out</Button>
                    }
                    </Box>
                </Box>
            
            {/* ------------ */}
          
            {(isOpen) && <Auth setIsOpen={setIsOpen} />}


        </Box>
    )
}

export default NavTop