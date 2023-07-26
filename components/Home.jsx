import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { LineChart } from "react-native-chart-kit";

export default function Home({ navigation }) {
  const onPress = () => navigation.navigate('Lifts')

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onPress} underlayColor={'#DDDDDD'} style={styles.touchable}>
        <View style={styles.button}>
          <Text>
            Add Workout
          </Text>
        </View>
      </TouchableHighlight>

      <Text>Bezier Line Chart</Text>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
            }
          ]
        }}
        width={330} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
          alignSelf: 'center'
        }}
      />
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
  }
});