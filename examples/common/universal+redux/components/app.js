import {Layout} from '../../components/layout';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

function AppComponent (props) {
  const {children, location, server} = props;
  const {hash, pathname, search} = location;

  return (
    <Layout isRedux server={server}>
      {children}
      <div style={{
        fontFamily: 'Input Mono, Menlo, monospace',
        fontSize: '2vmin'
      }}>{`location: ${JSON.stringify({hash, pathname, search})}`}</div>
    </Layout>
  );
}

AppComponent.propTypes = {
  children: PropTypes.node,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }),
  server: PropTypes.string
};

function mapStateToProps (state) {
  return {location: state.location, server: state.server};
}

export const App = connect(mapStateToProps)(AppComponent);
