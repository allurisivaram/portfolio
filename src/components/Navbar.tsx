import {useState} from 'react'
import { BellIcon, PhoneIcon, Search2Icon } from "@chakra-ui/icons"
import { Avatar, Flex, HStack, Heading, Input, InputGroup, InputLeftElement, Spacer, WrapItem, Text, Box, Stack, Image, Card, Button, useDisclosure } from "@chakra-ui/react"
import Register from './Register'

type Props = {}

const Navbar = (props: Props) => {
  const {isOpen, onOpen, onClose} = useDisclosure()
   
  const [authModel, setAuthModel] = useState<string>()

  return (
    <Card w='100%' borderRadius='0' position='sticky' top='0' zIndex='2'>
        <Flex as='nav' p='10px' alignItems='center'>
            <HStack cursor='pointer'>
                <Box mx='10px'>
                    <Image src='https://nivaappstorage.blob.core.windows.net/images/share-home-image.png' alt='' w='2rem'/>
                </Box>
                <Box m='-3'>
                    <Text>HomeShare.ca</Text>
                </Box>
            </HStack>
            <Spacer/>
            <HStack spacing='20px'>
                <Box>
                <Text fontSize='md' cursor='pointer'>Buy</Text>
                </Box>
                <Box>
                <Text fontSize='md' cursor='pointer'>Rent</Text>
                </Box>
                <Box>
                <Text fontSize='md' cursor='pointer'>Sell</Text>
                </Box>
                <Box w='100%'>
                <Text fontSize='md' cursor='pointer'>Shared Rent</Text>
                </Box>
                <Box>
                    <Button colorScheme='teal' size='xs' borderRadius='0' w='70px' onMouseEnter={() => setAuthModel('login')} onClick={onOpen}>
                        LogIn
                    </Button>
                </Box>
                <Box>
                    <Button bg='#bc427f' color='#fff' size='xs' borderRadius='0' w='70px' onMouseEnter={() => setAuthModel('register')} onClick={onOpen}>
                        Register
                    </Button>
                </Box>
                <BellIcon color='gray.300' boxSize={7} cursor='pointer'/>
                <WrapItem  cursor='pointer'>
                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' boxSize={8}/>
                </WrapItem>
            </HStack>
        </Flex>
        <Register onClose={onClose} isOpen={isOpen} size='xl' authModal={authModel}/> 
    </Card>
  )
}

export default Navbar