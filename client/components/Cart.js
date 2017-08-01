import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchUserOrderItems, fetchGuestOrder} from '../store';

class Cart extends Component {

  constructor (props){
    super(props);
  }

  componentDidMount(){
    this.props.loadCart(this.props.user.id);
  }

  render() {
     return (
      <div>
        <h1>Cart</h1>
        {
          this.props.cart.map((orderItem, i) => {
            return (<li key ={i}>
            Character: {orderItem.character && orderItem.character.name}
             Qty: {orderItem.quantity}
            Subtotal: {orderItem.subtotal}
            </li>)
          })
        }
      </div>
    );
  }
}
/* -----------------    CONTAINER     ------------------ */
const mapStateToProps = ({ user, cart, guestCart }) => ({ user, cart, guestCart });

const mapDispatchToProps = dispatch => {
  return {
    loadCart(userId){
      userId
      ? dispatch(fetchUserOrderItems())
      : dispatch(fetchGuestOrder());
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
