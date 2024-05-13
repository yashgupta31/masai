import { Box, Button, Grid, Heading,  Image,  Select, Text, useToast } from '@chakra-ui/react'
// import { useContext, useEffect, useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";
// import { MenSingleProductContext } from '../../context/MenSingleProvider';
// import { useParams } from 'react-router-dom';

const SingleMen = () => {

  // let {mensData}= useContext(MenSingleProductContext);
  // let {id}= useParams();
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
      
    <Grid templateColumns={'repeat(2, 1fr)'} bg={'white'} display={'flex'} justifyContent={'space-evenly'} w={'100%'} pt={'2rem'}>

    <Box bg={'yellow'} w={'33rem'} h={'36rem'} overflow={'hidden'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
    <Image src={singleMenObj.img} w={'100%'}  />
    </Box>
    
    <Box w={'22rem'} h={'29rem'} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} >
    <Text>
    {singleMenObj.para}
    </Text>
    
    <Heading as='h1' size={'md'}>${singleMenObj.price}</Heading>
    
    <Text>
    COLOR: Red
    </Text>
    
    <Text>
    SIZE:
    </Text>
    
    <Select  placeholder='Select option'>
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
    </Grid>
      
   
  )
}

export default SingleMen


