import React from 'react';
import * as rtl from '@testing-library/react';

import Dashboard from './componenets/Display';
import App from './App';

afterEach(rtl.cleanup);

test('renders without crashing', () => {
  const wrapper = rtl.render(<App />)
  const appText = wrapper.queryByText(/play ball!!!/i);
  expect(appText).toBeInTheDocument();
})

test('renders without crashing', () => {
  const display = rtl.render(<Dashboard setPitch='setPitch' value='value'  />);
  const ballText = display.queryByText(/ball/i);
  expect(ballText).toBeInTheDocument();
});

test('renders without crashing', () => {
  const dashboard = rtl.render(<Dashboard setPitch='setPitch' value='pitch' />);
  const strikeText = dashboard.queryByText(/strike/i);
  expect(strikeText).toBeInTheDocument();
});
