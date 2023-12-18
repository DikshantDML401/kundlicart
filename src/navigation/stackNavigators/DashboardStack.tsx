import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../../screens/home';
import OpenKundli from '../../screens/home/kundli';
import AppHeader from '../../components/organisms/Appheader/AppHeader';
import Matching from '../../screens/home/matching';
const DashboardStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Dashboards"
        component={Home}
        options={{
          headerShown: true,
          header: () => <AppHeader headerText="Kundli" showIcon={true} />,
        }}
      />
      <Stack.Screen
        name="OpenKundli"
        component={OpenKundli}
        options={{
          headerShown: true,
          header: () => <AppHeader headerText="Kundli" showIcon={false} />,
        }}
      />
      <Stack.Screen
        name="Matching"
        component={Matching}
        options={{
          headerShown: true,
          header: () => <AppHeader headerText="Kundli" showIcon={false} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default DashboardStack;
