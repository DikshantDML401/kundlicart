import {StyleSheet, View} from 'react-native';
import React from 'react';
import {widthToDp} from '../../styles/responsive';
import {mediumGray} from '../../styles/colors';

interface LineProps {
  lineStyle?: object;
}

const LineBreak: React.FC<LineProps> = ({lineStyle}) => {
  return <View style={lineStyle ? lineStyle : styles.linebreak} />;
};

const styles = StyleSheet.create({
  linebreak: {
    marginTop: widthToDp('5%'),
    borderWidth: widthToDp('0.05%'),
    width: widthToDp('100%'),
    borderColor: mediumGray,
  },
});

export default LineBreak;
