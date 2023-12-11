import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {black, lightBlack, lightYellow} from '../../styles/colors';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {widthToDp} from '../../styles/responsive';
import {font18Px} from '../../utils/typography';

interface AstroSage {
  title: string;
  backArrow?: boolean;
  rightIcons?: boolean;
}

const AstroSageBackHeader: React.FC<AstroSage> = ({
  title,
  backArrow = false,
  rightIcons = false,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.backArrow}>
            {backArrow && (
              <Icon name="arrow-left" size={24} color={lightBlack} />
            )}
          </View>
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightContainer}>
        {rightIcons && (
          <View style={styles.rightIcons}>
            <Icon name="credit-card" size={22} color={black} />
            <Icon name="filter" size={22} color={black} />
            <Icon name="bell" size={22} color={black} />
            <Icon name="search" size={22} color={black} />
          </View>
        )}
      </View>
    </View>
  );
};

export default AstroSageBackHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightYellow,
    paddingVertical: widthToDp('5%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: lightBlack,
    fontSize: font18Px,
  },
  backArrow: {
    marginHorizontal: widthToDp('5%'),
  },
  rightContainer: {
    flexDirection: 'row',
  },
  rightIcons: {
    flexDirection: 'row',
    marginRight: widthToDp('2%'),
    gap: widthToDp('2%'),
  },
});
