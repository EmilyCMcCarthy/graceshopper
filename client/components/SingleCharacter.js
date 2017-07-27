import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCharacter } from '../store';


class SingleCharacter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      imageUrl: '',
      price: '',
      description: '',
      rating: ''
    };
  }
  componentDidMount() {
    console.log("PRINT", this.props.match.params.characterId)
    this.props.loadSingleCharacter(this.props.match.params.characterId)
  }

  render() {
    const character = this.props.singleCharacter;

    return (
      <li className="media">
        <div className="media-left">
          <a href="#">
            <img className="media-object" src={character.imageUrl} alt="image" />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{character.name}</h4>
          <h4>{character.price} </h4>
          <h4 className="media-heading">{character.description}</h4>
        </div>
      </li>

    );
  }
}
/* -----------------    CONTAINER     ------------------ */
const mapStateToProps = ({ singleCharacter }) => ({ singleCharacter });
const mapDispatchToProps = (dispatch) => {

  return {

    loadSingleCharacter(characterId) {
      dispatch(fetchCharacter(characterId));

    }
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleCharacter));

