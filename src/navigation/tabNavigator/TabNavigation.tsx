/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import {black, darkYellow, orange, paleOrange} from '../../styles/colors';
import Live from '../../screens/live';
import Chat from '../../screens/chat';
import Home from '../../screens/home';
import AstroSageBackHeader from '../../components/organisms/AstroSageBackHeader';
import AppHeader from '../../components/organisms/Appheader/AppHeader';
import {StatusBar} from 'react-native';
import CallStack from '../stackNavigators/CallStack';
import HistoryStack from '../stackNavigators/HistoryStack';

const Tab = createBottomTabNavigator();

const tabScreens = [
  {
    name: 'Home',
    component: Home,
    icon: 'home',
    color: black,
    headerShown: true,
  },
  {
    name: 'Call',
    component: CallStack,
    icon: 'phone-call',
    color: black,
    headerShown: false,
  },
  {
    name: 'Live',
    component: Live,
    icon: 'video',
    color: black,
    headerShown: true,
  },
  {
    name: 'Chat',
    component: Chat,
    icon: 'message-circle',
    color: black,
    headerShown: true,
  },
  {
    name: 'History',
    component: HistoryStack,
    icon: 'book',
    color: black,
    headerShown: false,
  },
];

export default function TabNavigation() {
  return (
    <>
      <StatusBar backgroundColor={darkYellow} barStyle={'dark-content'} />
      <Tab.Navigator>
        {tabScreens.map((screen, index) => (
          <Tab.Screen
            key={index}
            name={screen.name}
            component={screen.component}
            options={{
              headerShown: screen.headerShown,
              header: () => {
                return (
                  <>
                    {screen.name === 'Home' ? (
                      <AppHeader headerText="KundliKart" showIcon={true} />
                    ) : (
                      <AstroSageBackHeader
                        title={'KundliKart'}
                        backArrow={true}
                        rightIcons={true}
                      />
                    )}
                  </>
                );
              },
              tabBarIcon: ({focused}) => (
                <Icon
                  name={screen.icon}
                  size={22}
                  color={focused ? orange : paleOrange}
                />
              ),
              tabBarLabelStyle: {
                color: screen.color,
              },
            }}
          />
        ))}
      </Tab.Navigator>
    </>
  );
}
