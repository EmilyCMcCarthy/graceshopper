import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, FlexParent, CharacterImg, CardText, Title } from './component-styles'

const AllCharacters = ({ allCharacters }) => {
  return (
    <FlexParent>
      <Title secondary>BROWSE CHARACTERS</Title>

      <FlexParent>
        {
          allCharacters.map(character => {
            return (
              <Card key={character.id}>
                <Link to={`/characters/${character.id}`}>
                  <CharacterImg src={character.imageUrl} />
                </Link>
                <CardText>
                  <span>{character.name}</span>
                  <span>${character.price}</span>
                </CardText>
              </Card>
            );
          })
        }
      </FlexParent>
    </FlexParent>

  );
}
/* -----------------    CONTAINER     ------------------ */
const mapStateToProps = ({ allCharacters }) => ({ allCharacters });

export default withRouter(connect(mapStateToProps)(AllCharacters));

// export default AllCharacters;
