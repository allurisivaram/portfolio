import { Box, Center, Wrap, WrapItem, Image, Heading, Highlight, Text } from '@chakra-ui/react'
import React, { Fragment } from 'react'

type Props = {}

const CommunitySection = (props: Props) => {
  return (
    <Fragment>
        <Wrap spacing='30px' align='center' justify='center'>
            <WrapItem>
                <Center w='100%'>
                    <Box maxW='32rem' mt='100px'>
                        <Image
                            src='https://nivaappstorage.blob.core.windows.net/images/community.png' 
                            alt=''
                            w='100%' 
                        />
                    </Box>
                </Center>
            </WrapItem>
            <WrapItem>
                <Center w='100%'>
                    <Box>
                        <Text   
                            bgGradient='linear(to-l, #eb9c64,#bc427f, #894c91, #02aebe)'
                            bgClip='text'
                            fontSize='64'
                            fontWeight='bold'
                            textAlign='center'
                            textShadow='lg'
                            >
                            “Community living<br></br>
                            for a better tomorrow”
                        </Text>
                    </Box>
                </Center>
            </WrapItem>
        </Wrap>
    </Fragment>
  )
}

export default CommunitySection