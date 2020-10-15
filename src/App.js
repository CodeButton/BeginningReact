import React, { Component } from 'react';
import './App.css';
import TOC from './Components/TOC.js';
import Content from './Components/Content.js';
import Subject from './Components/Subject.js';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            subject:{
                title1: 'WEB', 
                subtitle1: 'world wide web!',
                title2: 'React',
                subtitle2: 'Studying React!'},
            contents:[
            {id:1, title:'HTML', desc:'HTML is HyperText Markup Language'},
            {id:2, title:'CSS', desc:'CSS is Cascading Style Sheets'}
            ]
        }
    }
  render() {
    return (
      <div className="App">
        <Subject title = {this.state.subject.title1} subtitle = {this.state.subject.subtitle1}></Subject>
        <Subject title = {this.state.subject.title2} subtitle = {this.state.subject.subtitle2}></Subject>    
        Hello, React!!
        <TOC data ={this.state.contents}></TOC>
        <Content title = "HTML" desc = "HTML is HyperText Markup Language"></Content>
        <Content title = "CSS" desc = "CSS is Cascading Style Sheets"></Content>
      </div>
    );
  }
}

export default App;
