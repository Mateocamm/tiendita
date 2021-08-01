import React from "react";
import {
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

function Index() {
    const date = new Date().getFullYear();
  return (
    <HStack
      justify="space-between"
      w="100%"
      display={{ base: "none", md: "flex" }}
      py={4}
    >
      <Text fontSize="sm" color={useColorModeValue("gray.500", "gray.600")}>
        © {date} Tiendita by Mateo
      </Text>
    </HStack>
  );
}

export default Index;
