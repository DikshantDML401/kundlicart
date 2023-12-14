/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {astrolady} from '../utils/images';
import {lightYellow} from '../styles/colors';

export const HomeRoutes = [
  {key: 'first', title: 'HOME'},
  {key: 'second', title: '2024'},
  {key: 'third', title: 'ASTRO SHOP'},
  {key: 'fourth', title: 'CONSULT'},
  {key: 'fifth', title: 'REPORTS'},
  {key: 'sixth', title: 'Video'},
  {key: 'seventh', title: 'PANCHANG'},
  {key: 'eight', title: 'HOROSCOPE'},
];

export const callRoutes = [
  {name: 'All'},
  {icon: <Icon name="favorite" size={18} color="red" />, name: 'Love'},
  {icon: <Feather name="briefcase" size={18} color="brown" />, name: 'Career'},
  {icon: <Feather name="gift" size={18} color="red" />, name: 'Marriage'},
  {icon: <Icon name="favorite" size={18} color="red" />, name: 'Health'},
  {icon: <Feather name="bar-chart" size={18} color="red" />, name: 'Finance'},
  {icon: <Icon name="handshake" size={18} color="red" />, name: 'Buisness'},
  {icon: <Feather name="book" size={18} color="red" />, name: 'Education'},
  {icon: <Icon name="woman" size={18} color="red" />, name: 'Pregnancy'},
  {icon: <Icon name="balance" size={18} color="red" />, name: 'Legal'},
];

export const astroList = [
  {
    name: 'Bhavya A ',
    type: 'vedic',
    lang: 'Hindi, Gujarati',
    exp: '1 years',
    free: '11/min',
    image: astrolady,
  },
  {
    name: 'Bhavya A',
    type: 'vedic',
    lang: 'Hindi, Gujarati',
    exp: '1 years',
    free: '11/min',
    image: astrolady,
  },
  {
    name: 'Bhavya A',
    type: 'vedic',
    lang: 'Hindi, Gujarati',
    exp: '1 years',
    free: '11/min',
    image: astrolady,
  },
  {
    name: 'Bhavya A',
    type: 'vedic',
    lang: 'Hindi, Gujarati',
    exp: '1 years',
    free: '11/min',
    image: astrolady,
  },
  {
    name: 'Bhavya A',
    type: 'vedic',
    lang: 'Hindi, Gujarati',
    exp: '1 years',
    free: '11/min',
    image: astrolady,
  },
  {
    name: 'Bhavya A',
    type: 'vedic',
    lang: 'Hindi, Gujarati',
    exp: '1 years',
    free: '11/min',
    image: astrolady,
  },
  {
    name: 'Bhavya A',
    type: 'vedic',
    lang: 'Hindi, Gujarati',
    exp: '1 years',
    free: '11/min',
    image: astrolady,
  },
  {
    name: 'Bhavya A',
    type: 'vedic',
    lang: 'Hindi, Gujarati',
    exp: '1 years',
    free: '11/min',
    image: astrolady,
  },
];

export const loveList = [
  {
    name: 'Bhole',
    type: 'vedic',
    lang: 'Hindi, Gujarati',
    exp: '1 years',
    free: '11/min',
    image: astrolady,
  },
  {
    name: 'Bhole',
    type: 'vedic',
    lang: 'Hindi, Gujarati',
    exp: '1 years',
    free: '11/min',
    image: astrolady,
  },
];

export const astroRating = [
  {
    icon: <Feather name="message-square" size={12} color={lightYellow} />,
    rating: 21,
  },
  {
    icon: <Feather name="star" size={12} color={lightYellow} />,
    rating: 4.7,
  },
  {
    icon: <Feather name="user" size={12} color={lightYellow} />,
    rating: 421,
  },
];

export const Language = [
  {id: 1, name: 'English'},
  {id: 2, name: 'Hindi'},
  {id: 3, name: 'Tamil'},
  {id: 4, name: 'Telugu'},
  {id: 5, name: 'Marathi'},
  {id: 6, name: 'Sanskrit'},
];

export const category = [
  {id: 1, name: 'Economic'},
  {id: 2, name: 'Premium'},
  {id: 3, name: 'Most Rated'},
  {id: 4, name: 'Premium'},
  {id: 5, name: 'Most Rated'},
  {id: 6, name: 'Most Rated'},
];
