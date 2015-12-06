import {Navigation} from '../../components/navigation';
import React, {Component, PropTypes} from 'react';
import {getState} from '../state';

export class Example extends Component {
  constructor (props, context) {
    super(props, context);

    const {params} = props;

    let {example} = context.state;

    if (!example || example.key !== params.key) { example = {name: ''}; }

    this.state = {example};
  }

  componentDidMount () {
    if (!this.state.example.key) {
      getState(this.props, state => this.setState(state));
    }
  }

  render () {
    return <Navigation example={this.state.example}/>;
  }
}

Example.contextTypes = {
  state: PropTypes.shape({
    example: PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
      path: PropTypes.string
    })
  })
};

Example.propTypes = {
  params: PropTypes.shape({key: PropTypes.string}),
  route: PropTypes.shape({action: PropTypes.fn})
};
