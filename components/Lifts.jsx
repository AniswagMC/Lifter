import { StyleSheet, View, ScrollView, Text, TouchableHighlight, Button, FlatList } from 'react-native';
import React, { useState } from 'react';
import uuid from 'react-native-uuid';
import Lift from './Lift'

export default function Lifts({ navigation }) {
  const [cards, setCards] = useState([])

  const onAdd = () => {
    setCards([...cards, { id: uuid.v4() }])
  }

  const onSubmit = () => {
    navigation.navigate('Home')
  }

  const emptyList = () => {
    return (
      <Text style={{ alignSelf: 'center' }}>
        Time to get lifting
      </Text>
    )
  }

  const renderCard = () => {
    return (
      <Lift />
    )
  }

  return (
    <FlatList
      data={cards}
      ListEmptyComponent={emptyList}
      keyExtractor={cards => cards.id}
      renderItem={renderCard}
      windowSize={7}
      removeClippedSubviews={true}
      maxToRenderPerBatch={3}

      ListHeaderComponent={
        <TouchableHighlight onPress={onAdd} underlayColor={'#DDDDDD'} style={styles.touchable}>
          <View style={styles.button}>
            <Text>
              Add Lift
            </Text>
          </View>
        </TouchableHighlight>
      }
      ListFooterComponent={
        <TouchableHighlight onPress={onSubmit} underlayColor={'#DDDDDD'} style={styles.touchable}>
          <View style={styles.button}>
            <Text>
              Submit
            </Text>
          </View>
        </TouchableHighlight>
      }
    />
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    marginTop: 10
  },
  touchable: {
    marginHorizontal: 10,
    marginTop: 10
  }
})