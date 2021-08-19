import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

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
      <Header />
      <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
      
        <Box px={["4", "8"]}>
          
          <Box as="main" minHeight="75vh" marginY={22}>
            <motion.main
              initial="hidden"
              animate="enter"
              exit="exit"
              variants={variants}
              transition={{ type: "linear" }}
            >
              {children}
            </motion.main>
          </Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default index;
