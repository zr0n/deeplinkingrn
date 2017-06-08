import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Linking } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.openURL = this.openURL.bind(this)
    this.state = {
      url: "Não definida"
    }
  }
  openURL(event){
    url = event.url//.replace(/.*?:\/\//g, '');
    this.setState({url})
  }
  componentWillMount(){
    Linking.addEventListener('url', this.openURL)
    Linking.getInitialURL().then(url => { this.setState({url}) })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Url:</Text>
        <Text>{this.state.url}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
});
AppRegistry.registerComponent('deeplinking', () => App);
