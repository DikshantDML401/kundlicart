import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {lightYellow} from '../../styles/colors';
import CallSubHeader from '../../components/organisms/subHeader/CallSubHeader';
import {widthToDp} from '../../styles/responsive';
import AstroProfileCard from '../../components/molecules/AstroProfileCard';

const Call = () => {
  return (
    <>
      <View style={styles.subHeader}>
        <CallSubHeader />
      </View>
      <ScrollView>
        <StatusBar backgroundColor={lightYellow} barStyle={'dark-content'} />
        <View style={styles.contentContainer}>
          <AstroProfileCard />
        </View>
      </ScrollView>
    </>
  );
};

export default Call;

const styles = StyleSheet.create({
  subHeader: {
    marginHorizontal: widthToDp('2%'),
  },
  contentContainer: {
    flex: 1,
  },
});
