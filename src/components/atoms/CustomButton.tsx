/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button} from '@rneui/themed';

import {heightToDp, widthToDp} from '../../styles/responsive';

interface CustomButton {
  title: string;
  color: string;
  leftIcone?: boolean;
  leftImage?: any;
}

const CustomButton: React.FC<CustomButton> = ({
  title,
  color,
  leftIcone = false,
  leftImage,
}) => {
  return (
    <View style={styles.buttonContainer}>
      <Button
        title={title}
        titleStyle={{fontWeight: '600', fontSize: 18, marginHorizontal: 10}}
        buttonStyle={{backgroundColor: color, height: heightToDp('6%')}}
        containerStyle={{
          width: widthToDp('80%'),
          borderRadius: 25,
        }}
        icon={leftIcone && leftImage}
      />
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
