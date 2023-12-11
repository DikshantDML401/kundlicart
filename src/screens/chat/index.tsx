import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {black} from '../../styles/colors';

const Chat = () => {
  return (
    <View>
      <Text style={styles.heading}>Chat</Text>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  heading: {
    color: black,
  },
});
