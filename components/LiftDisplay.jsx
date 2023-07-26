import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default function LiftDisplay({ navigation }) {
  const onPress = () => {
    navigation.navigate('Lift')
  }

  return (
    <TouchableHighlight style={styles.box} onPress = {onPress} underlayColor = {'#DDDDDD'}>
      <Text style={{ alignSelf: 'center' }}>
        Boxed Item
      </Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  box: {
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 20,
    paddingVertical: 10
  },
})