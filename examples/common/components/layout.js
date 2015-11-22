import {Logo as LogoExpress} from './logos/express';
import {Logo as LogoHapi} from './logos/hapi';
import {Logo as LogoReact} from './logos/react';
import React, {PropTypes} from 'react';

export function Layout (props) {
  const {children, server} = props;

  return (
    <div style={{
      alignItems: 'center',
      display: 'flex',
      height: '60vmin',
      flexDirection: 'column',
      justifyContent: 'space-around'
    }}>
      <div style={{fontSize: '10vmin'}}>{'rūto'}</div>
      <div>{'Universal router example.'}</div>
      <div style={{
        alignItems: 'flex-end',
        display: 'flex',
        flex: 'none'
      }}>
        <LogoReact style={{alignSelf: 'flex-end', height: '10vmin'}}/>
        <span style={{fontSize: '4vmin', margin: '2vmin'}}>{'+'}</span>
        {server === 'hapi' ?
          <LogoHapi style={{fill: 'white', height: '18vmin'}}/> :
          <LogoExpress style={{fontSize: '6vmin'}}/>
        }
      </div>
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  server: PropTypes.string.isRequired
};
