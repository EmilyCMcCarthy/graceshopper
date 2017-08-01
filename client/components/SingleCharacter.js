import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCharacter, addOrder, addGuestOrder } from '../store';
import { FlexParent, CharacterImg, CharacterDetails, CharacterTitle, QtyButton, Qty } from './component-styles'
import Review from './Review';


class SingleCharacter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 0,
      decreaseEnabled: true,
      increaseEnabled: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
  }

  componentDidMount() {
    this.props.loadSingleCharacter(this.props.match.params.characterId)

  }

  handleSubmit(evt) {
    evt.preventDefault();
    const character = this.props.singleCharacter
    const order = {
      characterId: character.id,
      quantity: this.state.quantity,
      subTotal: this.state.quantity * character.price
    }
    this.props.user.id
      ? this.props.addOrder(order, this.props.user.id)
      : this.props.addGuestOrder(order)
  }

  handleQuantity(evt) {

    if (evt.target.name === "increase") {
      this.setState({ quantity: ++this.state.quantity });
    } else {
      this.setState({ quantity: --this.state.quantity });
    }
    if (this.state.quantity === this.props.singleCharacter.inventory) {
      this.setState({ increaseEnabled: true, decreaseEnabled: false });
    } else if (this.state.quantity === 0) {
      this.setState({ increaseEnabled: false, decreaseEnabled: true });
    } else {
      this.setState({ increaseEnabled: false, decreaseEnabled: false });
    }
  }

  render() {
    const character = this.props.singleCharacter;
    return (
      <div>
        <FlexParent center>

          <CharacterImg fullsize src={character.imageUrl} alt="image" />

          <CharacterDetails>
            <CharacterTitle>{character.name}</CharacterTitle>
            <CharacterTitle secondary>Price: ${character.price}.00 </CharacterTitle>

            <h4 className="media-heading">{character.description}</h4>
            <QtyButton className="btn btn-default btn-xs" name="decrease" onClick={this.handleQuantity} disabled={this.state.decreaseEnabled} > - </QtyButton>
            <Qty>
              Qty: ({this.state.quantity}) 30min portal{this.state.quantity !== 1 ? 's' : '  '}
            </Qty>
            <QtyButton className="btn btn-default btn-xs" name="increase" onClick={this.handleQuantity} disabled={this.state.increaseEnabled} > + </QtyButton>


            <QtyButton block className="btn btn-default btn-xs" type="submit" name="AddToCart" onClick={this.handleSubmit}>Add to Cart</QtyButton>

          </CharacterDetails>
        </FlexParent >
        <FlexParent>
          <Review reviews={this.props.reviews} characterId={character.id} />

        </FlexParent>
      </div>
    );
  }
}
/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = ({ singleCharacter, user, guestCart }) => ({ singleCharacter, user, guestCart });

const mapDispatchToProps = (dispatch) => {
  return {
    loadSingleCharacter(characterId) {
      dispatch(fetchCharacter(characterId));
    },
    addOrder(order, userId) {
      dispatch(addOrder(order, userId));
    },
    addGuestOrder(order) {
      dispatch(addGuestOrder(order))
    }
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleCharacter));

