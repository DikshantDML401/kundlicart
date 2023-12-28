import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {black} from '../../../styles/colors';

const GpsScreen = () => {
  return (
    <View>
      <Text style={styles.heading}>GPS</Text>
    </View>
  );
};

export default GpsScreen;

const styles = StyleSheet.create({
  heading: {color: black},
});
