/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button} from '@rneui/themed';

import {heightToDp, widthToDp} from '../../styles/responsive';
import {font18Px} from '../../utils/typography';
import {HORIZONTAL_1, VERTICAL_2} from '../../utils/spacing';

interface CustomButton {
  onPress: () => void | undefined;
  title: string;
  color: string;
  rightIcon?: boolean;
  rightImage?: any;
}

const CustomButtonNew: React.FC<CustomButton> = ({
  onPress,
  title,
  color,
  rightIcon = false,
  rightImage,
}) => {
  return (
    <View style={styles.buttonContainer}>
      <Button
        title={title}
        titleStyle={{
          fontWeight: 'bold',
          fontSize: font18Px,
          marginHorizontal: HORIZONTAL_1,
        }}
        buttonStyle={{backgroundColor: color, height: heightToDp('6%')}}
        containerStyle={{
          width: widthToDp('98%'),
          borderRadius: widthToDp('1%'),
          margin: VERTICAL_2,
        }}
        icon={rightIcon && rightImage}
        onPress={() => onPress()}
      />
    </View>
  );
};

export default CustomButtonNew;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
