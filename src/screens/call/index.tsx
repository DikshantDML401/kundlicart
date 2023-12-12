import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {lightYellow} from '../../styles/colors';
import CallSubHeader from '../../components/organisms/subHeader/CallSubHeader';
import {widthToDp} from '../../styles/responsive';

const Call = () => {
  return (
    <>
      <StatusBar backgroundColor={lightYellow} barStyle={'dark-content'} />
      <View style={styles.subHeader}>
        <CallSubHeader />
      </View>
    </>
  );
};

export default Call;

const styles = StyleSheet.create({
  subHeader: {
    marginHorizontal: widthToDp('2%'),
  },
});
