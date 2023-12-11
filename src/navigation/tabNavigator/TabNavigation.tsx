import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import {black, orange} from '../../styles/colors';
import Call from '../../screens/call';
import Live from '../../screens/live';
import Chat from '../../screens/chat';
import History from '../../screens/historyTab';
import Home from '../../screens/home';

const Tab = createBottomTabNavigator();

const tabScreens = [
  {
    name: 'Home',
    component: Home,
    icon: 'home',
    color: black,
  },
  {
    name: 'Call',
    component: Call,
    icon: 'phone-call',
    color: black,
  },
  {
    name: 'Live',
    component: Live,
    icon: 'video',
    color: black,
  },
  {
    name: 'Chat',
    component: Chat,
    icon: 'message-circle',
    color: black,
  },
  {
    name: 'History',
    component: History,
    icon: 'book',
    color: black,
  },
];

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      {tabScreens.map((screen, index) => (
        <Tab.Screen
          key={index}
          name={screen.name}
          component={screen.component}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Icon name={screen.icon} size={22} color={orange} />
            ),
            tabBarLabelStyle: {
              color: screen.color,
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export const common = () => {};
