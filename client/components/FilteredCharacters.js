import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, FlexParent, CharacterImg, CardText, Title } from './component-styles'
import AllCategories from './AllCategories';
import {addSearchTerm, fetchCharacters, fetchCategoryForFilter} from '../store';



class FilteredCharacters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filtered: [],
    
    };

    this.handleClick = this.handleClick.bind(this);
  }

componentDidMount() {
  }

  handleClick(evt){

    console.log(evt.target.value, "event.target.value - categoryId");
     this.props.AddSearchTerms(evt.target.value)
  }
  render() {
    
    const allCharacters = this.props.allCharacters;
    const allCategories = this.props.allCategories;
    const CategorySet = [...new Set(allCategories)];
    const filtered = allCharacters.filter(function(character){
        const tags = character.tags;
        const bool = true;
     
        console.log(check, "check");
        return bool;
    })

    console.log("CHARACTERS", this.props);
    return (
      <FlexParent>
        <Title secondary>BROWSE CHARACTERS</Title>
        {
            allCategories.map(category => {
                return (<button key={category.id} value={category.id} onClick={this.handleClick}>{category.tag}</button>)
            })
        }
        <AllCategories />
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

                    <span>{character.price}</span>

                  </CardText>
                </Card>
              );
            })
          }
        </FlexParent>
        <FlexParent>
          <Title secondary>FILTERED CHARACTERS</Title>
        
          {
            allCharacters.map(character => {
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



const mapStateToProps = ({allCharacters, allCategories}) => ({allCharacters, allCategories});
const mapDispatchToProps = (dispatch) => {
  return {
    AddSearchTerms (categoryId) {
      dispatch(fetchCategoryForFilter(categoryId)); 
    },
     
    loadCharacters(){
        dispatch(fetchCharacters);
        
    }
    }

  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilteredCharacters));

