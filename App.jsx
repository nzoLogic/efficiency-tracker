import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import screens from './screens';

const Stack = createStackNavigator();
const { ActivitiesScreen } = screens;

export default function App() {
  useEffect(() => {
    Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ActivitiesScreen" component={ ActivitiesScreen } options={{ title: 'Track your activity' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

