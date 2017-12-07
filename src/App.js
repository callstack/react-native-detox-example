/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	StyleSheet,
	TouchableOpacity,
  Text,
  View
} from 'react-native';

export default class App extends Component {
	/**
	 * We display this dummy alert to demonstrate
	 * a different querying of an element with Detox.
	 *
	 * See `__e2e__/App.test.js` for details
	 */
	displayAlert() {
		alert('Hey, I am an alert!');
	}

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
					testID="alertLink"
					style={styles.welcome}
					onPress={this.displayAlert}
				>
				<Text testID="welcome">
          Welcome to React Native!
				</Text>
        </TouchableOpacity>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
