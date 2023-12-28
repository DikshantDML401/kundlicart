import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {black, white} from '../../../styles/colors';
import {font15Px} from '../../../utils/typography';
import {heightToDp, widthToDp} from '../../../styles/responsive';
import DropDown from '../../../components/molecules/common/DropDown';

const CustomCity = () => {
  return (
    <ScrollView>
      <View style={styles.containerStyle}>
        <Text style={styles.heading}>Time Zone</Text>
        <DropDown />
        <Text style={styles.heading}>Latitude</Text>
      </View>
    </ScrollView>
  );
};

export default CustomCity;

const styles = StyleSheet.create({
  heading: {color: black, fontSize: font15Px},
  containerStyle: {
    backgroundColor: white,
    borderColor: white,
    borderRadius: 4,
    elevation: 6,
    shadowColor: '#232424',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    height: heightToDp('60%'),
    margin: widthToDp('3%'),
    padding: widthToDp('4%'),
  },
});
