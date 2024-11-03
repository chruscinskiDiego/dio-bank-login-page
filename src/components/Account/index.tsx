import { Center, SimpleGrid } from "@chakra-ui/react"
import { CardInfo } from "../CardInfo"
import { useNavigate, useParams } from "react-router-dom"
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";

export const Account = () => {

    const navigate = useNavigate();
    const { isLoggedIn } = useContext(AppContext);
    const data = {
        content: '20,00',
        mainContent: 'Diego'
    }

    const params = useParams();
    
    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);

    console.log(params);
    console.log(isLoggedIn)

    return (
        <>
            {isLoggedIn && (
                <Center>
                    <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                        <CardInfo content={data.content} mainContent={data.mainContent} />
                        <CardInfo content={data.content} mainContent={data.mainContent} />
                    </SimpleGrid>
                </Center>
            )}
        </>
    )
}
