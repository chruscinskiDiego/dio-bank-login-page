
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter} from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { AppContextProvider } from './context/AppContext';
import Router from './Router';
import { createLocalStorage, getAllLocalStorage } from './services/Storage';

function App() {

  if(!getAllLocalStorage()){
    createLocalStorage();
  }
  
  
  return (
    <>
      <BrowserRouter>
        <AppContextProvider>
          <ChakraProvider>
            <NavBar />
              <Router />
          </ChakraProvider>
        </AppContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
