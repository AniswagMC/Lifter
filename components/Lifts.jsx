import { StyleSheet, TextInput, View, Text, TouchableHighlight } from 'react-native';
import React, { useState } from 'react';
import Lift from './Lift'

export default function Lifts() {
  const [liftCard, setLiftCard] = useState([])
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);

  return (
    <View>
      <TouchableHighlight onPress={onPress} underlayColor={'#DDDDDD'} style={styles.touchable}>
          <View style={styles.button}>
            <Text>
              Add Lift
            </Text>
          </View>
        </TouchableHighlight>

        {liftCard.map((card) => (
          <Lift />
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
  },
  touchable: {
    marginHorizontal: 10,
    top: 10
  }
})