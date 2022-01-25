import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles.css";
// import Test from "./Test";

import App from "./App";

const rootElement = document.getElementById("app");
ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  rootElement
);
