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

export const Login = {
  email: 'admin@correo.com',
  password: 'Password123',
  contact: '+91 8895887989',
  wallet: '200',
};

export const account = [
  {icon: <Icon name="favorite" size={24} color="black" />, name: 'My Profile'},
  {
    icon: <Feather name="briefcase" size={24} color="black" />,
    name: 'My Wallet',
  },
  {
    icon: <Feather name="gift" size={24} color="black" />,
    name: 'My Consultations and Recharges',
  },
  {icon: <Icon name="favorite" size={24} color="black" />, name: 'Following'},
  {
    icon: <Feather name="bar-chart" size={24} color="black" />,
    name: 'Set Prefrence',
  },
  {
    icon: <Icon name="handshake" size={24} color="black" />,
    name: 'Notification Setting',
  },
  {icon: <Feather name="book" size={24} color="black" />, name: 'Support'},
];

export const wallet = [
  {
    price: '₹50',
    offer: false,
  },
  {
    price: '₹100',
    offer: true,
    offerPrice: 'Get ₹200',
  },
  {
    price: '₹9000',
    offer: true,
    offerPrice: '55% extra',
  },
  {
    price: '₹1250',
    offer: true,
    offerPrice: '16% extra',
  },
  {
    price: '₹2000',
    offer: true,
    offerPrice: '26% extra',
  },
  {
    price: '₹9000',
    offer: true,
    offerPrice: '55% extra',
  },
  {
    price: '₹1250',
    offer: true,
    offerPrice: '16% extra',
  },
  {
    price: '₹2000',
    offer: true,
    offerPrice: '26% extra',
  },
  {
    price: '₹9000',
    offer: true,
    offerPrice: '55% extra',
  },

  {
    price: '₹9000',
    offer: true,
    offerPrice: '55% extra',
  },
];

export const callHistory = [
  {
    name: 'Preeti',
    price: '13',
    time: 'December 20 2023, 2:40:07 PM',
    charge: 'FREE',
    duration: '12 seconds',
    image: astrolady,
  },
];

export const astroDetails = [
  {
    profile: {
      icon: <Feather name="star" size={14} color="white" />,
      name: 'Numerology',
    },
    language: {
      icon: <Icon name="translate" size={14} color="white" />,
      spoken: 'Hindi, English',
    },
    experience: {
      icon: <Icon name="create" size={14} color="white" />,
      count: '3 Years of experience',
    },
    followers: {
      icon: <Feather name="star" size={14} color="white" />,
      count: '12 Followers',
    },
  },
];

export const review = [
  {
    contact: '80917*****',
    content: 'Its fine but can be better',
    date: '25 Dec 2023',
  },
  {
    contact: '89817*****',
    content: 'Could be improved',
    date: '28 Dec 2023',
  },
  {
    contact: '80917*****',
    content: 'Its fine but can be better',
    date: '25 Dec 2023',
  },
  {
    contact: '89817*****',
    content: 'Could be improved',
    date: '28 Dec 2023',
  },
  {
    contact: '80917*****',
    content: 'Its fine but can be better',
    date: '25 Dec 2023',
  },
  {
    contact: '89817*****',
    content: 'Could be improved',
    date: '28 Dec 2023',
  },
  {
    contact: '80917*****',
    content: 'Its fine but can be better',
    date: '25 Dec 2023',
  },
  {
    contact: '89817*****',
    content: 'Could be improved',
    date: '28 Dec 2023',
  },
  {
    contact: '80917*****',
    content: 'Its fine but can be better',
    date: '25 Dec 2023',
  },
  {
    contact: '89817*****',
    content: 'Could be improved',
    date: '28 Dec 2023',
  },
  {
    contact: '80917*****',
    content: 'Its fine but can be better',
    date: '25 Dec 2023',
  },
];
