import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {ButtonPrimary} from './ButtonPrimary';

describe('Primary button Component', () => {
  const title = 'CLick me';
  const mockOnPress = jest.fn();
  jest.useFakeTimers(); //handle debounce

  beforeEach(() => {
    mockOnPress.mockClear();
  });
  it('display title button', () => {
    const {getByText} = render(
      <ButtonPrimary title={title} onPress={mockOnPress} />,
    );
    expect(getByText(title)).toBeTruthy();
  });
  it('call onPress', () => {
    const {getByRole} = render(
      <ButtonPrimary title={title} onPress={mockOnPress} />,
    );
    const button = getByRole('button');
    fireEvent.press(button);
    jest.advanceTimersByTime(300);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
    jest.useRealTimers();
  });
  it('dose not call onPress when isLoading', () => {
    const {getByRole, getByTestId} = render(
      <ButtonPrimary title={title} isLoading onPress={mockOnPress} />,
    );

    const button = getByRole('button');
    fireEvent.press(button);
    // jest.advanceTimersByTime(300);

    expect(mockOnPress).not.toHaveBeenCalled();
    expect(getByTestId('loading-indicator')).toBeTruthy();
    jest.useRealTimers();
  });
});
