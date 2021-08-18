/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "../../components/Layout";
import { useProduct } from "../../hooks/useProduct";
import { Grid } from "@chakra-ui/react";
import Product from "../../components/Product";
import Loading from "../../components/Loading"

export const Index = (props) => {
  const {loading, products} = useProduct();

  return (
    <Layout>
      <Grid
        w="full"
        gridGap="5"
        gridTemplateColumns="repeat( auto-fit, minmax(200px, 1fr) )"
      >
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Grid>
      {loading && <Loading />}
    </Layout>
  );
};

export default Index;
