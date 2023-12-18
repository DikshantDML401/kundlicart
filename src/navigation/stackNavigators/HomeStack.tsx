/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigation from '../tabNavigator/TabNavigation';
import AppStack from './AppStack';
import AppHeader from '../../components/organisms/Appheader/AppHeader';
// import Account from '../../screens/account';
// import AstroSageBackHeader from '../../components/organisms/AstroSageBackHeader';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
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
