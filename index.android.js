/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import Index from './components/Index';

export default class nepaltoday extends Component {
  render() {
    return (
  <Index/>
    );
  }
}

;

AppRegistry.registerComponent('nepaltoday', () => nepaltoday);
