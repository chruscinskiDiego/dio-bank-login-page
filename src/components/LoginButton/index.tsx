import { Button, ChakraProvider } from '@chakra-ui/react';

interface LoginButtonProps {
    onClick: () => void;
}

export const LoginButton = ({ onClick }: LoginButtonProps) => {
    return (
        <ChakraProvider>
            <Button colorScheme="purple" width="100%" onClick={onClick}>
                Entrar
            </Button>
        </ChakraProvider>
    );
};