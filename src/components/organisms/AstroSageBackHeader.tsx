import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {black, darkYellow, lightBlack} from '../../styles/colors';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {heightToDp, widthToDp} from '../../styles/responsive';
import {font18Px} from '../../utils/typography';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {If} from '../../helpers/if';
import UpSideModal from '../../layouts/UpSideModal';
import FilterContent from '../molecules/FilterContent';
import {RootStackParamList} from '../../navigation/types';

interface AstroSage {
  title: string;
  backArrow?: boolean;
  rightIcons?: boolean;
  walletIcon?: boolean;
}

const AstroSageBackHeader: React.FC<AstroSage> = ({
  title,
  backArrow = false,
  rightIcons = false,
  walletIcon = false,
}) => {
  const navigation = useNavigation<RootStackParamList>();

  const [showFilter, setShowFilter] = useState<boolean>(false);

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
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate('AppStack', {
                  screen: 'AccountStack',
                  params: {screen: 'Wallet'},
                })
              }>
              <Icon name="credit-card" size={22} color={black} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => setShowFilter(true)}>
              <Icon name="filter" size={22} color={black} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => console.log('pressed')}>
              <Icon name="bell" size={22} color={black} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => console.log('pressed')}>
              <Icon name="search" size={22} color={black} />
            </TouchableWithoutFeedback>
          </View>
        )}
      </View>
      {walletIcon && (
        <View style={styles.rightIcons}>
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate('AppStack', {
                screen: 'AccountStack',
                params: {screen: 'Wallet'},
              })
            }>
            <Icon name="credit-card" size={22} color={black} />
          </TouchableWithoutFeedback>
        </View>
      )}
      <If show={showFilter}>
        <UpSideModal
          modalStyle={styles.modal}
          style={styles.modalContainer}
          value={showFilter}>
          <FilterContent onClose={() => setShowFilter(false)} />
        </UpSideModal>
      </If>
    </View>
  );
};

export default AstroSageBackHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: darkYellow,
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
    fontWeight: '500',
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
  modal: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    top: widthToDp('5%'),
    alignSelf: 'center',
  },
  modalContainer: {
    left: 0,
    borderRadius: widthToDp('5%'),
    height: heightToDp('80%'),
  },
});
