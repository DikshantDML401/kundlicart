import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {black, lightOrange} from '../../styles/colors';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Home</Text>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightOrange,
  },
  heading: {
    color: black,
  },
});
