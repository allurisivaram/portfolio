import { Image, Text, Card, CardHeader, CardBody, CardFooter, Button, Collapse, Box, useDisclosure, Badge } from '@chakra-ui/react'
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { Flex } from '@chakra-ui/react'
import StarRating from "../components/StarRating";
import { useState } from 'react';
import { FaHeart, FaBed, FaBath, FaCar, FaShareAlt, FaMobileAlt, FaPhone, FaLocationArrow } from "react-icons/fa";

type Props = {
  src: string;
  alt: string;
}

const highliter = {
  backgroundColor:'#fd2903', 
  height:'2px'
}

const ProductCard = () => {
  const { isOpen, onToggle } = useDisclosure()
  const [rating, setRating] = useState(0);

  const CollapseEx = () => {
    return (
      <>
        <Collapse in={isOpen} animateOpacity>
          <Box
            p='5px'
            color='white'
            mt='1'
            shadow='md'
          >
            <Flex flexDirection='row' justifyContent='space-evenly'>
              <Image
                boxSize='60px'
                objectFit='cover'
                src='https://nivaappstorage.blob.core.windows.net/images/img-02.jpg'
                alt='Dan Abramov'
              />
              <Image
                boxSize='60px'
                objectFit='cover'
                src='https://nivaappstorage.blob.core.windows.net/images/img-03.jpg'
                alt='Dan Abramov'
              />
              <Image
                boxSize='60px'
                objectFit='cover'
                src='https://nivaappstorage.blob.core.windows.net/images/img-04.jpg'
                alt='Dan Abramov'
              />
              <Box position='relative'>
                <Image
                  boxSize='60px'
                  objectFit='cover'
                  src='https://nivaappstorage.blob.core.windows.net/images/img-05.jpg'
                  alt='Dan Abramov'
                />
                <Box position='absolute' top='3.5' left='3.5' zIndex='999' backgroundColor='#ffffffdf' borderRadius='full' p='1'>
                  <Text fontSize='lg' as='b' color='red'>+3</Text>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Collapse>
      </>
    )
  }

  return(
  <Card maxW='xs' boxShadow='md' bg='white'>
    <CardBody p='-0.5'>
      <Flex>
        <Box position='relative' mr='2'>
          <Image
            boxSize='119px'
            objectFit='cover'
            src='https://nivaappstorage.blob.core.windows.net/images/img-01.jpg'
            alt='Dan Abramov'
          />
        </Box>
        <Box 
            position='absolute' 
            top='1'
            left='1'
            zIndex='2'
            >
          <FaHeart 
            cursor={"pointer"}
            size={20}
            transition="color 200ms"
            color='tomato'
          />
        </Box>
        <Flex flexDirection='column' w='65%'>
          <Flex flexDirection='row' justifyContent='space-between' alignItems='center'>
            <Box>
              <StarRating rating={rating} setRating={setRating} />
            </Box>
            <Box>
              <Badge borderRadius='full' px='2' colorScheme='teal' mr='2'>
                <Text fontSize='2xs'>New</Text>
              </Badge>
            </Box>
          </Flex>
          <Text fontSize='md' as='b' color='tomato'>$2700 Condo for Rent</Text>
          <Text fontSize='xs'>3883 Mississauga, ON, Canada</Text>
          <Text fontSize='2xs' color='gray' ><b>Fully Furnished</b> | Area 700Sft</Text>
          <Flex flexDirection='row' justifyContent='space-between' alignItems='center'>
          <Box position='relative'mt='2'>
            <FaBed size={14}/>
            <Box position='absolute' top='-4' left='2' zIndex='2'>
              <Badge borderRadius='full' px='1' colorScheme='teal'>
                <Text fontSize='2xs'>1</Text>
              </Badge>
            </Box>
          </Box>
          <Box position='relative'mt='2'>
                <FaBath size={12}/>
            <Box position='absolute' top='-4' left='2' zIndex='2'>
              <Badge borderRadius='full' px='1' colorScheme='teal'>
                <Text fontSize='2xs'>1</Text>
              </Badge>
            </Box>
          </Box>
          <Box position='relative'mt='2'>
            <FaCar size={14}/>
            <Box position='absolute' top='-4' left='2' zIndex='2'>
              <Badge borderRadius='full' px='1' colorScheme='teal'>
                <Text fontSize='2xs'>1</Text>
              </Badge>
            </Box>
          </Box>
          <Box pl='5'>
            <FaPhone size={12} color='#999'/>
          </Box>
          <Box>
            <FaShareAlt size={12} color='#999'/>
          </Box>
          <Box>
            <FaLocationArrow size={12} color='#999'/>
          </Box>
            { 
              isOpen ? <ChevronUpIcon w={8} h={8} color="red.500" onClick={onToggle}/> 
              : <ChevronDownIcon w={8} h={8} color="red.500" onClick={onToggle}/>
            }
          </Flex>
        </Flex>
      </Flex>
      <CollapseEx/>
    </CardBody>
    <div style={highliter}></div>
  </Card>
  )
}

const useCard = (src:string, alt:string) => {
      return (
         <ProductCard/>
      ) 
};

export default useCard;