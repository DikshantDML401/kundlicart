import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {black} from '../../styles/colors';

const LiveChat = () => {
  return (
    <View>
      <View style={styles.topWrapper}>
        <Text style={styles.heading}>AstroSage Live TV</Text>
        <View>
          <Icon
            name="refresh-cw"
            size={20}
            color={black}
            style={{marginTop: 5}}
          />
        </View>
      </View>
    </View>
  );
};

export default LiveChat;

const styles = StyleSheet.create({
  heading: {color: 'black'},
  topWrapper: {display: 'flex', flexDirection: 'row'},
});
