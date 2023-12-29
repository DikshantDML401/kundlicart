/* eslint-disable react/no-unstable-nested-components */
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AstroSageBackHeader from '../../components/organisms/AstroSageBackHeader';
import History from '../../screens/historyTab';
import Account from '../../screens/account';
import Wallet from '../../screens/wallet';
const HistoryStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="History"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="History"
        component={History}
        options={{
          headerShown: true,
          header: () => (
            <AstroSageBackHeader
              title={'Consultation History'}
              backArrow={true}
              rightIcons={false}
              walletIcon={true}
            />
          ),
        }}
      />
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

export default HistoryStack;
