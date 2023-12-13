import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {black} from '../../../styles/colors';
import {Image} from 'react-native';
import {homeBanner} from '../../../utils/images';
import {heightToDp} from '../../../styles/responsive';

const Year = () => {
  return (
    <ScrollView>
      <View>
        <Image source={homeBanner} style={styles.homeBanner} />
      </View>
    </ScrollView>
  );
};

export default Year;

const styles = StyleSheet.create({
  heading: {
    color: black,
  },
  homeBanner: {width: 'auto', height: heightToDp('10%')},
});
