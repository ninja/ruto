import React from 'react';

const {Component, PropTypes} = React;

export default class Roles extends Component {
  constructor (props, context) {
    super(props, context);

    this.state = context.state || {roles: []};
  }

  componentDidMount () {
    const {props, state} = this;
    const {params, route} = props;

    // Isomorphic state parsed from server.
    if (state.roles.length > 0) { return; }

    // Action assigned in `./routes.js` and defined in `./actions.js`.
    const {action} = route.props;

    // Homomorphic state fetched from client.
    action(params).then(roles => this.setState({roles}));
  }

  render () {
    const {roles} = this.state;

    return (
      <div style={{
        fontFamily: 'sans-serif',
        padding: '10px',
        margin: '10px auto'
      }}>
        {roles.map(({key, name}) => <div key={key}>{name}</div>)}
      </div>
    );
  }
}

Roles.contextTypes = {
  state: PropTypes.object
};
