import { StyleSheet, TextInput, View, Text, TouchableHighlight } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import React, { useState } from 'react';
// import Input from './Input'

export default function Lift({ navigation }) {
  const [value, setValue] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0)

  const [lbs, setLbs] = useState(null)
  const [sets, setSets] = useState(null)
  const [reps, setReps] = useState(null)

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
        onChange={item => {
          setValue(item.value);
        }}
        labelField="label"
        valueField="value"
        placeholder='Select Lift'
        value={value}
      />

      <View style={styles.horizontal}>
        <TextInput
          style={isFocus ? styles.inputOnFocus : styles.inputOnBlur}
          onPressIn={onFocus}
          keyboardType="numeric"
          placeholder="Lbs"
          onChange={item => setValue(item.value)}
          value={value}
        />

        <Text style={styles.cross}>
          X
        </Text>

        <Input
          text="Sets"
          isFocus={activeIndex === 1}
          onFocus={() => setActiveIndex(1)}
          onValueChange={item => setSets(item.value)}
          toDisplay={sets}
        />

        <Text style={styles.cross}>
          X
        </Text>

        <Input
          text="Reps"
          isFocus={activeIndex === 2}
          onFocus={() => setActiveIndex(2)}
          onValueChange={item => setReps(item.value)}
          toDisplay={reps}
        />
      </View>

      <TouchableHighlight
        onPress={() => navigation.navigate('Lifts')}
        style={{ marginTop: 10, borderColor: 'black', borderWidth: 2 }}
        underlayColor={'#DDDDDD'}
      >
        <Text style={{ alignSelf: 'center' }}>
          Done
        </Text>
      </TouchableHighlight>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  dropdown: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20
  },
  horizontal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cross: {
    alignSelf: 'center',
    marginHorizontal: 10,
    fontWeight: 'bold'
  }
});