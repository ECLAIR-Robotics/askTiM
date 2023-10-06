import logo from './logo.svg';
import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Pdfreader from './pages/Pdfreader';
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Pdfreader/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
