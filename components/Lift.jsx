import { StyleSheet, TextInput, View, Text, TouchableHighlight } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import React, { useState } from 'react';

export default function Lift() {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);

  const [value, setValue] = useState(null);
  // const [isFocus, setIsFocus] = useState(false);
  const [isTextFocus, setTextFocus] = useState(false)

  const data = [
    { label: 'Squat', value: 'Squat' },
    { label: 'Bench', value: 'Bench' },
    { label: 'Deadlift', value: 'Deadlift' },
    { label: 'Overhead Press', value: 'Overhead Press' },
  ];

  return (
    <View style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        data={data}
        search
        // onFocus={() => setIsFocus(true)}
        // onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          // setIsFocus(false);
        }}
        labelField="label"
        valueField="value"
        placeholder='Select Lift'
        value={value}
      />

      <View style={styles.horizontal}>
        <TextInput
          style={isTextFocus ? styles.inputOnFocus : styles.inputOnBlur}
          onFocus={() => setTextFocus(true)}
          onBlur={() => setTextFocus(false)}
          keyboardType="numeric"
          placeholder="Sets"
        />
        <Text style={styles.cross}>
          X
        </Text>
        <TextInput
          style={isTextFocus ? styles.inputOnFocus : styles.inputOnBlur}
          onFocus={() => setTextFocus(true)}
          onBlur={() => setTextFocus(false)}
          keyboardType="numeric"
          placeholder="Reps"
        />
      </View>

      <TouchableHighlight onPress={onPress} underlayColor={'#DDDDDD'} style={styles.touchable}>
        <View style={styles.button}>
          <Text>
            Submit
          </Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={onPress} underlayColor={'#DDDDDD'} style={StyleSheet.flatten([styles.touchable, styles.bottomButton])}>
        <View style = {styles.button}>
          <Text>
            Add Lift
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  dropdown: {
    marginLeft: 10,
    marginRight: 10,
  },
  inputOnFocus: {
    height: 40,
    width: 60,
    borderBottomColor: 'black',
    borderColor: 'white',
    borderWidth: 2,
    padding: 10,
  },
  inputOnBlur: {
    height: 40,
    width: 60,
    borderBottomColor: 'black',
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
  },
  horizontal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cross: {
    alignSelf: 'center',
    marginHorizontal: 10
  },
  touchable: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },
  button: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10
  },
  bottomButton: {
    // position: 'absolute',
    top: 200,
    // alignItems: 'center',
  }
});