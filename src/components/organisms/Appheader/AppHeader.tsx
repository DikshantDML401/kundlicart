import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {widthToDp} from '../../../styles/responsive';
import {black, darkYellow} from '../../../styles/colors';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {font17Px} from '../../../utils/typography';

interface AppHeaderProps {
  headerText: string;
}
const AppHeader: React.FC<AppHeaderProps> = ({headerText}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerLeft}>
        <Icon
          name={'menu'}
          color={black}
          size={22}
          onPress={() => {
            navigation.openDrawer();
          }}
        />

        <Text style={styles.header}>{headerText}</Text>
      </View>
      <View style={styles.notificationWrapper}>
        <Icon name="credit-card" size={22} color={black} />
        <Icon name="bell" size={22} color={black} />
        <Icon name="search" size={20} color={black} />
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: widthToDp('3%'),
    paddingVertical: widthToDp('5%'),
    backgroundColor: darkYellow,
  },
  header: {
    color: black,
    fontSize: font17Px,
    fontWeight: '600',
  },
  notificationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: widthToDp('6%'),
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: widthToDp('2%'),
  },
});
