import { StarIcon } from '@chakra-ui/icons'
import { Box, Divider, Flex, Heading, Highlight, List, ListIcon, ListItem, Spacer, Text } from '@chakra-ui/react'
import { Fragment } from 'react'

type Props = {}

const BenefitsSection = (props: Props) => (
    <Fragment>
        <Flex>
            <Heading lineHeight='tall'>
                <Highlight
                    query={['spotlight', 'emphasize', 'Accentuate']}
                    styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
                >
                    Five Key Benefits
                </Highlight>
            </Heading>
        </Flex>
        <Divider /> 
        <Flex flexDirection='row' justifyContent='space-around  '  alignItems='center'>
            {/* <Box> */}
                <List>
                    <ListItem my='20px'>
                        <Highlight query='- Homeshare.ca' styles={{ px: '3', py: '2', bg: '#4665b2', rounded: 'full', fontWeight:'bold', color:'whiteAlpha.900'}}>
                            - Homeshare.ca is a web application that helps new immigrants in Canada find affordable and convenient housing options.
                        </Highlight>
                    </ListItem>
                    <ListItem my='20px'>
                        <Highlight query='- Homeshare.ca' styles={{ px: '3', py: '2', bg: '#bc427f', rounded: 'full', fontWeight:'bold', color:'whiteAlpha.900'}}>
                        - Homeshare.ca connects new immigrants with local hosts who are willing to share their homes and offer support and guidance.
                        </Highlight>
                    </ListItem>
                    <ListItem my='20px'>
                        <Highlight query='- Homeshare.ca' styles={{ px: '3', py: '2', bg: '#894c91', rounded: 'full', fontWeight:'bold', color:'whiteAlpha.900'}}>
                        - Homeshare.ca offers a variety of filters and features to help new immigrants search for the best match based on their preferences, needs and budget.
                        </Highlight>
                    </ListItem>
                    <ListItem my='20px'>
                        <Highlight query='- Homeshare.ca' styles={{ px: '3', py: '2', bg: '#02aebe', rounded: 'full', fontWeight:'bold', color:'whiteAlpha.900'}}>
                        - Homeshare.ca provides a secure and transparent platform for new immigrants and hosts to communicate, verify and book their homestay arrangements.
                        </Highlight>
                    </ListItem>
                    <ListItem my='20px'>
                        <Highlight query='- Homeshare.ca' styles={{ px: '3', py: '2', bg: '#eb9c64', rounded: 'full', fontWeight:'bold', color:'whiteAlpha.900'}}>
                        - Homeshare.ca also offers resources and tips for new immigrants to help them settle in Canada and integrate into the community.
                        </Highlight>
                    </ListItem>
                </List>
            {/* </Box> */}
        </Flex>
    </Fragment>
)

export default BenefitsSection