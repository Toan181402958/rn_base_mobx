import {Dimensions} from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var heightFull = Dimensions.get('screen').height;

const AppStyle = {
  Screen: {
    FullWidth: width,
    FullHeight: height,
    FullHeightAndroid: heightFull,
  },
  Colors: {
    primary: '#7659FF',
    Black: '#1F2128',
    White: '#FFFFFF',
    Main: '#16191A',
    Background01: '#F2F0FF',
    Background02: '#FFFFFF',
    Background03: '#EEECF1',
    Secondary01: '#D1D3DB',
    Secondary02: '#B5B7C5',
    Secondary03: '#9E8AFF',
    Primary01: '#7659FF',
    Primary02: '#9E8AFF',
    Primary03: '#C8BDFF',
    Primary04: '#F2F0FF',
    Text01: '#021A40',
    Text02: '#7B7C81',
    Text03: '#FFFFFF',
    Text04: '#0E51F3',
    PlaceHolder: '#BBBBBB',
    Error01: '#FF2222',
    Error02: '#FFEBEB',
    Success01: '#25C716',
    Success02: '#EEFDED',
    Warning: '#FE902A',
    Neutral01: '#1F2128',
    Neutral02: '#363845',
    Neutral03: '#4C5061',
    Neutral04: '#63677E',
    Neutral05: '#7C8098',
    Neutral06: '#989CAE',
    Neutral07: '#B5B7C5',
    Neutral08: '#D1D3DB',
    Neutral09: '#EEEEF2',
    Neutral010: '#F4F4F6',
    Neutral011: '#FFFFFF',
  },

  Text1: {
    Heading1: 40,
    Heading2: 32,
    Heading3: 24,
    Heading4: 20,
    Body1: 16,
    Body2: 14,
    Button1: 14,
    Label1: 12,
    Label2: 10,
    Large: 20,
    Medium2: 18,
    Medium: 16,
    Normal: 14,
    Small: 12,
    Min: 10,
  },
  Text: {
    Heading1: {
      fontSize: 24,
      lineHeight: 34,
      letterSpacing: 0,
      // fontWeight: '600', // Semibold
      fontFamily: 'BeVietnamPro-SemiBold',
    },
    Heading2: {
      fontSize: 24,
      lineHeight: 34,
      letterSpacing: 0,
      // fontWeight: '500', // Medium
      fontFamily: 'BeVietnamPro-Medium',
    },
    TitleLarge1: {
      fontSize: 22,
      lineHeight: 30,
      letterSpacing: 0.15,
      // fontWeight: '600', // Semibold
      fontFamily: 'BeVietnamPro-SemiBold',
    },
    TitleLarge2: {
      fontSize: 20,
      lineHeight: 30,
      letterSpacing: 0.15,
      // fontWeight: '600', // Semibold
      fontFamily: 'BeVietnamPro-SemiBold',
    },
    TitleLarge3: {
      fontSize: 20,
      lineHeight: 30,
      letterSpacing: 0.15,
      // fontWeight: '500', // Medium
      fontFamily: 'BeVietnamPro-Medium',
    },
    Title1: {
      fontSize: 18,
      lineHeight: 27,
      letterSpacing: 0.15,
      // fontWeight: '600', // Semibold
      fontFamily: 'BeVietnamPro-SemiBold',
    },
    Title2: {
      fontSize: 18,
      lineHeight: 27,
      letterSpacing: 0.15,
      // fontWeight: '500', // Medium
      fontFamily: 'BeVietnamPro-Medium',
    },
    Button1: {
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0.5,
      // fontWeight: '600', // Semibold
      fontFamily: 'BeVietnamPro-SemiBold',
    },
    Button2: {
      fontSize: 14,
      lineHeight: 21,
      letterSpacing: 0.5,
      // fontWeight: '600', // Semibold
      fontFamily: 'BeVietnamPro-SemiBold',
    },
    Body1: {
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0.5,
      // fontWeight: '500', // Medium
      fontFamily: 'BeVietnamPro-Medium',
    },
    Body2: {
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0.5,
      // fontWeight: '400', // Regular
      fontFamily: 'BeVietnamPro-Regular',
    },
    Body3: {
      fontSize: 14,
      lineHeight: 21,
      letterSpacing: 0.25,
      // fontWeight: '400', // Regular
      fontFamily: 'BeVietnamPro-Regular',
    },
    Body4: {
      fontSize: 14,
      lineHeight: 21,
      letterSpacing: 0.25,
      // fontWeight: '500', // Medium
      fontFamily: 'BeVietnamPro-Medium',
    },
    Label1: {
      fontSize: 12,
      lineHeight: 18,
      letterSpacing: 0.5,
      // fontWeight: '600', // Semibold
      fontFamily: 'BeVietnamPro-SemiBold',
    },
    Label2: {
      fontSize: 12,
      lineHeight: 18,
      letterSpacing: 0.5,
      // fontWeight: '500', // Medium
      fontFamily: 'BeVietnamPro-Medium',
    },
    Label3: {
      fontSize: 11,
      lineHeight: 16.5,
      letterSpacing: 0.5,
      // fontWeight: '500', // Medium
      fontFamily: 'BeVietnamPro-Medium',
    },
    Label4: {
      fontSize: 12,
      lineHeight: 18,
      letterSpacing: 0.5,
      // fontWeight: '400', // Regular
      fontFamily: 'BeVietnamPro-Regular',
    },
  },
};

export default AppStyle;
