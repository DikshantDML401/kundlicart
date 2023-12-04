import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AstrosageHeader from '../../components/organisms/AstroSageheader';
import CustomButton from '../../components/atoms/CustomButton';
import {lightOrange, mediumBlue} from '../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AstroSageLogin = () => {
  const handleOtp = () => {
    console.log('first');
  };
  const handleAstroSage = () => {
    console.log('first');
  };
  return (
    <View>
      <AstrosageHeader screenHeading="Welcome back" />
      <View style={styles.btnStyle}>
        <CustomButton
          title="facebook"
          color={mediumBlue}
          leftIcone={true}
          leftImage={() => (
            <Icon
              name="facebook"
              size={20}
              color={lightOrange}
              style={{
                backgroundColor: 'white',
                borderRadius: 30 / 2,
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
              color={lightOrange}
              style={{
                backgroundColor: 'white',
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
          title="Email"
          color={lightOrange}
          onPress={() => {
            handleAstroSage();
          }}
        />
      </View>
    </View>
  );
};

export default AstroSageLogin;

const styles = StyleSheet.create({
  btnStyle: {
    marginVertical: 20,
  },
});
