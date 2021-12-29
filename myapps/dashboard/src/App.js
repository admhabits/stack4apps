import React, { Component } from 'react';

import MasterAdminLayout from './layouts/MasterAdminLayout';
import "./assets/css/form-control.css";
import "./assets/css/icons.css";
import "./assets/css/overflow-handle.css";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <MasterAdminLayout/>
      </div>
    );
  }
}
