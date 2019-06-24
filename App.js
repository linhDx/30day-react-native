import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import WatchFace from './src/page/WatchFace';

export default class App extends Component {
  render() {
    return (
      <WatchFace></WatchFace>
    );
  }
}
