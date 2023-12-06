import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigation from '../tabNavigator/TabNavigation';
import AppStack from './AppStack';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen name="AppStack" component={AppStack} />
    </Stack.Navigator>
  );
}

export default HomeStack;
