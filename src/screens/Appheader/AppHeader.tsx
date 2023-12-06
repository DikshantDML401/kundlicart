import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AppHeader = () => {
  return (
    <View>
      <Text style={styles.header}>AppHeaderdddddddddddd</Text>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  header: {
    color: 'black',
  },
});
