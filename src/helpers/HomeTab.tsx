/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

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
