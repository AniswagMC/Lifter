import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default function Home() {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress = {onPress} underlayColor={'#DDDDDD'}>
        <View style={styles.button}>
          <Text>
            Add Workout
          </Text>
        </View>
      </TouchableHighlight>

      <View style={styles.countContainer}>
        <Text style={styles.countText}>{count || null}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    alignItems: 'center',
    // justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
  },
});