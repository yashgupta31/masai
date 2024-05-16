import { Box, Divider, Flex, Image, Stack, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    let [isSm]= useMediaQuery("(max-width: 420px)")
  return (
    <Box bg="#EEEEEE" p={10}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        wrap="wrap"
        maxW="1200px"
        mx="auto"
      >
        <Stack spacing={2} mb={{ base: 10, md: 0 }}>
          <Text fontWeight="bold">HELP & INFORMATION</Text>
          <Link href="#">Help</Link>
          <Link href="#">Track order</Link>
          <Link href="#">Delivery & returns</Link>
          <Link href="#">Sitemap</Link>
        </Stack>
        <Stack spacing={2} mb={{ base: 10, md: 0 }}>
          <Text fontWeight="bold">ABOUT ASOS</Text>
          <Link href="#">About us</Link>
          <Link href="#">Careers at ASOS</Link>
          <Link href="#">Corporate responsibility</Link>
          <Link href="#">Investors site</Link>
        </Stack>
        <Stack spacing={2} mb={{ base: 10, md: 0 }}>
          <Text fontWeight="bold">MORE FROM ASOS</Text>
          <Link href="#">Mobile and ASOS apps</Link>
          <Link href="#">ASOS Marketplace</Link>
          <Link href="#">Gift vouchers</Link>
          <Link href="#">Black Friday</Link>
          <Link href="#">ASOS x Thrift+</Link>
          <Link href="#">Discover the ASOS Credit Card</Link>
          <Link href="#">Help Improve the ASOS Website</Link>
        </Stack>
        <Stack spacing={2}>
          <Text fontWeight="bold">SHOPPING FROM:</Text>
          <Text>You are in</Text>
          <Image src='https://assets.asosservices.com/storesa/images/flags/in.png' h={'1rem'} w={'1rem'}  />
          <Link href="#">CHANGE</Link>
          <Text>Some of our international sites:</Text>
          <Box display={'grid'} gridTemplateColumns={'repeat(5, 1fr)'} gap={4}>
            <Image src='https://assets.asosservices.com/storesa/images/flags/es.png' h={'1rem'} />
            <Image src='https://assets.asosservices.com/storesa/images/flags/de.png' h={'1rem'}/>
            <Image src='https://assets.asosservices.com/storesa/images/flags/au.png' h={'1rem'}/>
            <Image src='https://assets.asosservices.com/storesa/images/flags/fr.png' h={'1rem'}/>
            <Image src='https://assets.asosservices.com/storesa/images/flags/us.png' h={'1rem'}/>
            <Image src='https://assets.asosservices.com/storesa/images/flags/it.png' h={'1rem'}/>
            <Image src='https://assets.asosservices.com/storesa/images/flags/nl.png' h={'1rem'}/>
            <Image src='https://assets.asosservices.com/storesa/images/flags/pl.png' h={'1rem'}/>
            <Image src='https://assets.asosservices.com/storesa/images/flags/se.png' h={'1rem'}/>
          </Box>
        </Stack>
      </Flex>
      <Divider my={4} />
      <Box display={'flex'} flexDirection={isSm? 'column':'row'} alignItems={'center'} justifyContent={'space-between'}>
      <Text fontSize="sm">
        &copy; {new Date().getFullYear()} ASOS. All rights reserved.
      </Text>

      <Text>Designed & Developed by Yash Gupta...</Text>
      </Box>
    </Box>
  )
}

export default Footer