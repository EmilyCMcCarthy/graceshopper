import axios from 'axios';

/* ------------   ACTION TYPES     ------------------ */

const ADD_TO_CART = 'ADD_TO_CART';


/* ------------   ACTION CREATORS     ------------------ */

const add = orderItem => ({ type: ADD_TO_CART, orderItem });

/* ------------       REDUCERS     ------------------ */

export default function reducer (orderItems = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [action.orderItem, ...orderItems];

    default:
      return orderItems;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const addOrder = (order, userId) => dispatch => {
  axios.post(`/${userId}/orders/current`)
       .then(res => dispatch(add(res.data)))
       .catch(err => console.error(`Adding order to user: ${userId} unsuccessful`, err));
}
