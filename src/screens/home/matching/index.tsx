import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {black} from '../../../styles/colors';
import HomeSubHeader from '../../../components/organisms/subHeader/homeSubHeader';

const Matching = () => {
  return (
    <>
      <HomeSubHeader />
      <View>
        <Text style={styles.heading}>matching</Text>
      </View>
    </>
  );
};

export default Matching;

const styles = StyleSheet.create({
  heading: {color: black},
});
