/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button} from '@rneui/themed';

import {heightToDp, widthToDp} from '../../styles/responsive';
import {font18Px} from '../../utils/typography';
import {HORIZONTAL_1} from '../../utils/spacing';

interface CustomButton {
  onPress: () => void | undefined;
  title: string;
  color: string;
  leftIcone?: boolean;
  leftImage?: any;
  rightIcon?: boolean;
  rightImage?: any;
  headingStyle?: any;
  containerHeadStyle?: any;
}

const CustomButton: React.FC<CustomButton> = ({
  onPress,
  title,
  color,
  leftIcone = false,
  leftImage,
  rightIcon = false,
  rightImage,
  headingStyle,
  containerHeadStyle,
}) => {
  return (
    <View style={styles.buttonContainer}>
      <Button
        title={title}
        titleStyle={
          headingStyle
            ? headingStyle
            : {
                fontWeight: 'bold',
                fontSize: font18Px,
                marginHorizontal: HORIZONTAL_1,
              }
        }
        buttonStyle={{backgroundColor: color, height: heightToDp('6%')}}
        containerStyle={
          containerHeadStyle
            ? containerHeadStyle
            : {
                width: widthToDp('80%'),
                borderRadius: widthToDp('6%'),
              }
        }
        iconRight
        icon={(leftIcone && leftImage) || (rightIcon && rightImage)}
        onPress={() => onPress()}
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
  },
});
