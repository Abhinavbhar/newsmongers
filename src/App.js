
import './App.css';
import React, { Component } from 'react'
import Nav from './components/Nav';
import NewsMain from './components/NewsMain';



export default class App extends Component {

  render() {
    return (
      <div>App
        <Nav/>
        <NewsMain/>
        
        
      </div>
    )
  }
}

