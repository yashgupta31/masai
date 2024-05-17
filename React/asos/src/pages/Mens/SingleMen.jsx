import { Box, Button, Grid, Heading,  Image,  Select, Text, useMediaQuery, useToast } from '@chakra-ui/react'
// import { useContext, useEffect, useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";
import { useParams } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';
import { useContext } from 'react';
// import { MenSingleProductContext } from '../../context/MenSingleProvider';
// import { useParams } from 'react-router-dom';

const SingleMen = () => {
  const [isMd] = useMediaQuery("(max-width: 730px)")
  
  let {id}= useParams();
  console.log(id)

  let { Data, setData } = useContext(DataContext);

  let filtered= Data.men.filter((elem)=>{
    if(elem.id==id){
      return elem;
    }
  })



  // let [filtered, setFiltered]= useState({
  //           id: 6,
  //           img: 'https://images.asos-media.com/products/the-north-face-half-dome-logo-tote-bag-in-off-white/205823637-1-cream?$n_480w$&wid=476&fit=constrain',
  //           para: 'Guess Originals crest nylon jacket in khaki sajsjk saksjkk sajksjks jkasjkksjk asjksajk',
  //           price: 170
  //       })
  
  // for(let i=0; i<mensData.length; i++){
  //   if(mensData[i].id==id){
  //     setFiltered(mensData[i])
  //   }
  // }  
  // console.log(filtered)

  // if (filtered.length === 0) {
  //   return <div>No product found</div>;
  // }

  let singleMenObj= JSON.parse(localStorage.getItem('singleMen'))|| {};
  let bagArr= JSON.parse(localStorage.getItem('asos-bag'))||[]
  let toast= useToast()
  let handleBag=()=>{
   singleMenObj={...singleMenObj, quantity: 1}
    bagArr=[...bagArr, singleMenObj]
    localStorage.setItem('asos-bag', JSON.stringify(bagArr));
    
    toast(
      {
        title: 'Item Added In Bag',
        // description: "We've created your account for you.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      }
    )
    
  }


  return (
      
    <Box  bg={'white'} display={'flex'} flexDirection={isMd? 'column':'row'} alignItems={'center'} justifyContent={'space-evenly'} w={'100%'} pt={isMd? '0.7rem':'2rem'}>

    <Box w={isMd? '90%':'33rem'} h={isMd? '28rem':'36rem'} overflow={'hidden'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
    <Image src={filtered[0].img} w={'100%'}  />
    </Box>
    
    <Box w={isMd? '90%':'22rem'} h={'29rem'} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} >
    <Text>
    {filtered[0].para}
    </Text>
    
    <Heading as='h1' size={'md'}>${filtered[0].price}</Heading>
    
    <Text>
    COLOR: Red
    </Text>
    
    <Text>
    SIZE:
    </Text>
    
    <Select  placeholder='Select option' mb={'1rem'}>
    <option value="xs">XS</option>
    <option value="s">S</option>
    <option value="m">M</option>
    <option value="l">L</option>
    <option value="xl">XL</option>
    </Select>
    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} pr={'1rem'}>
    <Button w={'85%'} colorScheme='green' onClick={()=> handleBag(singleMenObj)}>ADD TO BAG</Button>
    <FaRegHeart style={{fontSize: '1.6rem'}} />
    </Box>
    
    <Box>
    <hr style={{marginTop: '1rem'}} />
    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} fontSize={'1.4rem'} p={'0.4rem 1rem'} >
      <Text fontSize={'1.1rem'}>Product Details</Text>
      <LuPlus />
    </Box>
    <hr />
    
    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} fontSize={'1.4rem'} p={'0.4rem 1rem'} >
      <Text fontSize={'1.1rem'}>Brand</Text>
      <LuPlus />
    </Box>
    <hr />
    
    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} fontSize={'1.4rem'} p={'0.4rem 1rem'} >
      <Text fontSize={'1.1rem'}>Size & Fit</Text>
      <LuPlus />
    </Box>
    <hr />

    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} fontSize={'1.4rem'} p={'0.4rem 1rem'} >
      <Text fontSize={'1.1rem'}>Look After Me</Text>
      <LuPlus />
    </Box>
    <hr />
    
    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} fontSize={'1.4rem'} p={'0.4rem 1rem'} >
      <Text fontSize={'1.1rem'}>About me</Text>
      <LuPlus />
    </Box>
    <hr />
    </Box>
    
    </Box>
    </Box>
      
   
  )
}

export default SingleMen


