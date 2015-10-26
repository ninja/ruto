import {Component, PropTypes} from 'react';

export default class StateContext extends Component {
  getChildContext () {
    return {state: this.props.state};
  }

  render () {
    return this.props.children;
  }
}

StateContext.childContextTypes = {
  state: PropTypes.object.isRequired
};

StateContext.propTypes = {
  children: PropTypes.node,
  state: PropTypes.shape({})
};

