import React, { Fragment } from 'react'
import { Box, Image, Text , Wrap, WrapItem, Center, Stack, Input, Button} from '@chakra-ui/react'
import CommunityCards from './CommunityCards'

type Props = {}

const CommunityBanner = (props: Props) => {
  return (
    <Fragment>
        <Wrap spacing='80px' align='top' justify='center' mt='50px'>
            <WrapItem>
                <CommunityCards/>
            </WrapItem>
            <WrapItem>
                <Center w='100%'>
                    <Text 
                        bgGradient='linear(to-l, #eb9c64,#bc427f, #894c91, #02aebe)'
                        bgClip='text'
                        fontSize='64'
                        fontWeight='bold'
                        textAlign='center'
                        textShadow='lg'>
                        “Find People <br></br>
                        In Your Community”
                    </Text>
                </Center>
            </WrapItem>
            <WrapItem>
                <Center w='100%'>
                    <Box>
                    <Image
                            src='https://nivaappstorage.blob.core.windows.net/images/people-img.png' 
                            alt=''
                            w='100%' 
                        />
                        <Stack spacing={3} width='400px'>
                           <Input placeholder='City' size='md' />
                           <Input placeholder='Location' size='md' />
                           <Input placeholder='Community' size='md' />
                           <Button size='md' bg='#bc427f' mt='24px' color='#fff' borderRadius='0'>
                              Connect People
                           </Button>
                        </Stack>
                    </Box>
                </Center>
            </WrapItem>
        </Wrap>
    </Fragment>
  )
}

export default CommunityBanner