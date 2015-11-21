import {Layout} from '../../components/layout';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  render () {
    const {children, server} = this.props;

    return <Layout isRedux server={server}>{children}</Layout>;
  }
}

App.propTypes = {
  children: PropTypes.node,
  server: PropTypes.string
};

function mapStateToProps (state) {
  return {server: state.server};
}

export default connect(mapStateToProps)(App);
