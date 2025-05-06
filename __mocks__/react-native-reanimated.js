// __mocks__/react-native-reanimated.js
const ReanimatedMock = require('react-native-reanimated/mock');

// Gỡ dòng `jest.requireActual('react-native-reanimated/mock')` nếu có gọi trong chính mock của chính nó

module.exports = {
  ...ReanimatedMock,
  // Override các function nếu muốn custom thêm
  useSharedValue: jest.fn(() => ({ value: 1 })),
  useAnimatedStyle: jest.fn(() => ({})),
  withSpring: jest.fn(v => v),
  withTiming: jest.fn(v => v),
  // Nếu bạn đang dùng Reanimated 3+ và dùng Animated.View,... thì cần mock như sau:
  View: 'Animated.View',
  default: ReanimatedMock,
};
