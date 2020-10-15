import React, { Component } from 'react';
import './App.css';
import TOC from './Components/TOC.js';
import Content from './Components/Content.js';
import Subject from './Components/Subject.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title = "WEB" subtitle = "world wide web!"></Subject>
        <Subject title = "React" subtitle = "Studyung React!"></Subject>    
        Hello, React!!
        <TOC></TOC>
        <Content title = "HTML" desc = "HTML is HyperText Markup Language"></Content>
        <Content title = "CSS" desc = "CSS is Cascading Style Sheets"></Content>
      </div>
    );
  }
}

export default App;
