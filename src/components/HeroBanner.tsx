import { Search2Icon } from '@chakra-ui/icons'
import {FaFilter} from 'react-icons/fa'
import {TbAdjustmentsDollar} from 'react-icons/tb'
import { Box, Text, Heading, Button, Image, HStack, InputGroup, InputLeftElement, Input, Wrap, WrapItem, Center, Stack, Switch, FormControl, FormLabel, SimpleGrid, useDisclosure } from '@chakra-ui/react'
import { Fragment, useState } from 'react'
import {useDispatch} from 'react-redux'
import SearchFilters from './SearchFilters'
import {addUser} from '../store/actions'
import { useBoolean } from '@chakra-ui/react'
import CreateAccount from './CreateAccount'



type Props = {}

const HeroBanner = (props: Props) => {

    const [priceSliderValue, setPriceSliderValue] = useState<number>(500)
    const [bedSliderValue, setBedSliderValue] = useState<number>(2)
    const [bathSliderValue, setBathSliderValue] = useState<number>(1)
    const [showFilters, setShowFilters] = useState<boolean>(false)
    const [flag, setFlag] = useBoolean()
    const [query, setQuery] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure()
    //  const deferredQuery = useDefferedValue(query);

  const searchHandler = (e:any) => {
    setQuery(e.target.value)
    dispatch(addUser(query))
  }

  const dispatch = useDispatch();

  console.log('SEARCH VAL :', query)
  
  return (
    <Fragment>
        <Wrap spacing='30px' align='center' justify='center'>
            <WrapItem>
                <Center w='100%'>
                    <Box maxW='32rem' mt='50px'>
                        <Heading>
                            <Text  
                                bgGradient='linear(to-l, #eb9c64,#bc427f, #894c91, #02aebe)'
                                bgClip='text'
                                fontSize='64'
                                fontWeight='bold'
                                textAlign='center'
                            >
                                Welcome to HomeShare.ca!
                            </Text>
                        </Heading>
                        <Text fontSize='lg'>
                            Our home sharing app connects you with people in your community who are looking for affordable rental homes in canada.
                        </Text>
                        <Button size='md' bg='#bc427f' mt='24px' color='#fff' borderRadius='0' onClick={() => onOpen()}>
                            Create a free account
                        </Button>
                        <Box w='530px' my='30px' display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
                            <form>
                                <InputGroup>
                                    <InputLeftElement pointerEvents='none'>
                                    <Search2Icon color='gray.300' />
                                    </InputLeftElement>
                                    <Input width='500px' type='text' placeholder='Search Property...' onChange={(e:any) => searchHandler(e)}/>
                                </InputGroup>
                            </form>
                            <TbAdjustmentsDollar fontSize='46px' color='#319795' onClick={setFlag.toggle} cursor='pointer'/>
                        </Box>
                    </Box>
                </Center>
            </WrapItem>
            <CreateAccount onClose={onClose} isOpen={isOpen} size='xs'/>
            <WrapItem mt='200px' minW='150px' maxW='150px'>
                { flag ?
                <Center>
                    <Box pr='50px'>
                        <SearchFilters
                        id='price'
                        orientation='vertical'
                        minH='150px'
                        defaultValue={500}
                        min={50} 
                        max={1500}
                        colorScheme='teal'
                        backgroundColor='teal.500'
                        color='white'
                        fontSize='11px'
                        placement='right'
                        setValue={(v) => setPriceSliderValue(v)}
                        sliderValue={`${priceSliderValue}$`}
                        />
                    </Box>
                    <Box pr='50px'>
                        <SearchFilters
                        id='price'
                        orientation='vertical'
                        minH='150px'
                        defaultValue={2}
                        min={1} 
                        max={6}
                        colorScheme='orange'
                        backgroundColor='#DD6B20'
                        color='white'
                        fontSize='11px'
                        placement='right'
                        setValue={(v) => setBedSliderValue(v)}
                        sliderValue={`${bedSliderValue}Bed`}
                        />
                    </Box>
                    <Box>
                        <SearchFilters
                        id='price'
                        orientation='vertical'
                        minH='150px'
                        defaultValue={1}
                        min={1} 
                        max={4}
                        colorScheme='purple'
                        backgroundColor ='purple'
                        color='white'
                        fontSize='11px'
                        placement='right'
                        setValue={(v) => setBathSliderValue(v)}
                        sliderValue={`${bathSliderValue}Bath`}
                        />
                    </Box>
                </Center>
                :
                <Center>
                    <Image 
                        src='https://nivaappstorage.blob.core.windows.net/images/people--img.png' 
                        alt='' 
                        w='150px'
                    />
                </Center>
                }
            </WrapItem>
            <WrapItem>
                <Center w='100%'>
                <Box position='relative'>
                    <Image
                        src='https://nivaappstorage.blob.core.windows.net/images/house--image.png' 
                        alt=''
                        w='100%' 
                    />
                     <Box position='absolute' top='154px' left='80px'>
                        <HStack>
                            <Box boxShadow='dark-lg' rounded='md'  bg='#02aebe' w='70px' h='70px' m='8px' cursor='pointer'>
                                <Image 
                                    p='3'
                                    src='https://nivaappstorage.blob.core.windows.net/images/town-houses.png' 
                                    alt='' 
                                />
                            </Box>
                            <Box boxShadow='dark-lg' rounded='md' bg='#894c91' w='70px' h='70px' m='8px' cursor='pointer'>
                                <Image
                                    p='3'
                                    src='https://nivaappstorage.blob.core.windows.net/images/attached-houses.png' 
                                    alt='' 
                                />
                            </Box>
                        </HStack>
                        <HStack>
                            <Box boxShadow='dark-lg' rounded='md' bg='#bc427f' w='70px' h='70px' m='8px' cursor='pointer'>
                                <Image 
                                    p='3'
                                    src='https://nivaappstorage.blob.core.windows.net/images/building.png' 
                                    alt='' />
                            </Box>
                            <Box boxShadow='dark-lg' rounded='md' bg='#eb9c64' w='70px' h='70px' m='8px' cursor='pointer'>
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
