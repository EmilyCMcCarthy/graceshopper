import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Cart from './Cart';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
     return (
      <div>
        <Cart />
      </div>
    );
  }
}
/* -----------------    CONTAINER     ------------------ */
// const mapStateToProps = ({ allCharacters }) => ({ allCharacters });

// export default withRouter(connect(mapStateToProps)(AllCharacters));

export default Checkout;
