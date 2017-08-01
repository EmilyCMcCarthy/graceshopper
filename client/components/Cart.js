import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUserOrderItems, fetchGuestOrder } from '../store';
import { FlexParent, CartItem, QtyButton, CharacterDetails, NormalLink, ItemDetail, CharacterImgCart } from './component-styles'

class Cart extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadCart(this.props.user.id);
  }

  render() {
    const cart = this.props.user.id ? this.props.cart : this.props.guestCart;
    return (
      <FlexParent>
        <CharacterDetails>
          <h1>Cart</h1>
          {
            cart.map((orderItem, i) => {
              return (<CartItem key={i}>
                <Link to={`/characters/${orderItem.characterId}`}><CharacterImgCart small src={orderItem.character && orderItem.character.imageUrl} /></Link>
                <ItemDetail>Character:<NormalLink to={`/characters/${orderItem.characterId}`}>{orderItem.character && orderItem.character.name}</NormalLink></ItemDetail>
                <ItemDetail>Qty: {orderItem.quantity}</ItemDetail>
                <ItemDetail>Subtotal: ${orderItem.subtotal}.00 </ItemDetail>
              </CartItem>
              )
            })
          }
          <CartItem row>
            <QtyButton>Buy Now</QtyButton>
            Total: $0.00
          </CartItem>
        </CharacterDetails>
      </FlexParent >
    );
  }
}
/* -----------------    CONTAINER     ------------------ */
const mapStateToProps = ({ user, cart, guestCart }) => ({ user, cart, guestCart });

const mapDispatchToProps = dispatch => {
  return {
    loadCart(userId) {
      userId
        ? dispatch(fetchUserOrderItems())
        : dispatch(fetchGuestOrder());
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
