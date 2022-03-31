/* eslint-disable @next/next/no-img-element */
import React from "react";
import { connect } from "react-redux";
import { getPathsProducts, getProductBySlug } from "../../../lib/products";
import Layout from "../../../components/Layout";
import { FormatCurrency } from "../../../lib/currency";
import { addToCart } from "../../../actions/cartActions";

import {
  Grid,
  Flex,
  Button,
  Heading,
  Image,
  Badge,
  Text,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

function Index({ product, addToCart }) {
  const toast = useToast();

  const handleAddToCart = (item) => {
    addToCart(item);
    toast({
      title: "Product added to cart",
      status: "success",
      duration: 3000,
    });
  };
  return (
    <Layout>
      <Grid gridGap="5" gridTemplateColumns={["1fr", "1fr 1fr"]}>
        <Image
          width="100%"
          objectFit="cover"
          src={product.picture}
          alt={product.name}
        />
        <Flex flex="1" direction="column" justify="center" align="flex-start">
          <Heading as="h2" fontSize={["2xl", "3xl"]}>
            {product.name}
          </Heading>
          <Badge my="2">{product.category}</Badge>
          <Text mb="2">{product.description}</Text>
          <Text mb={[1, 2]} color="green" fontWeight="bold">
            {FormatCurrency(product.price)}
          </Text>
          <Button my={2} onClick={() => handleAddToCart(product)}>
            Add to cart
          </Button>
        </Flex>
      </Grid>
    </Layout>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => {
      dispatch(addToCart(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);

export async function getStaticPaths() {
  const products = await getPathsProducts();

  const paths = products.map((product) => ({
    params: {
      slug: product.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProductBySlug(params.slug);

  return {
    props: {
      product,
    },
  };
}
