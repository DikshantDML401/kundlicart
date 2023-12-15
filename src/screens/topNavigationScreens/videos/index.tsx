import React from 'react';
import {ScrollView, StyleSheet, View, Image, Text} from 'react-native';
import {black} from '../../../styles/colors';
import {yearBanner} from '../../../utils/images';
import {heightToDp} from '../../../styles/responsive';
import YouTube from 'react-native-youtube';
const Video = () => {
  // const [idVideo, setIdVideo] = useState('4mXgiOc4PU0');
  const videoId = '4mXgiOc4PU0';
  const onReady = () => {
    console.log('onReady');
  };

  const onChangeState = (event: {state: any}) => {
    console.log('onChangeState', event.state);
  };

  const onChangeQuality = (event: {quality: any}) => {
    console.log('onChangeQuality', event.quality);
  };

  const onError = (error: {error: any}) => {
    console.error('onError', error.error);
  };
  return (
    <ScrollView>
      <View>
        <Image source={yearBanner} style={styles.homeBanner} />
      </View>
      <View style={{flex: 1}}>
        <YouTube
          videoId={videoId}
          play={true}
          fullscreen={true}
          loop={false}
          apiKey="AIzaSyCHrgWnNP8b2TC356-tvd7XMT0HV_TyYy0"
          onReady={onReady}
          onChangeState={onChangeState}
          onChangeQuality={onChangeQuality}
          onError={onError}
        />
      </View>
    </ScrollView>
  );
};

export default Video;

const styles = StyleSheet.create({
  heading: {
    color: black,
  },
  homeBanner: {width: 'auto', height: heightToDp('10%')},
});
