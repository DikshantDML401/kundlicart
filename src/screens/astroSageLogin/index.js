/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AstrosageHeader from '../../components/organisms/AstroSageheader';
import CustomButton from '../../components/atoms/CustomButton';
import {lightOrange, mediumBlue, mediumGray, white} from '../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useTranslation} from '../../components/hooks/useTranslation';
import {useNavigation} from '@react-navigation/native';

const AstroSageLogin = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();

  const handleOtp = () => {
    console.log('first');
  };

  return (
    <View style={styles.container}>
      <AstrosageHeader screenHeading="Welcome back" />
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
            {t('AstroSageLogin.bottomText')}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SIGN UP')}>
            <Text style={styles.bottomSignUp}>
              {t('AstroSageLogin.signUp')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AstroSageLogin;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    width: 365,
    marginLeft: 14,
    marginRight: 20,
    marginBottom: 20,
    paddingBottom: 50,
  },
  btnStyle: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  bottomTextWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 18,
    gap: 10,
  },
  bottomText: {
    color: 'black',
    fontSize: 16,
  },
  bottomSignUp: {
    color: '#f5a442',
    fontSize: 16,
    fontWeight: '500',
  },
});
