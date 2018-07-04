import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class OrdenesAceptadas extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.child}>
            <View style={styles.section1}>
              <Text style={styles.text1}>1</Text>
            </View>
            <View style={styles.section2}>
              <Text>Nombre</Text>
              <Text>Cargo</Text>
            </View>
            <View style={styles.section3}>
              <Text style={styles.text}>3</Text>
            </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap'
    },
    child: {
      height:100,
      flexDirection: 'row',
      backgroundColor: '#8cacea',
      margin: 8
    },
    section1: {
      flex:1,
      //alignSelf: 'center',
      backgroundColor: 'red',
      justifyContent: 'center',
    },
    section2: {
      flex:2,
      //alignSelf: 'center',
      flexDirection:'column',
      justifyContent: 'center',
      backgroundColor: 'yellow',
    },
    section3: {
      flex:1,
      //alignSelf: 'center',
      justifyContent: 'center',
      backgroundColor: 'orange',
    },
    text: {
      alignSelf: 'center'
    },
    text1: {
      backgroundColor: 'white',
      width: 60,
      height: 60,
      borderRadius: 30,
      alignSelf: 'center'
    }
  });


