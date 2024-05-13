import { Box, Button, Divider, Flex, Grid, Heading, Image, Input, List, ListItem, Text } from '@chakra-ui/react'
import  {  useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { VscQuestion } from "react-icons/vsc";
import { MdOutlineMessage } from "react-icons/md";

const Navbar = () => {
  let [women, setWomen] = useState()
  let [isPopup, setIsPopup] = useState(false)
  
  let loginArr= JSON.parse(localStorage.getItem('asos-login'));
  return (
    <Box h={'9.8rem'} bg={'yellow'} >
      {/* <Box bg={'white'} p={'3px'}></Box> */}
      {/* ----------- */}
      <Box bg={'#2D2D2D'} h={'3.8rem'} padding={'0rem 5rem'} color={'white'} display={'flex'} alignItems={'center'} justifyContent={'space-evenly'}>
        {/* <Heading as='h1' bg={'red'} w={'6rem'} size='xl'>asos</Heading> */}
        <Image src='https://companieslogo.com/img/orig/ASC.L_BIG.D-783fd9b6.png?download=true' w={'5rem'} />
        <NavLink style={({ isActive }) => setWomen(isActive)} to={'/womens'}><Box p={'1rem'} fontSize={'1.2rem'} fontWeight={'2rem'} bg={women ? '#525050' : '#2D2D2D'} >WOMEN</Box></NavLink>
        <NavLink to={'/mens'}><Box p={'1rem 2rem'} fontSize={'1.2rem'} fontWeight={'2rem'} bg={!women ? '#525050' : '#2D2D2D'}>MEN</Box></NavLink>
        <Input placeholder={'Search for items and brands'} bg='white' w={'55%'} />
        <Box fontSize={25} display={'flex'} w={'12rem'} h={'3.6rem'} justifyContent={'space-evenly'} alignItems={'center'}>
         
          <Box onMouseOver={() => setIsPopup(true)} onMouseLeave={() => setIsPopup(false)} p={'1.1rem'}>
            <FaRegUser  /> 
          </Box>

          <NavLink>
          <Box p={'1.1rem'}>
            <FaRegHeart />
          </Box>
          </NavLink>

          <NavLink to={'/bag'}>
          <Box p={'1.1rem'}>
            <BsHandbag />
          </Box>
          </NavLink>

          {
            isPopup ?
              <Box position={'absolute'} bg={'#F8F8F8'} top={'3.8rem'} right={'7rem'} height={'16rem'} w={'20rem'} zIndex={999} boxShadow='md' borderRadius={'8px'} onMouseOver={() => setIsPopup(true)} onMouseLeave={() => setIsPopup(false)}>
                <Box bg={'lightgray'} p={2} display={'flex'} justifyContent={'space-evenly'}  color={'black'}>
                  

                  {
                    loginArr? (<><NavLink style={{ fontSize: '1rem' }}>Hi, {loginArr[0].name}</NavLink>
                    <NavLink style={{ fontSize: '1rem' }}>Logout</NavLink></>) 
                    : (
                      <><NavLink style={{ fontSize: '1rem' }} to={'/login'}>Sign In</NavLink>
                    <NavLink style={{ fontSize: '1rem' }} to={'/signup'}>Join</NavLink></>)
                  }


                </Box>
                {/* <Button w={'100%'} colorScheme='gray'>Cancel</Button>
                <Button w={'100%'} colorScheme='gray'>Cancel</Button>
                <Button w={'100%'} colorScheme='gray'>Cancel</Button>
                <Button w={'100%'} colorScheme='gray'>Cancel</Button> */}

                <List display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} >
                <ListItem  color={'black'}  fontSize={'1rem'} display={'flex'} alignItems={'center'} p={'0.5rem 1.4rem'} mb={'0.3rem'}><FaRegUser style={{marginRight: '1rem'}} /><NavLink>My Accounts</NavLink></ListItem>
                <ListItem  color={'black'} fontSize={'1rem'} display={'flex'} alignItems={'center'} p={'0.5rem 1.4rem'} mb={'0.3rem'}><BsCart2 style={{marginRight: '1rem'}} /><NavLink>My Orders</NavLink></ListItem>
                <ListItem color={'black'} fontSize={'1rem'} display={'flex'} alignItems={'center'} p={'0.5rem 1.4rem'} mb={'0.3rem'}><VscQuestion style={{marginRight: '1rem'}} /><NavLink>Return Information</NavLink></ListItem>
                <ListItem color={'black'} fontSize={'1rem'} display={'flex'} alignItems={'center'} p={'0.5rem 1.4rem'} mb={'0.3rem'}><MdOutlineMessage style={{marginRight: '1rem'}} /><NavLink>Contact Preferences</NavLink></ListItem>

                </List>

              </Box>
              :
              <Box position={'absolute'} top={'5.7rem'}  h={'16rem'}  display={'hidden'}></Box>

          }
        </Box>

      </Box>
      {/* ----------- */}
      <Box bg={'#525050'} h={'3rem'} display={'flex'} justifyContent={'center'}>
        <Box color={'white'} width={'46rem'} display={'flex'} justifyContent={'space-evenly'} alignItems={'center'}>
          <NavLink>New in</NavLink>
          <NavLink>Clothing</NavLink>
          <NavLink>Trending</NavLink>
          <NavLink>Shoes</NavLink>
          <NavLink>Accessories</NavLink>
          <NavLink>Brands</NavLink>
          <NavLink>Sportwear</NavLink>
          <NavLink>Topman</NavLink>
          <NavLink>Marketplace</NavLink>
          <NavLink>Sale</NavLink>
        </Box>
      </Box>
      {/* ---------------- */}
      <Box bg={'green'} h={'3rem'} display={'flex'}>
        <Box bg={'#F799BA'} w={'50%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>UPTO 30% OFF SUNSHINE STAPLES</Box>
        <Box bg={'#F5F5F2'} w={'50%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>FREE WORLD DELIVERY</Box>
      </Box>
    </Box>
  )
}

export default Navbar