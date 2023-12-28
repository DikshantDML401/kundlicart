import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AstroSageLogin from '../../screens/astroSageLogin';
import AstroSageSignUp from '../../screens/AstroSageSignUp';
import {darkYellow} from '../../styles/colors';

const Tab = createMaterialTopTabNavigator();

const AstroSageTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: darkYellow},
        tabBarLabelStyle: {fontSize: 16, fontWeight: '400'},
      }}>
      <Tab.Screen name="SIGN IN" component={AstroSageLogin} />
      <Tab.Screen name="SIGN UP" component={AstroSageSignUp} />
    </Tab.Navigator>
  );
};

export default AstroSageTab;
