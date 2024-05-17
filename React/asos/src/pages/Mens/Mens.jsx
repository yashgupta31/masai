import { Box, Button, Grid, Heading, Image, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaSnapchat } from "react-icons/fa";
let types = [
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
  let [isLg]= useMediaQuery("(min-width: 925px)")
  let [isSm]= useMediaQuery("(max-width: 470px)")
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

        gap={9} p={'1rem 7rem'}>
        {
          types.map((elem, i) => (
            <NavLink key={i} to={'products'}>
              <Box bg={'white'} h={'31rem'} w={['16rem', '17rem', '18rem', '19rem', '20rem']} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} alignItems={'center'}>
                <Image src={elem.img} h={'24rem'} w={'100%'} />
                <Heading as='h1' size={'md'}>{elem.title}</Heading>
                <Text fontSize={'md'}>{elem.about}</Text>
              </Box>
            </NavLink>

          ))
        }
      </Grid>
      
      {/* ------------------------- */}
      <Box h={'7.6rem'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'} bg={'#9CF0E0'}>
        <Heading as='h1' size={'xl'} textAlign={'center'}>
          UP TO 30% OFF SUNSHINE STAPLES
        </Heading>

        <Text fontSize={'sm'}>Limited time only. Selected styles marked down on site.</Text>
      </Box>
      {/* --------------------SHOP NOW------------------------------------------- */}
      
      <Box bg={'white'} display={'flex'} flexDirection={isLg? 'row': 'column'} w={'100%'} gap={'9'} justifyContent={'center'} alignItems={'center'} p={'3rem 0rem'}>
        {/* 1----------- */}
        
        <Box  w={isSm&& '90%'} h={isSm?'35rem':'54rem'} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} alignItems={'center'}>
          <Box overflow={'hidden'} h={'43rem'} w={'100%'} >
            <Image h={'100%'} objectFit={'cover'} src='https://i.pinimg.com/originals/55/01/19/5501197063cee2d84c076c4b9bc75376.jpg' />
          </Box>
          <Heading size={'lg'}>NEW IN: SWIM</Heading>
          <Text>Soak Up Summer</Text>
          <NavLink to={'/mens/products'}>
          <Button variant={'outline'} h={'3rem'} p={'0rem 4rem'} border={'2px solid black'} color={'black'}>SHOP NOW</Button>
          </NavLink>
        </Box>
        
        {/* 2--------------------- */}
        <Box  w={isSm&& '90%'}  h={isSm?'35rem':'54rem'} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} alignItems={'center'}>
          <Box overflow={'hidden'} h={'43rem'} >
            <Image h={'100%'} objectFit={'cover'} src='https://content.asos-media.com/-/media/images/articles/women/2021/01/13-wed/as-seen-on-social-twinning/twinning-2.jpg?h=1100&w=870&la=en-GB&hash=BF419821C31C25F82138607A6174EF5A' />
          </Box>
          <Heading size={'lg'}>DESNEY | ASOS DESIGN</Heading>
          <Text>The Expensive Drop</Text>
          <NavLink to={'/mens/products'}>
          <Button variant={'outline'} h={'3rem'} p={'0rem 4rem'} border={'2px solid black'} color={'black'}>SHOP NOW</Button>
          </NavLink>
        </Box>
      </Box>
      
      
      {/* --------------------Download App-------------------------------------------------- */}
      <Box bg={'lightgreen'} h={'15rem'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'} p={'1rem 0rem'}>
        <Button colorScheme='teal' variant='outline' borderRadius={'20px'} w={'14rem'} fontSize={'1.5rem'} border={'2px solid black'} color={'black'}>THE ASOS APP</Button>
        <Heading as='h1' size={'lg'} textAlign={'center'} color={'white'}>Notifications on your orders and returns? <br />
          App-solutely!
        </Heading>
        <Button colorScheme='teal'  w={'15rem'} borderRadius={'25px'} bg={'black'} color={'white'} fontSize={'1.5rem'} p={'1.5rem'}>
          DOWNLOAD NOW
        </Button>
      </Box>

      {/* --------------------Trending Brands-------------------------------------- */}
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} w={'100%'}>
        <Heading size={'lg'} pb={'1rem'} pt={'1rem'}>TRENDING BRANDS</Heading>
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(5, 1fr)', 'repeat(6, 1fr)']} bg={'white'} pb={'2rem'}>
          <Image cursor={'pointer'} opacity={'60%'} transition={'1s'} h={'12rem'} _hover={{ opacity: '100%', transition: '1s' }} src='https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/tommy-hilfiger-hp-logos-256x256.jpg' />
          <Image cursor={'pointer'} opacity={'60%'} transition={'1s'} h={'12rem'} _hover={{ opacity: '100%' }} src='https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/north-face.png' />
          <Image cursor={'pointer'} opacity={'60%'} transition={'1s'} h={'12rem'} _hover={{ opacity: '100%' }} src='https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/adidas-hp-logos-256x256---v2.png' />
          <Image cursor={'pointer'} opacity={'60%'} transition={'1s'} h={'12rem'} _hover={{ opacity: '100%' }} src='https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/carhartt-hp-logos-256x256.jpg' />
          <Image cursor={'pointer'} opacity={'60%'} transition={'1s'} h={'12rem'} _hover={{ opacity: '100%' }} src='https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/ellesse-hp-logos-256x256.jpg' />
          <Image cursor={'pointer'} opacity={'60%'} transition={'1s'} h={'12rem'} _hover={{ opacity: '100%' }} src='https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/dr-martens-hp-logos-256x256.jpg' />
        </Grid>
      </Box>

      {/* -----------------Social medias---------------------------------------------- */}
      <Box display={'flex'} justifyContent={'center'} borderTop={'1px solid lightgrey'}>
        <Box display={'flex'} alignItems={'center'} h={'1.7rem'} m={'1rem 0rem'} w={'33rem'} justifyContent={'space-evenly'} >
          <FaFacebook style={{ fontSize: '1.9rem', height: '100%' }} />
          <FaInstagram style={{ fontSize: '1.9rem', height: '100%' }} />
          <FaSnapchat style={{ fontSize: '1.9rem', height: '100%' }} />
          <Image src='https://assets.asosservices.com/asos-finance/images/marketing/single.png' h={'100%'} />
        </Box>
      </Box>



    </Box>
  )
}

export default Mens