import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {black} from '../../styles/colors';

const History = () => {
  return (
    <View>
      <Text style={styles.heading}>history</Text>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  heading: {
    color: black,
  },
});
