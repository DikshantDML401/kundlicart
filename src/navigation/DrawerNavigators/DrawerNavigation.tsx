import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from '../stackNavigators/HomeStack';
import Notification from '../../screens/notification';
import Preferences from '../../screens/prefrences';
import {lightYellow} from '../../styles/colors';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Dashboard"
        component={HomeStack}
        options={{headerStyle: {backgroundColor: lightYellow}}}
      />
      <Drawer.Screen name="Set Preferences" component={Preferences} />
      <Drawer.Screen name="Notification Setting" component={Notification} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
