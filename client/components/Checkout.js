import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Cart from './Cart';


class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }



  render() {
    const user = this.props.user;
    console.log("USER", user)
     return (
      <div>
        <Cart />
        <h4>Shipping address</h4>
        <h4>{user.address}</h4>
      </div>
    );
  }
}
/* -----------------    CONTAINER     ------------------ */
const mapStateToProps = ({  user, guestUser, guestCart }) => ({user, guestUser,  guestCart });


export default withRouter(connect(mapStateToProps)(Checkout));

// export default Checkout;
