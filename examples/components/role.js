import React from 'react';

const {Component, PropTypes} = React;

export default class Role extends Component {
  constructor (props, context) {
    super(props, context);

    this.state = context.state || {role: {}};
  }

  componentDidMount () {
    const {props, state} = this;
    const {params, route} = props;

    // Isomorphic state parsed from server.
    if (state.role.name) { return; }

    // Action assigned in `./routes.js` and defined in `./actions.js`.
    const {action} = route.props;

    // Homomorphic state fetched from client.
    action(params).then(role => this.setState({role}));
  }

  render () {
    const {name} = this.state.role;

    return (
      <div style={{
        fontFamily: 'sans-serif',
        padding: '10px',
        margin: '10px auto'
      }}>
        <div>{name}</div>
      </div>
    );
  }
}

Role.contextTypes = {
  state: PropTypes.object
};
