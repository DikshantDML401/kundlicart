/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {CountryPicker} from 'react-native-country-codes-picker';
import Icon from 'react-native-vector-icons/Feather';

import {
  boldWhite,
  lightBlack,
  lightOrange,
  strightLineGray,
  textgrey,
} from '../../styles/colors';
import {heightToDp, widthToDp} from '../../styles/responsive';
import {HORIZONTAL_5} from '../../utils/spacing';

interface TextFieldProps {
  placeholder: string;
  style?: object;
  value?: string;
  handleChange?: (text: string) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  style,
  value,
  handleChange,
}) => {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('india(+91)');
  const [countryName, setCountryName] = useState('');

  return (
    <View style={styles.FieldContainer}>
      <TouchableOpacity
        onPress={() => setShow(true)}
        style={styles.touchOpacity}>
        <View style={styles.countryWrapper}>
          <Text numberOfLines={1} style={styles.countryCode}>
            {countryName}
            {countryCode}
          </Text>
          <Icon name="chevron-down" size={22} color={lightOrange} />
        </View>
      </TouchableOpacity>
      <View style={styles.strightLine} />
      <CountryPicker
        show={show}
        pickerButtonOnPress={item => {
          setCountryCode(item.dial_code);
          setCountryName(item.code);
          setShow(false);
        }}
        style={{
          countryName: {
            color: lightBlack,
          },
          dialCode: {
            color: lightBlack,
          },
        }}
        lang={'en'}
      />

      <TextInput
        style={[styles.input, style]}
        placeholder={placeholder}
        value={value}
        onChangeText={text => handleChange && handleChange(text)}
        keyboardType="numeric"
        placeholderTextColor={textgrey}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 1,
    padding: 10,
    width: widthToDp('40%'),
    color: lightBlack,
    fontSize: 18,
  },
  FieldContainer: {
    borderRadius: 42,
    borderWidth: 1,
    borderColor: lightOrange,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: heightToDp('7%'),
  },
  countrySelector: {
    color: 'black',
  },
  touchOpacity: {
    width: widthToDp('20%'),
    height: heightToDp('5%'),
    backgroundColor: boldWhite,
    justifyContent: 'center',
    borderRadius: 40,
  },
  countryCode: {
    color: textgrey,
    fontSize: 18,
    paddingLeft: 20,
    width: widthToDp('20%'),
  },
  strightLine: {
    borderWidth: 0.6,
    height: 25,
    borderColor: strightLineGray,
    marginHorizontal: HORIZONTAL_5,
  },
  countryWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 10,
  },
});

export default TextField;
