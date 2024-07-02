import logo from "./logo.svg";
import "./App.css";
import RandomPasswordGeneratorCard from "./RandomPasswordGeneratorCard";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
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
