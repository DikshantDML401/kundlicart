import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigation from '../tabNavigator/TabNavigation';
import AppStack from './AppStack';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboard" component={TabNavigation} />
      <Stack.Screen name="AppStack" component={AppStack} />
    </Stack.Navigator>
  );
}

export default HomeStack;
