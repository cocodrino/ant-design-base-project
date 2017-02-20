// @flow

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.less';
import { Button } from 'antd';

let a = [2, 3, 4];
let  d=a / 1;


class App extends Component {
  render() {
    return ( < div className="App" >
      < div className="App-header" >
        < Button type="primary" > Button < /Button>
        < img src={logo} className="App-logo" alt="logo" />
        < h2 > Welcome to React < /h2> < / div >
        < p className="App-intro" >
              To get started, edit < code > src / App.js < /code> and save to reload.
        </p> 
      </div>
    );
  }
}

export default App;