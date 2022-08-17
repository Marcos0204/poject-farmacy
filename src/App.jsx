import {  } from 'react'
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from './GlobalStyle'
import Routes from './routes/Routes';
import AppProvider from './context/AppProvider';

function App() {

  console.log('hola')

  return (
    <AppProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes/>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
