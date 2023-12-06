import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from '../stackNavigators/HomeStack';
import Notification from '../../screens/notification';
import Preferences from '../../screens/prefrences';
import AppHeader from '../../screens/Appheader/AppHeader';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="AstroSage"
        component={HomeStack}
        options={{
          headerStyle: {backgroundColor: '#dbbb46'},
          headerTitle: () => <AppHeader />,
        }}
      />
      <Drawer.Screen name="Set Preferences" component={Preferences} />
      <Drawer.Screen name="Notification Setting" component={Notification} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
