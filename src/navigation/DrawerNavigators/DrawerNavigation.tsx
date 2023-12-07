import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from '../stackNavigators/HomeStack';
import Preferences from '../../screens/prefrences';
import AppHeader from '../../screens/Appheader/AppHeader';
import {darkYellow} from '../../styles/colors';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="AstroSage"
        component={HomeStack}
        options={({route}) => ({
          headerStyle: {backgroundColor: darkYellow},
          headerTitle: () => <AppHeader headerText={route.name} />,
        })}
      />
      <Drawer.Screen name="Set Preferences" component={Preferences} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
