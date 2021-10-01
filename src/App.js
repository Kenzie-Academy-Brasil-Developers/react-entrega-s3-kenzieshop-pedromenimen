import "./App.css";
import Display from "./components/display";
import { ChakraProvider } from "@chakra-ui/react";
import Cart from "./components/cart/index";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Cart />
        <Display />
      </ChakraProvider>
    </div>
  );
}

export default App;
