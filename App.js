import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import WatchFace from './src/page/WatchFace';
import Weather from './src/page/Weather';

export default class App extends Component {
  render() {
    return (
      <Weather></Weather>
    );
  }
}
