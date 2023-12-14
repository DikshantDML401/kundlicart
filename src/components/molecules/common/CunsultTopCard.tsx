import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {heightToDp, widthToDp} from '../../../styles/responsive';
import {black} from '../../../styles/colors';
import {HORIZONTAL_2, HORIZONTAL_4} from '../../../utils/spacing';

interface CunsultDataProps {
  imagesSource: any;
  title: string;
}
const CunsultTopCard: React.FC<CunsultDataProps> = ({imagesSource, title}) => {
  return (
    <TouchableOpacity>
      <View style={styles.wrapper}>
        <View style={styles.imageContainer}>
          <Image source={imagesSource} style={styles.imageStyle} />
        </View>
        <View>
          <Text style={styles.titleStyle}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CunsultTopCard;

const styles = StyleSheet.create({
  wrapper: {alignItems: 'center'},
  imageContainer: {
    borderRadius: widthToDp('8%'),
    borderColor: 'black',
    padding: widthToDp('4.5%'),
    borderWidth: widthToDp('0.1%'),
    width: widthToDp('17%'),
    alignItems: 'center',
  },
  imageStyle: {
    width: widthToDp('7%'),
    height: heightToDp('3.5%'),
  },
  titleStyle: {
    color: black,
    marginTop: HORIZONTAL_4,
    marginBottom: HORIZONTAL_2,
  },
});
