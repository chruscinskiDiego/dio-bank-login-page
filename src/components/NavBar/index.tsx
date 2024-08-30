import { Box, ChakraProvider, Flex, Text, Stack, Link } from "@chakra-ui/react"
import { color } from "framer-motion"

export const NavBar = () => {

    return(

        <ChakraProvider>
            <Box backgroundColor = "white" px={10} position="relative">
                <Flex h={16} align={'center'} justifyContent={'space-between'}>
                    <Box>
                        <Text fontSize="x1" fontWeight="bold">
                            DIO Bank
                        </Text>
                    </Box>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Link href="/">Home</Link>
                        </Stack>
                    </Flex>

                </Flex>
            </Box>
        </ChakraProvider>
    )
}