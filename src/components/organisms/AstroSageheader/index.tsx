import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {authHeaderLogo} from '../../../utils/images';

interface AstrosageHeaderProps {
  screenHeading?: string;
}
const AstrosageHeader: React.FC<AstrosageHeaderProps> = ({
  screenHeading = '',
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainHeadingWrapper}>
        <Text style={styles.headerText}>AstroSage</Text>
        <Image source={authHeaderLogo} style={styles.headerLogo} />
      </View>
      <View style={styles.screenTextWrapper}>
        <Text style={styles.screenHeading}>{screenHeading}</Text>
      </View>
    </View>
  );
};

export default AstrosageHeader;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    width: 375,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 20,
    marginTop: 8,
  },
  headerTop: {
    marginTop: 50,
    marginRight: 10,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  headerTopButton: {
    width: 60,
    color: 'black',
    fontSize: 18,
    borderRadius: 50,
    borderColor: '#f77511',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'flex-end',
    textAlign: 'center',
  },
  mainHeadingWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  headerText: {fontSize: 29, fontWeight: '600', color: '#f5a442'},
  headerLogo: {width: 60, height: 60},
  screenHeading: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
    width: 280,
    justifyContent: 'center',
    textAlign: 'center',
  },
  screenTextWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});
