import {Layout} from '../../components/layout';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

function AppComponent (props) {
  const {children, server} = props;

  return <Layout isRedux server={server}>{children}</Layout>;
}

AppComponent.propTypes = {
  children: PropTypes.node,
  location: PropTypes.shape({}),
  server: PropTypes.string
};

function mapStateToProps (state) {
  return {location: state.location, server: state.server};
}

export const App = connect(mapStateToProps)(AppComponent);
