import axios from 'axios';

/* ------------   ACTION TYPES     ------------------ */

const ORDER_SUCCESS = 'ORDER_SUCCESS';



/* ------------   ACTION CREATORS     ------------------ */

const orderSuccess = status => ({ type: ORDER_SUCCESS, status });

/* ------------       REDUCERS     ------------------ */

export default function reducer (orderStatus = "pending", action) {
  switch (action.type) {
    case ORDER_SUCCESS:
      return action.status;
    default:
      return orderStatus;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const sendOrder = (orderId) => dispatch => {
  console.log("From order store:", orderId);
  axios.put(`/api/orders/${orderId}/purchase`, 7777)
    .then(res => {
      console.log("status: ", res.data)
      dispatch(orderSuccess(res.data))
    })
    .catch(err => console.error(`Added order`, err));
}
