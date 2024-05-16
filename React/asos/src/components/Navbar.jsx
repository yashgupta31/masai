import { Box, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Grid, Heading, Image, Input, List, ListItem, Text, UnorderedList, useConst, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { VscQuestion } from "react-icons/vsc";
import { MdOutlineMessage } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { DataContext } from '../context/DataProvider';
import { color } from 'framer-motion';

const Navbar = () => {
  let [women, setWomen] = useState()
  let [menuWomen,setMenuWomen]= useState()
  let [isPopup, setIsPopup] = useState(false)
  let [render, setRender] = useState(false)
  let [searchQuery, setSearchQuery] = useState('')
  const [isLg] = useMediaQuery("(min-width: 1024px)")
  const [isMd] = useMediaQuery("(min-width: 768px)")
  const [isSm] = useMediaQuery("(max-width: 420px)")

  let navigate= useNavigate();

  var loginArr = JSON.parse(localStorage.getItem('asos-login'));
  let bagArr = JSON.parse(localStorage.getItem('asos-bag')) || [];

  let handleLogout = () => {
    // loginArr.splice(0, loginArr);
    localStorage.setItem('asos-login', JSON.stringify([]))
    setRender(true)
  }


  let { Data } = useContext(DataContext);

  let handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <Box bg={'yellow'} >

      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
        
        
      >
        <DrawerOverlay />
        
        <DrawerContent>
        <DrawerCloseButton fontSize={'1rem'} />
        
          {/* <DrawerHeader>Create your account</DrawerHeader> */}

          <DrawerBody mt={'3rem'}>
            <Box  display={'flex'} justifyContent={'space-evenly'} shadow={'md'}>
            <NavLink to={'/womens'} onClick={()=> setMenuWomen(true)}><Box w={'8rem'} textAlign={'center'} p={'0.6rem 0rem'} borderBottom={menuWomen && '1px solid blue'} color={menuWomen? 'blue': 'grey'}>WOMEN</Box></NavLink>
            <NavLink to={'/mens'} onClick={()=> setMenuWomen(false)}><Box w={'8rem'} textAlign={'center'} p={'0.6rem 0rem'} borderBottom={!menuWomen && '1px solid blue'}  color={!menuWomen? 'blue': 'grey'}>MEN</Box></NavLink>
            </Box>

            <NavLink  to={menuWomen? '/womens': 'mens'}  style={{display: 'flex'}}>
              <Box bg={'#F0F0F0'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} h={'3rem'} w={'100%'} mt={'1rem'} pl={'1rem'}>
              <Text fontSize={'1.2rem'}>Home</Text>
              <Image h={'100%'} src='http://www.pngall.com/wp-content/uploads/5/Fashion-Model-Man-PNG-Image.png' />
              </Box></NavLink>
          </DrawerBody>

          {/* <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>

      {/* ----------- */}
      <Box position={'relative'} bg={'#2D2D2D'} h={'3.8rem'} padding={'0rem 3rem'} color={'white'} display={'flex'} alignItems={'center'} justifyContent={'space-evenly'} pl={'10rem'}>
        {/* <Heading as='h1' bg={'red'} w={'6rem'} size='xl'>asos</Heading> */}
        <Box display={'flex'} alignItems={'center'} position={'absolute'} left={'0rem'} ml={'1.6rem'} >
        {
          !isLg && <IoMenu  style={{ fontSize: '2rem', marginRight: '1rem'}}  ref={btnRef} colorScheme='teal' onClick={onOpen} />
        }
        <NavLink to={'/'} >
          <Image src='https://companieslogo.com/img/orig/ASC.L_BIG.D-783fd9b6.png?download=true' w={isMd?'7rem': '4rem'} mr={'1rem'}/>
        </NavLink>
        </Box>
        {
          isLg && <><NavLink style={({ isActive }) => setWomen(isActive)} to={'/womens'}><Box p={'1rem'} fontSize={'1.2rem'} fontWeight={'2rem'} bg={women ? '#525050' : '#2D2D2D'} >WOMEN</Box></NavLink>
            <NavLink to={'/mens'}><Box p={'1rem 2rem'} fontSize={'1.2rem'} fontWeight={'2rem'} bg={!women ? '#525050' : '#2D2D2D'} mr={'1rem'}>MEN</Box></NavLink>
          </>
        }
        {/*------------------- search section---------------------------- */}

        <Box bg={'blue'} w={'55%'} position={'relative'} >
          {
            isMd && <Input placeholder={'Search for items and brands'} bg='white' value={searchQuery} onChange={(e) => handleSearch(e)} color={'grey'} />

          }


          {/* <Input placeholder={'Search for items and brands'} bg='white' value={searchQuery} onChange={(e)=> handleSearch(e)} color={'grey'} /> */}
          {
            searchQuery && 
            <Box color={'black'} position={'absolute'} w={'100%'} maxHeight={'15rem'} display={'flex'} flexDirection={'column'} alignItems={'center'} overflowX={'scroll'} boxShadow='lg'>
              {
                Data.men
                  .filter((elem) => {
                    if (elem.para.includes(searchQuery) && searchQuery) {
                      return elem;
                    }
                  })
                  .map((elem) => (
                    <>
                      <NavLink onClick={() => setSearchQuery('')} to={`/mens/products/${elem.id}`} style={{ width: '100%' }}>
                        <Text bg={'#EEEEEE'} p={'0.4rem 0.4rem'} w={'100%'} _hover={{ bg: 'lightgrey', cursor: 'pointer', borderLeft: '5px solid blue' }}>{elem.para}</Text>
                      </NavLink>
                    </>
                  ))
              }
              {
                // Render "No Result Found" heading if filtered result is empty
                Data.men.filter((elem) => elem.para.includes(searchQuery)).length === 0 && (
                  <Text textAlign={'center'} w={'100%'} bg={'white'} fontSize={'lg'}>No Result Found</Text>
                )
              }
            </Box>
          }

        </Box>
        {/* ------------------ */}

        <Box fontSize={isMd?25:23} display={'flex'}  h={'3.6rem'} justifyContent={isMd?'space-evenly': 'center'} alignItems={'center'}>

          <Box onMouseOver={() => setIsPopup(true)} onMouseLeave={() => setIsPopup(false)} p={isMd?'1.1rem': '0.6rem'}>
            <FaRegUser />
          </Box>

          <NavLink>
            <Box p={isMd?'1.1rem': '0.6rem'}>
              <FaRegHeart />
            </Box>
          </NavLink>

          <NavLink to={'/bag'}>
            <Box p={isMd?'1.1rem': '0.6rem'} position={'relative'}>
              <BsHandbag />
              <Text position={'absolute'} top={isMd?1: -1} right={isMd? 1: -1} bg={'red'} borderRadius={'50%'}  w={'20px'} h={'20px'} fontSize={'0.9rem'} textAlign={'center'}>{bagArr.length}</Text>

             
            </Box>
          </NavLink>

{/* --------------------profile popup------------------- */}
          {
            isPopup ?
              <Box position={'absolute'} bg={'#F8F8F8'} top={'3.8rem'} right={isSm?'1rem':'7rem'} height={'16rem'} w={'20rem'} zIndex={999} boxShadow='md' borderRadius={'8px'} onMouseOver={() => setIsPopup(true)} onMouseLeave={() => setIsPopup(false)}>
                <Box bg={'lightgray'} p={2} display={'flex'} justifyContent={'space-evenly'} color={'black'}>


                  {
                    loginArr.length == 1 ? (<><NavLink style={{ fontSize: '1rem' }}>Hi, {loginArr[0].name}</NavLink>
                      <NavLink onClick={() => handleLogout()} style={{ fontSize: '1rem' }}>Logout</NavLink></>)
                      : (
                        <><NavLink style={{ fontSize: '1rem' }} to={'/login'}>Sign In</NavLink>
                          <NavLink style={{ fontSize: '1rem' }} to={'/signup'}>Join</NavLink></>)
                  }


                </Box>

                <List display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} >
                  <ListItem color={'black'} fontSize={'1rem'} display={'flex'} alignItems={'center'} p={'0.5rem 1.4rem'} mb={'0.3rem'}><FaRegUser style={{ marginRight: '1rem' }} /><NavLink>My Accounts</NavLink></ListItem>
                  <ListItem color={'black'} fontSize={'1rem'} display={'flex'} alignItems={'center'} p={'0.5rem 1.4rem'} mb={'0.3rem'}><BsCart2 style={{ marginRight: '1rem' }} /><NavLink>My Orders</NavLink></ListItem>
                  <ListItem color={'black'} fontSize={'1rem'} display={'flex'} alignItems={'center'} p={'0.5rem 1.4rem'} mb={'0.3rem'}><VscQuestion style={{ marginRight: '1rem' }} /><NavLink>Return Information</NavLink></ListItem>
                  <ListItem color={'black'} fontSize={'1rem'} display={'flex'} alignItems={'center'} p={'0.5rem 1.4rem'} mb={'0.3rem'}><MdOutlineMessage style={{ marginRight: '1rem' }} /><NavLink>Contact Preferences</NavLink></ListItem>

                </List>

              </Box>
              :
              <Box position={'absolute'} top={'5.7rem'} h={'16rem'} display={'hidden'}></Box>

          }
        </Box>

      </Box>
      {/* ----------- */}
      {
        isMd && <>
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
        </>
      }

    </Box>
  )
}

export default Navbar