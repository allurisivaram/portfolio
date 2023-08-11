import { Box, Card, Flex, Heading, Highlight, Image, Text } from '@chakra-ui/react'
import React, { Fragment } from 'react'

type Props = {}

const ProvinceSection = (props: Props) => {
  return (
    <Fragment>
        <Flex my='10px'>
            <Heading lineHeight='tall'>
                <Highlight
                    query={['spotlight', 'emphasize', 'Accentuate']}
                    styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
                >
                    Trending Cities
                </Highlight>
            </Heading>
        </Flex>
        <Flex flexDirection='row' justifyContent='space-around' alignItems='center' mb='100px'>
            <Box boxShadow='lg' rounded='xl' bg='white' w='180px' h='250px' backgroundColor='#02aebe' cursor='pointer'>
                <Image
                    rounded='xl' 
                    src='https://nivaappstorage.blob.core.windows.net/images/mississauga-ontario.png' 
                    alt='' 
                />
                <Box textAlign='center' pt='6px'>
                <Text fontSize='lg' as='b' color='whiteAlpha.900'>Mississauga</Text>
                </Box>
            </Box>
            <Box boxShadow='lg' rounded='xl' bg='white' w='180px' h='250px' backgroundColor='#4665b2' cursor='pointer'>
                <Image
                    rounded='xl' 
                    src='https://nivaappstorage.blob.core.windows.net/images/oakville-ontario.png' 
                    alt='' 
                />
                <Box textAlign='center' pt='6px'>
                <Text fontSize='lg' as='b' color='whiteAlpha.900'>Oakville</Text>
                </Box>
            </Box>
            <Box boxShadow='lg' rounded='xl' bg='white' w='180px' h='250px' backgroundColor='#894c91' cursor='pointer'>
                <Image 
                    rounded='xl'
                    src='https://nivaappstorage.blob.core.windows.net/images/scarbrough-ontario.png' 
                    alt='' 
                />
                <Box textAlign='center' pt='6px'>
                <Text fontSize='lg' as='b' color='whiteAlpha.900'>Scarbrough</Text>
                </Box>
            </Box>
            <Box boxShadow='lg' rounded='xl' bg='white' w='180px' h='250px' backgroundColor='#bc427f' cursor='pointer'>
                <Image 
                    rounded='xl'
                    src='https://nivaappstorage.blob.core.windows.net/images/toronto-ontario.png' 
                    alt='' 
                />
                <Box textAlign='center' pt='6px'>
                <Text fontSize='lg' as='b' color='whiteAlpha.900'>Toronto</Text>
                </Box>
            </Box>
            <Box boxShadow='lg' rounded='xl' bg='white' w='180px' h='250px' backgroundColor='#02aebe' cursor='pointer'>
                <Image 
                    rounded='xl'
                    src='https://nivaappstorage.blob.core.windows.net/images/hamilton-ontario.png' 
                    alt='' 
                />
                <Box textAlign='center' pt='6px'>
                <Text fontSize='lg' as='b' color='whiteAlpha.900'>Hamilton</Text>
                </Box>
            </Box>
            <Box boxShadow='lg' rounded='xl' bg='white' w='180px' h='250px' backgroundColor='#eb9c64' cursor='pointer'>
                <Image 
                    rounded='xl'
                    src='https://nivaappstorage.blob.core.windows.net/images/ajax-ontario.png' 
                    alt='' 
                />
                <Box textAlign='center' pt='6px'>
                <Text fontSize='lg' as='b' color='whiteAlpha.900'>Ajax</Text>
                </Box>
            </Box>
        </Flex>
    </Fragment>
  )
}

export default ProvinceSection