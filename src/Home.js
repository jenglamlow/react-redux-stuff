import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { requestStuff } from './actions/testActions'

class Home extends Component {
  constructor(props) {
    super(props);

    // Bind this property into the event handler
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.props.requestStuff();
  }

  render() {
    return (
      <div>
        <div>Home</div>
        <button onClick={this.onClickHandler}>CLICK</button>
      </div>
    );
  }
}

Home.propTypes = {
};

const mapStateToProps = state => ({
});


export default connect(mapStateToProps, {requestStuff})(Home);
