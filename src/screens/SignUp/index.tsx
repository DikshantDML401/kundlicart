/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {CheckBox} from 'react-native-elements';
import TextField from '../../components/atoms/TextField';
import {lightBlack, lightOrange} from '../../styles/colors';
import {widthToDp} from '../../styles/responsive';
import CustomButton from '../../components/atoms/CustomButton';
import AuthHeader from '../../components/organisms/AuthHeader';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from '../../components/hooks/useTranslation';
import {font14Px, font16Px} from '../../utils/typography';
import {HORIZONTAL_8, VERTICAL_2, VERTICAL_3} from '../../utils/spacing';

const SignUp: React.FC = () => {
  const [number, setNumber] = useState<number | null>(null);
  const [checked, setChecked] = useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  const navigation = useNavigation();

  const {t} = useTranslation();

  const handleNumberChange = (num: string) => {
    const parsedNumber = parseFloat(num);
    if (!isNaN(parsedNumber)) {
      setNumber(parsedNumber);
    } else {
      setNumber(null);
    }
  };
  const handleOtp = () => {
    navigation.navigate('Otp' as never);
  };
  const handleAstroSage = () => {
    navigation.navigate('AstroSageLogin' as never);
  };
  return (
    <View style={styles.container}>
      <View style={{marginBottom: VERTICAL_3}}>
        <AuthHeader screenHeading="Sign Up" />
      </View>
      <View style={styles.textField}>
        <TextField
          placeholder="Mobile Number"
          value={number !== null ? number.toString() : ''}
          style={styles.textinput}
          handleChange={handleNumberChange}
        />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{t('LoginScreen.otpText')}</Text>
        <Text style={styles.text}>{t('LoginScreen.OtpSubText')}</Text>
      </View>
      <View style={[styles.checkboxContainer]}>
        <CheckBox
          checked={checked}
          onPress={toggleCheckbox}
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
          checkedColor="orange"
        />
        <Text style={[styles.text]}>{t('LoginScreen.checkboxText')}</Text>
      </View>
      <View style={styles.btnStyle}>
        <CustomButton
          title="Get Otp"
          color={lightOrange}
          onPress={() => {
            handleOtp();
          }}
        />
      </View>
      <View style={[styles.common, {marginBottom: VERTICAL_3}]}>
        <Text style={styles.text}>Or with</Text>
      </View>

      <View>
        <CustomButton
          title="AstroSage ID"
          color={lightOrange}
          onPress={() => {
            handleAstroSage();
          }}
        />
      </View>
      <View style={styles.signUpContainer}>
        <Text style={styles.textBottom}>Don't have an account?</Text>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => navigation.navigate('Login' as never)}>
          <Text style={styles.signUpTxt}> Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: HORIZONTAL_8,
  },
  common: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textinput: {},
  textField: {},
  textWrapper: {
    alignItems: 'center',
    marginVertical: VERTICAL_2,
  },
  text: {
    color: lightBlack,
    fontSize: font14Px,
  },
  checkboxContainer: {
    flexDirection: 'row',
    maxWidth: widthToDp('70%'),
    alignItems: 'center',
  },
  btnStyle: {
    marginVertical: VERTICAL_3,
  },
  textBottom: {
    color: lightBlack,
    fontSize: font16Px,
  },
  touchableOpacity: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpContainer: {
    flexDirection: 'row',
    marginVertical: VERTICAL_3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpTxt: {
    color: lightOrange,
    fontSize: font16Px,
  },
});

export default SignUp;
