import {StyleSheet, View} from 'react-native';
import React from 'react';
import {HoroScopeDataProps} from '../../../helpers/commonText';
import HoroScope from '../../../components/molecules/common/HoroScopeData';
import {ScrollView} from 'react-native';

const Horoscope = () => {
  return (
    <ScrollView>
      <View style={styles.kundliChartWrapper}>
        {HoroScopeDataProps.map((data, index) => (
          <HoroScope key={index} {...data} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Horoscope;

const styles = StyleSheet.create({
  kundliChartWrapper: {},
});
