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
import {black, blue, lemon} from '../../../styles/colors';
import {font10Px, font14Px, font17Px} from '../../../utils/typography';
import {VERTICAL_1} from '../../../utils/spacing';
import {heightToDp, widthToDp} from '../../../styles/responsive';
import {dummyLive, dummyuser} from '../../../utils/images';
import {white} from '../../../styles/colors';
import Symbol from 'react-native-vector-icons/MaterialIcons';
import {lightYellow} from '../../../styles/colors';

interface LiveChatProps {
  topHeadingText: string;
  astrologers: {
    name: string;
    rating: string;
    time: string;
  }[];
}

const ChatWithAstrologer: React.FC<LiveChatProps> = ({
  topHeadingText,
  astrologers,
}) => {
  return (
    <View>
      <View style={styles.topWrapper}>
        <Text style={styles.heading}>{topHeadingText}</Text>
        <View style={styles.refreshWrapper}>
          <Icon
            name="refresh-cw"
            size={20}
            color={black}
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
            <TouchableOpacity key={index}>
              <View style={styles.astroWrapper}>
                <Symbol
                  name="verified"
                  size={20}
                  color={blue}
                  style={styles.verified}
                />
                <View style={styles.imageWrapper}>
                  <Image source={dummyuser} style={styles.dummyLogo} />
                  <Image source={dummyLive} style={styles.dummyLive} />
                  <Text style={styles.astrologername}>{astrologer.name}</Text>
                </View>
                <View style={styles.ratingWrapper}>
                  <Text style={styles.rating}>{astrologer.rating}</Text>
                  <Symbol
                    name="star"
                    size={14}
                    color={lightYellow}
                    style={styles.star}
                  />
                  <Text style={styles.freeText}>FREE</Text>
                  <Symbol
                    name="currency-rupee"
                    size={12}
                    color={black}
                    style={styles.rupee}
                  />
                  <Text style={styles.time}>{astrologer.time}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default ChatWithAstrologer;

const styles = StyleSheet.create({
  imgWrapper: {flexDirection: 'row', marginTop: VERTICAL_1},
  scrollWrapper: {flex: 1},
  heading: {color: black, fontSize: font17Px, marginLeft: VERTICAL_1},
  topWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: widthToDp('19%'),
    paddingTop: VERTICAL_1,
  },
  viewAll: {color: black, fontSize: font14Px},
  refreshWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: widthToDp('3%'),
  },
  verified: {
    width: widthToDp('5%'),
    marginLeft: VERTICAL_1,
  },
  astroWrapper: {
    flexDirection: 'row',
    borderColor: lemon,
    backgroundColor: white,
    borderWidth: widthToDp('0.5%'),
    width: widthToDp('31%'),
    borderRadius: widthToDp('3%'),
    height: heightToDp('14%'),
    marginLeft: VERTICAL_1,
  },
  imageWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  dummyLogo: {
    width: widthToDp('15%'),
    height: heightToDp('7%'),
    marginTop: VERTICAL_1,
    position: 'relative',
  },
  dummyLive: {
    bottom: 45,
    left: 29,
    width: widthToDp('2.5%'),
    height: heightToDp('1.5%'),
    position: 'relative',
  },
  astrologername: {
    color: black,
    fontSize: font14Px,
    position: 'relative',
    bottom: 10,
  },
  ratingWrapper: {
    flexDirection: 'row',
    top: 90,
    right: 85,
  },
  rating: {
    color: black,
    fontSize: font10Px,
    marginTop: 1,
    marginRight: widthToDp('1%'),
  },
  star: {
    borderRightColor: black,
    borderRightWidth: 1,
    marginRight: widthToDp('1%'),
    height: heightToDp('2%'),
  },
  rupee: {marginTop: 2},
  freeText: {
    color: black,
    fontSize: font10Px,
    marginTop: 1,
    fontWeight: 'bold',
  },
  time: {
    color: black,
    fontSize: font10Px,
    marginTop: 1,
    textDecorationLine: 'line-through',
  },
});
