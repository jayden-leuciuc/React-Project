import React from 'react';
import '../Views/Views.scss'
function HelloWorld(props) {
  return (
    
  <h1 className="helloName">Hello {props.name}</h1>
    
  );
}

export default HelloWorld;