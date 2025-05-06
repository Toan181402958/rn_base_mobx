import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import BaseText from './BaseText';

describe('BaseText Component', () => {
  it('hien thi noi dung dung', () => {
    const {getByText} = render(<BaseText content="hello sir" />);
    expect(getByText('hello sir')).toBeTruthy();
  });
  it('Apply style props', () => {
    const {getByText} = render(
      <BaseText content="hello sir" style={{color: 'red'}} />,
    );
    const textElement = getByText('hello sir');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([expect.objectContaining({color: 'red'})]),
    );
  });
  it('check onpress', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <BaseText content="hello sir" onPress={onPressMock} />,
    );
    fireEvent.press(getByText('hello sir'));
    expect(onPressMock).toHaveBeenCalled();
  });

  it('limit number line', () => {
    const {getByText} = render(
      <BaseText content="hello sir" numberOfLines={1} />,
    );
    const textElement = getByText('hello sir');
    expect(textElement.props.numberOfLines).toBe(1);
  });
});
