import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, FlexParent, CharacterImg, CardText, Title } from './component-styles'


class AllCharacters extends Component {
  constructor(props) {
    super(props);

    this.state = {
     inputValue:''
    };
     this.handleChange = this.handleChange.bind(this);
  }
     handleChange (evt) {
    const value = evt.target.value;
    console.log(value)
    this.setState({
      inputValue: value
    });
  }

  render() {
    const inputValue = this.state.inputValue;
    // const allCharacters = this.props.allCharacters;
    console.log("CHARACTERS", this.props);
    const filteredCharacters = this.props.allCharacters.filter(character =>
      character.name.toLowerCase().match(inputValue.toLowerCase()));

    return (
      <FlexParent>
        <Title secondary>BROWSE CHARACTERS</Title>
         <form className='form-group' style={{marginTop: '20px'}}>
    Search
      <input
        onChange={this.handleChange}
        value={inputValue}
        className='form-control'
        placeholder="Enter artist name"
      />

    </form>
        <FlexParent>
          {
            filteredCharacters.map(character => {
              return (
                <Card key={character.id}>
                  <Link to={`/characters/${character.id}`}>
                    <CharacterImg src={character.imageUrl} />
                  </Link>
                  <CardText>
                    <span>{character.name}</span>

                    <span>{character.price}</span>

                  </CardText>
                </Card>
              );
            })
          }
        </FlexParent>
      </FlexParent>

    );
  }
}
/* -----------------    CONTAINER     ------------------ */
const mapStateToProps = ({ allCharacters }) => ({ allCharacters });

export default withRouter(connect(mapStateToProps)(AllCharacters));
