// /**
//  * @format
//  */

import {sum} from '../testJest';

// import React from 'react';
// import ReactTestRenderer from 'react-test-renderer';
// import App from '../App';

// test('renders correctly', async () => {
//   await ReactTestRenderer.act(() => {
//     ReactTestRenderer.create(<App />);
//   });
// });
test('Tính tổng của 2 và 3 phải bằng 5', () => {
  expect(sum(2, 3)).toBe(5);
});
