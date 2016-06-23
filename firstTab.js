'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

var styles = StyleSheet.create({
  style: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 40
  }
});

class FirstTab extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={styles.style}>
        <Text style={styles.text}>First Tab</Text>
      </View>
    )
  }
}

module.exports = FirstTab;