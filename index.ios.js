/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MessageContainer from './src/containers/MessageContainer';

export default class chatApp extends Component {
  render() {
    return (
      <View>
        <MessageContainer/>
      </View>
    );
   }
}

AppRegistry.registerComponent('chatApp', () => chatApp);
