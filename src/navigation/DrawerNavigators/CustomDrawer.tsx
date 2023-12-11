/* eslint-disable react/no-unstable-nested-components */
import {StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {View} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';
import Feather from 'react-native-vector-icons/Feather';
import Material from 'react-native-vector-icons/MaterialIcons';

import UpperDrawer from '../../components/molecules/UpperDrawer';
import {font16Px} from '../../utils/typography';
import {black} from '../../styles/colors';
import {widthToDp} from '../../styles/responsive';

const CustomDrawer = ({navigation}: any) => {
  return (
    <ScrollView contentContainerStyle={styles.drawerContainer}>
      <UpperDrawer />
      <View style={styles.drawerItems}>
        <DrawerItem
          onPress={() => navigation.navigate('Preferences')}
          labelStyle={styles.label}
          label={'Set Preferences'}
          icon={() => <Feather name="sliders" size={18} color={black} />}
        />
        <DrawerItem
          onPress={() => navigation.navigate('Notification')}
          labelStyle={styles.label}
          label={'Notification Settings'}
          icon={() => <Feather name="bell" size={18} color={black} />}
        />
        <DrawerItem
          onPress={() => navigation.navigate('changeLang')}
          labelStyle={styles.label}
          label={'Change Language'}
          icon={() => <Feather name="globe" size={18} color={black} />}
        />
        <DrawerItem
          onPress={() => navigation.navigate('upgradePlan')}
          labelStyle={styles.label}
          label={'Upgrade Plan'}
          icon={() => <Material name="upgrade" size={18} color={black} />}
        />
        <DrawerItem
          onPress={() => navigation.navigate('removeAds')}
          labelStyle={styles.label}
          label={'Remove Ads'}
          icon={() => <Material name="block" size={18} color={black} />}
        />
        <DrawerItem
          onPress={() => navigation.navigate('Feedback')}
          labelStyle={styles.label}
          label={'Feedback'}
          icon={() => <Material name="announcement" size={18} color={black} />}
        />
        <DrawerItem
          onPress={() => navigation.navigate('RateAstrosage')}
          labelStyle={styles.label}
          label={'Rate Astrosage'}
          icon={() => <Feather name="star" size={18} color={black} />}
        />
        <DrawerItem
          onPress={() => navigation.navigate('AboutUs')}
          labelStyle={styles.label}
          label={'About Us'}
          icon={() => <Material name="info" size={18} color={black} />}
        />
        <DrawerItem
          onPress={() => navigation.navigate('AstroRegistration')}
          labelStyle={styles.label}
          label={'Astrosage Registration'}
          icon={() => <Feather name="user" size={18} color={black} />}
        />
        <DrawerItem
          onPress={() => navigation.navigate('ChooseKundli')}
          labelStyle={styles.label}
          label={'Choose Kundli'}
          icon={() => <Feather name="file-text" size={18} color={black} />}
        />
      </View>
    </ScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  drawerContainer: {},
  drawerItems: {
    marginTop: widthToDp('3%'),
  },
  label: {
    fontSize: font16Px,
    fontWeight: '500',
  },
});
