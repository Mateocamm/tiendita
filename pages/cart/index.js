import React from "react";
import { connect } from "react-redux";
import Link from "next/link";
import Layout from "../../components/Layout";
import CartItem from "../../components/CartItem";
import { Box, Button, Heading, Stack, Text,StackDivider } from "@chakra-ui/react";
import { FormatCurrency } from "../../lib/currency";

export const index = ({ items, total }) => {
  return (
    <Layout>
      {items.length == 0 && (
        <Box
          w="100%"
          p={8}
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Heading mb="8" color="grey">
            Empty Cart
          </Heading>
          <Link href="/shop">
            <a>
              <Button>Shop</Button>
            </a>
          </Link>
        </Box>
      )}
      {items.length > 0 && (
        <>
          <Heading size="lg" textAlign={["center", "left"]}>
            Shopping Cart
          </Heading>
          <Stack py={4} divider={<StackDivider borderColor="gray.200" />}>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </Stack>
          <Box mb={4} align="center">
            <Text fontWeight="bold">Total: {FormatCurrency(total)}</Text>
          </Box>
          <Link href="/checkout">
            <a>
              <Button colorScheme="teal" isFullWidth={[true, false]}>
                Checkout
              </Button>
            </a>
          </Link>
        </>
      )}
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  items: state.items,
  total: state.items.reduce(function (total, item) {
    return total + item.price * item.quantity;
  }, 0),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(index);
