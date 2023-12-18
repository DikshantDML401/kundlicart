/* eslint-disable react/no-unstable-nested-components */
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AstroSageBackHeader from '../../components/organisms/AstroSageBackHeader';
import AstrologerDetail from '../../screens/astrologerDetail';
import Wallet from '../../screens/wallet';
const CallStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="AstroDetails"
        component={AstrologerDetail}
        options={{
          headerShown: true,
          header: () => (
            <AstroSageBackHeader
              title="Astrologer Details"
              backArrow={true}
              rightIcons={false}
              walletIcon={true}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Wallet"
        component={Wallet}
        options={{
          headerShown: true,
          header: () => <AstroSageBackHeader title="Wallet" backArrow={true} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default CallStack;
