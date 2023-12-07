import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {black} from '../../../styles/colors';

const Year = () => {
  return (
    <View>
      <Text style={styles.heading}>Year 2024</Text>
    </View>
  );
};

export default Year;

const styles = StyleSheet.create({
  heading: {
    color: black,
  },
});
