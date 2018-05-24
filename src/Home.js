import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { requestStuff } from './actions/testActions'

class Home extends Component {
  constructor(props) {
    super(props);

    // Bind this property into the event handler
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClickHandler2 = this.onClickHandler2.bind(this);
    this.onClickHandler3 = this.onClickHandler3.bind(this);
  }

  onClickHandler() {
    this.props.requestStuff("stuff");
  }

  onClickHandler2() {
    this.props.requestStuff("long");
  }

  onClickHandler3() {
    this.props.requestStuff("cancel");
  }

  render() {
    return (
      <div>
        <div>Home</div>
        <button onClick={this.onClickHandler}>Req 1</button>
        <button onClick={this.onClickHandler2}>Req 2</button>
        <button onClick={this.onClickHandler3}>Req 3</button>
      </div>
    );
  }
}

Home.propTypes = {
};

const mapStateToProps = state => ({
});


export default connect(mapStateToProps, {requestStuff})(Home);
