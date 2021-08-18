import React from "react";
import Layout from "../../components/Layout";
import db from "../../lib/firebase";
import { FormatCurrency } from "../../lib/currency";
import {
  Box,
  Heading,
  Flex,
  Text,
  Badge,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
} from "@chakra-ui/react";

function index({ order }) {
  return (
    <Layout>
      <Box>
        <Flex justify="space-between" alignItems="center" mb="4">
          <Box>
            <Heading size="lg">Order Detail</Heading>
            <Text>{order.orderId}</Text>
          </Box>
          <Badge p="2">{order.status}</Badge>
        </Flex>

        <Flex mb="4" direction="column" justify="flex-start">
          <Text fontWeight="bold">
            {order.client.firstName} {order.client.lastName}
          </Text>
          <Text>{order.client.email}</Text>
          <Text>{order.client.phone}</Text>
        </Flex>
        <Box>
          <Table  size="sm">
            <Thead>
              <Th pl="0">Item</Th>
              <Th isNumeric>Price</Th>
              <Th pr="0" isNumeric>Qty</Th>
            </Thead>
            <Tbody>
              {order.items.map((item) => (
                <Tr key={item.id}>
                  <Td pl="0">{item.name}</Td>
                  <Td isNumeric>{FormatCurrency(item.price)}</Td>
                  <Td pr="0" isNumeric>{item.quantity}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Box p="2" fontWeight="bold" textAlign="center">
            Total: {FormatCurrency(order.total)}
          </Box>
        </Box>
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
        total: order.items.reduce(function (total, item) {
          return total + item.price * item.quantity;
        }, 0),
      },
    }, // will be passed to the page component as props
  };
}
