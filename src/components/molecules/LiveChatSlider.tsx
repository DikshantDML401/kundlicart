import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {black, boldRed} from '../../styles/colors';
import {font13Px, font14Px, font16Px, font17Px} from '../../utils/typography';
import {VERTICAL_1} from '../../utils/spacing';
import {heightToDp, widthToDp} from '../../styles/responsive';
import {dummyuser} from '../../utils/images';
import {lightOrange} from '../../styles/colors';
import {white} from '../../styles/colors';

interface LiveChatProps {
  topHeadingText: string;
  astrologers: Array<{name: string; live: boolean}>;
}

const LiveChat: React.FC<LiveChatProps> = ({topHeadingText, astrologers}) => {
  return (
    <View>
      <View style={styles.topWrapper}>
        <Text style={styles.heading}>{topHeadingText}</Text>
        <View style={styles.refreshWrapper}>
          <Icon
            name="refresh-cw"
            size={20}
            color="black"
            style={{marginTop: 5}}
          />
          <Text style={styles.viewAll}>View All</Text>
        </View>
      </View>
      <View style={styles.imgWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollWrapper}>
          {astrologers.map((astrologer, index) => (
            <View style={styles.imageWrapper} key={index}>
              <Image source={dummyuser} style={styles.dummyLogo} />
              <Text style={styles.liveText}>
                {astrologer.live ? 'LIVE' : 'OFFLINE'}
              </Text>
              <Text style={styles.astrologername}>{astrologer.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default LiveChat;

const styles = StyleSheet.create({
  imgWrapper: {flexDirection: 'row', marginTop: VERTICAL_1},
  scrollWrapper: {flex: 1},
  heading: {color: black, fontSize: font17Px, marginLeft: VERTICAL_1},
  topWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: widthToDp('34%'),
    paddingTop: VERTICAL_1,
  },
  viewAll: {color: black, fontSize: font14Px},
  refreshWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: widthToDp('3%'),
  },
  imageWrapper: {
    flexDirection: 'column',
    backgroundColor: lightOrange,
    width: widthToDp('26%'),
    alignItems: 'center',
    borderRadius: 10,
    height: heightToDp('13.5%'),
    marginLeft: VERTICAL_1,
  },
  dummyLogo: {
    width: widthToDp('16%'),
    height: heightToDp('7%'),
    marginTop: VERTICAL_1,
    position: 'relative',
  },
  astrologername: {color: white, fontSize: font16Px},
  liveText: {
    color: boldRed,
    position: 'relative',
    bottom: widthToDp('3%'),
    backgroundColor: white,
    fontSize: font13Px,
    width: widthToDp('10%'),
    textAlign: 'center',
    borderRadius: 8,
  },
});
