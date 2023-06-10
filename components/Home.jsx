import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Lift from './Lift'

export default function Home() {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress = {onPress} underlayColor={'#DDDDDD'} style={styles.touchable}>
        <View style={styles.button}>
          <Text>
            Add Workout
          </Text>
        </View>
      </TouchableHighlight>

      <View style={styles.countContainer}>
        <Text style={styles.countText}>{count || null}</Text>
      </View>

      <Lift />
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
  },
  countContainer: {
    alignItems: 'center'
  }
});