import { StyleSheet, TextInput, View, Text, TouchableHighlight } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import React, { useState } from 'react';
import Input from './Input'

export default function Lift({ navigation }) {
  const [value, setValue] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1)

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
        // search
        onChange={item => {
          setValue(item.value);
        }}
        labelField="label"
        valueField="value"
        placeholder='Select Lift'
        value={value}
      />

      <View style={styles.horizontal}>
        <Input
          text="Lbs"
          isFocus={activeIndex === 0}
          onFocus={() => setActiveIndex(0)}
        />

        <Text style={styles.cross}>
          X
        </Text>

        <Input
          text="Sets"
          isFocus={activeIndex === 1}
          onFocus={() => setActiveIndex(1)}
        />

        <Text style={styles.cross}>
          X
        </Text>

        <Input
          text="Reps"
          isFocus={activeIndex === 2}
          onFocus={() => setActiveIndex(2)}
        />
      </View>

      <TouchableHighlight 
        onPress={() => navigation.navigate('Lifts')} 
        style = {{ marginTop: 10, borderColor: 'black', borderWidth: 2 }}
        underlayColor={'#DDDDDD'} 
      >
        <Text style = {{ alignSelf: 'center' }}>
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
    marginTop:
      20
  },
  inputOnFocus: {
    height: 100,
    width: 100,
    borderBottomColor: 'black',
    borderColor: 'red',
    borderWidth: 2,
    padding: 10,
    // backgroundColor: 'red',
    fontSize: 35
  },
  inputOnBlur: {
    height: 40,
    width: 60,
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
    marginHorizontal: 10,
    fontWeight: 'bold'
  }
});