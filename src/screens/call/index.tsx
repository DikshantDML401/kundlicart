import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {lightYellow} from '../../styles/colors';
import CallSubHeader from '../../components/organisms/subHeader/CallSubHeader';
import {widthToDp} from '../../styles/responsive';
import AstroProfileCard from '../../components/molecules/AstroProfileCard';

const Call = () => {
  const [selectedItem, setSelectedItem] = useState('All');

  const handleItemClick = (item: {name: string}) => {
    setSelectedItem(item.name);
  };

  return (
    <>
      <View style={styles.subHeader}>
        <CallSubHeader
          selected={selectedItem}
          onPress={item => handleItemClick(item)}
        />
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
