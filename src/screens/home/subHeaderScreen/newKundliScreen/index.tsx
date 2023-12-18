import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {black} from '../../../../styles/colors';

const NewKundli = () => {
  return (
    <View>
      <Text style={styles.heading}>index</Text>
    </View>
  );
};

export default NewKundli;

const styles = StyleSheet.create({
  heading: {color: black},
});
