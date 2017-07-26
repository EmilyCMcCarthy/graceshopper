import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


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
      const { allCharacters } = this.props.allCharacters ;
      console.log("CHARACTERS", this.props);
    return (
    //   <div>
    //     <h3>Characters</h3>
    //     <div className="list-group">
    //       {
    //         allCharacters.map(character => {
    //           return (
    //             <div className="col-lg-6" key={character.id}>

    //                 <img src={ character.imageUrl } />
    //                 <div className="caption">
    //                   <h5>
    //                     <span>{ character.name }</span>

    //                     <span>{ character.price }</span>
    //                   </h5>
    //                 </div>

    //             </div>
    //           );
    //         })
    //       }
    //     </div>
    //   </div>
    <h1> HI</h1>
    );
  }
}
/* -----------------    CONTAINER     ------------------ */
const mapStateToProps = ({allCharacters}) => ({allCharacters});

export default withRouter(connect(mapStateToProps)(AllCharacters));
