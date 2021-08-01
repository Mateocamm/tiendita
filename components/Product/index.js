import React from "react";
import { connect } from "react-redux";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { addToCart } from "../../actions/cartActions";
import { FormatCurrency } from "../../lib/currency";
import { useToast } from "@chakra-ui/react"

export const Index = ({ product, addToCart }) => {
  const toast = useToast()

  const handleAddToCart = (item) => {
    addToCart(item);
    toast({
      title: "Product added to cart",
      status: "success",
      duration: 3000,
    })
  };

  return (
    <Box flex="1" p={4}>
      <Image
        boxSize={["100%"]}
        height={["300px","300px","200px"]}
        objectFit="cover"
        fallbackSrc="https://via.placeholder.com/150"
        src={product.picture}
        alt={product.name}
        mb={[1, 2]} 
        _hover={{ filter: "brightness(1.1)" }}
        
      />
      <Heading mb={2} fontSize="sm">
        {product.name}
      </Heading>
      <Text mb={[1, 2]} color="green" fontWeight="bold">
        {FormatCurrency(product.price)}
      </Text>
      <Button my={2} onClick={() => handleAddToCart(product)}>
        Add to cart
      </Button>
    </Box>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => {
      dispatch(addToCart(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
