import {
  fireEvent,
  render as rtlRender,
  screen,
} from '@testing-library/react';

import { Provider } from 'react-redux';

import { setupStore } from '../../store/store';

import MeteoPage from './MeteoPage';
const store = setupStore();
const render = (component: JSX.Element) =>
  rtlRender(<Provider store={store}>{component}</Provider>);

describe('With React Testing Library', () => {
  test('Render Placeholder input', () => {
    render(<MeteoPage />);
    expect(screen.getByPlaceholderText(/City/i)).toBeInTheDocument();
  });
  test('Input text', async() => {
    render(<MeteoPage />);
    const input = screen.getByPlaceholderText(/City/i);
    expect(screen.queryByTestId('cityLi')).toBeNull();
    fireEvent.input(input, {
      target: {value: 'Novokuznetsk'}
    })
    expect(await screen.findByTestId('cityLi')).toContainHTML('Novokuznetsk');
    const li = await screen.findByTestId('cityLi');
    fireEvent.click(li)
    expect(await screen.findByTestId('current_weather')).toBeInTheDocument();
  });
  
});
