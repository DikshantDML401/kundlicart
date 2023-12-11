import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../../screens/home';
const DashboardStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboards" component={Home} />
    </Stack.Navigator>
  );
};

export default DashboardStack;
