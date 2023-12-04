// Otp.js
import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AuthHeader from '../../components/organisms/AuthHeader';
import {useTranslation} from '../../components/hooks/useTranslation';

const Otp = () => {
  const {t} = useTranslation();
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  const handleOtpChange = (index: any, value: any) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== '') {
      if (index < inputRefs.length - 1) {
        inputRefs[index + 1].current?.focus();
      }
    } else {
      if (index > 0) {
        inputRefs[index - 1].current?.focus();
      }
    }
  };
  const handleResendOtp = () => {
    console.log('first');
  };
  const handlePhoneCall = () => {
    console.log('Phonecall');
  };
  return (
    <View style={styles.container}>
      <AuthHeader showSkip={false} screenHeading="OTP" />
      <View style={styles.subTextWrapper}>
        <Text style={styles.heading}>{t('OtpScreen.confirmText')}</Text>
        <Text style={styles.subHeading}>{t('OtpScreen.subText')}</Text>
      </View>
      <View style={styles.otpCodeWrapper}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpCode}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={value => handleOtpChange(index, value)}
            ref={inputRefs[index]}
          />
        ))}
      </View>
      <View style={styles.resendWrapper}>
        <TouchableOpacity onPress={handleResendOtp}>
          <Text style={styles.resendText}>{t('OtpScreen.resendText')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resendWrapper}>
        <TouchableOpacity onPress={handlePhoneCall}>
          <Text style={styles.resendText}>{t('OtpScreen.getOtp')}</Text>
        </TouchableOpacity>
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
  otpCodeWrapper: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 25,
    justifyContent: 'center',
  },
  otpCode: {
    color: 'black',
    width: 50,
    fontSize: 18,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    minWidth: 50,
    padding: 12,
    textAlign: 'center',
    backgroundColor: '#f5a442',
  },
  resendWrapper: {marginTop: 40, alignItems: 'center'},
  resendText: {
    color: 'black',
    textDecorationLine: 'underline',
    fontSize: 18,
    fontWeight: '400',
  },
});
