import Home from './components/Home';
import Lifts from './components/Lifts';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="red" />
      <Stack.Navigator>
        <Stack.Screen 
          name = "Home"
          component={Home}
          options={{ title: "Lifter" }}
        />
        <Stack.Screen 
          name = "Lifts"
          component={Lifts}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}