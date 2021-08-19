import "../styles/globals.css";
import cartReducer from "../reducers/cartReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

const store = createStore(cartReducer);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
