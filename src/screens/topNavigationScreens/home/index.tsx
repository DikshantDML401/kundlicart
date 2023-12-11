import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {homeBanner, kundliLogo} from '../../../utils/images';
import {black} from '../../../styles/colors';
import {font16Px} from '../../../utils/typography';

const Homepage = () => {
  return (
    <View>
      <Image source={homeBanner} style={styles.homeBanner} />
      <View style={styles.wrapper}>
        <View style={styles.kundliWrapper}>
          <Image source={kundliLogo} style={styles.kundliLogo} />
          <Text style={styles.kundliText}>Kundli</Text>
        </View>
        <View style={styles.kundliWrapper}>
          <Image source={kundliLogo} style={styles.kundliLogo} />
          <Text style={styles.kundliText}>Kundli</Text>
        </View>
        <View style={styles.kundliWrapper}>
          <Image source={kundliLogo} style={styles.kundliLogo} />
          <Text style={styles.kundliText}>Kundli</Text>
        </View>
      </View>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  homeBanner: {width: 'auto', height: 80},
  wrapper: {
    flexDirection: 'row',
    gap: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  kundliWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: 130,
    borderBottomColor: black,
    borderWidth: 2,
  },
  kundliLogo: {width: 40, height: 40},
  kundliText: {
    color: black,
    fontSize: font16Px,
    fontWeight: '600',
    paddingTop: 10,
  },
});
