import { Box } from '@chakra-ui/react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Womens from './pages/Womens/Womens'
import Mens from './pages/Mens/Mens'
// import Index from './components/Registration/Index'
import Signup from './components/Registration/Signup'
import Login from './components/Registration/Login'
import Products from './pages/Mens/Products'
import SingleMen from './pages/Mens/SingleMen'
// import MensHome from './pages/Mens/MensHome'
import Bag from './pages/Bag/Bag'
import Payment from './pages/Bag/Payment'
import PaymentRoute from './Routes/PaymentRoute'
import Footer from './components/Footer'
import MenHome from './pages/Mens/Index'


function App() {

  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path='/' element={<MenHome />} />  {/*this is Index.jsx file of Men */}
        <Route path='/womens' element={<Womens />} />
        <Route path='/mens' element={<Mens />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/mens/products' element={<Products />} />
        <Route path='/mens/products/:id' element={<SingleMen />} />

        <Route path='/bag' element={<Bag />} />
        <Route path='/payment' element={<PaymentRoute><Payment /></PaymentRoute>} />
        
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
