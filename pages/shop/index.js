/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Layout from "../../components/Layout";
import { useProduct } from "../../hooks/useProduct";
import { Grid, Input, Flex, Button} from "@chakra-ui/react";
import Product from "../../components/Product";
import Loading from "../../components/Loading";

export const Index = (props) => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const { loading, products, hasMore } = useProduct({ filter, page });

  return (
    <Layout>
      <Input value={filter} onChange={(evt)=> setFilter(evt.target.value)} placeholder="Search Products" />
      <Grid
        w="full"
        gridGap="5"
        gridTemplateColumns={[
          "repeat( auto-fit, minmax(150px, 1fr))",
          "repeat( auto-fit, minmax(200px, 1fr))",
        ]}
        mb="10"
      >
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Grid>

      {!loading && products.length == 0 && <Flex justify="center">{`Can't find products with that filters`}</Flex>}
      {hasMore && <Flex justify="center"><Button variant="outline" onClick={() => setPage(page + 1)}>ViewMore</Button></Flex>}
      {loading && <Loading />}
    </Layout>
  );
};

export default Index;
