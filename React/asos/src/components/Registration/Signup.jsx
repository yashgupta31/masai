import { Box, Button, FormControl, FormLabel, Grid, GridItem, Heading, Image, Input, Radio, RadioGroup, Stack, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Signup = () => {
  let [gender, setGender] = useState('womenswear')
  let [signup, setSignup]= useState({gmail:'',
    name: '',
      password: ''
    })
  let toast = useToast()
  let navigate= useNavigate()

  let signupArr= JSON.parse(localStorage.getItem('asos-signup'))||[];
  console.log(signupArr)

  let handleSubmit=(e)=>{
    e.preventDefault();
    // let gmail= e.target[0].value;
    // let name= e.target[1].value;
    // let password= e.target[3].value;

    // let newUser= {
    //   gmail: signup.gmail,
    //   name: name,
    //   password: password
    // }
// -----------------
    // for(let i=0; i<signupArr.length; i++){
    //   if(signupArr[i].gmail === signup.gmail){
    //     toast({
    //       title: 'User Already Exist',
    //       // description: "We've created your account for you.",
    //       status: 'error',
    //       duration: 2000,
    //       isClosable: true,
    //     })
    //     break;
    //   }else{
    //     signupArr= [...signupArr, signup]


    // localStorage.setItem('asos-signup', JSON.stringify(signupArr))

    // toast({
    //   title: 'Signup Successfull!',
    //   // description: "We've created your account for you.",
    //   status: 'success',
    //   duration: 2000,
    //   isClosable: true,
    // })

    // setTimeout(()=>{
    //   navigate('/login')
    // }, 2000)

    
    // break;
    //   }
    // }
    

    // alert('signup successful')

    signupArr= [...signupArr, signup]
    localStorage.setItem('asos-signup', JSON.stringify(signupArr))
    toast({
      title: 'Signup Successfull!',
      // description: "We've created your account for you.",
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
    

    setSignup({gmail:'',
    name: '',
      password: ''
    })
  }
  return (
    <Box bg={'#EEEEEE'} display={'flex'} flexDirection={'column'} alignItems={'center'} pt={'3rem'}>
      {/* <NavLink to={'/login'}>login</NavLink> */}
      <Image src={"https://logo-logos.com/2016/10/Asos_logo.png"} w={'7rem'} />
      <Box bg={'white'} w={'43vw'} p={'1.5rem'} mt={'1rem'} textAlign={'center'}>
        <Stack  direction='row' h={'4rem'} justifyContent={'space-around'} alignItems={'center'} fontSize={'1.2rem'}>
          <NavLink to={'/signup'}><Box p={'1rem 0rem'} w={'18rem'}  borderBottom={'1.7px solid blue'}>Signup</Box></NavLink>
          <NavLink to={'/login'}><Box p={'1rem 0rem'} w={'18rem'}>login</Box></NavLink>
        </Stack>

        <Box  display={'flex'} flexDirection={'column'} alignItems={'center'} >
          <Heading as='h1' size={'md'} p={'3rem'}>SIGN UP WITH...</Heading>
          <Grid templateColumns='repeat(3, 1fr)' gap={6} p={'0rem 3rem'} mb={'1rem'} h={'3.5rem'}>
            <GridItem display={'flex'} alignItems={'center'} justifyContent={'space-evenly'} fontSize={'1.2rem'} h={'90%'} border={'1px solid gray'}><FcGoogle />GOOGLE</GridItem>
            <GridItem display={'flex'} alignItems={'center'} justifyContent={'space-evenly'} fontSize={'1.2rem'} h={'90%'} border={'1px solid gray'}><FaApple />APPLE</GridItem>
            <GridItem display={'flex'} alignItems={'center'} justifyContent={'space-evenly'} fontSize={'1.2rem'} h={'90%'} p={'1rem 1.3rem'} border={'1px solid gray'}><FaFacebookSquare />FACEBOOK</GridItem>
          </Grid>

          <Text mb={'2rem'}>
            Signing up with social is super quick. No extra passwords to remember - no brain fail.
            Dont worry, we had never share any of your data or post anything on your behalf #NotEvil
          </Text>

          <Heading as='h1' size={'md'} mb={'2.5rem'}>
            OR SIGN UP WITH EMAIL
          </Heading>

          <form  onSubmit={handleSubmit} style={{backgroundColor: 'white', width: '70%'}} >
            <FormLabel>GMAIL ADDRESS:</FormLabel>
            <Input placeholder='gmail' mb={'1rem'} value={signup.gmail} onChange={(e)=>setSignup({...signup, gmail: e.target.value})}  required/>

            <FormLabel>FIRST NAME:</FormLabel>
            <Input placeholder='name'  mb={'1rem'} value={signup.name} onChange={(e)=>setSignup({...signup, name: e.target.value})} required />

            <FormLabel>LAST NAME:</FormLabel>
            <Input placeholder='last name' mb={'1rem'}  />

            <FormLabel>PASSWORD:</FormLabel>
            <Input placeholder='password' mb={'1rem'} value={signup.password} onChange={(e)=>setSignup({...signup, password: e.target.value})} required />

            <FormLabel>DATE OF BIRTH:</FormLabel>
            <Input placeholder='Select Date and Time' size='md' type='datetime-local' mb={'1rem'}  />

            <FormLabel>MOSTLY INTERESTED IN:</FormLabel>
            {/* <Input placeholder='Select Date and Time' size='md' type='datetime-local' mb={'1rem'}  /> */}

            <RadioGroup onChange={setGender} value={gender}  mb={'1rem'} >
              <Stack direction='row'>
                <Radio value='womenswear'>Womenswear</Radio>
                <Radio value='menswear'>Menswear</Radio>
              </Stack>
            </RadioGroup>

            <Button type='submit' bg={'#2D2D2D'} w={'100%'} variant='solid' color={'white'}  mb={'1rem'} >JOIN ASOS</Button>

          </form>

        </Box>
      </Box>
    </Box>
  )
}

export default Signup