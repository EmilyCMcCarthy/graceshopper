import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Cart from './Cart';
import { FlexParent, CartItem, QtyButton, CharacterTitle,CharacterDetails, NormalLink, ItemDetail, CharacterImgCart } from './component-styles'


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

      <Cart title ="Checkout">

         <CharacterDetails>
         <h1>Details</h1>
          <CharacterTitle secondary>Shipping Address</CharacterTitle>
          {this.props.user.address}
          {(this.props.order === 'purchased')
            ? <CharacterTitle secondary> Your order has been placed </CharacterTitle>
            : ''
          }
        </CharacterDetails>
        </Cart>
      </div>
    );
  }
}
/* -----------------    CONTAINER     ------------------ */
const mapStateToProps = ({  user, guestCart, order }) => ({user, guestCart, order });


export default withRouter(connect(mapStateToProps)(Checkout));

// export default Checkout;
