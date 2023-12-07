import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {black} from '../../../styles/colors';

const Reports = () => {
  return (
    <View>
      <Text style={styles.heading}>Reports</Text>
    </View>
  );
};

export default Reports;

const styles = StyleSheet.create({
  heading: {
    color: black,
  },
});
