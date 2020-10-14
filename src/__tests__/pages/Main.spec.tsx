import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';
import Main from '../../pages/Main';

const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

describe('Main page', () => {
  it('should render the main page description', () => {
    const { getByTestId } = render(<Main />);

    expect(getByTestId('main-description')).toBeTruthy();
  });

  it('should navigate to Details page when button is pressed', () => {
    const { getByText } = render(<Main />);

    const button = getByText('TEST NAVIGATION');
    expect(button).toBeTruthy();

    fireEvent.press(button);

    expect(mockNavigate).toBeCalledWith('Details');
  });
});
