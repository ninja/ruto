import {Navigation} from '../../components/navigation';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class Example extends Component {
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

Example.propTypes = {
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

export default connect(mapStateToProps)(Example);
