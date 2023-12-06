/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Dashboard from '../../screens/Dashboard';
import Preferences from '../../screens/prefrences';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigation() {
  return (
    <Tab.Navigator initialRouteName="DashboardTopNav">
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Prefrences" component={Preferences} />
    </Tab.Navigator>
  );
}
