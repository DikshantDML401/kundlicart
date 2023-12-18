import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {black} from '../../../styles/colors';
import HomeSubHeader from '../../../components/organisms/subHeader/homeSubHeader';

const OpenKundli = () => {
  return (
    <>
      <HomeSubHeader />
      <View>
        <Text style={styles.head}>OpenKundli</Text>
      </View>
    </>
  );
};

export default OpenKundli;

const styles = StyleSheet.create({head: {color: black}});
