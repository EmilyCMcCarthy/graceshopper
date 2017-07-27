import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, FlexParent, CharacterImg, CardText, Title } from './component-styles'

// export const AllCharacters = (props) => {
//     console.log("PRINT", props);
//     return (<h1> hi </h1>)
// }

class AllCharacters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      imageUrl: '',
      price: ''
    };
  }
  render() {
    const allCharacters = this.props.allCharacters;
    console.log("CHARACTERS", this.props);
    return (
      <FlexParent>
        <Title secondary>BROWSE CHARACTERS</Title>
        <FlexParent>
          {
            allCharacters.map(character => {
              return (
                <Card key={character.id}>
                  <CharacterImg src={character.imageUrl} />
                  <CardText>
                    <span>{character.name}</span>

                    <span>{character.price}</span>

                  </CardText>
                </Card>
              );
            })
          }
        </ FlexParent>
      </FlexParent>

    );
  }
}
/* -----------------    CONTAINER     ------------------ */
const mapStateToProps = ({ allCharacters }) => ({ allCharacters });

export default withRouter(connect(mapStateToProps)(AllCharacters));

// export default AllCharacters;
