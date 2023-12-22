import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {black, boldRed, darkOrange} from '../../../styles/colors';
import {
  font12Px,
  font14Px,
  font16Px,
  font17Px,
} from '../../../utils/typography';
import {HORIZONTAL_2, HORIZONTAL_6, VERTICAL_1} from '../../../utils/spacing';
import {heightToDp, widthToDp} from '../../../styles/responsive';
import {dummyuser} from '../../../utils/images';
import {white} from '../../../styles/colors';

interface LiveChatProps {
  topHeadingText: string;
  astrologers: Array<{name: string; live: boolean}>;
  subTitle: string;
  showIcon: boolean;
}

const LiveChat: React.FC<LiveChatProps> = ({
  topHeadingText,
  astrologers,
  subTitle,
  showIcon,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <Text style={styles.heading}>{topHeadingText}</Text>
        <View style={styles.refreshWrapper}>
          {showIcon ? (
            <>
              <Icon
                name="refresh-cw"
                size={20}
                color="black"
                style={{marginTop: 5}}
              />
              <Text style={styles.viewAll}>{subTitle}</Text>
            </>
          ) : (
            <View style={styles.titleWrapper}>
              <Text style={styles.viewAll}>{subTitle}</Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.imgWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollWrapper}>
          {astrologers.map((astrologer, index) => (
            <TouchableOpacity>
              <View style={styles.imageWrapper} key={index}>
                <Image source={dummyuser} style={styles.dummyLogo} />
                <Text style={styles.liveText}>
                  {astrologer.live ? 'LIVE' : 'OFFLINE'}
                </Text>
                <Text style={styles.astrologername}>{astrologer.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default LiveChat;

const styles = StyleSheet.create({
  container: {marginVertical: HORIZONTAL_2},
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
    backgroundColor: darkOrange,
    width: widthToDp('28%'),
    alignItems: 'center',
    borderRadius: widthToDp('3%'),
    height: heightToDp('15%'),
    marginLeft: VERTICAL_1,
  },
  dummyLogo: {
    width: widthToDp('18%'),
    height: heightToDp('8%'),
    marginTop: VERTICAL_1,
    position: 'relative',
  },
  astrologername: {color: white, fontSize: font16Px},
  liveText: {
    color: boldRed,
    position: 'relative',
    bottom: widthToDp('2%'),
    backgroundColor: white,
    fontSize: font12Px,
    width: widthToDp('12%'),
    textAlign: 'center',
    borderRadius: widthToDp('1%'),
  },
  titleWrapper: {marginLeft: HORIZONTAL_6},
});
