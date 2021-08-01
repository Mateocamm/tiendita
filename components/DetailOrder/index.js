import React from "react";
import { connect } from "react-redux";
import { Box, Heading, Text } from "@chakra-ui/react";
import { FormatCurrency } from "../../lib/currency";

export const index = ({items, total}) => {
  return (
    <>
    <Heading size="md">Detail Order</Heading>
      <Box py={4}>
        {items.map((item) => (
          <div key={item.id}>
            <h3>
              - <Text as="span" fontWeight="bold">{item.name}</Text> ({FormatCurrency(item.price)}) x {item.quantity}
            </h3>
          </div>
        ))}
      </Box>
      <Box mb={4}>Total: {FormatCurrency(total)}</Box>
    </>
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
