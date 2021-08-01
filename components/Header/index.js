import React from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { Box, Flex, Heading, Badge } from "@chakra-ui/react";

export const Index = ({ countItems }) => {
  return (
    <Flex as="header" width="full" minHeight={50} align="center">
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
  );
};

const mapStateToProps = (state) => ({
  countItems: state.items.reduce(function (total, item) {
    return total + item.quantity;
  }, 0),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
