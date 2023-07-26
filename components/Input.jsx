import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function Input({ text, isFocus, onFocus }) {
  switch (text) {
    case "Lbs":
      return (
        <TextInput
          style={isFocus ? styles.inputOnFocus : styles.inputOnBlur}
          onPressIn={onFocus}
          keyboardType="numeric"
          placeholder="Lbs"
        />
      );

    case "Sets":
      return (
        <TextInput
          style={isFocus ? styles.inputOnFocus : styles.inputOnBlur}
          onPressIn={onFocus}
          keyboardType="numeric"
          placeholder="Sets"
        />
      );

    case "Reps":
      return (
        <TextInput
          style={isFocus ? styles.inputOnFocus : styles.inputOnBlur}
          onPressIn={onFocus}
          keyboardType="numeric"
          placeholder="Reps"
        />
      );

    default:
      return (
        <Text>
          Something went wrong, try again!
        </Text>
      )
  }
}

const styles = StyleSheet.create({
  inputOnFocus: {
    height: 100,
    width: 100,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    padding: 10,
    fontSize: 35
  },
  inputOnBlur: {
    height: 100,
    width: 100,
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
    fontSize: 35,
    fontWeight: '100'
  },
})