import React from 'react'
import ReactDOM from "react-dom";
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
  <React.StrictMode>
  <ChakraProvider cssVarsRoot={undefined}>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

