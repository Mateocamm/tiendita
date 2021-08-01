import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  REMOVE_ALL,
} from "../actions/action-types/cart-actions";

const initState = {
  items: [],
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      let existed_item = state.items.find((item) => action.item.id === item.id);
      if (existed_item) {
        existed_item.quantity += 1;
        return {
          ...state,
        };
      } else {
        action.item.quantity = 1;
        return {
          ...state,
          items: [...state.items, action.item],
        };
      }
    }

    case SUB_QUANTITY: {
      let addedItem = state.items.find((item) => item.id === action.id);
      //if the qt == 0 then it should be removed
      if (addedItem.quantity === 1) {
        let filteredItems = state.items.filter((item) => item.id !== action.id);

        return {
          ...state,
          items: filteredItems,
        };
      } else {
        addedItem.quantity -= 1;
        return {
          ...state,
        };
      }
    }

    case ADD_QUANTITY: {
      let addedItem = state.items.find((item) => item.id === action.id);
      console.log(addedItem)
      addedItem.quantity += 1;
      return {
        ...state,
      };
    }
  }
  return state;
};

export default cartReducer;
