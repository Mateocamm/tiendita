import { Grid, Flex, Button, Heading, Text } from "@chakra-ui/react";
import Logo from "../components/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Flex direction="column" align="center" justify="center" minHeight="90vh">
        <Logo mb="4" size="2xl" />
        <Heading
          as="h2"
          size={["3xl"]}
          width={["100%", "400px", "500px"]}
          textAlign="center"
          mb="6"
        >
          Create a{" "}
          <Text
            as="span"
            bgGradient="linear(to-l, #007CF0,#00DFD8)"
            bgClip="text"
          >
            Simple
          </Text>{" "}
          Shop Online
        </Heading>
        <Link href="/shop" passHref>
          <Button
            as="a"
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            transition="0.7s"
            _hover={{ bg: "white", color: "#7928CA" }}
            color="white"
          >
            Demo
          </Button>
        </Link>
      </Flex>
      <Flex justify="space-around" fontSize={["sm"]} color="#918a8d">
        <Text>Sell Online</Text>
        <Text>Sell in Instagram</Text>
        <Text>Sell anywhere</Text>
      </Flex>
    </div>
  );
}
