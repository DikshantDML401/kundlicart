import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Material from 'react-native-vector-icons/MaterialIcons';
import {black, bodyColor, lightOrange, yellow} from '../../../../styles/colors';
import {CheckBox, Input} from '@rneui/themed';
import {heightToDp, widthToDp} from '../../../../styles/responsive';
import {
  HORIZONTAL_2,
  HORIZONTAL_3,
  HORIZONTAL_6,
  VERTICAL_1,
  VERTICAL_5,
} from '../../../../utils/spacing';
import CustomTabButtons from '../../../../components/atoms/CustomTabButtons';
import {Title} from 'react-native-paper';
import {font15Px} from '../../../../utils/typography';
import DateTimePicker from '../../../../components/atoms/DateTimePicker';

const OpenHeader = () => {
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);

  const customtabButtonProps = {
    leftButtonTitle: 'Male',
    rightButtonTitle: 'Female',
    setStyle: false,
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.userWrapper}>
          <Icon name="user" size={22} color={black} />
          <View style={styles.textInputContainer}>
            <Input
              placeholder="Enter Name"
              inputStyle={styles.textInput}
              labelStyle={{backgroundColor: 'red'}}
            />
          </View>
        </View>
        <DateTimePicker />
        <View style={styles.locationWrapper}>
          <Icon name="map-pin" size={22} color={black} />
          <TouchableOpacity>
            <View style={styles.locationBorder}>
              <Text style={styles.location}>Select Location</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.genderWrapper}>
          <Material name="male" size={22} color={black} />
          <CustomTabButtons {...customtabButtonProps} />
        </View>
        <View style={styles.checkBoxWrapper}>
          <CheckBox
            checked={checked}
            onPress={toggleCheckbox}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checkedColor="red"
            title="Save"
            containerStyle={styles.checkBox}
          />
          <TouchableOpacity>
            <View style={styles.settingsWrapper}>
              <Title style={styles.settingsText}>Settings</Title>
              <Material name="add" size={25} color={lightOrange} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default OpenHeader;

const styles = StyleSheet.create({
  container: {marginTop: HORIZONTAL_2},
  userWrapper: {
    flexDirection: 'row',
    width: widthToDp('95%'),
    gap: widthToDp('5%'),
    alignItems: 'center',
    marginLeft: VERTICAL_1,
  },
  textInputContainer: {
    flex: 1,
  },
  textInput: {
    borderBottomColor: yellow,
    borderBottomWidth: widthToDp('0.3%'),
  },
  locationWrapper: {
    marginTop: HORIZONTAL_6,
    flexDirection: 'row',
    gap: widthToDp('5%'),
    alignItems: 'center',
    marginLeft: VERTICAL_1,
  },
  location: {color: black, textAlign: 'center'},
  locationBorder: {
    backgroundColor: bodyColor,
    width: widthToDp('80%'),
    height: heightToDp('5.5%'),
    justifyContent: 'center',
    marginLeft: VERTICAL_1,
    borderRadius: 6,
    borderColor: yellow,
    borderWidth: widthToDp('0.5%'),
  },
  genderWrapper: {
    marginTop: HORIZONTAL_3,
    flexDirection: 'row',
    gap: widthToDp('5%'),
    alignItems: 'center',
    marginLeft: VERTICAL_1,
  },
  checkBoxWrapper: {
    flexDirection: 'row',
    gap: widthToDp('30%'),
    alignItems: 'center',
    marginLeft: VERTICAL_5,
  },
  checkBox: {backgroundColor: '#f2f2f2'},
  settingsWrapper: {
    width: widthToDp('25%'),
    flexDirection: 'row',
    gap: widthToDp('1%'),
    borderWidth: widthToDp('0.3%'),
    borderColor: yellow,
    height: heightToDp('4%'),
    alignSelf: 'center',
  },
  settingsText: {
    fontSize: font15Px,
    fontWeight: '600',
    paddingLeft: VERTICAL_1,
    justifyContent: 'center',
  },
});
