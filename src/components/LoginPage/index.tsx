import { ChakraProvider, Flex, Box, Heading, VStack, Input, Image } from "@chakra-ui/react";
import { LoginButton } from "../LoginButton";
import { NavBar } from "../NavBar";
import image from "../../assets/image.png"
import { Footer } from "../Footer";

export const LoginPage = () => {
    return (
        <ChakraProvider>
            <NavBar/>
            <Flex
                minHeight="92vh"
                bgGradient="linear(to-t, blue.200, purple.500)"
                alignItems="center"
                justifyContent="center"
            >
                <Box
                    backgroundColor="rgba(255, 255, 255, 0.2)"
                    borderRadius="0px 15px 0px 15px"
                    padding="20px"
                    height="600px"
                    width="100vh"
                    boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)"
                    backdropFilter="blur(10px)"
                    border="1px solid rgba(255, 255, 255, 0.18)" 
                    display="flex"
                >
                    <Box width="50%">
                        <Image
                            src={image}
                            alt=""
                            borderRadius="0px 15px 0px 15px"
                            objectFit="cover"
                            height="100%"
                        />
                    </Box>

                    <Box width="50%" padding="20px" alignContent="center">
                        <Heading as="h1" size="lg" marginBottom="20px" textAlign="center" color="white">
                            Login
                        </Heading>
                        <VStack spacing={4}>
                            <Input 
                                placeholder="E-mail"
                                _placeholder={{ color: "white" }} 
                                focusBorderColor="purple.500"
                                color="white" 
                                variant="flushed"  
                                _hover={{ borderColor: "white" }} 
                                _focus={{ 
                                    borderColor: "purple.500", 
                                    transform: "scale(1.02)", 
                                    transition: "all 0.3s ease-in-out" 
                                }} 
                            />
                            <Input 
                                placeholder="Senha" 
                                type="password"
                                _placeholder={{ color: "white" }}
                                focusBorderColor="purple.500"
                                color="white"
                                variant="flushed"
                                _hover={{ borderColor: "white" }}
                                _focus={{ 
                                    borderColor: "purple.500", 
                                    transform: "scale(1.02)", 
                                    transition: "all 0.2s ease-in-out" 
                                }}
                            />
                            <LoginButton onClick={() => {
                                alert("Hello World!");
                            }} />
                        </VStack>
                    </Box>
                </Box>
            </Flex>
            <Footer/>
        </ChakraProvider>
    );
};