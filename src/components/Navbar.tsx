import { BellIcon, PhoneIcon, Search2Icon } from "@chakra-ui/icons"
import { Avatar, Flex, HStack, Heading, Input, InputGroup, InputLeftElement, Spacer, WrapItem, Text, Box, Stack, Image, Card } from "@chakra-ui/react"

type Props = {}

const Navbar = (props: Props) => {
  return (
    <Card w='100%' borderRadius='0' position='sticky' top='0' zIndex='2'>
        <Flex as='nav' p='10px' alignItems='center'>
            <HStack cursor='pointer'>
                <Box>
                    <Image src='https://nivaappstorage.blob.core.windows.net/images/share-home-image-removebg-preview.png' alt='' w='3rem'/>
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
                <BellIcon color='gray.300' boxSize={7} cursor='pointer'/>
                <WrapItem  cursor='pointer'>
                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' boxSize={8}/>
                </WrapItem>
            </HStack>
        </Flex>
    </Card>
)
}

export default Navbar