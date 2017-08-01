import axios from 'axios';
import Promise from 'bluebird';

/* ------------   ACTION TYPES     ------------------ */

const SET_GUEST_ORDER = 'SET_GUEST_ORDER';

const FETCH_GUEST_ORDERS = 'FETCH_GUEST_ORDERS';


/* ------------   ACTION CREATORS     ------------------ */

const set = orderItem => ({ type: SET_GUEST_ORDER, orderItem });
const fetch = () => ({ type: FETCH_GUEST_ORDERS });

/* ------------       REDUCERS     ------------------ */

export default function reducer (orderItems = [], action) {
  switch (action.type) {
    case SET_GUEST_ORDER:
      return [...orderItems, ...action.orderItem];
    case FETCH_GUEST_ORDERS:
    return orderItems;
    default:
      return orderItems;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const addGuestOrder = (order) => dispatch => {

      let allOrders = localStorage.getItem('orderItems');
      allOrders = JSON.parse(localStorage.getItem('orderItems'));

    if(allOrders){
      localStorage.setItem('orderItems', JSON.stringify([allOrders, order]));
      allOrders = JSON.parse(localStorage.getItem('orderItems'));
      dispatch(set(allOrders));
    }
    else{
      localStorage.setItem('orderItems', JSON.stringify(order));
      dispatch(set([order]));
    }

  }

export const fetchGuestOrder = () => dispatch => {
dispatch(fetch())
}
