import React from 'react';
import radium, {Style} from 'radium';
import {renderToStaticMarkup} from 'react-dom/server';

const rules = {
  a: {color: 'rgb(0, 216, 255)'},
  body: {
    backgroundColor: 'rgb(51, 51, 51)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: '-apple-system, Helvetica Neue, Lucida Grande, sans-serif',
    fontSize: '6vmin',
    justifyContent: 'space-between',
    lineHeight: '6vmin',
    margin: 0
  }
};
const ServerStyle = radium(props => props.children);

export function renderToStaticStyle ({userAgent}) {
  return renderToStaticMarkup(
    <ServerStyle radiumConfig={{userAgent}}>
      <Style rules={rules}/>
    </ServerStyle>
  );
}
