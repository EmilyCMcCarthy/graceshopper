import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchCharacter, addOrder} from '../store';


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

  handleSubmit(evt){
    const character = this.props.singleCharacter
    const order = {
      characterId: character.id,
      quantity: this.state.quantity,
      subTotal: this.state.quantity * character.price
    }

     this.props.addOrder(order, this.props.user.id)
  }

  handleQuantity(evt) {

    if(evt.target.name === "increase"){
     this.setState({quantity: ++this.state.quantity});
    } else {
    this.setState({quantity: --this.state.quantity});
    }
   if (this.state.quantity === this.props.singleCharacter.inventory) {
      this.setState({ increaseEnabled: true, decreaseEnabled: false });
    } else if (this.state.quantity === 0) {
      this.setState({ increaseEnabled: false,  decreaseEnabled: true });
    } else {
      this.setState({ increaseEnabled: false, decreaseEnabled: false  });
    }
  }

  render () {
      const character = this.props.singleCharacter;
    return (
      <li className="media">
      <div className="media-left">
        <a href="#">
          <img className="media-object" src={ character.imageUrl  } alt="image" />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">{  character.name}</h4>
        <h4>{character.price} </h4>
        <button className="btn btn-default btn-xs" name ="decrease" onClick={this.handleQuantity} disabled= {this.state.decreaseEnabled} > - </button>
        <div id="quantity">
          {this.state.quantity}</div>
        <button className="btn btn-default btn-xs" name ="increase"  onClick={this.handleQuantity} disabled= {this.state.increaseEnabled} > + </button>
        <button className = "btn btn-default btn-xs" onClick= {this.handleSubmit} > </button>
         <h4 className="media-heading">{ character.description}</h4>
      </div>
    </li>

    );
  }
}
/* -----------------    CONTAINER     ------------------ */
const mapStateToProps = ({singleCharacter, user}) => ({singleCharacter, user});
const mapDispatchToProps = (dispatch) => {
  return {
    loadSingleCharacter (characterId) {
      dispatch(fetchCharacter(characterId));
    },
    addOrder(order, userId){
      console.log("order",order);
      dispatch(addOrder(order, userId));
    }
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleCharacter));

