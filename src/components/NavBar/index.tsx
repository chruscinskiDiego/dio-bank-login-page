import { Box, ChakraProvider, Flex, Text, Stack, Link, Button } from "@chakra-ui/react"
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import { changeLocalStorage } from "../../services/Storage";

export const NavBar = () => {

    const { setIsLoggedIn, isLoggedIn } = useContext(AppContext);

    const logout = () => {
        setIsLoggedIn(false);
        changeLocalStorage({login : false});
    }

    return (

        <ChakraProvider>
            <Box backgroundColor="white" px={10} position="relative">
                <Flex h={16} align={'center'} justifyContent={'space-between'}>
                    <Box>
                        <Text fontSize="x1" fontWeight="bold">
                            DIO Bank
                        </Text>
                    </Box>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Link href="/" marginTop={2}>Home</Link>

                            {isLoggedIn &&

                                (
                                    <Button onClick={() => logout()}>Sair</Button>
                                )
                                
                            }
                        </Stack>
                    </Flex>

                </Flex>
            </Box>
        </ChakraProvider>
    )
}