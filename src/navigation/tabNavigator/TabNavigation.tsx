import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Notification from '../../screens/notification';
import Dashboard from '../../screens/Dashboard';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="HOME" component={Dashboard} />
      <Tab.Screen name="Notification" component={Notification} />
    </Tab.Navigator>
  );
}

export const common = () => {};
