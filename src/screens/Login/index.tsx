/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {CheckBox} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TextField from '../../components/atoms/TextField';
import {lightBlack, lightOrange, mediumBlue, white} from '../../styles/colors';
import {widthToDp} from '../../styles/responsive';
import CustomButton from '../../components/atoms/CustomButton';
import AuthHeader from '../../components/organisms/AuthHeader';
import {useNavigation} from '@react-navigation/native';

const Login: React.FC = () => {
  const [number, setNumber] = useState<number | null>(null);
  const [checked, setChecked] = useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  const navigation = useNavigation();
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
      <View style={{marginBottom: 24}}>
        <AuthHeader screenHeading="Login" />
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
        <Text style={styles.text}>We will send you a one time password.</Text>
        <Text style={styles.text}>Carrier rates may apply.</Text>
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
        <Text style={[styles.text]}>
          By creating an account, you are agreeing to our Disclaimer and privacy
          policy{' '}
        </Text>
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
      <View style={[styles.common]}>
        <Text style={styles.text}>Or with</Text>
      </View>
      <View style={styles.btnStyle}>
        <CustomButton
          title="truecaller"
          color={mediumBlue}
          leftIcone={true}
          leftImage={() => (
            <Icon
              name="call"
              size={20}
              color={mediumBlue}
              style={{
                backgroundColor: white,
                borderRadius: 30 / 2,
              }}
            />
          )}
          onPress={() => {
            handleOtp();
          }}
        />
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
      <View style={styles.signUp}>
        <Text style={styles.textBottom}>Don't have an account?</Text>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => navigation.navigate('signup' as never)}>
          <Text style={{color: lightOrange, fontSize: 16}}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 28,
  },
  common: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textinput: {},
  textField: {},
  textWrapper: {
    alignItems: 'center',
    marginVertical: 15,
  },
  text: {
    color: lightBlack,
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    width: widthToDp('70%'),
    alignItems: 'center',
  },
  btnStyle: {
    marginVertical: 20,
  },
  textBottom: {
    color: lightBlack,
    fontSize: 18,
  },
  touchableOpacity: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUp: {
    flexDirection: 'row',
    marginVertical: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
