// #1: IMPORT REACT
import React from 'react';
// const React = require('react');
import logo from './logo.svg';
import './App.css';
import Greet from './greet';


// #2 you always need to define a function or a class
function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <Greet whom="Alice" /> {/* same as <Greet></Greet> */}
      <Greet whom="Bob" />
      <Greet whom="Cthulu" />
    </div>
  );
}

//#3 you always export that function (or class)
export default App;
// module.exports = App;