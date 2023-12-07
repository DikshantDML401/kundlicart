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
import CustomButton from '../../components/atoms/CustomButton';
import {lightOrange} from '../../styles/colors';
import {black} from '../../styles/colors';
import {font16Px, font17Px, font18Px} from '../../utils/typography';
import {VERTICAL_2, VERTICAL_4, VERTICAL_6} from '../../utils/spacing';
import {widthToDp} from '../../styles/responsive';
import {useNavigation} from '@react-navigation/native';

const Otp = () => {
  const navigation = useNavigation();
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
  const handleVerify = () => {
    console.log('first');
    return navigation.navigate('Dashboard' as never);
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
        <Text style={styles.heading}>{t('OtpScreenText.confirmText1')}</Text>
        <Text style={styles.subHeading}>{t('OtpScreenText.subText')}</Text>
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
      <View style={styles.btnStyle}>
        <CustomButton
          title="Verify"
          color={lightOrange}
          onPress={() => {
            handleVerify();
          }}
        />
      </View>
      <View style={styles.resendWrapper}>
        <TouchableOpacity onPress={handleResendOtp}>
          <Text style={styles.resendText}>{t('OtpScreenText.resend')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resendWrapper}>
        <TouchableOpacity onPress={handlePhoneCall}>
          <Text style={styles.resendText}>{t('OtpScreenText.getOtpText')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Otp;
const styles = StyleSheet.create({
  container: {flex: 1, marginTop: VERTICAL_4},
  heading: {
    color: black,
    marginTop: VERTICAL_2,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: font17Px,
    fontWeight: '400',
  },
  subTextWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  subHeading: {
    color: black,
    lineHeight: 25,
    fontSize: font16Px,
    fontWeight: '400',
  },
  otpCodeWrapper: {
    flexDirection: 'row',
    gap: 10,
    marginTop: VERTICAL_4,
    justifyContent: 'center',
  },
  otpCode: {
    color: black,
    width: widthToDp('4%'),
    fontSize: font18Px,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    minWidth: 50,
    padding: 12,
    textAlign: 'center',
    backgroundColor: '#f5a442',
  },
  resendWrapper: {marginTop: VERTICAL_4, alignItems: 'center'},
  resendText: {
    color: black,
    textDecorationLine: 'underline',
    fontSize: font18Px,
    fontWeight: '400',
  },
  btnStyle: {
    marginVertical: VERTICAL_2,
    marginTop: VERTICAL_6,
  },
});
