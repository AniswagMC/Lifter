import { StyleSheet, TextInput, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import React, { useState } from 'react';

export default function Lift() {
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
    <View>
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
        value = {value}
      />

      <View style={styles.horizontal}>
        <TextInput
          style={isTextFocus ? styles.inputOnFocus : styles.inputOnBlur}
          onFocus={() => setTextFocus(true)}
          onBlur={() => setTextFocus(false)}
          keyboardType="numeric"
          placeholder = "Sets"
        />
        <Text style = {styles.cross}>
          X
        </Text>
        <TextInput
          style={isTextFocus ? styles.inputOnFocus : styles.inputOnBlur}
          onFocus={() => setTextFocus(true)}
          onBlur={() => setTextFocus(false)}
          keyboardType="numeric"
          placeholder = "Reps"
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
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
  }
});