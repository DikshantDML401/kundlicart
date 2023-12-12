/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Preferences from '../../screens/prefrences';
import {darkYellow} from '../../styles/colors';
import HomeStack from '../stackNavigators/HomeStack';
import CustomDrawer from './CustomDrawer';
import ChangeLanguage from '../../screens/changeLanguage';
import UpgradePlan from '../../screens/upgradePlan';
import RemnoveAds from '../../screens/removeAds';
import Feedback from '../../screens/feedback';
import RateAstroSage from '../../screens/RateAstrosage';
import AboutUs from '../../screens/aboutUs';
import AstroRegistration from '../../screens/AstroRegistration';
import ChooseKundli from '../../screens/chooseKundli';
import Notification from '../../screens/notifications';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const routing = [
    {
      name: 'Dashboard',
      component: HomeStack,
      unmount: false,
      headerShown: false,
      headerBackgroundColor: darkYellow,
    },
    {
      name: 'Preferences',
      component: Preferences,
      unmount: false,
      headerShown: true,
    },
    {
      name: 'Notification',
      component: Notification,
      unmount: false,
      headerShown: true,
    },
    {
      name: 'changeLang',
      component: ChangeLanguage,
      unmount: true,
      headerShown: true,
    },
    {
      name: 'upgradePlan',
      component: UpgradePlan,
      unmount: false,
      headerShown: true,
    },
    {
      name: 'removeAds',
      component: RemnoveAds,
      unmount: true,
      headerShown: true,
    },
    {
      name: 'Feedback',
      component: Feedback,
      unmount: false,
      headerShown: true,
    },
    {
      name: 'RateAstrosage',
      component: RateAstroSage,
      unmount: false,
      headerShown: true,
    },
    {
      name: 'AboutUs',
      component: AboutUs,
      unmount: false,
      headerShown: true,
    },
    {
      name: 'AstroRegistration',
      component: AstroRegistration,
      unmount: false,
      headerShown: true,
    },
    {
      name: 'ChooseKundli',
      component: ChooseKundli,
      unmount: false,
      headerShown: true,
    },
  ];
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      {routing &&
        routing?.map((val, index) => (
          <Drawer.Screen
            name={val.name}
            component={val.component}
            key={index}
            options={{
              headerStyle: {backgroundColor: darkYellow},
              headerShown: val.headerShown,
              unmountOnBlur: val.unmount,
            }}
          />
        ))}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
