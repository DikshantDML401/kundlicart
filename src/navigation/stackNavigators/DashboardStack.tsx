/* eslint-disable react/no-unstable-nested-components */
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../../screens/home';
import OpenKundli from '../../screens/home/kundli';
import AppHeader from '../../components/organisms/Appheader/AppHeader';
import Matching from '../../screens/home/matching';
import AstroSageBackHeader from '../../components/organisms/AstroSageBackHeader';
import Horoscope from '../../screens/home/horoscope';
import LocationPlace from '../../screens/home/locationPlace';
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
          header: () => (
            <AstroSageBackHeader
              title="Matching"
              backArrow={true}
              rightIcons={false}
              walletIcon={false}
              containerStyle={false}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Horoscope"
        component={Horoscope}
        options={{
          headerShown: true,
          header: () => (
            <AstroSageBackHeader
              title="Select Your Sign"
              backArrow={true}
              rightIcons={false}
              walletIcon={false}
              containerStyle={true}
            />
          ),
        }}
      />
      <Stack.Screen
        name="locationPlace"
        component={LocationPlace}
        options={{
          headerShown: true,
          header: () => (
            <AstroSageBackHeader
              title="Search Place"
              backArrow={true}
              rightIcons={false}
              walletIcon={false}
              containerStyle={false}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default DashboardStack;
