import axios from 'axios';

/* ------------   ACTION TYPES     ------------------ */

const ADD_TO_CART = 'ADD_TO_CART';

const FETCH_USER_ORDERS = 'FETCH_USER_ORDERS';


/* ------------   ACTION CREATORS     ------------------ */

const add = orderItem => ({ type: ADD_TO_CART, orderItem });
const fetch = (orderItems) => ({ type: FETCH_USER_ORDERS, orderItems });

/* ------------       REDUCERS     ------------------ */

export default function reducer (orderItems = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...orderItems, action.orderItem];
    case FETCH_USER_ORDERS:
      return action.orderItems;

    default:
      return orderItems;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchUserOrderItems = () => dispatch => {
    axios.get(`/api/users/orders`)
       .then(res => dispatch(fetch(res.data)))
       .catch(err => console.error(`Fetching orderItems for this user unsuccessful`, err));
}

export const addOrder = (order, userId) => dispatch => {
  axios.post(`/api/users/${userId}/orders/current`, order)
    .then(res => {
      dispatch(add(res.data))
    })
    .then(() => {
      axios.get(`/api/users/orders`)
        .then(res => dispatch(fetch(res.data)))
    })
    .catch(err => console.error(`Adding order to user: ${userId} unsuccessful`, err));
}



