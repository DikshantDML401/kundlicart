/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../../screens/Login';
import Otp from '../../screens/otp';
import SignUp from '../../screens/SignUp';
import AstroSageTab from '../tabNavigator/AstroSageTab';
import AstroSageBackHeader from '../../components/organisms/AstroSageBackHeader';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Otp" component={Otp} options={{headerShown: false}} />
      <Stack.Screen
        name="signup"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AstroSageLogin"
        component={AstroSageTab}
        options={{
          headerShown: true,
          header: () => (
            <AstroSageBackHeader title="AstroSage Kundli" backArrow={true} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
