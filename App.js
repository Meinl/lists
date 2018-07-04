import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation'
import Ordenes from './Ordenes/Ordenes'

export default class App extends React.Component {

  _onPressButton = () => {
    alert('Pressed!')
  }

  render() {
    return <RootStack />
  }
}

const RootStack = createStackNavigator({
  Ordenes: {
    screen: Ordenes,
    navigationOptions: {
      title: 'Órdenes',
      headerRight:  <View style={{display:'flex', flexDirection:'row', marginRight:8}}>
                      <TouchableOpacity onPress={this._onPressButton}>
                        <FontAwesome name="phone" size={28} color="white"/>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={this._onPressButton}>
                        <FontAwesome name="user" size={28} color="white" style={{marginLeft: 16}}/>
                      </TouchableOpacity>
                    </View>,
      headerStyle: {
        backgroundColor: '#1F252F',
      },
      headerTintColor: '#fff',
      /*headerTitleStyle: {
        fontWeight: 'bold',
      },*/
    },
  },
});

