import {
  aries,
  dummy2,
  dummy3,
  gemini,
  kundliLogo,
  taurus,
  yearBanner,
} from '../utils/images';
import {dummy1} from '../utils/images';
export const astrologersBioData = [
  {name: 'Dikshant', rating: '4.0', time: '10/min'},
  {name: 'Vipul', rating: '5.0', time: '18/min'},
  {name: 'Dikshant', rating: '4.6', time: '12/min'},
  {name: 'Vipul', rating: '4.0', time: '15/min'},
  {name: 'Dikshant', rating: '3.0', time: '16/min'},
  {name: 'Vipul', rating: '5.6', time: '10/min'},
];
export const astrologersBioDataDetail = [
  {name: 'Dikshant', rating: '4.0', time: '10/min'},
  {name: 'Vipul', rating: '5.0', time: '18/min'},
  {name: 'Dikshant', rating: '4.6', time: '12/min'},
  {name: 'Vipul', rating: '4.0', time: '15/min'},
  {name: 'Dikshant', rating: '3.0', time: '16/min'},
  {name: 'Vipul', rating: '5.6', time: '10/min'},
];
export const astrologersData = [
  {name: 'Pandit ji', live: true},
  {name: 'Pandit ji', live: true},
  {name: 'Pandit ji', live: true},
  {name: 'Pandit ji', live: true},
  {name: 'Pandit ji', live: true},
  {name: 'Pandit ji', live: true},
];
export const KundliDataProps = [
  {
    id: 1,
    imageSource: dummy1,
    textValue1: 'Astro Shop',
    textValue2: 'Dhruv',
    textValue3: 'Varshphal',
  },
  {
    id: 2,
    imageSource: dummy2,
    textValue1: 'Prediction',
    textValue2: 'Question',
    textValue3: 'Panchang',
  },
  {
    id: 3,
    imageSource: dummy3,
    textValue1: 'KP System',
    textValue2: 'Lal Kitab',
    textValue3: 'Potutham',
  },
  {
    id: 4,
    imageSource: kundliLogo,
    textValue1: 'Kundli',
    textValue2: 'Matching',
    textValue3: 'Horoscope',
  },
];
export const HoroScopeDataProps = [
  {
    id: 1,
    imageSource: aries,
    textValue1: 'Cancer',
    textValue2: 'Leo',
    textValue3: 'Vargo',
  },
  {
    id: 2,
    imageSource: taurus,
    textValue1: 'Aries',
    textValue2: 'Taurus',
    textValue3: 'Gemini',
  },
  {
    id: 3,
    imageSource: gemini,
    textValue1: 'Libra',
    textValue2: 'Scorpion',
    textValue3: 'Sagitarius',
  },
];
export const ConsultDataProps = [
  {
    imagesSource: kundliLogo,
    title: 'Kundli',
  },
  {
    imagesSource: dummy1,
    title: 'Matching',
  },
  {
    imagesSource: dummy2,
    title: 'Horoscope',
  },
  {
    imagesSource: dummy3,
    title: 'Free Chat',
  },
];
const data = [
  {
    imgUrl: yearBanner,
  },
  {
    imgUrl: yearBanner,
  },
  {
    imgUrl: yearBanner,
  },
];

export default data;

export const ChatWithAstrologerPropsArray = [
  {
    topHeadingText: 'Vedic Astrologers',
    astrologers: astrologersBioData,
    showIcon: false,
    subTitle: 'See More',
  },
  {
    topHeadingText: 'Tarot Astrologers',
    astrologers: astrologersBioData,
    showIcon: false,
    subTitle: 'See More',
  },
  {
    topHeadingText: 'Kitab Astrologers',
    astrologers: astrologersBioData,
    showIcon: false,
    subTitle: 'See More',
  },
];
