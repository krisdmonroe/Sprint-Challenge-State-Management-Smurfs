import React, { Component } from "react";
import "./App.css";
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger'


import SmurfList from './SmurfList'
import { Reducer } from '../reducers/Reducer'
import SmurfForm from "./SmurfForm";

export const store = createStore(Reducer, applyMiddleware(thunk, logger));

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfList />
        <SmurfForm />
      </div>
    );
  }
}

export default App;
