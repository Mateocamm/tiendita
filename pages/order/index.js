import React from "react";
import Layout from "../../components/Layout";
import db from "../../lib/firebase";
import { Box, Heading, Stack, Text, Badge } from "@chakra-ui/react";

function index({ order }) {
  return (
    <Layout>
      <Box textAlign="center">
        <Heading size="lg">Your Order Detail</Heading>
        <Text>{order.orderId}</Text>
        <Badge p="2" mb="4">
          {order.status}
        </Badge>

        <Box mb="4">
          <Text>
            {order.client.firstName} {order.client.lastName}
          </Text>
          <Text>{order.client.email}</Text>
          <Text>{order.client.phone}</Text>
        </Box>
        <Stack>
          {order.items.map((item) => (
            <Box key={item.id}>
              <p>
                {item.name} - {item.price} x {item.quantity}
              </p>
            </Box>
          ))}
        </Stack>
      </Box>
    </Layout>
  );
}

export default index;

export async function getServerSideProps({ query }) {
  let order;

  await db
    .collection("Orders")
    .doc(query.order_id)
    .get()
    .then((docRef) => {
      order = docRef.data();
    })
    .catch((error) => {});

  return {
    props: {
      order: {
        orderId: query.order_id,
        items: order.items,
        client: order.client,
        status: order.status ?? "",
      },
    }, // will be passed to the page component as props
  };
}
