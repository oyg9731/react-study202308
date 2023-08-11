// rafce

import React from 'react';
import Card from './components/UI/Card';

const Hello = (props) => {
  console.log('hello commponent');
  console.log(props);
  return (
    <Card className='rectengle'>
      <div>
        {props.children}
        Hello React
      </div>
    </Card>
  );
};

export default Hello;
