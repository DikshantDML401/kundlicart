import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardStack from './DashboardStack';

import AccountStack from './AccountStack';
import CallStack from './CallStack';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboard" component={DashboardStack} />
      <Stack.Screen name="AccountStack" component={AccountStack} />
      <Stack.Screen name="CallStack" component={CallStack} />
    </Stack.Navigator>
  );
};

export default AppStack;
