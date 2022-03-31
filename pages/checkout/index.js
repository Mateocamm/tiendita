import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Layout from "../../components/Layout";
import DetailOrder from "../../components/DetailOrder";
import { useSnap } from "../../hooks/useSnap";
import {
  Box,
  Button,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export const Index = ({ items }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const allRequired = firstName && lastName && email && phone;

  useSnap();

  const handlePay = (event) => {
    event.preventDefault();
    setLoading(true);

    fetch("/api/createPayment", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: items,
        client: { firstName, lastName, email, phone },
      }),
    })
      .then((response) => {
        response.json().then((data) => {
          window.snap.pay(data.token);
          setLoading(false);
        });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <Layout>
      <DetailOrder />

      <Box>
        <Heading size="md" mb="4">
          Detail Checkout
        </Heading>
        <FormControl mb={4} isRequired>
          <FormLabel>First name</FormLabel>
          <Input
            value={firstName}
            onChange={(evt) => setFirstName(evt.target.value)}
            placeholder="First name"
          />
        </FormControl>

        <FormControl mb={4} isRequired>
          <FormLabel>Last name</FormLabel>
          <Input
            value={lastName}
            onChange={(evt) => setLastName(evt.target.value)}
            placeholder="Last name"
          />
        </FormControl>

        <FormControl mb={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            value={email}
            type="email"
            onChange={(evt) => setEmail(evt.target.value)}
            placeholder="Email"
          />
        </FormControl>

        <FormControl mb={4} isRequired>
          <FormLabel>Phone</FormLabel>
          <Input
            value={phone}
            onChange={(evt) => setPhone(evt.target.value)}
            placeholder="Phone"
          />
        </FormControl>

        <Button
          colorScheme="teal"
          isFullWidth={true}
          isLoading={loading}
          loadingText="Wait Please"
          onClick={handlePay}
          isDisabled={!allRequired}
        >
          Process Payment
        </Button>
      </Box>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
