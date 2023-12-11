import {Image, StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {drawerHeader} from '../../utils/images';
import {heightToDp, widthToDp} from '../../styles/responsive';
import {Green, black, brown} from '../../styles/colors';
import {font24Px} from '../../utils/typography';

const UpperDrawer = () => {
  return (
    <View style={styles.upperContainer}>
      <Image source={drawerHeader} style={styles.drawerImage} />
      <Icon name="user" size={42} color={Green} style={styles.materialIcon} />
      <View style={styles.textContainer}>
        <TouchableOpacity>
          <Text style={styles.title}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.title}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpperDrawer;

const styles = StyleSheet.create({
  upperContainer: {
    position: 'relative',
  },
  drawerImage: {
    width: widthToDp('75%'),
    height: heightToDp('20%'),
  },
  title: {
    color: black,
    fontSize: font24Px,
  },
  textContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthToDp('65%'),
    marginLeft: widthToDp('5%'),
    bottom: widthToDp('2%'),
  },
  materialIcon: {
    position: 'absolute',
    backgroundColor: brown,
    borderRadius: widthToDp('25%'),
    paddingHorizontal: widthToDp('3%'),
    paddingVertical: widthToDp('1%'),
    top: widthToDp('8%'),
    left: widthToDp('5%'),
  },
});
