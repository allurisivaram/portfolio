import { Search2Icon } from '@chakra-ui/icons'
import { Card, Flex, Box, Text, Heading, Button, Image, HStack, Spacer, InputGroup, InputLeftElement, Input, VStack, SimpleGrid, Wrap, WrapItem, Center } from '@chakra-ui/react'
import React, { Fragment } from 'react'

type Props = {}

const HeroBanner = (props: Props) => {
  return (
    <Fragment>
        <Wrap spacing='30px' align='center' justify='center'>
            <WrapItem>
                <Center w='100%'>
                    <Box maxW='32rem' mt='100px'>
                        <Heading color='#4665b2'>Welcome to HomeShare.ca!</Heading>
                        <Text fontSize='lg'>
                            Our home sharing app connects you with people in your community who are looking for affordable rental homes in canada.
                        </Text>
                        <Button size='md' bg='#b33e92' mt='24px' color='#fff' borderRadius='0'>
                            Create a free account
                        </Button>
                        <Box my='30px'>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                <Search2Icon color='gray.300' />
                                </InputLeftElement>
                                <Input type='search' placeholder='Search Property...' />
                            </InputGroup>
                        </Box>
                    </Box>
                </Center>
            </WrapItem>
            <WrapItem>
                <Center w='100%'>
                <Box position='relative'>
                    <Image
                        src='https://nivaappstorage.blob.core.windows.net/images/house--img.png' 
                        alt=''
                        w='100%' 
                    />
                     <Box position='absolute' top='233px' left='152px'>
                        <HStack>
                            <Box boxShadow='dark-lg' rounded='md'  bg='#02aebe' w='70px' h='70px' m='8px'>
                                <Image 
                                    p='3'
                                    src='https://nivaappstorage.blob.core.windows.net/images/town-houses.png' 
                                    alt='' 
                                />
                            </Box>
                            <Box boxShadow='dark-lg' rounded='md' bg='#894c91' w='70px' h='70px' m='8px'>
                                <Image
                                    p='3'
                                    src='https://nivaappstorage.blob.core.windows.net/images/attached-houses.png' 
                                    alt='' 
                                />
                            </Box>
                        </HStack>
                        <HStack>
                            <Box boxShadow='dark-lg' rounded='md' bg='#bc427f' w='70px' h='70px' m='8px'>
                                <Image 
                                    p='3'
                                    src='https://nivaappstorage.blob.core.windows.net/images/building.png' 
                                    alt='' />
                            </Box>
                            <Box boxShadow='dark-lg' rounded='md' bg='#eb9c64' w='70px' h='70px' m='8px'>
                                <Image 
                                    p='3'
                                    src='https://nivaappstorage.blob.core.windows.net/images/apartment.png' 
                                    alt='' />
                            </Box>
                        </HStack>
                    </Box>
                </Box>
                </Center>
            </WrapItem>
        </Wrap>
    </Fragment>
  )
}

export default HeroBanner
