// Otp.js
import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import AuthHeader from '../../components/organisms/AuthHeader';
import {useTranslation} from '../../components/hooks/useTranslation';

const Otp = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <AuthHeader showSkip={false} screenHeading="OTP" />
      <View style={styles.subTextWrapper}>
        <Text style={styles.heading}>{t('OtpScreen.confirmText')}</Text>
        <Text style={styles.subHeading}>{t('OtpScreen.subText')}</Text>
      </View>
      <View style={styles.otpCodeWrapper}>
        <TextInput style={styles.otpCode} />
      </View>
    </View>
  );
};

export default Otp;
const styles = StyleSheet.create({
  container: {flex: 1, marginTop: 30},
  heading: {
    color: 'black',
    marginTop: 15,
    width: 200,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '400',
  },
  subTextWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  subHeading: {color: 'black', lineHeight: 25, fontSize: 16, fontWeight: '400'},
  otpCodeWrapper: {},
  otpCode: {},
});
