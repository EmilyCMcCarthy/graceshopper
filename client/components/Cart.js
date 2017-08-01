import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUserOrderItems, fetchGuestOrder, sendOrder } from '../store';
import { FlexParent, CartItem, QtyButton, CharacterDetails, NormalLink, ItemDetail, CharacterImgCart } from './component-styles'

class Cart extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.loadCart(this.props.user.id);
  }

  handleClick(evt){
    evt.preventDefault();
    this.props.sendOrder(this.props.cart[0].orderId)
  }

  render() {
    const cart = this.props.user.id ? this.props.cart : this.props.guestCart;
    let total = 0;
    console.log("params",this.props.match)
    return (
      <FlexParent center>
        <CharacterDetails >
        <h1>{this.props.title ? this.props.title : "Cart"}</h1>
          {
            cart.map((orderItem, i) => {
              total += orderItem.subtotal;
              return (<CartItem key={i}>
                <Link to={`/characters/${orderItem.characterId}`}><CharacterImgCart small src={orderItem.character && orderItem.character.imageUrl} /></Link>
                <ItemDetail>Character:<NormalLink to={`/characters/${orderItem.characterId}`}>{orderItem.character && orderItem.character.name}</NormalLink></ItemDetail>
                <ItemDetail>Qty: {orderItem.quantity}</ItemDetail>
                <ItemDetail>Subtotal: ${orderItem.subtotal}.00 </ItemDetail>
              </CartItem>
              )
            })
          }

       { this.props.match.url === "/cart" ? <CartItem row>
            <Link to={`/checkout`}><QtyButton>Checkout</QtyButton></Link>
            Total: ${total}.00
          </CartItem>
          :  <CartItem row>

            <QtyButton onClick={this.handleClick}>Buy Now</QtyButton>
            Total: ${total}.00
          </CartItem>}
        </CharacterDetails>
    {this.props.children}
      </FlexParent>
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
    },
      sendOrder(orderId){
        dispatch(sendOrder(orderId))
      }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
