import React, { useState } from "react";
import { connect } from "react-redux";
import { Box, Button, Image,Flex} from "@chakra-ui/react";
import { FormatCurrency } from "../../lib/currency";
import { addQuantity, subtractQuantity } from "../../actions/cartActions";

export const Index = ({ item, addQuantity, subtractQuantity }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const addQuantityItem = (id) => {
    addQuantity(id);
    setQuantity(quantity + 1);
  };

  const subQuantityItem = (id) => {
    setQuantity(quantity - 1);
    subtractQuantity(id);
  };

  return (
    <Flex key={item.id} mt={2} alignItems="center">
      <Image
        src={item.picture}
        alt={item.name}
        boxSize={["100%"]}
        width={["50px","100px"]}
        height={["50px","100px"]}
        objectFit="cover"
      />
      <Box>
      <Box>
        {item.name} ({FormatCurrency(item.price)})
      </Box>
      <Box>
        <Button size="sm" onClick={() => subQuantityItem(item.id)}>
          -
        </Button>
        <Button size="sm" bg="primary" isdisabled={true}>
          {quantity}
        </Button>
        <Button size="sm" onClick={() => addQuantityItem(item.id)}>
          +
        </Button>
      </Box>
      </Box>
    </Flex>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
