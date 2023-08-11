import {Suspense} from 'react'
import './App.css'
import useCard from './hooks/useCard';
import { Center, Container, Flex, Grid, GridItem, Text, Square, Box, SimpleGrid } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import BenefitsSection from './components/BenefitsSection';
import ProvinceSection from './components/ProvinceSection';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';
import CommunityBanner from './components/CommunityBanner';
import ConnectingFormSection from './components/ConnectingFormSection';

function App() {
// const URL = 'https://jsonplaceholder.typicode.com/users';
// const Options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'e646084afemshbadbebdc25709e2p1ede3ajsn38f93ffe0abc',
// 		'X-RapidAPI-Host': 'realty-in-ca1.p.rapidapi.com'
// 	}
// };
  // const ProductCard = useCard('https://i.pinimg.com/originals/6b/35/4d/6b354dd8f8dc2de31dd5fdf1b4ee027d.png', '');

  return (
    <>
        {/* <h1>Welcome to Niva</h1>
        <p> The smart way to share home</p>
        {ProductCard} */}
        <Navbar/>
        <Container maxW='container.xl'>
          <HeroBanner/>
          <ProvinceSection/>
          <BenefitsSection/>
          <CommunitySection/>
          {/* <ConnectingFormSection/> */}
          <CommunityBanner/>
        </Container>
        <Footer/>
    </>
  )
}

export default App
