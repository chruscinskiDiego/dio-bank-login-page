import { Box, ChakraProvider, Flex, Text} from "@chakra-ui/react";

export const Footer = () => {

    return(
        <ChakraProvider>
            <Box backgroundColor="white" px={10} py={6} position="relative">
                <Flex h={8} align={'center'} justifyContent={'space-between'} flexDirection={['column', 'row']}>
                    
                    <Box>
                        <Text fontSize="lg" fontWeight="bold">
                            DIO Bank by Diego Chruscinski
                        </Text>
                        <Text fontSize="sm">
                            © All rights reserved.
                        </Text>
                    </Box>

                </Flex>
            </Box>
        </ChakraProvider>
    );
};
