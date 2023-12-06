import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TopTabNavigation from './TopTabNavigation';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={TopTabNavigation} />
    </Tab.Navigator>
  );
}
