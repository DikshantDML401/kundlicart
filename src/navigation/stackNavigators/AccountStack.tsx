/* eslint-disable react/no-unstable-nested-components */
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AstroSageBackHeader from '../../components/organisms/AstroSageBackHeader';
import Account from '../../screens/account';
const AccountStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: true,
          header: () => (
            <AstroSageBackHeader
              title="Account"
              backArrow={true}
              rightIcons={false}
              walletIcon={true}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
