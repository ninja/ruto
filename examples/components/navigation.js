import {Link} from 'react-router';
import React, {PropTypes} from 'react';

export function Navigation (props) {
  const {example, examples} = props;
  const list = examples ? examples : [
    {key: 'back', name: 'Back', path: '/'},
    {key: example.key || 'loading', name: example.name}
  ];

  return (
    <div style={{
      alignItems: 'flex-end',
      display: 'flex',
      fontSize: '5vmin',
      justifyContent: 'space-around',
      width: '100vmin'
    }}>
      {list.map(({key, name, path}) => {
        if (!path) { return <span key={key}>{name}</span>; }
        if (key === 'back') { return <Link key={key} to={path}>{name}</Link>; }

        return (
          <div key={key} style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{color: '#999', fontSize: '3vmin'}}>{key}</div>
            {key === '404' ?
              <a href={path}>{name}</a> :
              <Link to={path}>{name}</Link>
            }
          </div>
        );
      })}
    </div>
  );
}

Navigation.propTypes = {
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
};
