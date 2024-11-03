import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./components/LoginPage";
import { Account } from "./components/Account";


const Router = () => {

    return (
        <Routes>
            <Route path="*" element={<LoginPage/>}/>
            <Route path='/' element={<LoginPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/account/:id' element={<Account />} />
        </Routes>
    )

}

export default Router;