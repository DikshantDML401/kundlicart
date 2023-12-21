import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {black, golden, lightOrange, white} from '../../styles/colors';
import {font18Px} from '../../utils/typography';
import {widthToDp} from '../../styles/responsive';

const AstroRatingCircle = () => {
  return (
    <>
      <View style={styles.backgroundCircle} />

      <View style={styles.container}>
        <Text style={styles.title}>5.0</Text>
        <View style={styles.starWrapper}>
          {Array.from({length: 5}).map((_, index) => (
            <MaterialIcons key={index} name="star" size={12} color={golden} />
          ))}
        </View>
      </View>
    </>
  );
};

const circleSize = widthToDp('20%');

const styles = StyleSheet.create({
  backgroundCircle: {
    backgroundColor: lightOrange,
    paddingLeft: widthToDp('17%'),
    paddingRight: widthToDp('7%'),
    borderRadius: circleSize,
    paddingTop: widthToDp('14%'),
    paddingBottom: widthToDp('10%'),
    alignItems: 'center',
    position: 'absolute',
    right: widthToDp('1.7%'),
    bottom: 0,
  },
  container: {
    backgroundColor: white,
    width: widthToDp('24%'),
    borderRadius: circleSize,
    paddingVertical: widthToDp('6%'),
    alignItems: 'center',
    position: 'absolute',
    right: widthToDp('2.5%'),
    bottom: 0,
  },
  title: {
    color: black,
    fontSize: font18Px,
    fontWeight: '500',
  },
  starWrapper: {
    flexDirection: 'row',
  },
});

export default AstroRatingCircle;
