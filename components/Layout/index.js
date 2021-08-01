import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

function index({ children }) {
  return (
    <>
      <Head>
        <title>Tiendita 2021</title>
        <meta name="description" content="Small Online Shop" />
        <meta property="og:title" content="Tiendita 2021" />
        <meta property="og:description" content="Small Online Shop" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tiendita" />
      </Head>
      
      <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
        <Box p={["4", "8"]}>
          <Header />
          <Box as="main" minHeight="75vh" marginY={22}>
            {children}
          </Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default index;
