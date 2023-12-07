import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigation from '../tabNavigator/TabNavigation';
import AppStack from './AppStack';
import AppHeader from '../../screens/Appheader/AppHeader';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={TabNavigation}
        options={{
          headerShown: false,
          headerTitle: () => <AppHeader headerText="" />,
        }}
      />
      <Stack.Screen name="AppStack" component={AppStack} />
    </Stack.Navigator>
  );
}

export default HomeStack;
