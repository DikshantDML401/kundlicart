/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  font16Px,
  font17Px,
  font18Px,
  font24Px,
  font30Px,
} from '../../utils/typography';
import {
  black,
  boldRed,
  lightOrange,
  textgrey,
  white,
} from '../../styles/colors';
import {
  HORIZONTAL_5,
  VERTICAL_2,
  VERTICAL_3,
  VERTICAL_4,
} from '../../utils/spacing';
import {widthToDp} from '../../styles/responsive';
import {wallet} from '../../helpers/HomeTab';
import {useNavigation} from '@react-navigation/native';

interface WalletItem {
  price: string;
  offer?: boolean;
  offerPrice?: string;
}

const Wallet = () => {
  const balance = '₹ 0.00';
  const navigation = useNavigation();

  const renderItem = ({item}: {item: WalletItem}) => (
    <>
      <TouchableOpacity style={styles.walletContainer}>
        <Text style={styles.priceText}>{item.price}</Text>
        {item.offer && (
          <View style={styles.offerContainer}>
            <Text style={styles.offer}>{item.offerPrice}</Text>
          </View>
        )}
      </TouchableOpacity>
    </>
  );

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContainer}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View>
          <Text style={styles.netBalance}>Available Balance</Text>
          <Text style={styles.balance}>{balance}</Text>
        </View>
        <TouchableOpacity
          style={styles.consultNav}
          onPress={() =>
            navigation.navigate('TabNavigation', {
              screen: 'History',
            })
          }>
          <Text style={styles.consultationTxt}>Consultation History</Text>
          <Icon name="chevron-right" size={24} color={black} />
        </TouchableOpacity>
        <View style={styles.addMoney}>
          <Text style={styles.consultationTxt}>Add money to Wallet</Text>
          <Text style={styles.greyText}>Choose from available charge pack</Text>
        </View>
        <View style={styles.flatListContainer}>
          <FlatList
            data={wallet}
            renderItem={renderItem}
            numColumns={3}
            keyExtractor={(item, index) => index.toString()}
            nestedScrollEnabled={true}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    marginHorizontal: HORIZONTAL_5,
    marginTop: VERTICAL_3,
  },
  balance: {
    fontSize: font30Px,
    color: black,
    fontWeight: '500',
  },
  netBalance: {
    fontSize: font24Px,
    fontWeight: '500',
    color: black,
    marginBottom: VERTICAL_2,
  },
  consultationTxt: {
    fontSize: font18Px,
    fontWeight: '500',
    color: 'black',
  },
  greyText: {
    fontSize: font17Px,
    color: textgrey,
  },
  consultNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: VERTICAL_2,
  },
  addMoney: {
    marginTop: VERTICAL_4,
  },
  walletContainer: {
    position: 'relative',
    borderWidth: 2,
    width: widthToDp('28%'),
    borderRadius: widthToDp('2%'),
    borderColor: lightOrange,
    marginHorizontal: widthToDp('1%'),
    marginVertical: widthToDp('1%'),
    justifyContent: 'center',
    alignItems: 'center',
    padding: widthToDp('6%'),
  },
  flatListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: widthToDp('5%'),
  },
  priceText: {
    color: '#632300',
    fontSize: font16Px,
    fontWeight: '600',
  },
  offerContainer: {
    position: 'absolute',
    top: -1,
    width: widthToDp('28%'),
    borderTopLeftRadius: widthToDp('2%'),
    borderTopRightRadius: widthToDp('2%'),
    borderBottomLeftRadius: widthToDp('2%'),
    borderBottomRightRadius: widthToDp('2%'),
    backgroundColor: boldRed,
    justifyContent: 'center',
    alignItems: 'center',
  },
  offer: {
    color: white,
  },
});

export default Wallet;
