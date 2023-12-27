/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {black, lightOrange, mediumGray, white} from '../../../styles/colors';
import {font16Px, font17Px, font18Px} from '../../../utils/typography';
import {widthToDp} from '../../../styles/responsive';
import ActionButton from '../../../components/atoms/ActionButton';
import LineBreak from '../../../components/atoms/LineBreak';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Wallet = () => {
  const navigation = useNavigation();

  const AvailableBalance = () => (
    <View style={styles.netBalance}>
      <Text style={styles.text}>Available balance</Text>
    </View>
  );

  const RechargeSection = ({balance}: any) => (
    <View
      style={[
        styles.netBalance,
        styles.recharge,
        {marginBottom: widthToDp('3%')},
      ]}>
      <Text style={[styles.text]}>₹{balance}</Text>
      <ActionButton
        title="Recharge"
        onPress={() => console.log('hello')}
        backgroundColor={lightOrange}
        textStyle={styles.rechargeBtn}
      />
    </View>
  );

  const MyAccountSection = ({navigation}) => (
    <TouchableOpacity
      style={[styles.recharge, styles.account]}
      onPress={() =>
        navigation.navigate('AppStack', {
          screen: 'AccountStack',
          params: {screen: 'Account'},
        })
      }>
      <Text style={styles.accText}>My Account</Text>
      <Icon name="keyboard-arrow-right" size={24} color={black} />
    </TouchableOpacity>
  );

  const NoDataFound = () => (
    <View style={styles.noDataFound}>
      <Text style={[styles.text, {fontWeight: '400'}]}>No data Found</Text>
    </View>
  );

  const balance = '0.0';
  const [data, setData] = useState<String[]>([]);

  return (
    <View style={styles.container}>
      <AvailableBalance />
      <RechargeSection balance={balance} />
      <LineBreak lineStyle={styles.lineStyle} />
      <MyAccountSection navigation={navigation} />
      <LineBreak lineStyle={styles.lineStyle} />
      <View>
        {data.length ? (
          data?.map((item, index) => (
            <View key={index}>
              <Text>{item}</Text>
            </View>
          ))
        ) : (
          <NoDataFound />
        )}
      </View>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: black,
    fontSize: font18Px,
    fontWeight: '600',
  },
  netBalance: {
    marginHorizontal: widthToDp('3%'),
    marginVertical: widthToDp('1%'),
  },
  recharge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lineStyle: {
    borderWidth: widthToDp('0.05%'),
    width: widthToDp('93%'),
    marginHorizontal: widthToDp('3%'),
    borderColor: mediumGray,
  },
  accText: {
    color: black,
    fontSize: font17Px,
    fontWeight: '500',
  },
  noDataFound: {
    marginTop: widthToDp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  account: {
    marginHorizontal: widthToDp('3%'),
    marginVertical: widthToDp('1%'),
  },
  rechargeBtn: {
    fontSize: font16Px,
    color: white,
    fontWeight: '500',
  },
});
