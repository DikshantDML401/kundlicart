import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {black, darkred, white} from '../../../styles/colors';
import {font15Px, font16Px} from '../../../utils/typography';
import {heightToDp, widthToDp} from '../../../styles/responsive';
import DropDown from '../../../components/molecules/common/DropDown';
import CustomCheckBox from '../../../components/molecules/common/CheckBox';
import {CheckBox} from '@rneui/themed';
import CustomButton from '../../../components/atoms/CustomButton';
import {HORIZONTAL_1, HORIZONTAL_12} from '../../../utils/spacing';

const GpsScreen = () => {
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  const handleHoroscope = () => {
    console.log('first');
  };
  return (
    <ScrollView>
      <View style={styles.containerStyle}>
        <Text style={styles.heading}>Time Zone</Text>
        <DropDown />
        <CustomCheckBox />
        <View style={styles.checkBoxWrapper}>
          <CheckBox
            checked={checked}
            onPress={toggleCheckbox}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checkedColor="red"
            title="Make it default city"
            containerStyle={styles.checkBox}
            textStyle={styles.textStyle}
          />
        </View>
        <View style={styles.btnWrapper}>
          <CustomButton
            title="OK"
            color={darkred}
            onPress={handleHoroscope}
            style={styles.clearAllBtn}
            titleStyle={styles.titleStyle}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default GpsScreen;

const styles = StyleSheet.create({
  heading: {color: black, fontSize: font15Px},
  containerStyle: {
    backgroundColor: white,
    borderColor: white,
    borderRadius: 4,
    elevation: 6,
    shadowColor: '#232424',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    height: heightToDp('62.5%'),
    margin: widthToDp('3%'),
    padding: widthToDp('4%'),
  },
  checkBoxWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: HORIZONTAL_12,
    width: widthToDp('40%'),
  },
  textStyle: {fontWeight: '400'},
  checkBox: {backgroundColor: white},
  btnWrapper: {
    marginVertical: widthToDp('3%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearAllBtn: {
    width: widthToDp('84%'),
    borderRadius: widthToDp('1%'),
    marginHorizontal: widthToDp('3%'),
  },
  titleStyle: {
    fontSize: font16Px,
    marginHorizontal: HORIZONTAL_1,
    fontWeight: 'bold',
  },
});
