import { Box, Grid, Heading, Image, Text, useStatStyles } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

import  {MenSingleProductContext } from '../../context/MenSingleProvider'

const Products = () => {

    // let data = [
    //     {
    //         id: 1,
    //         img: 'https://images.asos-media.com/products/new-balance-tote-bag-in-canvas-and-navy/205627645-1-canvas?$n_480w$&wid=476&fit=constrain',
    //         para: 'New Balance tote bag in canvas and navy',
    //         price: 80
    //     },
    //     {
    //         id: 2,
    //         img: 'https://images.asos-media.com/products/the-north-face-half-dome-logo-tote-bag-in-off-white/205823637-1-cream?$n_480w$&wid=476&fit=constrain',
    //         para: 'Guess Originals crest nylon ',
    //         price: 75
    //     },
    //     {
    //         id: 3,
    //         img: 'https://i.pinimg.com/originals/b6/91/12/b691121e55512c8fdb3723f27c3a3744.jpg',
    //         para: 'New Balance tote bag in canvas and navy',
    //         price: 50
    //     },
    //     {
    //         id: 4,
    //         img: 'https://tse3.mm.bing.net/th?id=OIP.KsMSos03Ccw6lt36oe3BxQHaE7&pid=Api&P=0&h=220',
    //         para: 'Guess Originals crest nylon jacket in khaki',
    //         price: 44
    //     },
    //     {
    //         id: 5,
    //         img: 'https://images.asos-media.com/products/new-balance-tote-bag-in-canvas-and-navy/205627645-1-canvas?$n_480w$&wid=476&fit=constrain',
    //         para: 'New Balance tote bag in canvas and navy',
    //         price: 111
    //     },
    //     {
    //         id: 6,
    //         img: 'https://images.asos-media.com/products/the-north-face-half-dome-logo-tote-bag-in-off-white/205823637-1-cream?$n_480w$&wid=476&fit=constrain',
    //         para: 'Guess Originals crest nylon jacket in khaki sajsjk saksjkk sajksjks jkasjkksjk asjksajk',
    //         price: 170
    //     }
    //     //   {
    //     //     img:'',
    //     //     para: '',
    //     //     price: 
    //     //   }
    // ]

    let {mensData, setMensData}= useContext(MenSingleProductContext);
    // let [singleMen, setSingleMen]= useState({})
    // console.log(singleMen)
    // let {id}= useParams();
    // console.log(id)

    // let Asos= JSON.parse(localStorage.getItem('asos'))|| {};
    let singleMenObj= JSON.parse(localStorage.getItem('singleMen'))|| {};

    let handleClick=(elem)=>{
        // Asos.singleMen= [elem];
        // setSingleMen(elem)
        localStorage.setItem('singleMen',JSON.stringify(elem))
        
        
    } 


    return (
        <Grid bg={'white'} templateColumns={'repeat(4, 1fr)'} gap={6} justifyContent={'center'} p={'2rem 5rem'}>
            {
                mensData
                // .filter((elem, i){
                //     return elem.id===
                // })
                .map((elem, i) => (
                    <NavLink key={i} to={`${elem.id}`} onClick={()=> handleClick(elem)}>
                    <Box h={'31rem'} padding={'1rem'}>
                        <Box overflow={'hidden'} h={'25rem'} bg={'black'} display={'flex'} justifyContent={'center'} alignItems={'center'} >
                            <Image src={elem.img} h={'100%'} />
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
                ))
            }
        </Grid>
    )
}

export default Products