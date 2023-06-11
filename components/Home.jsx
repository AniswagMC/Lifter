import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default function Home({ navigation }) {
  const onPress = () => navigation.navigate('Lifts');

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress = {onPress} underlayColor={'#DDDDDD'} style={styles.touchable}>
        <View style={styles.button}>
          <Text>
            Add Workout
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  touchable: {
    marginLeft: 10,
    marginRight: 10
  },
  button: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10
  }
});