import { Box, Button, FormControl, FormLabel, Grid, GridItem, Heading, Image, Input, Radio, RadioGroup, Stack, Text, useMediaQuery, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Login = () => {

  
  // let [currentUser, setCurrentUser]= useState('')

  let [login, setLogin] = useState({
    gmail: '',
    password: '',
    name: ''
  })

  let loginArr = JSON.parse(localStorage.getItem('asos-login')) || [];
  let signup = JSON.parse(localStorage.getItem('asos-signup')) || [];
  let toast = useToast()
  let navigate= useNavigate()
  const [isLg] = useMediaQuery("(min-width: 1024px)")
  const [isBelowLg]= useMediaQuery("(max-width: 1024px)")
  const [isMd] = useMediaQuery("(min-width: 768px)")
  const [isSm]= useMediaQuery("(max-width: 480px)")

  let handleSubmit = (e) => {
    e.preventDefault();
    let isLogin=false;
    for (let i = 0; i < signup.length; i++) {
      if (signup[i].gmail === login.gmail && signup[i].password === login.password) {
        isLogin=true;
        loginArr.splice(0, loginArr.length);
        const updatedLogin = { ...login, name: signup[i].name };
        loginArr.push(updatedLogin)
        localStorage.setItem('asos-login', JSON.stringify(loginArr))
        
        break;
      } 
    }

    if(isLogin){
      toast({
        title: 'Login Successfull!',
        // description: "We've created your account for you.",
        status: 'success',
        duration: 2000,
        isClosable: true,
      })

      setTimeout(() => {
        navigate('/')
      }, 2000);
      
    }else{
      toast({
        title: 'Something Went Wrong!',
        // description: "We've created your account for you.",
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
      
    }


    setLogin({
      gmail: '',
      password: ''
    })


  }
  return (
    <Box bg={'#EEEEEE'} display={'flex'} flexDirection={'column'} alignItems={'center'} pt={'3rem'}>
      {/* <NavLink to={'/login'}>login</NavLink> */}
      <Image src={"https://logo-logos.com/2016/10/Asos_logo.png"} w={'7rem'} />
      <Box bg={'white'}  w={isSm? '100%' :isBelowLg? '80%':'37vw'} p={'1.5rem'} mt={'1rem'} textAlign={'center'}>
        <Stack direction='row' h={'4rem'} justifyContent={'space-around'} alignItems={'center'} fontSize={'1.2rem'} mb={'3rem'}>
          <NavLink style={{width: '49%'}} to={'/signup'}><Box p={'1rem 0rem'} w={'100%'}>Signup</Box></NavLink>
          <NavLink style={{width: '49%'}} to={'/login'}><Box p={'1rem 0rem'} w={'100%'} borderBottom={'1.7px solid blue'}>login</Box></NavLink>

        </Stack>

        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} >
          <form onSubmit={(e) => handleSubmit(e)} style={{ backgroundColor: 'white', width: '70%' }}>
            <FormLabel>EMAIL ADDRESS:</FormLabel>
            <Input placeholder='email' mb={'1rem'} value={login.gmail} onChange={(e) => setLogin({ ...login, gmail: e.target.value })} required />

            <FormLabel>PASSWORD:</FormLabel>
            <Input placeholder='password' mb={'2rem'} value={login.password} onChange={(e) => setLogin({ ...login, password: e.target.value })} required />

            <Button type='submit' bg={'#2D2D2D'} w={'100%'} variant='solid' color={'white'} mb={'1rem'} >SIGN IN</Button>

          </form>

          <Heading as='h1' size={'md'} p={'3rem'}>SIGN IN WITH...</Heading>
          {/* <Grid templateColumns='repeat(3, 1fr)' gap={6} p={'0rem 3rem'} mb={'1rem'} h={'3.5rem'}>
            <GridItem display={'flex'} alignItems={'center'} justifyContent={'space-evenly'} fontSize={'1.2rem'} h={'90%'} border={'1px solid gray'}><FcGoogle />GOOGLE</GridItem>
            <GridItem display={'flex'} alignItems={'center'} justifyContent={'space-evenly'} fontSize={'1.2rem'} h={'90%'} border={'1px solid gray'}><FaApple />APPLE</GridItem>
            <GridItem display={'flex'} alignItems={'center'} justifyContent={'space-evenly'} fontSize={'1.2rem'} h={'90%'} p={'1rem 1.3rem'} border={'1px solid gray'}><FaFacebookSquare />FACEBOOK</GridItem>
          
          </Grid> */}

<Grid templateColumns='repeat(1, 1fr)' w={'100%'} gap={6} p={'0rem 3rem'} mb={'1.2rem'} >
            <GridItem display={'flex'} alignItems={'center'} w={'100%'}  fontSize={isSm || isMd? '1rem':'1.4rem'} h={'3.2rem'} border={'1px solid gray'}><FcGoogle style={{marginLeft:'1.6rem', marginRight: '1rem'}}  />GOOGLE</GridItem>
            <GridItem display={'flex'} alignItems={'center'}  w={'100%'} fontSize={isSm || isMd? '1rem':'1.4rem'} h={'3.2rem'} border={'1px solid gray'}><FaApple style={{marginLeft: '1.6rem', marginRight:'1rem'}}   />APPLE</GridItem>
            <GridItem display={'flex'} alignItems={'center'}  w={'100%'} fontSize={isSm || isMd? '1rem':'1.4rem'} h={'3.2rem'} border={'1px solid gray'}><FaFacebookSquare style={{marginLeft: '1.6rem', marginRight: '1rem'}}   />FACEBOOK</GridItem>
          </Grid>



        </Box>
      </Box>
    </Box>
  )
}

export default Login