import { Box, Container, Heading, Text } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                <div>Hello, I'm Gabriel Albino. Brazilian front-end developer.</div>
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Gabriel Albino    
                    </Heading>    
                    <Text>Software <Text as="span" color="red" fontSize="2xl">*</Text> ( Engineer | Developer | Artist )</Text>
                </Box>
            </Box>
        </Container>
    )
}

export default Page
