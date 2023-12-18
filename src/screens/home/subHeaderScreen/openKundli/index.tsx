import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {black} from '../../../../styles/colors';

const OpenHeader = () => {
  return (
    <View>
      <Text style={styles.heading}>index</Text>
    </View>
  );
};

export default OpenHeader;

const styles = StyleSheet.create({
  heading: {color: black},
});
