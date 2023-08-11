import { Box, HStack, Text, useBoolean } from '@chakra-ui/react'
import React, { Fragment, useState } from 'react'

type Props = {}

const CommunityCards = (props: Props) => {

    const [flag, setFlag] = useBoolean()

    const showUp = flag ? '-80px' : '0';
    const ariaShow = flag ? 'true' : 'false'

  return(
    <Fragment>
        <HStack position='relative' mt='300px'>
            <Box backgroundColor='#02aebe' height='300px' width='100px' boxShadow='xs' rounded='xl' position='absolute' top={showUp} left='50px' zIndex='3' aria-expanded="false" onClick={setFlag.toggle}>
                <Text transform='rotate(270deg)' ml='-50px' mt='100px' color='#fff'>Telugu</Text>
            </Box>
            <Box backgroundColor='#bc427f' height='300px' width='100px' boxShadow='xs' rounded='xl' position='absolute' top={showUp}  left='100px' zIndex='3' aria-expanded="false"  onClick={setFlag.toggle}>
                <Text transform='rotate(270deg)'ml='-50px' mt='100px' color='#fff'>Tamil</Text>
            </Box>
            <Box backgroundColor='#894c91' height='300px' width='100px' boxShadow='xs' rounded='xl' position='absolute' top='0' left='150px' zIndex='4'>
                <Text transform='rotate(270deg)' ml='-50px' mt='100px' color='#fff'>Kanadam</Text>
            </Box>
            <Box backgroundColor='#eb9c64' height='300px' width='100px' boxShadow='xs' rounded='xl' position='absolute' top='0' left='200px' zIndex='5'>
                <Text transform='rotate(270deg)' ml='-50px' mt='100px' color='#fff'>Hindi</Text>
            </Box>
            <Box backgroundColor='#bc427f' height='300px' width='100px' boxShadow='xs' rounded='xl' position='absolute' top='0' left='250px' zIndex='6'>
                <Text transform='rotate(270deg)' ml='-50px' mt='100px' color='#fff'>Bengali</Text>
            </Box>
            <Box backgroundColor='#02aebe' height='300px' width='100px' boxShadow='xs' rounded='xl' position='absolute' top='0' left='300px' zIndex='7'>
                <Text transform='rotate(270deg)' ml='-50px' mt='100px' color='#fff'>Gujarati</Text> 
            </Box>
            <Box backgroundColor='#894c91' height='300px' width='100px' boxShadow='xs' rounded='xl' position='absolute' top='0' left='350px' zIndex='8'>
                <Text transform='rotate(270deg)' ml='-50px' mt='100px' color='#fff'>Punjabi</Text> 
            </Box>
            <Box backgroundColor='#eb9c64' height='300px' width='100px' boxShadow='xs' rounded='xl' position='absolute' top='0' left='400px' zIndex='9'>
                <Text transform='rotate(270deg)' ml='-50px' mt='100px' color='#fff'>Chinese</Text> 
            </Box>
            <Box backgroundColor='#bc427f' height='300px' width='100px' boxShadow='xs' p='6' rounded='xl' position='absolute' top='0' left='450px' zIndex='10'>
                <Text transform='rotate(270deg)' ml='-50px' mt='100px' color='#fff'>Filipino</Text>  
            </Box>
            <Box backgroundColor='#02aebe' height='300px' width='100px' boxShadow='xs' p='6' rounded='xl' position='absolute' top='0' left='500px' zIndex='11'>
                <Text transform='rotate(270deg)' ml='-50px' mt='100px' color='#fff'>Nigerian</Text> 
            </Box>
            <Box backgroundColor='#eb9c64' height='300px' width='100px' boxShadow='xs' p='6' rounded='xl' position='absolute' top='0' left='550px' zIndex='12'>
                <Text transform='rotate(270deg)' ml='-50px' mt='100px' color='#fff'>Africans</Text> 
            </Box>
            <Box backgroundColor='#bc427f' height='300px' width='100px' boxShadow='xs' p='6' rounded='xl' position='absolute' top='0' left='600px' zIndex='13'>
                <Text transform='rotate(270deg)' ml='-50px' mt='100px' color='#fff'>Mexicans</Text> 
            </Box>
            <Box backgroundColor='#894c91' height='300px' width='100px' boxShadow='xs' rounded='xl' position='absolute' top='0' left='650px' zIndex='14'>
                <Text transform='rotate(270deg)' ml='-50px' mt='100px' color='#fff'>Pakistani</Text> 
            </Box>
        </HStack>
    </Fragment>
  )
}

export default CommunityCards