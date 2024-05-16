// import {  createContext, useState } from 'react'

// export const MenSingleProduct= createContext()
// export const  MenSingleProvider = ({children}) => {

//   let [single, setSingle]= useState('iphone')
//   return (
//     <MenSingleProduct.Provider value={{single, setSingle}}>
//       {children}
//       </MenSingleProduct.Provider>
//   )
// }

import React, { createContext, useState } from 'react';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [Data, setData] = useState(
    {
      men: [
        {
            id: 1,
            img: 'https://images.asos-media.com/products/the-couture-club-co-ord-stripe-trim-knitted-shirt-in-white/206478885-1-white?$n_320w$&wid=317&fit=constrain',
            para: 'The Couture Club co-ord stripe trim knitted shirt in white',
            price: 33,
            color: 'white',
            type: 'shirts'

        },
        {
            id: 2,
            img: 'https://images.asos-media.com/products/the-couture-club-co-ord-rib-textured-short-sleeve-shirt-in-off-white/205978306-1-cream?$n_320w$&wid=317&fit=constrain',
            para: 'The Couture Club co-ord rib textured short sleeve shirt in off white',
            price: 75,
            color: 'cream',
            type: 'shirts'
        },
        {
            id: 3,
            img: 'https://images.asos-media.com/products/the-couture-club-co-ord-nylon-zip-through-utility-shirt-in-black/206478753-1-black?$n_320w$&wid=317&fit=constrain',
            para: 'The Couture Club co-ord nylon zip through utility shirt in black',
            price: 50,
            color: 'black',
            type: 'shirts'
        },
        {
            id: 4,
            img: 'https://images.asos-media.com/products/the-couture-club-baseball-shirt-in-off-white/205978358-1-cream?$n_320w$&wid=317&fit=constrain',
            para: 'The Couture Club baseball shirt in off white',
            price: 44,
            color: 'cream',
            type: 'shirts'

        },
        {
            id: 5,
            img: 'https://images.asos-media.com/products/new-balance-tote-bag-in-canvas-and-navy/205627645-1-canvas?$n_480w$&wid=476&fit=constrain',
            para: 'New Balance tote bag in canvas and navy',
            price: 111
        },
        {
            id: 6,
            img: 'https://images.asos-media.com/products/the-north-face-half-dome-logo-tote-bag-in-off-white/205823637-1-cream?$n_480w$&wid=476&fit=constrain',
            para: 'Guess Originals crest nylon jacket in khaki sajsjk saksjkk sajksjks jkasjkksjk asjksajk',
            price: 170
        },
          {
            id: 7,
            img:'https://images.asos-media.com/products/topman-knitted-sheer-crochet-polo-with-gold-lurex-yarn-in-stone/205561921-2?$n_480w$&wid=476&fit=constrain',
            para: 'Topman knitted sheer crochet polo with gold lurex yarn in stone',
            price: 89
          },
          {
            id: 8,
            img:'https://images.asos-media.com/products/river-island-salt-and-pepper-trucker-jacket-in-grey/206022135-1-grey?$n_750w$&wid=750&fit=constrain',
            para: 'River Island salt and pepper trucker jacket in grey',
            price: 99
          },
          // T-shirt
          {
            id: 9,
            img:'https://images.asos-media.com/products/the-couture-club-motocross-graphic-t-shirt-in-white/205978425-1-white?$n_320w$&wid=317&fit=constrain',
            para: 'The Couture Club motocross graphic t-shirt in white',
            price: 48,
            color: 'white',
            type: 't-shirts'
          },
          {
            id: 10,
            img:'https://images.asos-media.com/products/the-couture-club-co-ord-rib-textured-trousers-in-black/205978518-1-black?$n_320w$&wid=317&fit=constrain',
            para: 'The Couture Club washed pocket detail t-shirt in black',
            price: 48,
            color: 'black',
            type: 't-shirts'
          },
          {
            id: 11,
            img:'https://images.asos-media.com/products/the-couture-club-graphic-back-heavyweight-t-shirt-in-brown/205978585-2?$n_320w$&wid=317&fit=constrain',
            para: 'The Couture Club graphic back heavyweight t-shirt in brown',
            price: 42,
            color: 'brown',
            type: 't-shirts'
          },
          {
            id: 12,
            img:'https://images.asos-media.com/products/the-couture-club-graphic-back-heavyweight-t-shirt-in-black/205978465-2?$n_320w$&wid=317&fit=constrain',
            para: 'The Couture Club graphic back heavyweight t-shirt in black',
            price: 13,
            color: 'black',
            type: 't-shirts'
          },
          {
            id: 13,
            img:'https://images.asos-media.com/products/the-couture-club-fluffy-emblem-jumper-in-beige/205819437-1-beige?$n_320w$&wid=317&fit=constrain',
            para: 'The Couture Club blurred emblem graphic t-shirt in mocha',
            price: 22,
            color: 'beige',
            type: 't-shirts'
          },
          {
            id: 14,
            img:'https://images.asos-media.com/products/the-couture-club-oversized-riviera-back-print-t-shirt-in-white/206478836-2?$n_320w$&wid=317&fit=constrain',
            para: 'The Couture Club oversized riviera back print t-shirt in white',
            price: 17,
            color: 'white',
            type: 't-shirts'
          },
          {
            id: 15,
            img:'https://images.asos-media.com/products/the-couture-club-baseball-jersey-shirt-in-black/205978342-1-black?$n_320w$&wid=317&fit=constrain',
            para: 'The Couture Club baseball jersey shirt in black',
            price: 9,
            color: 'black',
            type: 't-shirts'
          },
          {
            id: 16,
            img:'https://images.asos-media.com/products/the-couture-club-cracked-print-emblem-relaxed-t-shirt-in-acid-grey/206381980-1-grey?$n_320w$&wid=317&fit=constrain',
            para: 'The Couture Club cracked print emblem relaxed t-shirt in acid grey',
            price: 11,
            color: 'grey',
            type: 't-shirts'
          },
          // shorts
          {
            id: 17,
            img:'https://images.asos-media.com/products/the-couture-club-co-ord-rib-textured-short-sleeve-shirt-in-brown/205978544-1-brown?$n_320w$&wid=317&fit=constrain',
            para: 'The Couture Club co-ord rib textured short sleeve shirt in brown',
            price: 7,
            color: 'brown',
            type: 'shorts'
          },
          {
            id: 18,
            img:'https://images.asos-media.com/products/the-couture-club-co-ord-rib-textured-shorts-in-off-white/205978398-1-cream?$n_320w$&wid=317&fit=constrain',
            para: 'The Couture Club co-ord rib textured shorts in off white',
            price: 9,
            color: 'CREAM',
            type: 'shorts'
          },
          {
            id: 20,
            img:'https://images.asos-media.com/products/the-couture-club-co-ord-raw-seam-jersey-shorts-in-charcoal/205978264-1-grey?$n_320w$&wid=317&fit=constrain',
            para: 'The Couture Club co-ord raw seam jersey shorts in charcoal',
            price: 12,
            color: 'grey',
            type: 'shorts'
          },
          {
            id: 21,
            img:'https://images.asos-media.com/products/the-couture-club-co-ord-stripe-trim-knitted-shorts-in-white/206478774-1-white?$n_320w$&wid=317&fit=constrain',
            para: 'The Couture Club varsity mesh shorts in white',
            price: 16,
            color: 'white',
            type: 'shorts'
          },
          {
            id: 22,
            img:'https://images.asos-media.com/products/the-couture-club-co-ord-nylon-zip-through-utility-shorts-in-black/206478822-5?$n_320w$&wid=317&fit=constrain',
            para: 'The Couture Club co-ord nylon zip through utility shorts in black',
            price: 18,
            color: 'black',
            type: 'shorts'
          },
          {
            id: 23,
            img:'https://images.asos-media.com/products/the-couture-club-camo-print-cargo-shorts-in-multi/205978321-1-multi?$n_320w$&wid=317&fit=constrain',
            para: 'The Couture Club camo print cargo shorts in multi',
            price: 29,
            color: 'multi',
            type: 'shorts'
          },
          // Hoodie
          {
            id: 24,
            img:'https://images.asos-media.com/products/the-couture-club-motocross-graphic-hoodie-in-charcoal/205978307-1-black?$n_320w$&wid=317&fit=constrain',
            para: 'The Couture Club motocross graphic hoodie in charcoal',
            price: 29,
            color: 'black',
            type: 'hoodie'
          },
          {
            id: 25,
            img:'https://images.asos-media.com/products/the-couture-club-blurred-emblem-graphic-hoodie-in-off-white/205978530-1-cream?$n_320w$&wid=317&fit=constrain',
            para: 'The Couture Club blurred emblem graphic hoodie in off white',
            price: 22,
            color: 'white',
            type: 'hoodie'
          },
          {
            id: 26,
            img:'https://images.asos-media.com/products/the-couture-club-blurred-emblem-graphic-hoodie-in-off-green/205978445-1-green?$n_320w$&wid=317&fit=constrain',
            para: 'The Couture Club blurred emblem graphic hoodie in off green',
            price: 34,
            color: 'GREEN',
            type: 'hoodie'
          },
          {
            id: 27,
            img:'https://images.asos-media.com/products/the-couture-club-blurred-emblem-graphic-hoodie-in-brown/205978508-4?$n_320w$&wid=317&fit=constrain',
            para: 'The Couture Club blurred emblem graphic hoodie in brown',
            price: 55,
            color: 'brown',
            type: 'hoodie'
          }
          // ,
          // {
          //   id: 28,
          //   img:'',
          //   para: '',
          //   price: ,
          //   color: '',
          //   type: ''
          // },
          // {
          //   id: 28,
          //   img:'',
          //   para: '',
          //   price: ,
          //   color: '',
          //   type: ''
          // },
          // {
          //   id: 28,
          //   img:'',
          //   para: '',
          //   price: ,
          //   color: '',
          //   type: ''
          // },
          // {
          //   id: 28,
          //   img:'',
          //   para: '',
          //   price: ,
          //   color: '',
          //   type: ''
          // },
          // {
          //   id: 28,
          //   img:'',
          //   para: '',
          //   price: ,
          //   color: '',
          //   type: ''
          // }


    
    ]
    }
    );
  
  return (
    <DataContext.Provider value={{ Data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export {DataProvider}

