// jest.setup.js
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () =>
  require('./__mocks__/react-native-reanimated')
);

// Optional: mock thêm nếu dùng gesture
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
