import {Navigation} from '../../components/navigation';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class Examples extends Component {
  componentDidMount () {
    const {dispatch, examples, route} = this.props;

    if (!examples.length) { dispatch(route.action()); }
  }

  render () {
    return <Navigation examples={this.props.examples} isRedux/>;
  }
}

Examples.propTypes = {
  dispatch: PropTypes.func,
  examples: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    name: PropTypes.string,
    path: PropTypes.string
  })),
  route: PropTypes.shape({action: PropTypes.func})
};

function mapStateToProps (state) {
  return {examples: state.examples};
}

export default connect(mapStateToProps)(Examples);