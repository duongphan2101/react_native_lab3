import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Scr1 from './screens/screen1';
import Scr2 from './screens/screen2';
import Scr3 from './screens/screen3';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Scr1' screenOptions={{headerShown: false}}>
        <Stack.Screen name = 'Scr1' component={Scr1} />
        <Stack.Screen name = 'Scr2' component={Scr2} />
        <Stack.Screen name = 'Scr3' component={Scr3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
