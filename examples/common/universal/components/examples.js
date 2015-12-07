import {Navigation} from '../../components/navigation';
import React, {Component, PropTypes} from 'react';
import {getState} from '../state';

export class Examples extends Component {
  constructor (props, context) {
    super(props, context);

    let {examples} = context.state;

    if (!examples) { examples = []; }

    this.state = {examples};
  }

  componentDidMount () {
    if (!this.state.examples.length) {
      getState(this.props, state => this.setState(state));
    }
  }

  render () {
    return <Navigation examples={this.state.examples}/>;
  }
}

Examples.contextTypes = {
  state: PropTypes.shape({
    examples: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
      path: PropTypes.string
    }))
  })
};

Examples.propTypes = {
  route: PropTypes.shape({
    action: PropTypes.fn
  })
};
