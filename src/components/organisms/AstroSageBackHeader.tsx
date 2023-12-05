import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {lightBlack, lightYellow} from '../../styles/colors';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface AstroSage {
  title: string;
  backArrow?: boolean;
}

const AstroSageBackHeader: React.FC<AstroSage> = ({
  title,
  backArrow = false,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.backArrow}>
          {backArrow && <Icon name="arrow-left" size={24} color={lightBlack} />}
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default AstroSageBackHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightYellow,
    paddingVertical: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: lightBlack,
    fontSize: 22,
  },
  backArrow: {
    marginHorizontal: 20,
  },
});
