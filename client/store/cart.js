import axios from 'axios';

/* ------------   ACTION TYPES     ------------------ */

const ADD_TO_CART = 'ADD_TO_CART';

const FETCH_USER_ORDERS = 'FETCH_USER_ORDERS';


/* ------------   ACTION CREATORS     ------------------ */

const add = orderItem => ({ type: ADD_TO_CART, orderItem });
const fetch = () => ({ type: FETCH_USER_ORDERS });

/* ------------       REDUCERS     ------------------ */

export default function reducer (orderItems = [], action) {
  switch (action.type) {

    case ADD_TO_CART:
      return [...orderItems, action.orderItem];

    case FETCH_USER_ORDERS:
      return orderItems;

    default:
      return orderItems;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const addOrder = (order, userId) => dispatch => {
  axios.post(`/api/users/${userId}/orders/current`, order)
       .then(res => {
         console.log("Cart Items: ", res.data);
         dispatch(add(res.data))
       })
       .catch(err => console.error(`Adding order to user: ${userId} unsuccessful`, err));
}


export const fetchUserOrderItems = (userId) => dispatch => {
    axios.get(`/api/users/${userId}/orders`)
       .then(res => dispatch(fetch(res.data)))
       .catch(err => console.error(`Fetching orderItems for ${userId} unsuccessful`, err));
}
