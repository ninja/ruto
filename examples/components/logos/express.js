import React, {PropTypes} from 'react';

export function Logo (props) {
  const {style} = props;

  style.fontWeight = 100;

  return (
    <span style={style}>{'Express'}</span>
  );
}

Logo.propTypes = {
  style: PropTypes.shape()
};
