import {Navigation} from '../../components/navigation';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class ExampleComponent extends Component {
  componentDidMount () {
    const {dispatch, params, example, route} = this.props;

    if (!example.key || example.key !== params.key) {
      dispatch(route.action(params));
    }
  }

  render () {
    return <Navigation example={this.props.example} isRedux/>;
  }
}

ExampleComponent.propTypes = {
  dispatch: PropTypes.func,
  example: PropTypes.shape({
    key: PropTypes.string,
    name: PropTypes.string,
    path: PropTypes.string
  }),
  params: PropTypes.shape({key: PropTypes.string}),
  route: PropTypes.shape({action: PropTypes.func}),
  server: PropTypes.string
};

function mapStateToProps (state) {
  return {example: state.example, server: state.server};
}

export const Example = connect(mapStateToProps)(ExampleComponent);
