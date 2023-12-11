import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AstrosageHeader from '../../components/organisms/AstroSageheader';
import CustomButton from '../../components/atoms/CustomButton';
import {
  black,
  gray,
  lightOrange,
  mediumBlue,
  mediumGray,
  signUpText,
  white,
} from '../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useTranslation} from '../../components/hooks/useTranslation';
import {useNavigation} from '@react-navigation/native';
import {widthToDp} from '../../styles/responsive';
import {
  HORIZONTAL_1,
  HORIZONTAL_2,
  VERTICAL_1,
  VERTICAL_3,
} from '../../utils/spacing';
import {font15Px, font16Px} from '../../utils/typography';

const AstroSageSignUp = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const handleOtp = () => {
    console.log('first');
  };

  return (
    <View>
      <AstrosageHeader screenHeading="Charts & notes on Cloud, Multi-device access" />
      <View style={styles.wrapper}>
        <View style={styles.btnStyle}>
          <CustomButton
            title="facebook"
            color={mediumBlue}
            leftIcone={true}
            leftImage={() => (
              <Icon
                name="facebook"
                size={20}
                color={white}
                style={{
                  marginLeft: 25,
                  paddingRight: 17,
                }}
              />
            )}
            onPress={() => {
              handleOtp();
            }}
          />
        </View>
        <View style={styles.btnStyle}>
          <CustomButton
            title="Gmail"
            color={lightOrange}
            leftIcone={true}
            leftImage={() => (
              <Icon
                name="call"
                size={20}
                color={white}
                style={{
                  marginRight: 18,
                }}
              />
            )}
            onPress={() => {
              handleOtp();
            }}
          />
        </View>
        <View style={styles.btnStyle}>
          <CustomButton
            title="Email"
            color={mediumGray}
            leftIcone={true}
            leftImage={() => (
              <Icon
                name="mail"
                size={20}
                color={white}
                style={{
                  marginRight: 18,
                }}
              />
            )}
            onPress={() => {
              handleOtp();
            }}
          />
        </View>
        <View style={styles.bottomTextWrapper}>
          <Text style={styles.bottomText}>
            {t('AstroSageSignUp.bottomText')}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SIGN IN' as never)}>
            <Text style={styles.bottomSignUp}>
              {t('AstroSageSignUp.signIn')}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.footerText}>
            {t('AstroSageSignUp.footertext')}
          </Text>
          <Text style={styles.termsUse}>{t('AstroSageSignUp.termsOfUse')}</Text>
        </View>
      </View>
    </View>
  );
};

export default AstroSageSignUp;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: white,
    width: widthToDp('95.4%'),
    marginLeft: HORIZONTAL_2,
    marginRight: HORIZONTAL_1,
    marginBottom: HORIZONTAL_1,
    paddingBottom: VERTICAL_3,
  },
  btnStyle: {
    marginVertical: VERTICAL_1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  bottomTextWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: VERTICAL_3,
    gap: 10,
  },
  bottomText: {
    color: black,
    fontSize: font16Px,
  },
  bottomSignUp: {
    color: signUpText,
    fontSize: font16Px,
    fontWeight: '500',
  },
  footerText: {
    color: gray,
    fontSize: font15Px,
    textAlign: 'center',
  },
  termsUse: {
    color: gray,
    fontSize: font15Px,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
