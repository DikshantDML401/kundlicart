import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {black} from '../../styles/colors';

const Live = () => {
  return (
    <View>
      <Text style={styles.heading}>Live</Text>
    </View>
  );
};

export default Live;

const styles = StyleSheet.create({
  heading: {
    color: black,
  },
});
