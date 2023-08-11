import {useState, memo, useEffect} from 'react'
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, ModalCloseButton, Wrap, WrapItem, Center, Box, Image, FormControl, Input, FormLabel, Divider, Text} from '@chakra-ui/react'
import {useDisclosure} from '@chakra-ui/react'


type Props = {
  onClose:void,
  isOpen:boolean,
  size:string, 
  authModal:string  
}

const Register = (props: Props) => {
   
const [goTo, setGoTo] = useState<string>()

const register = props.authModal || goTo


console.log('authModal',  goTo );


  return (
    <Modal closeOnOverlayClick={false} onClose={props.onClose} size={props.size} isOpen={props.isOpen}>
        <ModalOverlay />
        <ModalContent>
            <ModalCloseButton />
            <ModalBody>
                <Wrap spacing='30px' align='center' justify='center'>
                    <WrapItem>
                        <Center>
                            <Box textAlign='center'>
                                <Image src='https://nivaappstorage.blob.core.windows.net/images/share-home-image.png' alt='' w='250px'/>
                                <Button colorScheme='teal' variant='link' size='sm' onClick={() => setGoTo('login')}>{(register || goTo === "register") ? 'Login' : 'Register'}</Button>
                            </Box>
                            <Box h='300px' ml='25px'>
                               <Divider orientation='vertical' />
                            </Box>
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center>
                            <FormControl isRequired>
                                <Text textAlign='center' my='20px'>{register || goTo === "register"  ? 'Register' : 'Login'}</Text>
                                { register === "register"  ?
                                <Box>
                                    <FormLabel fontSize='14px'>Name</FormLabel>
                                    <Input placeholder='user@gmail.com' size='sm'/>
                                </Box> : ''
                                }
                                <Box>
                                    <FormLabel fontSize='14px' mt='10px'>Email</FormLabel>
                                    <Input placeholder='user@gmail.com' size='sm'/>
                                    <FormLabel fontSize='14px' mt='10px'>Password</FormLabel>
                                    <Input placeholder='password' size='sm'/>
                                </Box>
                                <Box display='flex' justifyContent='center' my='20px'>
                                    <Button bg='#bc427f' color='#fff' variant='solid' size='sm' borderRadius='0' w="100%" isLoading={false}>
                                    {register === "register"  ? 'Register' : 'Login'}
                                    </Button>
                                </Box>
                            </FormControl>
                        </Center>
                    </WrapItem>
                </Wrap>
            </ModalBody>    
        </ModalContent>
    </Modal>
  )
}

export default memo(Register)