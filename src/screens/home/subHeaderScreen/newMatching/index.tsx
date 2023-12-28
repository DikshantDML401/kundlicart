import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {black, darkred, white, yellow} from '../../../../styles/colors';
import {CheckBox, Input} from '@rneui/themed';
import {heightToDp, widthToDp} from '../../../../styles/responsive';
import {
  HORIZONTAL_1,
  HORIZONTAL_2,
  HORIZONTAL_4,
  VERTICAL_1,
  VERTICAL_2,
} from '../../../../utils/spacing';
import {font15Px, font16Px} from '../../../../utils/typography';
import CustomButton from '../../../../components/atoms/CustomButton';
import DatePickerMatching from '../../../../components/atoms/DatePicker';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../../navigation/types';

const NewMatching = () => {
  const navigation = useNavigation<RootStackParamList>();
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);

  const handleHoroscope = () => {
    console.log('first');
  };
  return (
    <ScrollView>
      <Text style={styles.title}>BOY'S DETAILS</Text>
      <View style={styles.container}>
        <View style={styles.userWrapper}>
          <Icon name="user" size={22} color={black} />
          <View style={styles.textInputContainer}>
            <Input
              placeholder="Boy's Name"
              inputStyle={styles.textInput}
              inputContainerStyle={styles.inputContainer}
            />
          </View>
        </View>
        <DatePickerMatching />
        <View style={styles.locationWrapper}>
          <Icon name="map-pin" size={22} color={black} />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AppStack', {
                screen: 'Dashboard',
                params: {
                  screen: 'locationPlace',
                },
              })
            }>
            <View style={styles.locationBorder}>
              <Text style={styles.location}>Select Location</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.title}>GIRL'S DETAILS</Text>
      <View style={styles.container}>
        <View style={styles.userWrapper}>
          <Icon name="user" size={22} color={black} />
          <View style={styles.textInputContainer}>
            <Input
              placeholder="Girl's Name"
              inputStyle={styles.textInput}
              inputContainerStyle={styles.inputContainer}
            />
          </View>
        </View>
        <DatePickerMatching />
        <View style={styles.locationWrapper}>
          <Icon name="map-pin" size={22} color={black} />
          <TouchableOpacity>
            <View style={styles.locationBorder}>
              <Text style={styles.location}>Select Location</Text>
            </View>
          </TouchableOpacity>
        </View>
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
      </View>
      <View style={styles.btnWrapper}>
        <CustomButton
          title="SHOW MATCH"
          color={darkred}
          onPress={handleHoroscope}
          style={styles.clearAllBtn}
          titleStyle={styles.titleStyle}
        />
      </View>
    </ScrollView>
  );
};
export default NewMatching;

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 0,
    height: heightToDp('2.6%'),
  },
  title: {
    color: black,
    fontSize: font16Px,
    fontWeight: '600',
    marginHorizontal: widthToDp('6%'),
    marginTop: widthToDp('5%'),
  },
  container: {
    marginTop: HORIZONTAL_2,
    backgroundColor: white,
    width: widthToDp('92%'),
    alignItems: 'center',
    marginHorizontal: widthToDp('4%'),
    paddingVertical: widthToDp('4%'),
    borderRadius: 4,
    elevation: 6,
    shadowColor: '#232424',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  userWrapper: {
    flexDirection: 'row',
    width: widthToDp('80%'),
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
    width: widthToDp('80%'),
    marginTop: HORIZONTAL_4,
    flexDirection: 'row',
    gap: widthToDp('5%'),
    alignItems: 'center',
    marginLeft: VERTICAL_1,
  },
  location: {
    color: black,
    textAlign: 'center',
    fontSize: font15Px,
    fontWeight: 'bold',
  },
  locationBorder: {
    backgroundColor: white,
    width: widthToDp('65%'),
    height: heightToDp('5.5%'),
    justifyContent: 'center',
    marginLeft: VERTICAL_1,
    borderRadius: widthToDp('1.3%'),
    borderColor: yellow,
    borderWidth: widthToDp('0.3%'),
  },
  checkBoxWrapper: {
    flexDirection: 'row',
    gap: widthToDp('10%'),
    alignItems: 'center',
    marginLeft: VERTICAL_2,
  },
  checkBox: {backgroundColor: '#f2f2f2'},
  clearAllBtn: {
    width: widthToDp('92%'),
    borderRadius: widthToDp('1%'),
    marginHorizontal: widthToDp('3%'),
  },
  titleStyle: {
    fontSize: font16Px,
    marginHorizontal: HORIZONTAL_1,
    fontWeight: 'bold',
  },
  btnWrapper: {
    marginVertical: widthToDp('3%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
