import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {black, white} from '../../../styles/colors';
import {yearBanner} from '../../../utils/images';
import {heightToDp, widthToDp} from '../../../styles/responsive';
import YoutubePlayer from 'react-native-youtube-iframe';
import {useTranslation} from '../../../components/hooks/useTranslation';
import {font19Px} from '../../../utils/typography';
import {HORIZONTAL_2, HORIZONTAL_3, HORIZONTAL_5} from '../../../utils/spacing';
const Video = () => {
  const {t} = useTranslation();
  const [isPlaying, setPlaying] = useState(false);

  const handlePlayPause = () => {
    setPlaying(!isPlaying);
  };
  return (
    <ScrollView>
      <View>
        <Image source={yearBanner} style={styles.homeBanner} />
      </View>
      <View style={styles.Wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{t('VideoTab.videoTitle')}</Text>
          <Text style={styles.title}>{t('VideoTab.subTitle')}</Text>
        </View>
        <View style={styles.youtubeWrapper}>
          <YoutubePlayer
            height={300}
            width={350}
            play={isPlaying}
            videoId={'mLI_QxszYrU'}
          />
          <TouchableOpacity onPress={handlePlayPause}>
            <Text>{isPlaying ? 'Pause' : 'Play'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Video;

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    backgroundColor: white,
    width: widthToDp('95%'),
    margin: HORIZONTAL_2,
    borderRadius: 4,
    height: heightToDp('33%'),
  },
  homeBanner: {width: 'auto', height: heightToDp('10%')},
  youtubeWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleWrapper: {
    flexDirection: 'column',
    margin: HORIZONTAL_3,
    alignItems: 'center',
    marginBottom: HORIZONTAL_5,
  },
  title: {color: black, fontSize: font19Px},
});
