import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


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
  render () {
      const allCharacters = this.props.allCharacters;
      console.log("CHARACTERS", this.props);
    return (
      <div>
        <h3>Characters</h3>
        <div className="list-group">
          {
            allCharacters.map(character => {
              return (
                <div className="col-lg-6" key={character.id}>

                    <img src={ character.imageUrl } />
                    <div className="caption">
                      <h5>
                        <span>{ character.name }</span>

                        <span>{ character.price }</span>
                      </h5>
                    </div>

                </div>
              );
            })
          }
        </div>
      </div>

    );
  }
}
/* -----------------    CONTAINER     ------------------ */
const mapStateToProps = ({allCharacters}) => ({allCharacters});

export default withRouter(connect(mapStateToProps)(AllCharacters));

// export default AllCharacters;
