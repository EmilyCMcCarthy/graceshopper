import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, FlexParent, CharacterImg, CardText, Title } from './component-styles'

// export const AllCharacters = (props) => {
//     console.log("PRINT", props);
//     return (<h1> hi </h1>)
// }

class AllCategories extends Component {
  constructor(props) {
    super(props);

     this.state = {
      tag: ''
    };
  }
  render() {
    const allCategories = this.props.allCategories;
    console.log("Categories", this.props);
    return (
      <FlexParent>
        <Title secondary>CATEGORIES</Title>
        <FlexParent>
        <ul>
          {
            allCategories.map(category => {
              return (
                <li key={category.id}>{category.tag}</li>
              )
            })
          }
        </ul>
        </FlexParent>
      </FlexParent>

    );
  }
}
/* -----------------    CONTAINER     ------------------ */
const mapStateToProps = ({ allCategories}) => ({ allCategories });

export default withRouter(connect(mapStateToProps)(AllCategories));

// export default AllCharacters;
