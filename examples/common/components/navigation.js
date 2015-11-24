import {Link} from 'react-router';
import React, {PropTypes} from 'react';

export function Navigation (props) {
  const {example, examples, isRedux} = props;
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
        if (isRedux) { path += '?redux=true'; }
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
      <a href={isRedux ? '?' : '?redux=true'} style={{
        alignItems: 'center',
        border: '2px solid rgb(0, 216, 255)',
        borderRadius: '5vmin',
        display: 'flex',
        fontSize: '5vmin',
        height: '8vmin',
        textDecoration: 'none'
      }}>
        <div style={{
          display: isRedux ? 'block' : 'none',
          marginLeft: '1vmin',
          textAlign: 'center',
          width: '16vmin'
        }}>{'redux'}</div>
        <div style={{
          backgroundColor: 'rgb(0, 216, 255)',
          borderRadius: '4vmin',
          height: '6vmin',
          margin: '1vmin',
          width: '6vmin'
        }}/>
        <div style={{
          display: isRedux ? 'none' : 'block',
          marginRight: '1vmin',
          textAlign: 'center',
          width: '16vmin'
        }}>{'state'}</div>
      </a>
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
  })),
  isRedux: PropTypes.bool
};
