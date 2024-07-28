import logo from "./logo.svg";
import "./App.css";
import RandomPasswordGeneratorCard from "./RandomPasswordGeneratorCard";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState()

  const getThemeModeSuffix = darkMode ? "-dark" : "-light"

  
  return (
    <>
      <main>
        <ChakraProvider>
          <RandomPasswordGeneratorCard />
        </ChakraProvider>
      </main>
    </>
  );
}

export default App;
