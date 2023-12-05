import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../../screens/Login';
import SignUp from '../../screens/SignUp';
import Otp from '../../screens/otp';
import AstroSageLogin from '../../screens/astroSageLogin';

const Stack = createStackNavigator();

const AuthStack = () => {
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
        component={AstroSageLogin}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
