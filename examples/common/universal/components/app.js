import {Layout} from '../../components/layout';
import React, {Component, PropTypes} from 'react';

export class App extends Component {
  getChildContext () {
    return {state: this.props.state};
  }

  render () {
    const {children, state} = this.props;

    return <Layout server={state.server}>{children}</Layout>;
  }
}

App.childContextTypes = {
  state: PropTypes.shape({
    example: PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
      path: PropTypes.string
    }),
    examples: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
      path: PropTypes.string
    }))
  })
};

App.propTypes = {
  children: PropTypes.node,
  state: PropTypes.shape({
    example: PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    }),
    examples: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      path: PropTypes.string
    })),
    server: PropTypes.string.isRequired
  }).isRequired
};
