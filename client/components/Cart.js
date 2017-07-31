import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchUserOrderItems, fetchGuestOrder} from '../store';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount(){
    console.log(this.props.user.id, "userId");
    this.props.loadCart(this.props.user.id);
  }

  render() {
    console.log("Cart", this.props.cart);
     return (
      <div>
        <h1>Cart</h1>
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
      ? dispatch(fetchUserOrderItems(userId))
      : dispatch(fetchGuestOrder());
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
