import React from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { Box, Flex, Heading, Badge } from "@chakra-ui/react";
import { useScroll } from "../../hooks/useScroll";

export const Index = ({ countItems }) => {
  const isScroll = useScroll();

  return (
    <Flex
      as="header"
      width="full"
      minHeight={50}
      pos="sticky"
      top={0}
      background="white"
      align="center"
      zIndex="1000"
      boxShadow={isScroll ? "2px 0 10px rgba(100, 100, 100, 0.3)" : "initial"}
    >
      <Flex width="full" px={["4", "8"]} margin="0 auto" maxWidth={800}>
        <Link href="/shop">
          <a>
            <Heading
              as="h1"
              size="md"
              bgGradient="linear(to-l, #7928CA,#FF0080)"
              bgClip="text"
              fontWeight="extrabold"
            >
              TIENDITA
            </Heading>
          </a>
        </Link>

        <Box marginLeft="auto">
          <Link href="/cart">
            <a>
              <Badge
                rounded="full"
                px="2"
                fontSize="0.8em"
                color="white"
                pos="relative"
                bgGradient="linear(to-l, #7928CA,#FF0080)"
              >
                Cart {countItems > 0 && <>({countItems})</>}
              </Badge>
            </a>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};

const mapStateToProps = (state) => ({
  countItems: state.items.reduce(function (total, item) {
    return total + item.quantity;
  }, 0),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
