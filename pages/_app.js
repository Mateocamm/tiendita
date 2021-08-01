import "../styles/globals.css";
import cartReducer from "../reducers/cartReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { ChakraProvider } from "@chakra-ui/react";

const store = createStore(cartReducer);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
