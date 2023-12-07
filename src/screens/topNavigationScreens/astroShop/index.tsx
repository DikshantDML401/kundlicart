import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {black} from '../../../styles/colors';

const AstroShop = () => {
  return (
    <View>
      <Text style={styles.heading}>Astro Shop</Text>
    </View>
  );
};

export default AstroShop;

const styles = StyleSheet.create({
  heading: {
    color: black,
  },
});
