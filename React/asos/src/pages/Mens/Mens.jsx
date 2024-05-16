import { Box, Grid, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
let types=[
  {
    img: 'https://content.asos-media.com/-/media/homepages/mw/2024/may/02/homepage/mw/mw_global_bigyachtenergy_moment_870x1110.jpg',
    title: 'SUMMER PREP',
    about: 'Vacation vibes'
  },
  {
    img: 'https://content.asos-media.com/-/media/homepages/mw/2024/may/13-gbl/no-border/moment/mw_global_couture_club_moment_870x1110.jpg',
    title: 'GRANDPA CORE',
    about: "Throwback 'fits"
  },
  {
    img: 'https://content.asos-media.com/-/media/homepages/mw/2024/may/02/homepage/mw/mw_global_linen_moment_870x1110.jpg',
    title: 'THE LINEN EDIT',
    about: 'A summer must-have'
  },
  {
    img: 'https://content.asos-media.com/-/media/homepages/mw/2024/may/13-gbl/no-border/moment/mw_global_occasionwear_moment_870x1110.jpg',
    title: 'TRENDING: STRIES',
    about: 'Sunny-season striples'
  }

]


const Mens = () => {
  return (
    <Box bg={'white'}>
    <Box bg={'white'} p={'1.5rem'} display={'flex'} justifyContent={'center'}>
      <Image h={'33rem'} src='https://purepng.com/public/uploads/large/purepng.com-sports-wearclothingsports-wearpeoplemodelmanmenguymalefitnesshandsomesportwearclothcasual-631522326824lt08q.png' />
    </Box>
{/* ---------------- */}
    <Grid 
    justifyContent={'center'}
  templateColumns={{
    base: 'repeat(1, 1fr)',  // One column on small screens (base)
    sm: 'repeat(1, 1fr)',   // Two columns on small screens
    md: 'repeat(2, 1fr)',   // Three columns on medium screens
    lg: 'repeat(3, 1fr)',   // Four columns on large screens
    xl: 'repeat(4, 1fr)',   // Five columns on extra-large screens
  }}

  w={'100%'}

   gap={9}  p={'1rem 7rem'}>
    {
      types.map((elem, i)=>(
        <NavLink key={i} to={'products'}>
        <Box bg={'white'} h={'31rem'} w={['16rem','17rem','18rem','19rem','20rem']} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} alignItems={'center'}>
          <Image src={elem.img} h={'24rem'} w={'100%'} />
          <Heading as='h1' size={'md'}>{elem.title}</Heading>
          <Text fontSize={'md'}>{elem.about}</Text>
        </Box>
        </NavLink>
        
      ))
    }
    </Grid>
    {/* ------------------------- */}
    <Box h={'7.6rem'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'} bg={'#F799BA'}>
      <Heading as='h1' size={'xl'}>
      UP TO 30% OFF SUNSHINE STAPLES
      </Heading>

      <Text fontSize={'sm'}>Limited time only. Selected styles marked down on site.</Text>
    </Box>

   
    </Box>
  )
}

export default Mens