import { Box, Grid, Heading, Image, Select, Text, useMediaQuery, useStatStyles } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams, useSearchParams } from 'react-router-dom'

import { DataContext } from '../../context/DataProvider'

const Products = () => {

    let { Data, setData } = useContext(DataContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const [isLg] = useMediaQuery("(min-width: 1024px)")
  const [isMd] = useMediaQuery("(min-width: 768px)")
  const [isSm]= useMediaQuery("(max-width: 480px)")

    let [filtered, setFiltered] = useState({
        // sort: '',
        // type: '',
        // color: ''
        sort: searchParams.get('sort') || '',
        type: searchParams.get('type') || '',
        color: searchParams.get('color') || ''
    })

    
    
    // console.log(searchParams.get('color'))
    useEffect(() => {
        setSearchParams(filtered);
    }, [filtered, setSearchParams]);

   



    // let Asos= JSON.parse(localStorage.getItem('asos'))|| {};
    let singleMenObj = JSON.parse(localStorage.getItem('singleMen')) || {};

    let handleClick = (elem) => {
        // Asos.singleMen= [elem];
        // setSingleMen(elem)
        localStorage.setItem('singleMen', JSON.stringify(elem))
    }




    return (
        <Box>
            <Box h={'4rem'} bg={'#EEEEEE'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Select placeholder='Sort' w={'13rem'} border={'1px solid lightgrey'} onChange={(e) => setFiltered({ ...filtered, sort: e.target.value })}>
                    <option value='high-low'>Price High To Low</option>
                    <option value='low-high'>Price Low To High</option>
                </Select>

                <Select placeholder='Product Type' w={'13rem'} border={'1px solid lightgrey'} onChange={(e) => setFiltered({ ...filtered, type: e.target.value })}>
                    <option value='t-shirts'>T-Shirts</option>
                    <option value='shirts'>Shirts</option>
                    <option value='hoodie'>Hoodie</option>
                    <option value='shorts'>Shorts</option>
                </Select>

                <Select placeholder='Color' w={'13rem'} border={'1px solid lightgrey'} onChange={(e) => setFiltered({ ...filtered, color: e.target.value })}>
                    <option value='black'>Black</option>
                    <option value='white'>White</option>
                    <option value='brown'>Brown</option>
                    <option value='grey'>Grey</option>
                    <option value='cream'>Cream</option>
                    <option value='beige'>Beige</option>
                    <option value='multi'>Multi</option>
                </Select>
            </Box>
            <Grid bg={'white'} templateColumns={{base: 'repeat(1, 1fr)',
                sm: 'repeat(1, 1fr)', 
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)',
                xl: 'repeat(4, 1fr)',
                '2xl': 'repeat(4, 1fr)' }} gap={6} justifyContent={'center'} p={isSm? '1rem 1rem':'2rem 5rem'}>
                {
                    Data.men
                        .filter((elem) => {
                           
                            if (filtered.color !== '') {
                                return elem.color === filtered.color;
                            }
                            // If color filter is not selected, include all items
                            return true;

                        })
                        .filter((elem) => {

                            if (filtered.type !== '') {
                                return elem.type === filtered.type;
                                
                            }
                            return true;

                        })
                        .map((elem, i) => (
                            
                            <NavLink key={i} to={`${elem.id}`} onClick={() => handleClick(elem)}>
                                <Box h={isSm? '24rem':'31rem'} padding={'1rem'} w={isSm&& '100%'}>
                                    <Box overflow={'hidden'} h={isSm?'17rem': '25rem'} bg={'black'} display={'flex'} justifyContent={'center'} alignItems={'center'} >
                                        <Image src={elem.img} h={'100%'} w={'100%'} />
                                    </Box>

                                    <Text
                                        noOfLines={2} // Chakra UI's shorthand for line clamping with ellipses
                                        overflow="hidden"
                                        display="-webkit-box"
                                    >
                                        {elem.para}
                                    </Text>
                                    <Heading as='h1' size={'md'}>${elem.price}</Heading>
                                </Box>
                            </NavLink>
                            // {
                            //     !elem && <Heading>No data found</Heading>
                            // }
                        ))
                }
            </Grid>
        </Box>
    )
}

export default Products