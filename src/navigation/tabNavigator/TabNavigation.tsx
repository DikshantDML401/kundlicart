import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Notification from '../../screens/notification';
import Chat from '../../screens/chat';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Chat" component={Chat} options={{headerShown: false}} />
    </Tab.Navigator>
  );
}
