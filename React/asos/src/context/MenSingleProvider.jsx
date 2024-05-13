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

export const MenSingleProductContext = createContext();

const MenSingleProvider = ({ children }) => {
  const [mensData, setMensData] = useState([
    {
        id: 1,
        img: 'https://images.asos-media.com/products/new-balance-tote-bag-in-canvas-and-navy/205627645-1-canvas?$n_480w$&wid=476&fit=constrain',
        para: 'New Balance tote bag in canvas and navy',
        price: 80
    },
    {
        id: 2,
        img: 'https://images.asos-media.com/products/the-north-face-half-dome-logo-tote-bag-in-off-white/205823637-1-cream?$n_480w$&wid=476&fit=constrain',
        para: 'Guess Originals crest nylon ',
        price: 75
    },
    {
        id: 3,
        img: 'https://i.pinimg.com/originals/b6/91/12/b691121e55512c8fdb3723f27c3a3744.jpg',
        para: 'New Balance tote bag in canvas and navy',
        price: 50
    },
    {
        id: 4,
        img: 'https://tse3.mm.bing.net/th?id=OIP.KsMSos03Ccw6lt36oe3BxQHaE7&pid=Api&P=0&h=220',
        para: 'Guess Originals crest nylon jacket in khaki',
        price: 44
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
        img:'https://images.asos-media.com/products/topman-knitted-sheer-crochet-polo-with-gold-lurex-yarn-in-stone/205561921-2?$n_480w$&wid=476&fit=constrain',
        para: 'Topman knitted sheer crochet polo with gold lurex yarn in stone',
        price: 89
      },
      {
        img:'https://images.asos-media.com/products/river-island-salt-and-pepper-trucker-jacket-in-grey/206022135-1-grey?$n_750w$&wid=750&fit=constrain',
        para: 'River Island salt and pepper trucker jacket in grey',
        price: 99
      }
      // ,
      // {
      //   img:'',
      //   para: '',
      //   price: 
      // },
      // {
      //   img:'',
      //   para: '',
      //   price: 
      // }

]);
  
  return (
    <MenSingleProductContext.Provider value={{ mensData, setMensData }}>
      {children}
    </MenSingleProductContext.Provider>
  );
};

export {MenSingleProvider}

