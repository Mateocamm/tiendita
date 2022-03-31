import React from "react";
import { Heading } from "@chakra-ui/react";

function index(props) {
  return (
    <Heading
      as="h1"
      size="md"
      bgGradient="linear(to-l, #7928CA,#FF0080)"
      bgClip="text"
      fontWeight="extrabold"
      {...props}
    >
      🛒 TIENDITA
    </Heading>
  );
}

export default index;
