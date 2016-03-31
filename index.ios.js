/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  AlertIOS
} from 'react-native';

var Sound = require('react-native-sound');

var whoosh = new Sound('whoosh.mp3', Sound.MAIN_BUNDLE)

class AwesomeProject extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Our Button!
        </Text>

        <Text style={styles.instructions}>
        To get started, push it
        </Text>

        <TouchableHighlight style={styles.button} /* style makes button clear when pressed and can be removed */
          onPress={whoosh.play}
          onPress={this.showAlert}>
          <Text style={styles.buttonText}>THIS IS OUR BUTTON!!!</Text>
        </TouchableHighlight>
      </View>
    );
  }

  showAlert() {
    AlertIOS.alert('Awesome Alert', 'This is my first React Native alert.', [{text: 'Thanks'}])
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
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 44,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    justifyContent: 'center',
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
AppRegistry.registerComponent('devdactic_react', () => devdactic_react);
