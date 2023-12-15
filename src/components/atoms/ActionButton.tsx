import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {widthToDp} from '../../styles/responsive';
import {white} from '../../styles/colors';
import {TouchableOpacity} from 'react-native';

interface ActionProps {
  title: string;
  onPress: () => void | undefined;
  style?: object;
  textStyle?: object;
  backgroundColor?: string;
}

const ActionButton: React.FC<ActionProps> = ({
  title,
  onPress,
  backgroundColor,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        style
          ? style
          : [
              styles.astroBtn,
              {
                backgroundColor: backgroundColor,
              },
            ]
      }>
      <Text style={textStyle ? textStyle : styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  astroBtn: {
    paddingHorizontal: widthToDp('6%'),
    paddingVertical: widthToDp('1.5%'),
    borderRadius: widthToDp('6%'),
    marginTop: widthToDp('3%'),
  },
  btnText: {
    color: white,
  },
});
