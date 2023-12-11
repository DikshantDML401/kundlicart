import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {black} from '../../../styles/colors';

const Video = () => {
  return (
    <View>
      <Text style={styles.heading}>Videos</Text>
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({
  heading: {
    color: black,
  },
});
