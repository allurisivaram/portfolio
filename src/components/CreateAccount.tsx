import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, HStack, Avatar, Textarea, Text, Button, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import {IoBedOutline} from 'react-icons/io5'
import {LiaBathSolid} from 'react-icons/lia'
import {PiCarLight} from 'react-icons/pi'
import {AiOutlineMinus} from 'react-icons/ai'
import {AiOutlinePlus} from 'react-icons/ai'
import {BsHouseAdd} from 'react-icons/bs'

type Props = {
  onClose:void,
  isOpen:boolean,
  size:string
}

const CreateAccount = (props: Props) => {
  const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''
  
  return (
    <Drawer onClose={props.onClose} isOpen={props.isOpen} size={props.size}>
        <DrawerOverlay />
        <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader display='flex' alignItems='center'>
          <Box mr='10px'>
              <Image src='https://nivaappstorage.blob.core.windows.net/images/share-home-image.png' alt='' w='2rem'/>
          </Box>
          <Text>Add Property</Text>
        </DrawerHeader>
          <DrawerBody>
            <Box display='flex' justifyContent='right' alignItems='center'>
              <Button variant='outline' size='sm' >
                <BsHouseAdd fontSize='24px' color='#02aebe'/> 
                <Text ml='6px' color='#02aebe'>0</Text>
              </Button>
            </Box>
            <FormControl>
                <Box>
                  <FormLabel fontSize='14px' mt='7px'>First Name</FormLabel>
                  <Input type='email' value={input} onChange={handleInputChange} size='sm'/>
                  {!isError ? (
                    <FormHelperText>
                      Enter the email you'd like to receive the newsletter on.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  )}
                </Box>
                <Box>
                  <FormLabel fontSize='14px' mt='7px'>Last Name</FormLabel>
                  <Input type='email' value={input} onChange={handleInputChange} size='sm'/>
                  {!isError ? (
                    <FormHelperText>
                      Enter the email you'd like to receive the newsletter on.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  )}
                  
                </Box>
                <Box>
                  <FormLabel fontSize='14px' mt='7px'>Email</FormLabel>
                  <Input type='email' value={input} onChange={handleInputChange} size='sm'/>
                  {!isError ? (
                    <FormHelperText>
                      Enter the email you'd like to receive the newsletter on.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  )}
                </Box>
                <Box>
                  <FormLabel fontSize='14px' mt='7px'>Mobile/WhatsApp</FormLabel>
                  <Input type='email' value={input} onChange={handleInputChange} size='sm'/>
                  {!isError ? (
                    <FormHelperText>
                      Enter the email you'd like to receive the newsletter on.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  )}
                </Box>
                <Box>
                  <FormLabel fontSize='14px' mt='7px'>Owner Gov Id</FormLabel>
                  <Input type='email' value={input} onChange={handleInputChange} size='sm'/>
                  {!isError ? (
                    <FormHelperText>
                      Enter the email you'd like to receive the newsletter on.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  )}
                </Box>
                <Box>
                  <FormLabel fontSize='14px' mt='7px'>Upload Profile Image</FormLabel>
                  <Input
                    type='file'
                    value=''
                    onChange={handleInputChange}
                    size='xl'
                    bg='#02aebe'
                    color='#fff'
                  />
                </Box>
                <Box>
                  <FormLabel fontSize='14px' mt='7px'>Preffered Time To Contact</FormLabel>
                  <Input type='email' value={input} onChange={handleInputChange} size='sm'/>
                  {!isError ? (
                    <FormHelperText>
                      Enter the email you'd like to receive the newsletter on.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  )}
                </Box>
                <Box>
                  <FormLabel fontSize='14px' mt='7px'>Preffered To Share Home</FormLabel>
                  <Input type='email' value={input} onChange={handleInputChange} size='sm'/>
                  {!isError ? (
                    <FormHelperText>
                      Enter the email you'd like to receive the newsletter on.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  )}
                </Box>
                <Box>
                  <FormLabel fontSize='14px' mt='7px'>Community</FormLabel>
                  <Input type='email' value={input} onChange={handleInputChange} size='sm'/>
                  {!isError ? (
                    <FormHelperText>
                      Enter the email you'd like to receive the newsletter on.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  )}
                </Box>
                <Box>
                  <FormLabel fontSize='14px' mt='7px'>Property Address</FormLabel>
                  <Input type='email' value={input} onChange={handleInputChange} size='sm'/>
                  {!isError ? (
                    <FormHelperText>
                      Enter the email you'd like to receive the newsletter on.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  )}
                </Box>
                <Box my='30px'>
                  <HStack spacing='5px'>
                    <Box display='inline-flex' alignItems='center' justifyContent='space-around' border='1px solid #333' p='10px 0 10px 10px'>
                      <AiOutlineMinus/>
                      <Box mx='5px'>
                        <IoBedOutline fontSize="20px"/>
                      </Box>
                      <AiOutlinePlus/>
                      <Avatar
                          size='xs'
                          name='2'
                          ml='-10px'
                          mt='-50px'
                          bg='#02aebe'
                        />
                    </Box>
                    <Box display='inline-flex' alignItems='center' justifyContent='space-around' border='1px solid #333' p='10px 0 10px 10px'>
                      <AiOutlineMinus/>
                      <Box mx='5px'>
                        <LiaBathSolid fontSize="20px"/>
                      </Box>
                      <AiOutlinePlus/>
                      <Avatar
                        size='xs'
                        name='2'
                        ml='-10px'
                        mt='-50px'
                        bg='#02aebe'
                      />
                    </Box>
                    <Box display='inline-flex' alignItems='center' justifyContent='space-around' border='1px solid #333' p='10px 0 10px 10px'>
                      <AiOutlineMinus/>
                      <Box mx='5px'>
                        <PiCarLight fontSize="20px"/>
                      </Box>
                      <AiOutlinePlus/>
                      <Avatar
                          size='xs'
                          name='2'
                          ml='-10px'
                          mt='-50px'
                          bg='#02aebe'
                        />
                    </Box>
                  </HStack>
                </Box>
                <Box>
                  <FormLabel fontSize='14px' mt='7px'>Price</FormLabel>
                  <Input type='email' value={input} onChange={handleInputChange} size='sm'/>
                  {!isError ? (
                    <FormHelperText>
                      Enter the email you'd like to receive the newsletter on.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  )}
                </Box>
                <Box>
                  <FormLabel fontSize='14px' mt='7px'>Shared Price</FormLabel>
                  <Input type='email' value={input} onChange={handleInputChange} size='sm'/>
                  {!isError ? (
                    <FormHelperText>
                      Enter the email you'd like to receive the newsletter on.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  )}
                </Box>
                <Box>
                  <FormLabel fontSize='14px' mt='7px'>Furnished</FormLabel>
                  <Input type='email' value={input} onChange={handleInputChange} size='sm'/>
                  {!isError ? (
                    <FormHelperText>
                      Enter the email you'd like to receive the newsletter on.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  )}
                </Box>
                <Box>
                  <FormLabel fontSize='14px' mt='7px'>Pets Allowed</FormLabel>
                  <Input type='email' value={input} onChange={handleInputChange} size='sm'/>
                  {!isError ? (
                    <FormHelperText>
                      Enter the email you'd like to receive the newsletter on.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  )}
                </Box>
                <Box>
                  <FormLabel fontSize='14px' mt='7px'>Property Description</FormLabel>
                  <Textarea
                    value=''
                    // onChange={handleInputChange}
                    placeholder='Breif about property and near by localities'
                    size='xl'
                  />
                </Box>
                <Box>
                  <FormLabel fontSize='14px' mt='7px'>Upload Property Images</FormLabel>
                  <Input
                    type='file'
                    value=''
                    onChange={handleInputChange}
                    size='xl'
                    bg='#02aebe'
                    color='#fff'
                  />
                </Box>
                <Box display='flex' justifyContent='center' my='20px'>
                  <Button bg='#bc427f' color='#fff' variant='solid' size='sm' borderRadius='0' w="100%" isLoading={false}>
                    Add Property
                  </Button>
                </Box>
            </FormControl>
          </DrawerBody>
        </DrawerContent>
    </Drawer>
  )
}

export default CreateAccount