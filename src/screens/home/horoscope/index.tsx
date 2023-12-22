import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Horoscope = () => {
  return (
    <View>
      <Text style={styles.heading}>Horoscope</Text>
    </View>
  );
};

export default Horoscope;

const styles = StyleSheet.create({heading: {color: 'black'}});
