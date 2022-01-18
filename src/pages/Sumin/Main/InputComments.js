import React from 'react';
import './Main.scss';

const InputComments = props => {
  return (
    <>
      <li onClick>{props.comments}</li>
    </>
  );
};

export default InputComments;
