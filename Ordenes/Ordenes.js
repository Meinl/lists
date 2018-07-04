import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation'
import { StyleSheet, Text, View } from 'react-native';
import OrdenesAceptadas from '../OrdenesAceptadas/OrdenesAceptadas'
import OrdenesNuevas from '../OrdenesNuevas/OrdenesNuevas'
import Historial from '../Historial/Historial'

export default class Ordenes extends React.Component {
  render() {
    return <OrdenesStack />
  }
}

const OrdenesStack = createMaterialTopTabNavigator({
  OrdenesNuevas: {
    screen: OrdenesNuevas,
    navigationOptions: {
      tabBarLabel: 'Nuevas',
    },
  },
  OrdenesAceptadas: {
    screen: OrdenesAceptadas,
    navigationOptions: {
      tabBarLabel: 'Aceptadas',
    },
  },
  Historial: {
    screen: Historial,
    navigationOptions: {
      tabBarLabel: 'Historial',
    },
  }
},{
  tabBarOptions: {
    labelStyle: {
      fontSize: 11,
    },
    style: {
      backgroundColor: '#1F252F',
    },
    indicatorStyle: {
      backgroundColor: '#428bca'
    }
  }
})
  