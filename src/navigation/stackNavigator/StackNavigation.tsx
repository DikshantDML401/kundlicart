import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'AuthStack'}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
