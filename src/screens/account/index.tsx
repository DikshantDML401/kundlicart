import {
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import {Login} from '../../helpers/HomeTab';
import {
  black,
  lightOrange,
  mediumBlack,
  skinLight,
  thinBlack,
  white,
} from '../../styles/colors';
import {font17Px, font18Px} from '../../utils/typography';
import {
  HORIZONTAL_5,
  HORIZONTAL_6,
  VERTICAL_1,
  VERTICAL_2,
  VERTICAL_3,
  VERTICAL_4,
  VERTICAL_5,
} from '../../utils/spacing';
import {account} from '../../helpers/HomeTab';
import {widthToDp} from '../../styles/responsive';
import ActionButton from '../../components/atoms/ActionButton';
import Icon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Account = () => {
  const [loginData, setLoginData] = useState<any>(Login);

  const handleShare = () => {
    const options = {
      message: 'Check out this awesome app!',
    };

    Share.share(options)
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        err && console.log(err);
      });
  };
  return (
    <>
      <ScrollView>
        {loginData && (
          <View style={styles.loginData}>
            <Text style={styles.loggedText}>Logged in with</Text>
            <Text style={styles.contact}>{loginData.contact}</Text>
          </View>
        )}
        {account &&
          account?.map(item => (
            <TouchableOpacity style={styles.accountContainer}>
              {item.icon}
              <Text style={styles.accountText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        <View style={styles.logoutContainer}>
          <ActionButton
            title="Logout"
            onPress={() => console.log('hello')}
            style={styles.logoutBtn}
            textStyle={styles.logouttext}
          />
        </View>
        <View style={[styles.socialWrapper, {gap: widthToDp('4%')}]}>
          <TouchableOpacity style={styles.shareIcon} onPress={handleShare}>
            <Icon name="share-2" size={18} color={black} />
            <Text style={styles.accountText}>Share it</Text>
          </TouchableOpacity>
          <View style={styles.aboutUs}>
            <AntDesign name="info" size={22} color={black} />
            <Text style={styles.accountText}>About us</Text>
          </View>
        </View>

        <View
          style={[
            styles.socialWrapper,
            {gap: widthToDp('2%'), marginVertical: VERTICAL_3},
          ]}>
          <Icon name="twitch" size={18} color={black} />
          <Text style={styles.accountText}>join AstroSage</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Account;

const styles = StyleSheet.create({
  loginData: {
    backgroundColor: skinLight,
    paddingVertical: VERTICAL_2,
    paddingHorizontal: HORIZONTAL_5,
    marginBottom: VERTICAL_4,
  },
  loggedText: {
    fontSize: font17Px,
    color: thinBlack,
  },
  contact: {
    fontSize: font18Px,
    fontWeight: '500',
    color: black,
  },
  accountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: widthToDp('7%'),
    paddingHorizontal: HORIZONTAL_6,
    paddingVertical: VERTICAL_1,
  },
  accountText: {
    fontSize: font17Px,
    color: mediumBlack,
    fontWeight: '300',
  },
  logoutContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: VERTICAL_5,
  },
  logoutBtn: {
    paddingHorizontal: widthToDp('10%'),
    paddingVertical: widthToDp('3%'),
    borderRadius: widthToDp('8%'),
    marginTop: widthToDp('3%'),
    backgroundColor: lightOrange,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logouttext: {
    fontSize: font17Px,
    fontWeight: '500',
    color: white,
  },
  socialWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: widthToDp('2%'),
  },
  aboutUs: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: widthToDp('2%'),
  },
  shareText: {
    fontSize: font18Px,
    color: mediumBlack,
  },
});
