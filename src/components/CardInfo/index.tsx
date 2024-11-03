import { Box, Text } from "@chakra-ui/react"

interface ICardInfo{
    mainContent: string;
    content: string;
}

export const CardInfo = ({mainContent, content}: ICardInfo) => {
    return(
        <Box backgroundColor={'gray'} minHeight={'120px'} padding={8} borderRadius={'25px'}>
            <Text fontSize={'xl'} fontWeight={'bold'}>Olá {mainContent}!</Text>
            <Text>R$ {content} </Text>
        </Box>
    )
}