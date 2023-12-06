import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {lightOrange} from '../../styles/colors';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightOrange,
  },
});
