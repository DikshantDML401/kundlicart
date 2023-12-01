import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {authHeaderLogo} from '../../../utils/images';

interface AuthHeaderProps {
  showSkip?: boolean;
  screenHeading?: string;
}
const AuthHeader: React.FC<AuthHeaderProps> = ({
  showSkip = true,
  screenHeading = '',
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerTop}>
        {showSkip && <Text style={styles.headerTopButton}>Skip</Text>}
      </View>
      <View style={styles.mainHeadingWrapper}>
        <Image source={authHeaderLogo} style={styles.headerLogo} />
        <Text style={styles.headerText}>AstroSage</Text>
      </View>
      <View style={styles.screenTextWrapper}>
        <Text style={styles.screenHeading}>{screenHeading}</Text>
      </View>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  mainContainer: {},
  headerTop: {
    marginTop: 30,
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 7,
  },
  headerText: {fontSize: 29, fontWeight: '600', color: 'black'},
  headerLogo: {width: 30, height: 30},
  screenHeading: {color: 'black', fontSize: 30, fontWeight: 'bold'},
  screenTextWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
