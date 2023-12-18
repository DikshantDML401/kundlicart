import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../../screens/home';
import Wallet from '../../screens/wallet';
import AstroSageBackHeader from '../../components/organisms/AstroSageBackHeader';
const DashboardStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboards" component={Home} />
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

export default DashboardStack;
