import { createContext, useEffect, useState } from "react";
import { getAllLocalStorage } from "../../services/Storage";

interface IAppContext {
    user:string;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn:boolean) => void; //function para setar se está logado, ela recebe como parâmetro o isLoggedIn
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({children}: any) => {

    const[isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const user = 'diego';

    useEffect( () => {
        
        if(storage){

            const {login} = JSON.parse(storage);
    
            setIsLoggedIn(login);
    
        }

    }, [])

    const storage  = getAllLocalStorage();

   

    return (
        <AppContext.Provider value={{user, isLoggedIn, setIsLoggedIn}}>
        {children}
        </AppContext.Provider>
    );

}