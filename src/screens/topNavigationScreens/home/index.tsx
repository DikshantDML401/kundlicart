import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {black} from '../../../styles/colors';

const Homepage = () => {
  return (
    <View>
      <Text style={styles.heading}>Homepage</Text>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  heading: {
    color: black,
  },
});
